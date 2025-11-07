'use server';

import { createServerSupabaseClient } from '@/lib/supabase-server';

export type AcademyWaitlistState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<'email', string>>;
};

const SUCCESS_MESSAGE =
  'You are on the Victor Academy waitlist. Look out for cohort announcements soon.';
const FALLBACK_MESSAGE =
  'Waitlist captured. Connect Supabase credentials to persist submissions automatically.';
const ERROR_MESSAGE =
  'We could not store your waitlist entry. Please try again after the database is configured.';

export async function joinAcademyWaitlist(
  _prevState: AcademyWaitlistState,
  formData: FormData
): Promise<AcademyWaitlistState> {
  const email = (formData.get('email') ?? '').toString().trim();

  const fieldErrors: Partial<Record<'email', string>> = {};

  if (!email) {
    fieldErrors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = 'Enter a valid email address.';
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
      email,
      referral_source: formData.get('referral_source')?.toString().trim() || null,
      status: 'pending',
      submitted_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('academy_waitlist').insert(payload);

    if (error) {
      throw error;
    }

    return {
      status: 'success',
      message: SUCCESS_MESSAGE,
    };
  } catch (error) {
    console.error('Academy waitlist insert failed', error);
    return {
      status: 'error',
      message: ERROR_MESSAGE,
    };
  }
}
