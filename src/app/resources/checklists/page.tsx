import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass } from "@/ui/theme";
import { getResourcesByCategory } from "@/lib/cms";
import { ResourceList } from "@/ui/ResourceList";

export default async function ChecklistsResourcePage() {
  const resources = await getResourcesByCategory("checklist");

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-10">
        <section className="relative overflow-hidden rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[240px] sm:w-[300px]" />
          <div className="relative z-10 space-y-4">
            <p className={overlineClass}>Checklists</p>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Learn. Apply. Scale.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900">
              Victor Deployment Checklists
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-[1.7] text-neutral-600 md:mx-0">
              Operational runbooks that keep product, data, legal, and people teams aligned through every responsible AI deployment. Checklist updates publish automatically from Sanity to Supabase-gated members.
            </p>
          </div>
        </section>
        <ResourceList resources={resources} basePath="/resources/checklists" emptyState="Checklists are publishing soon." />
      </SectionShell>
    </div>
  );
}
