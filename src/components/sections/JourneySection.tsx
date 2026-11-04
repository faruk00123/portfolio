import { ArrowUpRight, Sparkles } from "lucide-react";
import { journeyStages } from "@/data/journey";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JourneyCard } from "@/components/ui/JourneyCard";

export function JourneySection() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 size-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.09),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="journey-heading"
          eyebrow="03 / Timeline"
          title={
            <>
              My Development{" "}
              <span className="text-gradient">Journey</span>
            </>
          }
          description="The stages that have shaped how I learn and build — from first curiosity to full stack practice. Each card marks a step, not a finish line."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeyStages.map((stage, index) => (
            <ScrollReveal
              key={stage.id}
              delay={0.05 * index}
              className="h-full"
            >
              <JourneyCard
                stage={stage}
                index={index}
                total={journeyStages.length}
              />
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.05 * journeyStages.length} className="h-full">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.14] via-card/55 to-canvas-alt p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-primary/20 blur-3xl"
              />
              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-canvas/30 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-lavender">
                  <Sparkles className="size-3" aria-hidden="true" />
                  The next chapter
                </p>
                <h3 className="mt-4 min-h-[3.15rem] font-display text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-white">
                  Still being written.
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-secondary">
                  Every stage so far has been a lesson in building. The next one
                  is about turning that foundation into real, shipped products.
                </p>
              </div>

              <a
                href="#projects"
                className="group relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-lavender transition-colors hover:text-white"
              >
                See what I&apos;m building
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
