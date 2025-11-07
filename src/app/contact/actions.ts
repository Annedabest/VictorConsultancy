'use server';

import { createServerSupabaseClient } from '@/lib/supabase-server';

export type ContactActionState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

type ContactField = 'name' | 'email' | 'organisation' | 'inquiry_type' | 'message';

const SUCCESS_MESSAGE =
  'Thank you for reaching out. Expect a follow-up to coordinate next steps.';
const FALLBACK_MESSAGE =
  'Your inquiry has been noted. Configure Supabase to persist submissions automatically.';
const ERROR_MESSAGE =
  'We were unable to store your inquiry. Please try again after the database is configured.';

export async function submitContactInquiry(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = (formData.get('name') ?? '').toString().trim();
  const email = (formData.get('email') ?? '').toString().trim();
  const organisation = (formData.get('organisation') ?? '').toString().trim();
  const inquiryType = (formData.get('inquiry_type') ?? '').toString().trim();
  const message = (formData.get('message') ?? '').toString().trim();

  const fieldErrors: Partial<Record<ContactField, string>> = {};

  if (!name) {
    fieldErrors.name = 'Name is required.';
  }

  if (!email) {
    fieldErrors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = 'Enter a valid email address.';
  }

  if (!organisation) {
    fieldErrors.organisation = 'Organisation is required.';
  }

  if (!inquiryType) {
    fieldErrors.inquiry_type = 'Select the type of inquiry.';
  }

  if (message.length > 1500) {
    fieldErrors.message = 'Please keep the message under 1500 characters.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the highlighted fields and try again.',
      fieldErrors,
    };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      status: 'success',
      message: FALLBACK_MESSAGE,
    };
  }

  try {
    const supabase = await createServerSupabaseClient();
    const payload = {
      contact_name: name,
      contact_email: email,
      organisation,
      inquiry_type: inquiryType,
      message: message || null,
      status: 'new',
      submitted_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('contact_inquiries').insert(payload);

    if (error) {
      throw error;
    }

    return {
      status: 'success',
      message: SUCCESS_MESSAGE,
    };
  } catch (error) {
    console.error('Contact inquiry insert failed', error);
    return {
      status: 'error',
      message: ERROR_MESSAGE,
    };
  }
}
