import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroWatermark } from "@/ui/HeroWatermark";
import { SectionShell } from "@/ui/Section";
import { buttonClassName, overlineClass, pillClass } from "@/ui/theme";
import { getResourceItem } from "@/lib/cms";
import { getCategoryMeta } from "@/app/resources/categories";

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

function formatDate(value?: string | null) {
  if (!value) return null;
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return null;
    }
    return dateFormatter.format(date);
  } catch (error) {
    console.warn("Failed to format resource date", error);
    return null;
  }
}

export default async function ResourceDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const meta = getCategoryMeta(category);

  if (!meta) {
    notFound();
  }

  const resource = await getResourceItem(category, slug);

  if (!resource) {
    notFound();
  }

  const updatedAt = formatDate(resource.updatedAt);
  const tags = Array.isArray(resource.tags) ? resource.tags.filter(Boolean) : [];

  return (
    <div className="bg-white text-neutral-900">
      <SectionShell width="narrow" className="flex flex-col gap-14">
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-200/70 bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,15,15,0.08)] text-center md:text-left">
          <HeroWatermark containerClassName="opacity-100" imageClassName="max-w-[260px] sm:w-[320px] md:w-[400px]" />
          <div className="relative z-10 space-y-5">
            <span className={`${overlineClass} inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/70 px-4 py-1`}>
              {meta.title}
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Learn. Apply. Scale.</p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
              {resource.title}
            </h1>
            <p className="mx-auto max-w-3xl text-[1.02rem] leading-[1.75] text-neutral-600 md:mx-0">
              {resource.summary || meta.heroBlurb}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] text-neutral-400 md:justify-start">
              <span>{resource.format ?? meta.title}</span>
              {updatedAt ? <span>Updated {updatedAt}</span> : null}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-[32px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_20px_70px_rgba(15,15,15,0.08)]">
          {resource.description ? (
            <p className="text-sm leading-[1.8] text-neutral-600">{resource.description}</p>
          ) : (
            <p className="text-sm leading-[1.8] text-neutral-600">{meta.heroBlurb}</p>
          )}

          {tags.length ? (
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-neutral-500">
              {tags.map((tag) => (
                <span key={tag} className={pillClass}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            {resource.downloadUrl ? (
              <Link href={resource.downloadUrl} className={buttonClassName("primary", "md")} prefetch={false}>
                Download resource
              </Link>
            ) : null}
            <Link href={meta.href} className={buttonClassName("secondary", "md")}>
              Back to {meta.title.toLowerCase()}
            </Link>
          </div>
        </section>
      </SectionShell>
    </div>
  );
}
