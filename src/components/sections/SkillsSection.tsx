import {
  ArrowRight,
  Database,
  LayoutGrid,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { skillCategories, technologies } from "@/data/skills";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogos";
import { cn } from "@/lib/cn";

const categoryIcons = {
  frontend: LayoutGrid,
  backend: Server,
  database: Database,
  tools: Wrench,
} as const;

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
            description="The technologies I work with today, grouped by where they sit in the stack. No percentage scores — just the tools I actually use."
          />
          <ScrollReveal delay={0.16} className="shrink-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-card/40 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              {technologies.length} technologies
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.icon];
            const categoryTechnologies = technologies.filter(
              (technology) => technology.category === category.category,
            );

            return (
              <ScrollReveal
                key={category.id}
                delay={0.07 * categoryIndex}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line/80 bg-card/45 p-5 transition-all duration-500 hover:border-primary/35 hover:bg-card-hover/45">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-accent">
                      <Icon className="size-[1.1rem]" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-line/70 bg-canvas/35 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                      0{categoryIndex + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-4 font-display text-base font-semibold tracking-tight text-white">
                    {category.title}
                  </h3>
                  <p className="relative mt-1.5 text-[12px] leading-5 text-secondary">
                    {category.description}
                  </p>

                  <ul className="relative mt-5 space-y-2.5">
                    {categoryTechnologies.map((technology, technologyIndex) => (
                      <li key={technology.name}>
                        <ScrollReveal
                          delay={0.03 * technologyIndex}
                          distance={12}
                        >
                          <div className="group/card flex items-center gap-3 rounded-xl border border-line/70 bg-canvas/30 px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-canvas/55">
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line/70 bg-white/[0.035] transition-colors duration-300 group-hover/card:border-primary/30">
                              <TechLogo
                                name={technology.logo}
                                className={cn("size-4", technology.accent)}
                              />
                            </span>
                            <span className="min-w-0 text-[12px] font-medium leading-tight text-secondary transition-colors group-hover/card:text-white">
                              {technology.name}
                            </span>
                            <span
                              aria-hidden="true"
                              className="ml-auto size-1 rounded-full bg-primary/20 transition-colors group-hover/card:bg-primary"
                            />
                          </div>
                        </ScrollReveal>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto flex items-center gap-3 pt-5">
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-gradient-to-r from-line/80 to-transparent"
                    />
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted/80">
                      {categoryTechnologies.length}{" "}
                      {categoryTechnologies.length === 1
                        ? "technology"
                        : "technologies"}
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
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
