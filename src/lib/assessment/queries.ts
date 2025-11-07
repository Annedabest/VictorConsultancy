import { createServerSupabaseClient } from "@/lib/supabase-server";

export type AssessmentSnapshot = {
  total: number;
  pending: number;
  delivered: number;
};

export type AssessmentRequestPreview = {
  id: string;
  contactName: string;
  companyName: string | null;
  personaType: string | null;
  status: string;
  submittedAt: string;
};

const fallbackSnapshot: AssessmentSnapshot = {
  total: 0,
  pending: 0,
  delivered: 0,
};

export async function getAssessmentData(): Promise<{
  snapshot: AssessmentSnapshot;
  recent: AssessmentRequestPreview[];
}> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return { snapshot: fallbackSnapshot, recent: [] };
  }

  try {
    const supabase = await createServerSupabaseClient();

    const [totalRes, pendingRes, deliveredRes, recentRes] = await Promise.all([
      supabase.from("assessment_session_requests").select("id", { count: "exact", head: true }),
      supabase
        .from("assessment_session_requests")
        .select("id", { count: "exact", head: true })
        .eq("report_status", "pending"),
      supabase
        .from("assessment_session_requests")
        .select("id", { count: "exact", head: true })
        .eq("report_status", "delivered"),
      supabase
        .from("assessment_session_requests")
        .select("id, contact_name, company_name, persona_type, report_status, submitted_at")
        .order("submitted_at", { ascending: false })
        .limit(5),
    ]);

    const snapshot: AssessmentSnapshot = {
      total: totalRes.count ?? 0,
      pending: pendingRes.count ?? 0,
      delivered: deliveredRes.count ?? 0,
    };

    const recent: AssessmentRequestPreview[] = (recentRes.data ?? []).map((row) => ({
      id: row.id,
      contactName: row.contact_name,
      companyName: row.company_name,
      personaType: row.persona_type,
      status: row.report_status,
      submittedAt: row.submitted_at,
    }));

    return { snapshot, recent };
  } catch (error) {
    console.error("Assessment data fetch failed", error);
    return { snapshot: fallbackSnapshot, recent: [] };
  }
}
