'use server';

import { calculateReadinessScore } from '@/lib/assessment/scoring';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export type AssessmentActionState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  sessionId?: string;
  fieldErrors?: Partial<Record<AssessmentField, string>>;
};

type AssessmentField =
  | 'contact_name'
  | 'work_email'
  | 'company_name'
  | 'persona'
  | 'team_size'
  | 'strategy_score'
  | 'data_score'
  | 'operations_score'
  | 'people_score'
  | 'top_priority'
  | 'timeline'
  | 'additional_context';

const SUCCESS_MESSAGE =
  'Assessment request submitted. Expect a follow-up with your readiness report timeline.';
const FALLBACK_MESSAGE =
  'Assessment request captured. Configure Supabase tables to persist sessions.';
const ERROR_MESSAGE =
  'We could not store your assessment request. Please try again after the database is configured.';

export async function startAssessmentSession(
  _prevState: AssessmentActionState,
  formData: FormData
): Promise<AssessmentActionState> {
  const contactName = (formData.get('contact_name') ?? '').toString().trim();
  const workEmail = (formData.get('work_email') ?? '').toString().trim();
  const companyName = (formData.get('company_name') ?? '').toString().trim();
  const persona = (formData.get('persona') ?? '').toString().trim();
  const teamSize = (formData.get('team_size') ?? '').toString().trim();
  const strategyScoreRaw = (formData.get('strategy_score') ?? '').toString().trim();
  const dataScoreRaw = (formData.get('data_score') ?? '').toString().trim();
  const operationsScoreRaw = (formData.get('operations_score') ?? '').toString().trim();
  const peopleScoreRaw = (formData.get('people_score') ?? '').toString().trim();
  const topPriority = (formData.get('top_priority') ?? '').toString().trim();
  const timeline = (formData.get('timeline') ?? '').toString().trim();
  const additionalContext = (formData.get('additional_context') ?? '').toString().trim();

  const fieldErrors: Partial<Record<AssessmentField, string>> = {};

  if (!contactName) {
    fieldErrors.contact_name = 'Name is required.';
  }

  if (!workEmail) {
    fieldErrors.work_email = 'Work email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
    fieldErrors.work_email = 'Enter a valid email address.';
  }

  if (!persona) {
    fieldErrors.persona = 'Select the persona that best describes you.';
  }

  const parseScore = (value: string, field: AssessmentField) => {
    if (!value) {
      return undefined;
    }
    const next = Number(value);
    if (!Number.isFinite(next) || next < 1 || next > 5) {
      fieldErrors[field] = 'Score must be between 1 and 5.';
      return undefined;
    }
    return Math.round(next);
  };

  const strategyScore = parseScore(strategyScoreRaw, 'strategy_score');
  const dataScore = parseScore(dataScoreRaw, 'data_score');
  const operationsScore = parseScore(operationsScoreRaw, 'operations_score');
  const peopleScore = parseScore(peopleScoreRaw, 'people_score');

  if (topPriority && topPriority.length > 500) {
    fieldErrors.top_priority = 'Please keep the primary goal under 500 characters.';
  }

  if (additionalContext && additionalContext.length > 1000) {
    fieldErrors.additional_context = 'Additional context must be under 1000 characters.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the highlighted fields and try again.',
      fieldErrors,
    };
  }

  const sessionReference = crypto.randomUUID();
  const readinessSummary = calculateReadinessScore({
    strategy: strategyScore ?? undefined,
    data: dataScore ?? undefined,
    operations: operationsScore ?? undefined,
    people: peopleScore ?? undefined,
  });
  const reportMetadata = {
    pdf_job: {
      status: 'queued',
      reference: sessionReference,
    },
    readiness_summary: readinessSummary,
  };

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return {
      status: 'success',
      sessionId: sessionReference,
      message: FALLBACK_MESSAGE,
      fieldErrors: undefined,
    };
  }

  try {
    const supabase = await createServerSupabaseClient();

    const payload = {
      contact_name: contactName,
      contact_email: workEmail,
      company_name: companyName,
      persona_type: persona,
      team_size: teamSize,
      maturity_scores: {
        strategy: strategyScore,
        data: dataScore,
        operations: operationsScore,
        people: peopleScore,
      },
      top_priority: topPriority,
      desired_timeline: timeline,
      additional_context: additionalContext,
      reference_code: sessionReference,
      readiness_summary: readinessSummary,
      report_status: 'pending',
      report_metadata: reportMetadata,
      submitted_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('assessment_session_requests')
      .insert(payload)
      .select('id')
      .single();

    if (error) {
      throw error;
    }

    return {
      status: 'success',
      sessionId: data?.id ?? sessionReference,
      message: SUCCESS_MESSAGE,
      fieldErrors: undefined,
    };
  } catch (error) {
    console.error('Assessment session request insert failed', error);
    return {
      status: 'error',
      message: ERROR_MESSAGE,
      fieldErrors: undefined,
    };
  }
}
