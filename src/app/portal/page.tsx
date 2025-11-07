import Link from "next/link";
import { getPortalSnapshot } from "@/lib/portal/dashboard";

export const dynamic = "force-dynamic";

export default async function PortalDashboardPage() {
  const snapshot = await getPortalSnapshot();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Victor Client Portal</p>
          <h1 className="text-4xl font-semibold tracking-tight">Your readiness, resources, and rituals in one place</h1>
          <p className="max-w-3xl text-neutral-600">
            This dashboard consolidates assessment progress, knowledge resources, upcoming community events, and
            partnership actions. Supabase-backed data will populate the cards below as integrations go live.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Assessment status</h2>
            <p className="mt-2 text-4xl font-serif text-neutral-900">{snapshot.assessmentsPending}</p>
            <p className="text-sm text-neutral-600">Reports in preparation</p>
            <div className="mt-4 text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">{snapshot.assessmentsCompleted}</span> assessments delivered
              with debrief sessions ready to schedule.
            </div>
            <Link href="/assessment" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
              View assessment pipeline
              <span aria-hidden>→</span>
            </Link>
          </article>

          <article className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Engagement signals</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>
                <span className="font-semibold text-neutral-900">{snapshot.contactInquiries}</span> active partnership or
                advisory inquiries.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">{snapshot.waitlistSubscribers}</span> executives queued for
                the Victor Academy cohorts.
              </li>
            </ul>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
              Manage client conversations
              <span aria-hidden>→</span>
            </Link>
          </article>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Upcoming events</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {snapshot.upcomingEvents.length > 0 ? (
              snapshot.upcomingEvents.map((event) => (
                <article key={event.id} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{new Date(event.start_at).toLocaleString()}</p>
                  <h3 className="mt-2 text-lg font-semibold text-neutral-900">{event.title}</h3>
                  <p className="mt-1">{event.location ?? "Online"}</p>
                  <Link href="/portal/events" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    View details
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-sm text-neutral-500">
                Upcoming community clinics, cohort sessions, and partner briefings will appear here once the events table is
                connected.
              </div>
            )}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Community hub</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Curated groups, discussion prompts, and resource drops will live inside the Victor Community hub. Supabase
              tables for groups and memberships will power the experience.
            </p>
            <Link href="/portal/community" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
              Preview community structure
              <span aria-hidden>→</span>
            </Link>
          </article>

          <article className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Resource delivery</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Victor Academy modules, assessment reports, and template downloads will populate here. Sanity CMS entries and
              Supabase storage will feed the personalised view for each client.
            </p>
            <Link href="/portal/resources" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
              Explore resource roadmap
              <span aria-hidden>→</span>
            </Link>
          </article>
        </section>
      </div>
    </div>
  );
}
