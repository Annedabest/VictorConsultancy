import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass, pillClass } from "@/ui/theme";

const industries = [
  {
    title: "SMBs & Scale-ups",
    summary:
      "Lean, ambitious teams ready to pilot AI responsibly, unlock productivity, and translate wins into investor confidence.",
    focus: [
      "Revenue intelligence systems tuned for sustainable growth",
      "Operational augmentation without sacrificing customer trust",
      "Responsible experimentation playbooks to iterate quickly",
    ],
  },
  {
    title: "Public Sector",
    summary:
      "Agencies modernising citizen services while upholding compliance, equity, and transparent governance.",
    focus: [
      "Ethical and bias audits with community-led guardrails",
      "Procurement-ready roadmaps aligned to policy timelines",
      "Cross-agency change rituals and workforce enablement",
    ],
  },
  {
    title: "Enterprise Transformation",
    summary:
      "Global organisations orchestrating AI portfolios across data, product, legal, and people to realise measurable value.",
    focus: [
      "Operating model architecture and decision rights",
      "Capability build accelerators for product and platform teams",
      "Scaled adoption governance with value-tracking dashboards",
    ],
  },
  {
    title: "Consultants & Agencies",
    summary:
      "Advisory and creative partners productising AI services with Victor Consultancy operating systems behind the scenes.",
    focus: [
      "White-label assessments and strategic canvases",
      "Co-delivery sprints with shared playbooks and tooling",
      "Resource libraries for repeatable client transformations",
    ],
  },
  {
    title: "Nonprofits & Social Impact",
    summary:
      "Mission-driven teams stretching resources, strengthening trust, and storytelling impact through ethical AI adoption.",
    focus: [
      "Impact-aligned use-case identification and prioritisation",
      "Data stewardship frameworks respecting community voice",
      "Capacity building workshops for staff and volunteers",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-16">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[400px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              Victor Consultancy
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Actionable research. Measurable results.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Industry perspectives grounded in real-world transformation
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              Victor Consultancy engagements adapt to sector realities, regulatory expectations, and community impact.
              Explore how the Victor AI Adoption Canvas meets your context with precision.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Enterprise-ready automation & strategy</p>
          </div>
        </section>

        <div className="space-y-8">
          {industries.map((industry) => (
            <section
              key={industry.title}
              className="rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,15,15,0.07)]"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h2 className="font-serif text-2xl leading-tight text-neutral-900 md:text-3xl">{industry.title}</h2>
                <span className={`${pillClass} w-fit`}>Focus Areas</span>
              </div>
              <p className="mt-4 text-sm leading-[1.7] text-neutral-600">{industry.summary}</p>
              <div className="mt-6 grid gap-4 text-sm leading-[1.6] text-neutral-700 md:grid-cols-3">
                {industry.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-neutral-200/60 bg-white/90 p-5 shadow-[0_12px_40px_rgba(15,15,15,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
