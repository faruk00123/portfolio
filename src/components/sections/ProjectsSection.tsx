import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden border-y border-line/50 bg-canvas-alt/35 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projects-heading"
            eyebrow="04 / Selected Work"
            title={
              <>
                Featured <span className="text-gradient">Projects</span>
              </>
            }
            description="A growing collection of full stack builds. These slots are clearly marked placeholders until real case studies, screenshots, and links are ready."
          />

          <ScrollReveal delay={0.16} className="shrink-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-card/40 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <FolderGit2 className="size-3.5 text-accent" aria-hidden="true" />
              Portfolio in progress
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={0.05 * index}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
