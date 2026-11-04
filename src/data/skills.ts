export type TechnologyLogoName =
  | "react"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "nodejs"
  | "mongodb";

export type TechnologyCategory = "Frontend" | "Backend" | "Database";

export type Technology = {
  name: string;
  logo: TechnologyLogoName;
  category: TechnologyCategory;
  description: string;
  /** Brand colour used for the logo mark. */
  accent: string;
  /** Soft brand-tinted glow shown on card hover. */
  glow: string;
};

/**
 * Only the technologies provided by the site owner. No invented tools,
 * frameworks, or proficiency scores.
 */
export const technologies: Technology[] = [
  {
    name: "React",
    logo: "react",
    category: "Frontend",
    description:
      "Component-driven interfaces built from reusable, stateful pieces.",
    accent: "text-[#61DAFB]",
    glow: "group-hover:shadow-[0_24px_60px_-30px_rgba(97,218,251,0.55)]",
  },
  {
    name: "Next.js",
    logo: "nextjs",
    category: "Frontend",
    description:
      "App Router pages, server components, and production-ready routing.",
    accent: "text-white",
    glow: "group-hover:shadow-[0_24px_60px_-30px_rgba(255,255,255,0.32)]",
  },
  {
    name: "JavaScript",
    logo: "javascript",
    category: "Frontend",
    description:
      "The language behind every interactive experience on the web.",
    accent: "text-[#F7DF1E]",
    glow: "group-hover:shadow-[0_24px_60px_-30px_rgba(247,223,30,0.4)]",
  },
  {
    name: "TypeScript",
    logo: "typescript",
    category: "Frontend",
    description:
      "Type-safe code and clearer contracts from the UI down to the data.",
    accent: "text-[#3178C6]",
    glow: "group-hover:shadow-[0_24px_60px_-30px_rgba(49,120,198,0.55)]",
  },
  {
    name: "Node.js",
    logo: "nodejs",
    category: "Backend",
    description:
      "Server-side JavaScript for APIs, application logic, and data flow.",
    accent: "text-[#5FA04E]",
    glow: "group-hover:shadow-[0_24px_60px_-30px_rgba(95,160,78,0.55)]",
  },
  {
    name: "MongoDB",
    logo: "mongodb",
    category: "Database",
    description:
      "Flexible document data modelled around real application needs.",
    accent: "text-[#47A248]",
    glow: "group-hover:shadow-[0_24px_60px_-30px_rgba(71,162,72,0.55)]",
  },
];

/** The six marks orbiting the hero portrait. */
export const orbitTechnologies = technologies;
