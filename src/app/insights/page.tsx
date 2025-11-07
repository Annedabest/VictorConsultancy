import Link from "next/link";
import { getFeaturedInsightsPreview } from "@/lib/cms";
import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass, pillClass, buttonClassName } from "@/ui/theme";

const publishingCadence = [
  {
    label: "Blog",
    detail: "Long-form guides and case studies updated weekly via the Victor Insights hub.",
  },
  {
    label: "Trend Briefs",
    detail: "Fast takes on regulatory, tooling, and talent shifts every Monday, Wednesday, Friday.",
  },
  {
    label: "AI Playbooks",
    detail: "Downloadable PDFs with step-by-step actions tailored to sector and maturity stage.",
  },
];

const automationPipeline = [
  {
    title: "Signal sourcing",
    description: "Automated fetchers aggregate NewsAPI, Google Trends, and Supabase watchlists each morning.",
  },
  {
    title: "Draft co-creation",
    description: "Local Ollama models produce first-draft briefs which are edited in Sanity with Victor playbook prompts.",
  },
  {
    title: "Scheduled distribution",
    description: "GitHub Actions run Mon/Wed/Fri to publish, generate RSS, and notify subscribers via MailerLite.",
  },
];

const linkedinRepurpose = [
  "Zapier/n8n triggers on new Sanity publish events.",
  "Ollama prompt templates convert articles into 3-post LinkedIn series with personal commentary.",
  "Drafts queue inside Buffer for human review before going live.",
];

export default async function InsightsPage() {
  const featuredInsights = await getFeaturedInsightsPreview();

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-16">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[420px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              Insights Hub
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Actionable research. Measurable results.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Signals for responsible AI adoption
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              Explore the Victor Insights hub to stay ahead of AI policy, tooling, and transformation playbooks. Dynamic
              filters by topic, sector, and maturity stage will launch with the Sanity-powered CMS and Supabase analytics layer.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Enterprise-ready automation & strategy</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>Featured topic streams</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredInsights.map((insight) => (
              <article
                key={insight.slug}
                className="flex h-full flex-col justify-between rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]"
              >
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl leading-tight text-neutral-900">{insight.title}</h3>
                  <p className="text-sm leading-[1.7] text-neutral-600">{insight.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-neutral-500">
                  {insight.tags.map((tag) => (
                    <span key={tag} className={pillClass}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/insights/${insight.slug}`} className={`${buttonClassName("secondary", "md")} mt-6 w-full justify-center`}>
                  Read preview
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>Publishing cadence</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {publishingCadence.map((item) => (
              <div
                key={item.label}
                className="rounded-[26px] border border-neutral-200/70 bg-white/85 p-6 text-sm leading-[1.7] text-neutral-600 shadow-[0_14px_45px_rgba(15,15,15,0.05)]"
              >
                <span className={pillClass}>{item.label}</span>
                <p className="mt-3">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>Publishing workflow</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {automationPipeline.map((stage) => (
              <div
                key={stage.title}
                className="rounded-[26px] border border-neutral-200/70 bg-white/85 p-6 text-sm leading-[1.7] text-neutral-600 shadow-[0_14px_45px_rgba(15,15,15,0.05)]"
              >
                <span className={pillClass}>{stage.title}</span>
                <p className="mt-3">{stage.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={overlineClass}>LinkedIn repurpose workflow</h2>
          <ul className="space-y-3 rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 text-sm leading-[1.7] text-neutral-600 shadow-[0_18px_60px_rgba(15,15,15,0.07)]">
            {linkedinRepurpose.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 block h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </SectionShell>
    </div>
  );
}
