import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass, pillClass } from "@/ui/theme";

const milestones = [
  {
    year: "2009",
    location: "Port-au-Prince, Haiti",
    highlight:
      "Launched social enterprise accelerators focused on digital literacy, creative economies, and youth entrepreneurship.",
  },
  {
    year: "2014",
    location: "Beijing, China",
    highlight:
      "Earned the Tsinghua University Emerging Tech Leadership Thesis Award for research on frontier-market technology adoption.",
  },
  {
    year: "2017",
    location: "São Paulo & Dubai",
    highlight:
      "Scaled global Web3 developer communities, orchestrated go-to-market launches, and mobilised 500+ builders.",
  },
  {
    year: "2021",
    location: "Toronto, Canada",
    highlight:
      "Repositioned Victor Consultancy as a responsible AI transformation studio serving regulated industries and mission-driven teams.",
  },
];

const frameworks = [
  {
    name: "Victor AI Adoption Canvas",
    description:
      "Weighted decision system aligning leadership vision, data readiness, operating capacity, and human-centred change.",
  },
  {
    name: "Global Transformation Playbook",
    description:
      "Sequenced blueprint combining governance cadences, funding models, and experiment pipelines for multinational teams.",
  },
  {
    name: "Responsible Innovation Field Guides",
    description:
      "Workshop series embedding ethical guardrails, community feedback, and transparent storytelling into every deployment.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-16">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[400px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>About Anne Victor</span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Founder-led. Research-rooted.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Global strategist building responsible AI advantage
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              Anne Victor operates at the intersection of strategy, policy, and operator grit. She partners with boards,
              public leaders, and venture-backed innovators to translate emerging technology into measurable, equitable
              outcomes across continents.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Enterprise-ready automation & strategy</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>Global footprint</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {milestones.map((milestone) => (
              <article
                key={`${milestone.year}-${milestone.location}`}
                className="rounded-[28px] border border-neutral-200/70 bg-white/85 p-6 shadow-[0_16px_50px_rgba(15,15,15,0.06)]"
              >
                <span className={pillClass}>{milestone.year}</span>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-neutral-900">{milestone.location}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-neutral-600">{milestone.highlight}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>Signature frameworks</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {frameworks.map((framework) => (
              <article
                key={framework.name}
                className="flex h-full flex-col gap-3 rounded-[28px] border border-neutral-200/70 bg-white/85 p-6 text-left shadow-[0_16px_50px_rgba(15,15,15,0.06)]"
              >
                <h3 className="font-serif text-xl leading-[1.3] text-neutral-900">{framework.name}</h3>
                <p className="text-sm leading-[1.7] text-neutral-600">{framework.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className={overlineClass}>Speaking & media inquiries</h2>
          <p className="max-w-3xl text-sm leading-[1.7] text-neutral-600">
            Invite Anne to keynote executive summits, brief boards, or moderate policy conversations. Core topics include
            responsible AI governance, global transformation stories, and equitable innovation.
          </p>
          <p className="text-sm font-semibold tracking-[0.02em] text-neutral-700">Contact: anne@victorconsultancy.com</p>
        </section>
      </SectionShell>
    </div>
  );
}
