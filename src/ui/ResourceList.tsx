import Link from "next/link";
import { buttonClassName, overlineClass, pillClass } from "@/ui/theme";
import type { ResourceDetail } from "@/lib/cms";

export type ResourceListProps = {
  resources: ResourceDetail[];
  basePath?: string;
  emptyState?: string;
  showDetailLink?: boolean;
};

function formatDate(value?: string) {
  if (!value) return null;
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return null;
    }
    return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "short", day: "2-digit" }).format(date);
  } catch (error) {
    console.warn("Failed to format resource updatedAt", error);
    return null;
  }
}

export function ResourceList({
  resources,
  basePath,
  emptyState = "Resources will be published soon.",
  showDetailLink = false,
}: ResourceListProps) {
  if (!resources.length) {
    return (
      <div className="rounded-[28px] border border-neutral-200/70 bg-white/85 p-10 text-center text-sm leading-[1.7] text-neutral-600 shadow-[0_18px_60px_rgba(15,15,15,0.07)]">
        {emptyState}
      </div>
    );
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {resources.map((resource) => {
        const updatedAt = formatDate(resource.updatedAt);
        const tags = Array.isArray(resource.tags) ? resource.tags.filter(Boolean) : [];
        return (
          <li
            key={resource.slug}
            className="flex h-full flex-col justify-between rounded-[28px] border border-neutral-200/70 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,15,15,0.07)]"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className={overlineClass}>{resource.format ?? resource.category ?? "Resource"}</span>
                {updatedAt ? <span className="text-xs uppercase tracking-[0.14em] text-neutral-400">Updated {updatedAt}</span> : null}
              </div>
              <h2 className="font-serif text-2xl leading-tight text-neutral-900">{resource.title}</h2>
              <p className="text-sm leading-[1.7] text-neutral-600">{resource.summary}</p>
              {resource.description ? (
                <p className="text-sm leading-[1.7] text-neutral-500">{resource.description}</p>
              ) : null}
              {tags.length ? (
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-neutral-500">
                  {tags.map((tag) => (
                    <span key={tag} className={pillClass}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {resource.downloadUrl ? (
                <Link href={resource.downloadUrl} className={buttonClassName("primary", "sm")} prefetch={false}>
                  Download
                </Link>
              ) : null}
              {showDetailLink && basePath ? (
                <Link
                  href={`${basePath}/${resource.slug}`}
                  className={buttonClassName("secondary", "sm")}
                  prefetch={false}
                >
                  View details
                </Link>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
