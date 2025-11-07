import Link from "next/link";
import { AssessmentRequestForm } from "./AssessmentRequestForm";
import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass, pillClass } from "@/ui/theme";
import { getAssessmentData } from "@/lib/assessment/queries";

export const dynamic = "force-dynamic";

const steps = [
  {
    title: "Profile",
    description: "Capture organisation size, sector, regional footprint, and leadership stakeholders to frame context.",
  },
  {
    title: "Capabilities",
    description: "Score strategy, data, operations, and people readiness using weighted prompts aligned to the Victor Canvas.",
  },
  {
    title: "Individual Fluency",
    description: "Assess leadership fluency, ethics literacy, and integration habits across departments.",
  },
  {
    title: "Review",
    description: "Confirm responses before Victor Consultancy generates your radar, narrative, and activation plan.",
  },
];

const categories = [
  "Strategy & Governance",
  "Data Foundations",
  "Operational Enablement",
  "People & Change",
  "Individual Fluency",
  "Individual Skills",
  "Individual Strategy",
];

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

function formatDate(value: string) {
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return null;
    }
    return dateFormatter.format(date);
  } catch (error) {
    console.warn("Failed to format assessment date", error);
    return null;
  }
}

export default async function AssessmentPage() {
  const { snapshot, recent } = await getAssessmentData();

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-16">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[420px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              AI Readiness Assessment
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Actionable research. Measurable results.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Diagnose, prioritise, and activate responsible AI adoption
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              Complete a structured assessment co-designed with global operators. Receive a maturity radar, narrative
              insights, and a recommended roadmap. Portal members will access dynamic dashboards and PDF reports upon launch.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Enterprise-ready automation & strategy</p>
          </div>
        </section>

        <section className="grid gap-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)] md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <p className={overlineClass}>Live snapshot</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Total requests", value: snapshot.total },
                { label: "Pending reviews", value: snapshot.pending },
                { label: "Reports delivered", value: snapshot.delivered },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] border border-neutral-200/70 bg-white/90 p-5 text-center shadow-[0_14px_45px_rgba(15,15,15,0.05)]">
                  <p className="font-serif text-3xl text-neutral-900">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm leading-[1.7] text-neutral-600">
              Supabase tracks every assessment request, enabling workflow automation via n8n and personalised follow-up in the client portal.
            </p>
          </div>
          <div className="space-y-4">
            <p className={overlineClass}>Recent submissions</p>
            <ul className="space-y-3 text-sm leading-[1.7] text-neutral-600">
              {recent.length ? (
                recent.map((entry) => {
                  const submittedAt = formatDate(entry.submittedAt);
                  return (
                    <li
                      key={entry.id}
                      className="rounded-[22px] border border-neutral-200/60 bg-white/90 p-4 shadow-[0_12px_40px_rgba(15,15,15,0.04)]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-neutral-900">
                          {entry.contactName} {entry.companyName ? `· ${entry.companyName}` : ""}
                        </span>
                        <span className="text-xs uppercase tracking-[0.12em] text-neutral-400">
                          {submittedAt ?? "Processing"}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-neutral-500">
                        {entry.personaType ? <span className={pillClass}>{entry.personaType}</span> : null}
                        <span className={pillClass}>{entry.status}</span>
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="rounded-[22px] border border-neutral-200/60 bg-white/90 p-4 text-neutral-500">
                  Submissions will appear here once assessments are captured.
                </li>
              )}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>How it works</h2>
          <ol className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]"
              >
                <span className={pillClass}>Step {index + 1}</span>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-neutral-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-neutral-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>Assessment dimensions</h2>
          <div className="grid gap-4 text-sm leading-[1.6] text-neutral-700 sm:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-[26px] border border-neutral-200/70 bg-white/85 p-5 text-center shadow-[0_14px_45px_rgba(15,15,15,0.05)]"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]">
            <AssessmentRequestForm />
          </div>

          <aside className="space-y-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 text-sm leading-[1.7] text-neutral-600 shadow-[0_18px_60px_rgba(15,15,15,0.07)]">
            <div>
              <h2 className={overlineClass}>What you receive</h2>
              <ul className="mt-3 space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 block h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                  Tailored maturity radar with weighted category scores and comparative benchmarks.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 block h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                  Narrative summary of strengths, gaps, and risk signals per category with Victor commentary.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 block h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                  Recommended resources, Victor Academy pathways, and next-step sprints tailored to your readiness level.
                </li>
              </ul>
            </div>
            <div>
              <h2 className={overlineClass}>Next iteration</h2>
              <p className="mt-2">
                Upcoming releases integrate Supabase session tracking, automated scoring, PDF report generation, and
                client portal delivery backed by the Victor AI Adoption Canvas.
              </p>
            </div>
            <div className="rounded-[24px] bg-neutral-900 px-6 py-5 text-white shadow-[0_18px_40px_rgba(15,15,15,0.22)]">
              <p className="text-sm font-semibold tracking-[0.02em]">Need enterprise onboarding?</p>
              <p className="mt-2 text-sm text-white/80">
                Request procurement-ready pathways, secure data rooms, and multi-region rollout support.
              </p>
              <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-white underline">
                Book a discovery call
              </Link>
            </div>
          </aside>
        </section>
      </SectionShell>
    </div>
  );
}
