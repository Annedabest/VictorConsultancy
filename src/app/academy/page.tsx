import { WaitlistForm } from "./WaitlistForm";
import { SectionShell } from "@/ui/Section";
import { overlineClass, pillClass } from "@/ui/theme";

const coreModules = [
  {
    title: "AI Foundations",
    summary:
      "Build shared language across leadership and understand the responsible innovation pillars guiding every Victor engagement.",
    outcomes: ["Common leadership lexicon", "Ethics checkpoint templates", "Sector-specific case studies"],
  },
  {
    title: "Use Cases by Sector",
    summary:
      "Dive into curated scenarios across SMBs, public-sector teams, nonprofits, and enterprises with ROI and risk guardrails.",
    outcomes: ["Scenario scorecards", "Operating guardrails", "Suggested pilot backlog"],
  },
  {
    title: "Implementation Roadmap",
    summary:
      "Build a transformation plan that aligns data readiness, operating rituals, change enablement, and partner orchestration.",
    outcomes: ["Victor AI Adoption Canvas walkthrough", "Stakeholder communication kit", "Quarterly activation plan"],
  },
  {
    title: "Metrics & Measurement",
    summary:
      "Instrument value tracking, responsible usage signals, and continuous improvement loops to sustain adoption.",
    outcomes: ["Impact dashboard blueprint", "Governance rituals", "Continuous feedback prompts"],
  },
];

const upcomingTracks = [
  {
    title: "Guided Cohort — Responsible AI Advantage",
    launch: "Q1 2026",
    detail:
      "Six-week cohort with live workshops, breakout labs, and Victor Consultancy feedback on your transformation artefacts.",
  },
  {
    title: "Executive Lab — AI Strategy for Boards",
    launch: "Q2 2026",
    detail:
      "Invite-only sessions translating regulatory shifts, capital strategy, and portfolio governance into board-level playbooks.",
  },
  {
    title: "Community Clinics",
    launch: "Rolling",
    detail:
      "Monthly open office hours for nonprofits and public teams to review readiness assessments and data stewardship plans.",
  },
];

const faqs = [
  {
    question: "How is the Free AI Foundations course delivered?",
    answer:
      "Modules live inside the Victor Academy portal (Next.js + Supabase). Lessons combine video breakdowns, transcripts, downloadable workbooks, and quizzes. Progress sync will be available when authentication launches.",
  },
  {
    question: "Can we enroll teams instead of individuals?",
    answer:
      "Yes. Enterprise bundles include admin dashboards, cohort facilitation, and custom assessment scoring. Contact us to configure role-based tracks.",
  },
  {
    question: "Will certificates be issued?",
    answer:
      "Graduates receive a Victor Consultancy completion credential automatically generated via Accredible and delivered to email + LinkedIn.",
  },
];

export default function AcademyPage() {
  return (
    <div className="bg-white text-neutral-900">
      <SectionShell className="flex flex-col gap-16">
        <header className="space-y-5 text-center md:text-left">
          <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
            Victor Academy
          </span>
          <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
            Build responsible AI capability with guided learning
          </h1>
          <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
            The Victor Academy blends self-paced content, cohort-based labs, and executive coaching. Start with the free
            AI Foundations course, then progress into advanced tracks designed for policy, transformation, and change
            enablement leaders.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className={overlineClass}>Core modules</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {coreModules.map((module) => (
              <article
                key={module.title}
                className="flex h-full flex-col justify-between rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]"
              >
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl leading-tight text-neutral-900">{module.title}</h3>
                  <p className="text-sm leading-[1.7] text-neutral-600">{module.summary}</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-[1.6] text-neutral-700">
                  {module.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 block h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)]">
          <div className="flex flex-col gap-4">
            <p className={overlineClass}>Upcoming tracks</p>
            <div className="grid gap-6 md:grid-cols-3">
              {upcomingTracks.map((track) => (
                <div key={track.title} className="rounded-[24px] border border-neutral-200/60 bg-white/90 p-6 text-sm leading-[1.7] text-neutral-600">
                  <span className={pillClass}>{track.launch}</span>
                  <h3 className="mt-3 font-serif text-xl leading-tight text-neutral-900">{track.title}</h3>
                  <p className="mt-2">{track.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]">
            <h2 className={overlineClass}>Enrollment</h2>
            <p className="text-sm leading-[1.7] text-neutral-600">
              Submit your email to join the beta waitlist. We will notify you when Thinkific + Supabase authentication
              is live, share cohort start dates, and invite you into the Victor Community forums unlocking in Q1 2026.
            </p>
            <WaitlistForm />
          </div>
          <aside className="space-y-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 text-sm leading-[1.7] text-neutral-600 shadow-[0_18px_60px_rgba(15,15,15,0.07)]">
            <h2 className={overlineClass}>FAQs</h2>
            <ul className="space-y-4">
              {faqs.map((faq) => (
                <li key={faq.question} className="space-y-2">
                  <p className="font-serif text-lg leading-tight text-neutral-900">{faq.question}</p>
                  <p>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </SectionShell>
    </div>
  );
}
