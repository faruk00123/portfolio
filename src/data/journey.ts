export type JourneyIconName = "compass" | "layout" | "wrench" | "server" | "rocket";

export type JourneyStage = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: JourneyIconName;
};

/**
 * Learning stages only — intentionally no dates, employers, or claimed
 * achievements, since none were provided.
 */
export const journeyStages: JourneyStage[] = [
  {
    id: "discovering-web-development",
    title: "Discovering Web Development",
    category: "The beginning",
    description:
      "It started with curiosity about how websites are put together. Learning the fundamentals of markup, styling, and the browser turned that curiosity into a direction.",
    icon: "compass",
  },
  {
    id: "exploring-frontend-development",
    title: "Exploring Frontend Development",
    category: "Frontend",
    description:
      "Moving into React and Next.js opened up component thinking, responsive layouts, and the craft of making an interface feel clear and effortless to use.",
    icon: "layout",
  },
  {
    id: "building-practical-projects",
    title: "Building Practical Projects",
    category: "Practice",
    description:
      "Hands-on builds became the best classroom: turning ideas into working pages, debugging real problems, and learning how small decisions shape the final experience.",
    icon: "wrench",
  },
  {
    id: "learning-backend-development",
    title: "Learning Backend Development",
    category: "Backend",
    description:
      "Stepping beyond the interface to explore Node.js, server-side logic, and APIs — understanding how the pieces connect to make an application functional end to end.",
    icon: "server",
  },
  {
    id: "growing-as-a-full-stack-developer",
    title: "Growing as a Full Stack Developer",
    category: "Next chapter",
    description:
      "Now focused on bringing it all together with TypeScript and MongoDB, while continuing to learn, refine, and build with the mindset of a full stack engineer.",
    icon: "rocket",
  },
];
