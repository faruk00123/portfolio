"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { navigationItems, sectionIds } from "@/data/navigation";
import { personal } from "@/data/personal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { SocialLinks } from "@/components/ui/SocialLinks";

const navLinkBase =
  "relative flex items-center rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export function Navbar() {
  const [activeSection, setActiveSection] = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string,
  ) => {
    event.preventDefault();
    setActiveSection(id);
    setMenuOpen(false);

    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative border-b transition-[background-color,border-color,box-shadow] duration-500",
          scrolled || menuOpen
            ? "border-line/70 bg-canvas/80 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
        >
          <a
            href="#home"
            onClick={(event) => scrollToSection(event, "home", "#home")}
            aria-label="Md. Omar — back to home"
            className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
          >
            <span className="relative flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/25 via-card to-deep/25 shadow-[0_8px_24px_-12px_rgba(139,92,246,0.9)] transition-colors duration-300 group-hover:border-primary/55">
              <span className="font-display text-sm font-bold tracking-[-0.08em] text-white">
                O
              </span>
              <span
                aria-hidden="true"
                className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(167,139,250,0.95)]"
              />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="font-display text-[1.1rem] font-bold tracking-[0.2em] text-white transition-colors group-hover:text-lavender">
                OMAR<span className="text-primary">.</span>
              </span>
              <span className="mt-1 font-mono text-[8px] font-medium uppercase tracking-[0.24em] text-muted">
                Md. Omar
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 rounded-full border border-line/60 bg-card/25 p-1 backdrop-blur-md lg:flex">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(event) => scrollToSection(event, item.id, item.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      navLinkBase,
                      isActive
                        ? "text-accent"
                        : "text-secondary hover:text-white",
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="desktop-nav-indicator"
                        aria-hidden="true"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary via-accent to-lavender shadow-[0_0_12px_rgba(167,139,250,0.8)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact", "#contact")}
              className="group hidden items-center gap-2 rounded-full border border-line/80 bg-card/40 px-4 py-2.5 text-[13px] font-medium text-secondary backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex size-10 items-center justify-center rounded-full border border-line/80 bg-card/40 text-secondary transition-colors hover:border-primary/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-deep via-primary to-accent"
        />
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-3 top-[calc(100%-0.25rem)] origin-top overflow-hidden rounded-3xl border border-line/80 bg-canvas-alt/95 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile primary">
              <ul className="space-y-1">
                {navigationItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={(event) => scrollToSection(event, item.id, item.href)}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "relative flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors",
                          isActive
                            ? "text-accent"
                            : "text-secondary hover:bg-white/[0.03] hover:text-white",
                        )}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="mobile-nav-indicator"
                            aria-hidden="true"
                            className="absolute inset-0 rounded-2xl border border-primary/20 bg-primary/[0.09]"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        ) : null}
                        <span className="relative z-10">{item.label}</span>
                        <span className="relative z-10 font-mono text-[10px] tracking-[0.2em] text-muted">
                          0{index + 1}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 px-2 pt-4">
              <a
                href={`mailto:${personal.email}`}
                className="text-xs text-muted transition-colors hover:text-lavender"
              >
                {personal.email}
              </a>
              <SocialLinks />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
