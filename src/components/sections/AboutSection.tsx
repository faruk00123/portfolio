import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Compass,
  Layers3,
  MapPin,
  Quote,
} from "lucide-react";
import { personal } from "@/data/personal";
import { technologies } from "@/data/skills";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { TechLogo } from "@/components/ui/TechLogos";

const facts = [
  {
    label: "Based in",
    value: personal.location,
    icon: MapPin,
  },
  {
    label: "Experience",
    value: personal.experience,
    icon: Compass,
  },
  {
    label: "Focus",
    value: "Full Stack",
    icon: Layers3,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.11),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="about-heading"
            eyebrow="01 / Introduction"
            title={
              <>
                About <span className="text-gradient">Me</span>
              </>
            }
            description="A quick look at who I am, where I work from, and the direction I am building toward."
          />
          <ScrollReveal delay={0.16} className="shrink-0">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 text-sm font-medium text-lavender transition-colors hover:text-white"
            >
              See my journey
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <ScrollReveal>
              <article className="relative overflow-hidden rounded-2xl border border-line/80 bg-card/55 p-5 sm:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl"
                />
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-lavender">
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-primary"
                  />
                  Who I am
                </p>
                <div className="mt-4 space-y-3.5">
                  <p className="text-[15px] leading-7 text-white/90">
                    {personal.about[0]}
                  </p>
                  <p className="text-[14px] leading-7 text-secondary">
                    {personal.about[1]}
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <div className="grid gap-3 sm:grid-cols-3">
              {facts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <ScrollReveal key={fact.label} delay={0.05 * index} className="h-full">
                    <div className="group flex h-full flex-col rounded-2xl border border-line/70 bg-card/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-card-hover/50">
                      <span className="flex size-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-accent">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-sm font-medium leading-5 text-white">
                        {fact.value}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.12}>
              <article className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/[0.11] via-card/40 to-transparent p-5">
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-accent">
                    <Quote className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-[14px] leading-7 text-secondary">
                    {personal.about[2]}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <ScrollReveal delay={0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-line/80 bg-card/60 p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] bg-canvas-alt">
                  <Image
                    src={personal.portrait}
                    alt={`Portrait of ${personal.name}`}
                    fill
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 90vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/10 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                    <div>
                      <p className="font-display text-lg font-semibold tracking-tight text-white">
                        {personal.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-lavender">
                        {personal.title}
                      </p>
                    </div>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-canvas/60 text-accent backdrop-blur-md">
                      <Code2 className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <ScrollReveal delay={0.14} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line/70 bg-card/45 p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                    Daily toolkit
                  </p>
                  <ul className="mt-3 grid grid-cols-3 gap-2" aria-label="Technologies">
                    {technologies.map((technology) => (
                      <li
                        key={technology.name}
                        title={technology.name}
                        className="flex aspect-square items-center justify-center rounded-xl border border-line/70 bg-canvas/35 transition-colors hover:border-primary/35 hover:bg-canvas/55"
                      >
                        <TechLogo
                          name={technology.logo}
                          className={`size-4 ${technology.accent}`}
                        />
                        <span className="sr-only">{technology.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>

              <ScrollReveal delay={0.18} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line/70 bg-card/45 p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                    Find me online
                  </p>
                  <p className="mt-2 text-[13px] leading-5 text-secondary">
                    Open to conversations, collaboration, and new opportunities.
                  </p>
                  <div className="mt-auto pt-4">
                    <SocialLinks />
                  </div>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
