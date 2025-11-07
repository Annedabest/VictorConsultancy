import { createServerSupabaseClient } from "@/lib/supabase-server";

export type PortalSnapshot = {
  assessmentsPending: number;
  assessmentsCompleted: number;
  contactInquiries: number;
  waitlistSubscribers: number;
  upcomingEvents: Array<{
    id: string;
    title: string;
    start_at: string;
    location: string | null;
  }>;
};

const fallbackSnapshot: PortalSnapshot = {
  assessmentsPending: 0,
  assessmentsCompleted: 0,
  contactInquiries: 0,
  waitlistSubscribers: 0,
  upcomingEvents: [],
};

export async function getPortalSnapshot(): Promise<PortalSnapshot> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return fallbackSnapshot;
  }

  try {
    const supabase = await createServerSupabaseClient();

    const [assessmentPendingRes, assessmentCompleteRes, inquiriesRes, waitlistRes, eventsRes] = await Promise.all([
      supabase
        .from("assessment_session_requests")
        .select("id", { count: "exact", head: true })
        .eq("report_status", "pending"),
      supabase
        .from("assessment_session_requests")
        .select("id", { count: "exact", head: true })
        .eq("report_status", "delivered"),
      supabase.from("contact_inquiries").select("id", { count: "exact", head: true }),
      supabase.from("academy_waitlist").select("id", { count: "exact", head: true }),
      supabase
        .from("events")
        .select("id, title, start_at, location")
        .gte("start_at", new Date().toISOString())
        .order("start_at", { ascending: true })
        .limit(3),
    ]);

    return {
      assessmentsPending: assessmentPendingRes.count ?? 0,
      assessmentsCompleted: assessmentCompleteRes.count ?? 0,
      contactInquiries: inquiriesRes.count ?? 0,
      waitlistSubscribers: waitlistRes.count ?? 0,
      upcomingEvents: (eventsRes.data ?? []).map((event) => ({
        id: event.id,
        title: event.title,
        start_at: event.start_at,
        location: event.location,
      })),
    };
  } catch (error) {
    console.error("Portal snapshot fetch failed", error);
    return fallbackSnapshot;
  }
}
