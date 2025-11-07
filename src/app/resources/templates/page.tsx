import { SectionShell } from "@/ui/Section";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { overlineClass } from "@/ui/theme";
import { getResourcesByCategory } from "@/lib/cms";
import { ResourceList } from "@/ui/ResourceList";

export default async function TemplatesResourcePage() {
  const resources = await getResourcesByCategory("template");

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-10">
        <section className="relative overflow-hidden rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[240px] sm:w-[300px]" />
          <div className="relative z-10 space-y-4">
            <p className={overlineClass}>Templates</p>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Learn. Apply. Scale.</p>
            <h1 className="font-serif text-4l leading-[1.08] tracking-[-0.02em] text-neutral-900">
              Victor Strategy Templates
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-[1.7] text-neutral-600 md:mx-0">
              Editable canvases to align transformation goals, capability roadmaps, and value dashboards in a single working session.
              Template delivery is automated through Sanity v4 + Supabase gating.
            </p>
          </div>
        </section>
        <ResourceList
          resources={resources}
          basePath="/resources/templates"
          showDetailLink
          emptyState="Templates are publishing soon."
        />
      </SectionShell>
    </div>
  );
}
