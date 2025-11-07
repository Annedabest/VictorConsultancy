import Link from "next/link";
import { buttonClassName, overlineClass, pillClass } from "@/ui/theme";
import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";

const heroPills = [
  "Bridge strategy and execution",
  "Embed responsible AI governance",
  "Mobilise cross-functional adoption",
];

const credibilityHighlights = [
  {
    label: "Global footprint",
    detail: "Programmes executed across Haiti, Canada, China, Brazil, UAE, and the United States",
  },
  {
    label: "Award recognition",
    detail: "Tsinghua University Emerging Tech Leadership Thesis Award · Voted LinkedIn Top Voice in AI 2024",
  },
  {
    label: "Ecosystem partners",
    detail: "Aethir · Canada School of Public Service · Techstars · Women in AI ",
  },
];

const framework = [
  {
    step: "Diagnose",
    description: "Capture maturity across strategy, data, operations, and culture while surfacing opportunity areas and risk.",
    deliverables: "Victor AI Readiness Pulse · Executive listening sessions · Responsible AI risk map",
  },
  {
    step: "Design",
    description: "Co-create the operating blueprint, investment priorities, and governance rituals that unlock repeatable wins.",
    deliverables: "Transformation portfolio · Funding & capability model · Experiment pipeline",
  },
  {
    step: "Deploy & Scale",
    description: "Activate change rituals, track value, and expand capacity with continuous guidance and partner orchestration.",
    deliverables: "Quarterly impact reviews · Upskilling labs · Partner ecosystem briefings",
  },
];

const outcomes = [
  {
    metric: "$1M raised",
    label: "Capital secured in 24 hours for Aethir via AI-powered GTM orchestration",
  },
  {
    metric: "500+ builders",
    label: "Technologists onboarded across global emerging-tech venture launches",
  },
  {
    metric: "6 regions",
    label: "Responsible AI programmes delivered across Haiti, China, Brazil, UAE, Canada, and the U.S.",
  },
];

const assessmentFeatures = [
  "10-minute readiness questionnaire aligned to the Victor AI Adoption Canvas",
  "Automated maturity scoring with narrative strengths, gaps, and risk call-outs",
  "PDF report, roadmap recommendations, and private leadership debrief",
];

const resourceTeasers = [
  {
    title: "Victor AI Adoption Canvas",
    type: "Template",
    description: "Facilitate one workshop to align strategy, data, people, and operations on priorities that matter.",
    href: "/resources/ai-adoption-canvas",
  },
  {
    title: "Free AI Foundations Course",
    type: "Academy",
    description: "Six-module primer covering ethics, use-case evaluation, and rollout rituals for cross-functional leaders.",
    href: "/academy",
  },
  {
    title: "Insights Brief: Responsible AI Policy",
    type: "Insight",
    description: "Weekly digest of policy shifts, tooling launches, and transformation wins across industries.",
    href: "/insights",
  },
];

const testimonials = [
  {
    quote:
      "Anne translated a complex transformation mandate into an actionable roadmap—with governance, funding, and talent plans we could deploy immediately.",
    author: "Ludovic Charlier",
    role: "Co-Founder, Aethir",
  },
  {
    quote:
      "Her global viewpoint and pragmatic frameworks helped our public-sector pilots go from concept to measured citizen impact in weeks, not months.",
    author: "Marie Carmelle Charles",
    role: "Director, Haiti Innovation Office",
  },
];

export default function HomePage() {
  return (
    <div className="relative hero-zone bg-white text-neutral-900">
      <div className="hero-gradient" aria-hidden />
      <div className="hero-grid" aria-hidden />
      <div className="hero-orb hero-orb--primary" aria-hidden />
      <div className="hero-orb hero-orb--secondary" aria-hidden />
      <div className="hero-orb hero-orb--tertiary" aria-hidden />

      <SectionShell width="narrow" className="relative flex flex-col items-center text-center">
        <HeroWatermark containerClassName="opacity-100" />
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-7 sm:gap-8">
          <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
            Victor Consultancy • Global Solutions
          </span>
          <h1 className="font-serif text-[2.75rem] leading-[1.05] tracking-[-0.02em] text-neutral-900 sm:text-[3.5rem]">
            Activate responsible AI advantage with measurable outcomes.
          </h1>
          <p className="max-w-xl text-[1.02rem] leading-[1.68] text-neutral-600 sm:text-[1.08rem]">
            Anne Victor bridges strategy and execution for SMBs, enterprises, nonprofits, and public teams—turning aspiration into governed, measurable transformation across regions.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link href="/assessment" className={buttonClassName("primary", "md")}>
              Start your assessment
            </Link>
            <Link href="/resources" className={buttonClassName("secondary", "md")}>
              Explore free resources
            </Link>
          </div>
          <ul className="flex flex-wrap justify-center gap-2.5 pt-5 text-neutral-500/90">
            {heroPills.map((item) => (
              <li key={item} className={pillClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell width="narrow" size="compact" className="rounded-[28px] border border-neutral-200/60 bg-white/85 shadow-[0_18px_60px_rgba(15,15,15,0.08)]">
        <div className="grid gap-6 text-center sm:grid-cols-3 sm:text-left">
          {credibilityHighlights.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className={overlineClass}>{item.label}</p>
              <p className="text-sm leading-relaxed text-neutral-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell width="narrow">
        <div className="flex flex-col gap-3 text-center">
          <p className={overlineClass}>Victor AI Adoption Framework</p>
          <h2 className="font-serif text-[2.35rem] leading-[1.07] tracking-[-0.018em] text-neutral-900 sm:text-[2.6rem]">
            Diagnose, design, deploy—repeat with confidence.
          </h2>
        </div>
        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {framework.map((stage) => (
            <div
              key={stage.step}
              className="flex h-full flex-col gap-5 rounded-[24px] border border-neutral-200/70 bg-white/85 p-8 text-left shadow-[0_16px_60px_rgba(15,15,15,0.08)]"
            >
              <span className={`${pillClass} w-fit`}>{stage.step}</span>
              <p className="text-sm leading-[1.7] text-neutral-600">{stage.description}</p>
              <p className="text-[0.72rem] uppercase tracking-[0.1em] text-neutral-400">{stage.deliverables}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell width="narrow" size="compact">
        <div className="rounded-[28px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_18px_60px_rgba(15,15,15,0.08)]">
          <div className="flex flex-col gap-4 text-center">
            <p className={overlineClass}>Outcomes from the field</p>
            <h3 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-neutral-900 sm:text-4xl">
              Proven results across capital, community, and capability building.
            </h3>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item.metric} className="space-y-3 text-center">
                <p className="font-serif text-4xl text-neutral-900">{item.metric}</p>
                <p className="text-[0.95rem] leading-[1.65] tracking-[0.01em] text-neutral-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell width="narrow" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_18px_70px_rgba(15,15,15,0.08)]">
          <p className={overlineClass}>AI Readiness Assessment</p>
          <h3 className="font-serif text-3xl leading-[1.12] tracking-[-0.01em] text-neutral-900 sm:text-4xl">
            Benchmark your organisation in minutes and receive a tailored roadmap.
          </h3>
          <ul className="space-y-3 text-sm leading-[1.7] text-neutral-600">
            {assessmentFeatures.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 block h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/assessment" className={buttonClassName("primary", "md")}>
              Launch assessment
            </Link>
            <Link href="/assessment/sample-report" className={buttonClassName("secondary", "md")}>
              View sample report
            </Link>
          </div>
        </div>
        <div className="grid gap-6">
          {resourceTeasers.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="group flex h-full flex-col justify-between gap-4 rounded-[28px] border border-neutral-200/70 bg-white/80 p-8 text-left shadow-[0_16px_60px_rgba(15,15,15,0.08)] transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_24px_80px_rgba(15,15,15,0.12)]"
            >
              <div className="space-y-2">
                <span className={overlineClass}>{resource.type}</span>
                <h4 className="font-serif text-2xl leading-tight text-neutral-900">{resource.title}</h4>
                <p className="text-sm leading-[1.7] text-neutral-600">{resource.description}</p>
              </div>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-neutral-900">Discover →</span>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell width="narrow">
        <div className="grid gap-8 rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_18px_70px_rgba(15,15,15,0.08)] sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="space-y-4">
              <p className="font-serif text-2xl leading-[1.5] text-neutral-900">“{testimonial.quote}”</p>
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">
                {testimonial.author} · {testimonial.role}
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell width="narrow">
        <div className="flex flex-col items-center gap-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-12 text-center shadow-[0_18px_70px_rgba(15,15,15,0.08)]">
          <p className={overlineClass}>Let’s build the next advantage</p>
          <h3 className="font-serif text-3xl leading-[1.12] tracking-[-0.01em] text-neutral-900 sm:text-4xl">
            Join the Victor Consultancy briefing list for weekly insights and invitations.
          </h3>
          <form className="flex w-full flex-col gap-3 sm:max-w-md sm:flex-row">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-neutral-200 px-5 py-3 text-sm text-neutral-700 focus:border-neutral-900 focus:outline-none"
            />
            <button type="submit" className={buttonClassName("primary", "md")}>
              Subscribe
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.18em] text-neutral-500">
            <Link href="mailto:anne@victorconsultancy.com" className="hover:text-neutral-900">
              Contact
            </Link>
            <Link href="https://www.linkedin.com/in/annevictor" target="_blank" className="hover:text-neutral-900">
              LinkedIn
            </Link>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
