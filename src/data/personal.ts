export const personal = {
  name: "Md. Omar",
  shortName: "Omar",
  initials: "MO",
  title: "Full Stack Software Engineer",
  location: "Barishal, Bangladesh",
  experience: "Fresher",
  email: "omar013faruka@gmail.com",
  portrait: "/images/omar-portrait.png",
  github: "https://github.com/faruk00123",
  linkedin: "https://www.linkedin.com/in/md-omar-faruk-974888443/",
  githubHandle: "github.com/faruk00123",
  linkedinHandle: "linkedin.com/in/md-omar-faruk",
  tagline:
    "Building modern digital experiences through thoughtful design, clean code, and innovative web technologies.",
  about: [
    "I am Md. Omar, an aspiring Full Stack Software Engineer based in Barishal, Bangladesh. I am passionate about web development and enjoy building clean, responsive, and functional digital experiences.",
    "My technical interests include frontend development, backend development, and database management. I work with technologies such as React, Next.js, JavaScript, TypeScript, Node.js, and MongoDB.",
    "As a fresher, I am continuously improving my skills through hands-on projects, practical learning, and exploring modern development practices. My goal is to grow as a software engineer and contribute to meaningful products and development teams.",
  ],
  technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "MongoDB"],
} as const;

export type SocialLink = {
  label: "GitHub" | "LinkedIn";
  href: string;
  handle: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personal.github, handle: personal.githubHandle },
  { label: "LinkedIn", href: personal.linkedin, handle: personal.linkedinHandle },
];

/** Swap these two files without touching any component logic. */
export const heroMedia = {
  videoSrc: "/videos/hero-background.mp4",
  posterSrc: "/images/hero-poster.jpg",
} as const;
