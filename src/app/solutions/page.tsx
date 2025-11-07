import Link from "next/link";
import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass, pillClass, buttonClassName } from "@/ui/theme";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Strategic Assessments",
      summary:
        "Diagnose AI maturity across strategy, data, operating rhythm, and culture to surface high-impact opportunities and risks.",
      outcomes: [
        "Victor AI Readiness Pulse with weighted scoring",
        "Executive insights briefing and risk posture",
        "12-week priority roadmap aligned to business goals",
      ],
    },
    {
      title: "Implementation Roadmaps",
      summary:
        "Convert strategy into funded initiatives with governance, resourcing, and partner orchestration baked in from day one.",
      outcomes: [
        "18-month transformation portfolio with investment model",
        "Capability build backlog and pilot selection framework",
        "Responsible AI guardrails and escalation protocol",
      ],
    },
    {
      title: "Change Enablement",
      summary:
        "Activate adoption rituals that bring product, data, legal, and people teams into a shared responsible AI rhythm.",
      outcomes: [
        "Stakeholder engagement choreography and storytelling kit",
        "Enablement toolkit with playbooks, scripts, and templates",
        "Adoption measurement dashboard and feedback loops",
      ],
    },
    {
      title: "Training & Upskilling",
      summary:
        "Equip executives, operators, and frontline teams with the fluency to design, govern, and iterate AI responsibly.",
      outcomes: [
        "Role-based curriculum mapped to Victor Academy modules",
        "Hands-on activation labs and experimentation clinics",
        "Accredited certification tracks with post-course coaching",
      ],
    },
    {
      title: "AI Partnerships & Ecosystem",
      summary:
        "Curate a trusted ecosystem of technology, research, and policy allies to accelerate outcomes without compromising values.",
      outcomes: [
        "Curated partner shortlist with diligence scoring",
        "Proof-of-concept facilitation and co-delivery governance",
        "Joint operating agreements and success metrics",
      ],
    },
  ];

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-16">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[420px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              Victor Consultancy
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Engineering outcomes with design and data.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Solutions engineered to move from vision to validated impact
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              Every engagement couples global experience with the Victor AI Adoption Canvas. Select a focused track or
              combine them into an end-to-end programme that delivers responsible outcomes, not just slideware.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Prototype to production without compromise</p>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => (
            <section
              key={solution.title}
              className="flex h-full flex-col rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]"
            >
              <div className="space-y-3">
                <h2 className="font-serif text-2xl leading-tight text-neutral-900">{solution.title}</h2>
                <p className="text-sm leading-[1.7] text-neutral-600">{solution.summary}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-[1.6] text-neutral-700">
                {solution.outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 block h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 text-center shadow-[0_20px_70px_rgba(15,15,15,0.08)]">
          <div className="flex flex-col items-center gap-4">
            <p className={overlineClass}>Choose your next move</p>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-[-0.015em] text-neutral-900 sm:text-4xl">
              Build your bespoke engagement roadmap
            </h2>
            <p className="max-w-2xl text-sm leading-[1.7] text-neutral-600">
              Pair strategic assessment insights with implementation support, change enablement, and ecosystem orchestration
              to accelerate measurable outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/assessment" className={buttonClassName("primary", "md")}>
                Start with an assessment
              </Link>
              <Link href="/contact" className={buttonClassName("secondary", "md")}>
                Design your programme
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
              <span className={pillClass}>Governance</span>
              <span className={pillClass}>Capability</span>
              <span className={pillClass}>Adoption</span>
            </div>
          </div>
        </section>
      </SectionShell>
    </div>
  );
}
