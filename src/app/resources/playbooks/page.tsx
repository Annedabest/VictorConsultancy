import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass } from "@/ui/theme";
import { getResourcesByCategory } from "@/lib/cms";
import { ResourceList } from "@/ui/ResourceList";

export default async function PlaybooksResourcePage() {
  const resources = await getResourcesByCategory("playbook");

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-10">
        <section className="relative overflow-hidden rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[240px] sm:w-[300px]" />
          <div className="relative z-10 space-y-4">
            <p className={overlineClass}>Playbooks</p>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Learn. Apply. Scale.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900">
              Victor AI Playbooks
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-[1.7] text-neutral-600 md:mx-0">
              Detailed launch sequences covering discovery, governance, procurement, and scaled delivery with Victor
              field notes. This collection updates automatically from Sanity v4 and Supabase gating.
            </p>
          </div>
        </section>
        <ResourceList
          resources={resources}
          basePath="/resources/playbooks"
          showDetailLink
          emptyState="Playbooks are publishing soon."
        />
      </SectionShell>
    </div>
  );
}
