import groq from "groq";
import type { QueryParams } from "@sanity/client";
import { createSanityClient, isSanityConfigured } from "./sanity";

export type InsightPreview = {
  title: string;
  description: string;
  slug: string;
  tags: string[];
};

export type ResourcePreview = {
  title: string;
  description: string;
  slug: string;
  category: string;
};

export type ResourceDetail = {
  title: string;
  summary: string;
  description?: string;
  slug: string;
  category: string;
  format?: string;
  downloadUrl?: string;
  tags: string[];
  updatedAt?: string;
};

const fallbackFeaturedInsightsPreview: InsightPreview[] = [
  {
    title: "Responsible AI Governance",
    description: "Policy shifts, operating models, and oversight rituals for AI maturity.",
    slug: "responsible-ai-governance",
    tags: ["governance", "policy", "risk"],
  },
  {
    title: "Public Sector AI Modernisation",
    description: "Blueprints for service delivery pilots and procurement-ready AI projects.",
    slug: "public-sector-modernisation",
    tags: ["public-sector", "implementation"],
  },
  {
    title: "Mission-Driven AI Roadmaps",
    description: "Tactical frameworks that help nonprofits and NGOs scale impact responsibly.",
    slug: "mission-driven-ai-roadmaps",
    tags: ["nonprofit", "strategy"],
  },
];

const fallbackResourceLibraryPreview: ResourcePreview[] = [
  {
    title: "AI Adoption Canvas",
    description: "Map strategy, data, people, and operations readiness in one workshop-ready view.",
    slug: "ai-adoption-canvas",
    category: "template",
  },
  {
    title: "Change Enablement Checklist",
    description: "Step-by-step rituals to embed AI programs across cross-functional teams.",
    slug: "change-enablement-checklist",
    category: "checklist",
  },
  {
    title: "Executive Readiness Brief",
    description: "Board-ready narrative linking AI opportunities to measurable outcomes.",
    slug: "executive-readiness-brief",
    category: "playbook",
  },
];

const fallbackResourceCollections: Record<string, ResourceDetail[]> = {
  playbook: [
    {
      title: "Victor AI Adoption Canvas",
      summary: "Step-by-step playbook to benchmark AI readiness and align leadership on measurable outcomes.",
      description:
        "Use this guided playbook to diagnose strategy, data, operations, and people readiness in under two weeks—complete with facilitation scripts and exec-ready deliverables.",
      slug: "victor-ai-adoption-canvas",
      category: "playbook",
      format: "Playbook",
      downloadUrl: "/resources/playbooks/victor-ai-adoption-canvas/download",
      tags: ["strategy", "readiness"],
      updatedAt: "2025-09-15",
    },
    {
      title: "Responsible Automation Sprint Guide",
      summary: "Launch a 14-day automation proof with guardrails and measurement baked in.",
      description:
        "Follow this sprint blueprint to prioritise use cases, run low-risk experiments, and document ROI with responsible AI controls.",
      slug: "responsible-automation-sprint-guide",
      category: "playbook",
      format: "Playbook",
      downloadUrl: "/resources/playbooks/responsible-automation-sprint-guide/download",
      tags: ["automation", "experiments"],
      updatedAt: "2025-08-30",
    },
  ],
  template: [
    {
      title: "Automation Opportunity Prioritisation Template",
      summary: "Excel + FigJam template to score opportunities by value, risk, and effort.",
      description:
        "Rate candidate automations, align stakeholders on quick wins vs. strategic bets, and export a governance-ready roadmap.",
      slug: "automation-opportunity-template",
      category: "template",
      format: "Template",
      downloadUrl: "/resources/templates/automation-opportunity-template/download",
      tags: ["prioritisation", "governance"],
      updatedAt: "2025-09-02",
    },
    {
      title: "AI Readiness Interview Guide",
      summary: "Structured interview guide to surface context from exec, product, and operations leaders.",
      description:
        "Use this doc to capture quantitative and qualitative signals that populate the Victor AI Adoption Canvas.",
      slug: "ai-readiness-interview-guide",
      category: "template",
      format: "Template",
      downloadUrl: "/resources/templates/ai-readiness-interview-guide/download",
      tags: ["discovery", "stakeholder"],
      updatedAt: "2025-09-20",
    },
  ],
  deck: [
    {
      title: "Responsible AI Board Brief",
      summary: "Presentation template to align boards on investment, risk, and value tracking.",
      description:
        "Slides include macro context, Victor metrics, and a three-horizon roadmap structure to secure executive sponsorship.",
      slug: "responsible-ai-board-brief",
      category: "deck",
      format: "Deck",
      downloadUrl: "/resources/decks/responsible-ai-board-brief/download",
      tags: ["board", "governance"],
      updatedAt: "2025-08-12",
    },
    {
      title: "Automation Proof Demo Deck",
      summary: "Pitch the outcome of your automation sprint with impact metrics and next steps.",
      description:
        "A concise template covering problem, solution, architecture, value realised, and rollout asks.",
      slug: "automation-proof-demo-deck",
      category: "deck",
      format: "Deck",
      downloadUrl: "/resources/decks/automation-proof-demo-deck/download",
      tags: ["automation", "storytelling"],
      updatedAt: "2025-07-28",
    },
  ],
  checklist: [
    {
      title: "Responsible AI Launch Checklist",
      summary: "Operational checklist ensuring policy, legal, data, and GTM alignment before launch.",
      description:
        "Includes RACI assignments, escalation paths, and observability requirements for responsible AI deployments.",
      slug: "responsible-ai-launch-checklist",
      category: "checklist",
      format: "Checklist",
      downloadUrl: "/resources/checklists/responsible-ai-launch-checklist/download",
      tags: ["launch", "compliance"],
      updatedAt: "2025-09-05",
    },
    {
      title: "Change Enablement Rituals Checklist",
      summary: "Weekly and monthly rituals to maintain adoption momentum across teams.",
      description:
        "Codify communications, training, measurement, and retrospective cadences post-deployment.",
      slug: "change-enablement-rituals-checklist",
      category: "checklist",
      format: "Checklist",
      downloadUrl: "/resources/checklists/change-enablement-rituals-checklist/download",
      tags: ["adoption", "enablement"],
      updatedAt: "2025-08-22",
    },
  ],
};

const insightPreviewQuery = groq`
  *[_type == "insight" && defined(slug.current)] | order(_updatedAt desc)[0..2] {
    title,
    description,
    "slug": slug.current,
    "tags": coalesce(tags, [])
  }
`;

const resourceDetailQuery = groq`
  *[_type == "resource" && defined(slug.current) && lower(category) == $category && slug.current == $slug][0] {
    title,
    category,
    "slug": slug.current,
    "summary": coalesce(summary, description, ""),
    description,
    format,
    downloadUrl,
    tags,
    "updatedAt": _updatedAt
  }
`;

const resourcePreviewQuery = groq`
  *[_type == "resource" && defined(slug.current)] | order(_updatedAt desc)[0..2] {
    title,
    description,
    "slug": slug.current,
    category
  }
`;

const resourceCollectionQuery = groq`
  *[_type == "resource" && defined(slug.current) && lower(category) == $category] | order(_updatedAt desc) {
    title,
    category,
    "slug": slug.current,
    "summary": coalesce(summary, description, ""),
    description,
    format,
    downloadUrl,
    tags,
    "updatedAt": _updatedAt
  }
`;

async function fetchSanityPreview<T>(query: string, fallback: T, params?: QueryParams): Promise<T> {
  if (!isSanityConfigured()) {
    return fallback;
  }

  try {
    const client = createSanityClient({ usePreviewToken: true });
    const result = await client.fetch<T>(query, params ?? {});
    return (result ?? fallback) as T;
  } catch (error) {
    console.error("Sanity preview fetch failed", error);
    return fallback;
  }
}

export async function getFeaturedInsightsPreview(): Promise<InsightPreview[]> {
  return fetchSanityPreview<InsightPreview[]>(insightPreviewQuery, fallbackFeaturedInsightsPreview);
}

export async function getResourceLibraryPreview(): Promise<ResourcePreview[]> {
  return fetchSanityPreview<ResourcePreview[]>(resourcePreviewQuery, fallbackResourceLibraryPreview);
}

export async function getResourcesByCategory(category: string): Promise<ResourceDetail[]> {
  const normalized = category.toLowerCase();
  const fallback = fallbackResourceCollections[normalized] ?? [];
  return fetchSanityPreview<ResourceDetail[]>(resourceCollectionQuery, fallback, { category: normalized });
}

export async function getResourceItem(category: string, slug: string): Promise<ResourceDetail | null> {
  const normalized = category.toLowerCase();
  const fallbackCollection = fallbackResourceCollections[normalized] ?? [];
  const fallbackItem = fallbackCollection.find((item) => item.slug === slug) ?? null;
  return fetchSanityPreview<ResourceDetail | null>(resourceDetailQuery, fallbackItem, {
    category: normalized,
    slug,
  });
}

