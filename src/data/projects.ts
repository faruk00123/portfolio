export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: {
    src: string;
    alt: string;
  };
  githubUrl: string | null;
  liveUrl: string | null;
  isPlaceholder: boolean;
};

/**
 * Editable project slots.
 *
 * Replace these entries with real projects and real URLs when available.
 * `githubUrl` and `liveUrl` stay null for placeholders so the UI never renders
 * a fake link. Drop real screenshots into /public/images/projects and update
 * `image.src` (and the descriptive `image.alt`).
 */
export const projects: Project[] = [
  {
    id: "full-stack-project",
    title: "Full Stack Project",
    category: "Project slot",
    description:
      "A reserved space for a complete full stack build. Replace this entry with a real project summary, the problem it solves, and the decisions behind it.",
    stack: ["React", "Next.js", "TypeScript", "MongoDB"],
    image: {
      src: "/images/projects/project-placeholder-1.jpg",
      alt: "Abstract dark purple dashboard preview marking a placeholder full stack project",
    },
    githubUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
  {
    id: "frontend-project",
    title: "Frontend Project",
    category: "Project slot",
    description:
      "A place for a polished interface build. Add the project name, what you designed and built, and a link to the code when the project is ready.",
    stack: ["React", "Next.js", "JavaScript"],
    image: {
      src: "/images/projects/project-placeholder-2.jpg",
      alt: "Abstract dark purple interface grid marking a placeholder frontend project",
    },
    githubUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
  {
    id: "backend-project",
    title: "Backend Project",
    category: "Project slot",
    description:
      "A space for an API or database-focused build. Document the data model, the server logic, and how the application handles real data.",
    stack: ["Node.js", "MongoDB", "TypeScript"],
    image: {
      src: "/images/projects/project-placeholder-3.jpg",
      alt: "Abstract dark purple analytics preview marking a placeholder backend project",
    },
    githubUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
];
