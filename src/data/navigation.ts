export const navigationItems = [
  { label: "Home", id: "home", href: "#home" },
  { label: "About", id: "about", href: "#about" },
  { label: "Skills", id: "skills", href: "#skills" },
  { label: "Journey", id: "journey", href: "#journey" },
  { label: "Projects", id: "projects", href: "#projects" },
  { label: "Contact", id: "contact", href: "#contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
export type SectionId = NavigationItem["id"];

export const sectionIds: SectionId[] = navigationItems.map((item) => item.id);
