export const resourceCategories = [
  {
    key: "playbook",
    title: "Playbooks",
    description: "Step-by-step guides for discovery, governance, procurement, and scaled rollout.",
    heroTitle: "Victor AI Playbooks",
    heroBlurb:
      "Detailed launch sequences covering discovery, governance, procurement, and scaled delivery with Victor field notes.",
    cta: "Browse playbooks",
    href: "/resources/playbooks",
  },
  {
    key: "template",
    title: "Templates",
    description: "Editable canvases to align strategy, operating rituals, and value dashboards in a single session.",
    heroTitle: "Victor Strategy Templates",
    heroBlurb:
      "Editable canvases to align transformation goals, capability roadmaps, and value dashboards in a single working session.",
    cta: "Download templates",
    href: "/resources/templates",
  },
  {
    key: "deck",
    title: "Case Decks",
    description: "Executive-ready narratives and demos translating responsible AI into stakeholder conviction.",
    heroTitle: "Victor Pitch Decks & One-Pagers",
    heroBlurb:
      "Executive-ready narratives that translate responsible AI programmes into board conviction with clear next steps.",
    cta: "View decks",
    href: "/resources/decks",
  },
  {
    key: "checklist",
    title: "Checklists",
    description: "Operational runbooks to keep product, data, legal, and people teams aligned through deployment.",
    heroTitle: "Victor Deployment Checklists",
    heroBlurb:
      "Operational runbooks that keep product, data, legal, and people teams aligned through every responsible AI deployment.",
    cta: "Access checklists",
    href: "/resources/checklists",
  },
] as const;

export type ResourceCategoryKey = (typeof resourceCategories)[number]["key"];

export function getCategoryMeta(key: string) {
  return resourceCategories.find((category) => category.key === key.toLowerCase()) ?? null;
}
