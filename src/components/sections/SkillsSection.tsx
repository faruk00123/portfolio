import { ArrowRight, Sparkles } from "lucide-react";
import { technologies } from "@/data/skills";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogos";
import { cn } from "@/lib/cn";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-y border-line/50 bg-canvas-alt/45 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.12),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="skills-heading"
            eyebrow="02 / Toolkit"
            title={
              <>
                My <span className="text-gradient">Skills</span>
              </>
            }
            description="The technologies I work with today — grouped by where they sit in the stack. No percentage scores, just the tools I actually use."
          />
          <ScrollReveal delay={0.16} className="shrink-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-card/40 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              6 technologies
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology, index) => (
            <ScrollReveal
              key={technology.name}
              delay={0.045 * index}
              className="h-full"
            >
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-card/55 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card-hover/60",
                  technology.glow,
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line/80 bg-canvas/45 shadow-inner transition-colors duration-500 group-hover:border-primary/30">
                    <TechLogo
                      name={technology.logo}
                      className={cn("size-5", technology.accent)}
                    />
                  </span>
                  <span className="rounded-full border border-line/70 bg-canvas/35 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                    {technology.category}
                  </span>
                </div>

                <h3 className="relative mt-4 font-display text-lg font-semibold tracking-tight text-white">
                  {technology.name}
                </h3>
                <p className="relative mt-1.5 text-[13px] leading-6 text-secondary">
                  {technology.description}
                </p>

                <div className="relative mt-auto flex items-center gap-3 pt-5">
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-gradient-to-r from-line/80 to-transparent"
                  />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted/80">
                    0{index + 1} / 06
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/[0.1] via-card/40 to-transparent p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-accent">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-lavender">
                  Continuous learning
                </p>
                <p className="mt-1.5 max-w-xl text-[13px] leading-6 text-secondary">
                  I keep sharpening this stack through hands-on projects and
                  practical learning — one build at a time.
                </p>
              </div>
            </div>
            <a
              href="#journey"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-lavender transition-colors hover:text-white"
            >
              How I got here
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
