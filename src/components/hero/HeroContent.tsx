"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { personal } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { HeroPortrait } from "./HeroPortrait";
import { HeroVideo } from "./HeroVideo";
import { Typewriter } from "./Typewriter";

const entranceContainer: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.12, staggerChildren: 0.08 },
  },
};

const entranceItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    /*
     * A gentle cinematic drift only. Deliberately no pinned section, no
     * overlay-opacity tween, and no content fade: the hero keeps the exact
     * same brightness from the first pixel to the About section.
     */
    const mediaQuery = gsap.matchMedia();

    mediaQuery.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.fromTo(
        media,
        { scale: 1 },
        {
          scale: 1.045,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        },
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    let cancelled = false;
    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };

    document.fonts?.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);

    return () => {
      cancelled = true;
      window.removeEventListener("load", refresh);
      mediaQuery.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div
        ref={mediaRef}
        className="absolute inset-0 -z-20 overflow-hidden will-change-transform"
      >
        <HeroVideo />
      </div>

      {/* Constant readability overlay — brightness never changes on scroll. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,13,29,0.96)_0%,rgba(16,13,29,0.84)_34%,rgba(16,13,29,0.42)_62%,rgba(16,13,29,0.3)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,13,29,0.72)_0%,rgba(16,13,29,0.16)_30%,rgba(16,13,29,0.12)_60%,rgba(16,13,29,0.94)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-canvas/55 sm:bg-canvas/35 lg:bg-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <motion.div
          className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-8 xl:gap-14"
          variants={entranceContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <div className="min-w-0 max-w-2xl">
            <motion.p
              variants={entranceItem}
              className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-lavender sm:text-[11px]"
            >
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-primary to-transparent"
              />
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={entranceItem}
              className="mt-4 font-display text-[clamp(2.85rem,7vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white"
            >
              I am <span className="text-gradient">Omar.</span>
            </motion.h1>

            <motion.div variants={entranceItem} className="mt-4">
              <Typewriter />
            </motion.div>

            <motion.div
              variants={entranceItem}
              className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <p className="text-sm font-medium tracking-tight text-white sm:text-base">
                {personal.title}
              </p>
              <span
                aria-hidden="true"
                className="hidden size-1 rounded-full bg-primary sm:block"
              />
              <p className="inline-flex items-center gap-1.5 text-xs text-muted sm:text-sm">
                <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                {personal.location}
              </p>
            </motion.div>

            <motion.p
              variants={entranceItem}
              className="mt-5 max-w-lg text-[14px] leading-7 text-secondary sm:text-[15px]"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              variants={entranceItem}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href="#projects"
                icon={<ArrowDown className="size-4" />}
                className="w-full sm:w-auto"
              >
                Explore My Work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                icon={<ArrowUpRight className="size-4" />}
                className="w-full sm:w-auto"
              >
                Let&apos;s Connect
              </Button>
            </motion.div>

            <motion.div
              variants={entranceItem}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <SocialLinks />
              <span aria-hidden="true" className="h-px w-8 bg-line" />
              <a
                href={`mailto:${personal.email}`}
                className="text-xs text-muted transition-colors hover:text-lavender"
              >
                {personal.email}
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={entranceItem}
            className="order-first w-full max-w-[17rem] justify-self-center sm:order-none sm:max-w-[23rem] lg:order-last lg:max-w-[25rem] lg:justify-self-end"
          >
            <HeroPortrait />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-5 z-10 hidden justify-center sm:flex">
        <a
          href="#about"
          aria-label="Scroll to the About section"
          className="group flex flex-col items-center gap-2.5 text-[9px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
        >
          <span>Scroll to explore</span>
          <span className="relative block h-9 w-px overflow-hidden bg-line">
            <span className="absolute inset-x-0 top-0 h-4 animate-scroll-cue bg-gradient-to-b from-accent to-transparent" />
          </span>
        </a>
      </div>
    </section>
  );
}
