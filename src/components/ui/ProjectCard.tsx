import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { GitHubIcon } from "./BrandIcons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const linkStyles =
  "inline-flex min-h-9 items-center gap-2 rounded-full border border-line/80 bg-canvas/40 px-3.5 py-2 text-[11px] font-medium text-secondary transition-all duration-300 hover:border-primary/45 hover:bg-card-hover/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

const pendingStyles =
  "inline-flex min-h-9 items-center gap-2 rounded-full border border-line/50 bg-canvas/20 px-3.5 py-2 text-[11px] text-muted/70";

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-gradient-to-br from-card/90 via-card/60 to-canvas-alt transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_70px_-38px_rgba(139,92,246,0.55)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line/70 bg-canvas-alt">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-canvas/5 to-transparent"
        />

        <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-canvas/70 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-lavender backdrop-blur-md">
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full",
              project.isPlaceholder ? "bg-muted" : "bg-primary",
            )}
          />
          {project.isPlaceholder ? "Placeholder" : "Live project"}
        </span>

        <span className="absolute bottom-3 left-3.5 font-mono text-[9px] uppercase tracking-[0.22em] text-white/60">
          Preview {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-lavender">
          {project.category}
        </p>

        <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-0.025em] text-white">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-secondary">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technology stack">
          {project.stack.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-line/70 bg-canvas/35 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-secondary"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-line/70 pt-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              <GitHubIcon className="size-3.5" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span className={pendingStyles}>
              <GitHubIcon className="size-3.5" />
              Code coming soon
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              Live Demo
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
