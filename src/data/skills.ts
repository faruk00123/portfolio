export type TechnologyLogoName =
  | "html5"
  | "css3"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "nodejs"
  | "express"
  | "mongodb"
  | "git"
  | "github"
  | "vercel"
  | "restapi";

export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools & Deployment";

export type Technology = {
  name: string;
  logo: TechnologyLogoName;
  category: TechnologyCategory;
  description: string;
  /** Brand colour used for the logo mark. */
  accent: string;
};

/**
 * Only the technologies provided by the site owner. No invented tools,
 * frameworks, or proficiency scores.
 */
export const technologies: Technology[] = [
  {
    name: "HTML5",
    logo: "html5",
    category: "Frontend",
    description:
      "Semantic, accessible markup that forms the structure of every page.",
    accent: "text-[#E34F26]",
  },
  {
    name: "CSS3",
    logo: "css3",
    category: "Frontend",
    description:
      "Responsive layouts, modern styling, and polished visual detail.",
    accent: "text-[#1572B6]",
  },
  {
    name: "JavaScript",
    logo: "javascript",
    category: "Frontend",
    description:
      "The language behind every interactive experience on the web.",
    accent: "text-[#F7DF1E]",
  },
  {
    name: "TypeScript",
    logo: "typescript",
    category: "Frontend",
    description:
      "Type-safe code and clearer contracts from the UI down to the data.",
    accent: "text-[#3178C6]",
  },
  {
    name: "React",
    logo: "react",
    category: "Frontend",
    description:
      "Component-driven interfaces built from reusable, stateful pieces.",
    accent: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    logo: "nextjs",
    category: "Frontend",
    description:
      "App Router pages, server components, and production-ready routing.",
    accent: "text-white",
  },
  {
    name: "Tailwind CSS",
    logo: "tailwind",
    category: "Frontend",
    description:
      "Utility-first styling for consistent, responsive interfaces.",
    accent: "text-[#38BDF8]",
  },
  {
    name: "Node.js",
    logo: "nodejs",
    category: "Backend",
    description:
      "Server-side JavaScript for APIs, application logic, and data flow.",
    accent: "text-[#5FA04E]",
  },
  {
    name: "Express.js",
    logo: "express",
    category: "Backend",
    description:
      "Lightweight routing and middleware for Node.js APIs.",
    accent: "text-[#E8E8E8]",
  },
  {
    name: "REST API",
    logo: "restapi",
    category: "Backend",
    description:
      "Clean, predictable endpoints that connect the frontend to data.",
    accent: "text-[#A78BFA]",
  },
  {
    name: "MongoDB",
    logo: "mongodb",
    category: "Database",
    description:
      "Flexible document data modelled around real application needs.",
    accent: "text-[#47A248]",
  },
  {
    name: "Git",
    logo: "git",
    category: "Tools & Deployment",
    description:
      "Version control that keeps every change traceable and reversible.",
    accent: "text-[#F05032]",
  },
  {
    name: "GitHub",
    logo: "github",
    category: "Tools & Deployment",
    description:
      "Repositories, collaboration, and code review in one place.",
    accent: "text-white",
  },
  {
    name: "Vercel",
    logo: "vercel",
    category: "Tools & Deployment",
    description:
      "Fast, reliable deployments for modern frontend applications.",
    accent: "text-white",
  },
];

export type SkillCategoryIcon =
  | "frontend"
  | "backend"
  | "database"
  | "tools";

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: SkillCategoryIcon;
  category: TechnologyCategory;
};

/** The four groups shown in the Skills section. */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Interfaces, interactions, and the browser-facing layer of the product.",
    icon: "frontend",
    category: "Frontend",
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "APIs, server logic, and the services that sit behind the interface.",
    icon: "backend",
    category: "Backend",
  },
  {
    id: "database",
    title: "Database",
    description:
      "Flexible, dependable data modelled around real application needs.",
    icon: "database",
    category: "Database",
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    description:
      "Version control, collaboration, and shipping work to production.",
    icon: "tools",
    category: "Tools & Deployment",
  },
];

const technologyByName = new Map(
  technologies.map((technology) => [technology.name, technology] as const),
);

/** The compact set shown in the About section's daily toolkit card. */
export const coreTechnologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "MongoDB",
]
  .map((name) => technologyByName.get(name))
  .filter((technology): technology is Technology => Boolean(technology));

/** All fourteen marks orbiting the hero portrait. */
export const orbitTechnologies = technologies;
