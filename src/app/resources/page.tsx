import Link from "next/link";
import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass, pillClass, buttonClassName } from "@/ui/theme";
import { getResourceLibraryPreview } from "@/lib/cms";
import { resourceCategories } from "@/app/resources/categories";

export default async function ResourcesPage() {
  const previews = await getResourceLibraryPreview();
  const latestByCategory = previews.reduce<Record<string, { title: string; description: string }>>((acc, item) => {
    const key = (item.category ?? "").toLowerCase();
    if (!acc[key]) {
      acc[key] = { title: item.title, description: item.description };
    }
    return acc;
  }, {});

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-16">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[400px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              Resource Library
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Learn. Apply. Scale.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              Resources to build, ship, and scale responsibly
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              Join the Victor Consultancy knowledge lab to unlock every canvas, playbook, and narrative you need to move
              from idea to impact. Downloads sync to Supabase gating and the upcoming client portal.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Enterprise-ready automation & strategy</p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          {resourceCategories.map((category) => {
            const latest = latestByCategory[category.key];
            return (
              <article
                key={category.key}
                className="flex h-full flex-col justify-between rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-neutral-500">
                    <span className={pillClass}>Latest</span>
                    <span className="font-semibold text-neutral-400">
                      {latest?.title ?? "Publishing soon"}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl leading-tight text-neutral-900">{category.title}</h2>
                  <p className="text-sm leading-[1.7] text-neutral-600">{category.description}</p>
                  {latest?.description ? (
                    <p className="text-sm leading-[1.7] text-neutral-500">{latest.description}</p>
                  ) : null}
                </div>
                <Link href={category.href} className={buttonClassName("secondary", "md")}>
                  {category.cta}
                </Link>
              </article>
            );
          })}
        </section>

        <section className="rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)]">
          <div className="flex flex-col gap-4">
            <p className={overlineClass}>Automation roadmap</p>
            <p className="text-sm leading-[1.7] text-neutral-600">
              Resource access ties into Supabase for opt-in tracking, triggers MailerLite journeys, and feeds the Victor
              portal so clients see personalised recommendations and download history.
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-neutral-500">
              <span className={pillClass}>Supabase gating</span>
              <span className={pillClass}>MailerLite journeys</span>
              <span className={pillClass}>Portal sync</span>
            </div>
          </div>
        </section>
      </SectionShell>
    </div>
  );
}
