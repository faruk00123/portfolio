"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CircleAlert,
  Clock3,
  Copy,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { personal, socialLinks } from "@/data/personal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/cn";

type CopyState = "idle" | "copied" | "error";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function ContactSection() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [clock, setClock] = useState<{ time: string; date: string } | null>(
    null,
  );

  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 2400);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  useEffect(() => {
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const update = () => {
      const now = new Date();
      setClock({
        time: timeFormatter.format(now),
        date: dateFormatter.format(now),
      });
    };

    // Update immediately, then tick every second so the seconds stay live.
    update();
    const interval = window.setInterval(update, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(personal.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  };

  const copyLabel =
    copyState === "copied"
      ? "Copied"
      : copyState === "error"
        ? "Copy failed"
        : "Copy email";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.11),transparent_66%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="contact-heading"
          eyebrow="05 / Contact"
          title={
            <>
              Let&apos;s <span className="text-gradient">Connect</span>
            </>
          }
          description="Have an idea, a project, or an opportunity in mind? Pick the channel that works best for you."
        />

        <ScrollReveal className="mt-10">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/50 via-line/70 to-deep/45 opacity-80 sm:rounded-3xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-line/70 bg-canvas-alt/95 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.98)] sm:rounded-3xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-grid opacity-25"
              />

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-8 size-64 rounded-full bg-primary/15 blur-[90px]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.07, 1] }
                }
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 bottom-0 size-72 rounded-full bg-deep/20 blur-[100px]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: [0, -20, 0], y: [0, 16, 0], scale: [1, 1.08, 1] }
                }
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative grid gap-9 p-5 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:p-10">
                <div className="min-w-0">
                  <h3 className="max-w-xl font-display text-[clamp(1.75rem,3.3vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-white text-balance">
                    Let&apos;s Create{" "}
                    <span className="block text-gradient">
                      Something Meaningful
                    </span>
                  </h3>

                  <p className="mt-4 max-w-lg text-[14px] leading-7 text-secondary sm:text-[15px]">
                    Whether it is a full stack build, a frontend idea, or simply
                    a conversation about web development, my inbox is open.
                  </p>

                  <div className="mt-6 rounded-xl border border-line/80 bg-card/60 p-1.5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/35">
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                      <a
                        href={`mailto:${personal.email}`}
                        className="group flex min-w-0 flex-1 items-center gap-3 rounded-lg px-3 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-accent">
                          <Mail className="size-[1.1rem]" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[8px] uppercase tracking-[0.22em] text-muted">
                            Email
                          </span>
                          <span className="mt-0.5 block truncate text-[13px] font-medium text-white sm:text-sm">
                            {personal.email}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="ml-auto size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          aria-hidden="true"
                        />
                      </a>

                      <button
                        type="button"
                        onClick={copyEmail}
                        className={cn(
                          "flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-3.5 py-2.5 text-[11px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                          copyState === "error"
                            ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
                            : "border-line/80 bg-canvas/40 text-secondary hover:border-primary/40 hover:text-white",
                        )}
                      >
                        {copyState === "copied" ? (
                          <Check className="size-4 text-accent" aria-hidden="true" />
                        ) : copyState === "error" ? (
                          <CircleAlert className="size-4" aria-hidden="true" />
                        ) : (
                          <Copy className="size-4" aria-hidden="true" />
                        )}
                        {copyLabel}
                      </button>
                    </div>
                  </div>

                  <p className="sr-only" role="status" aria-live="polite">
                    {copyState === "copied"
                      ? "Email address copied to clipboard."
                      : copyState === "error"
                        ? "Unable to copy the email address. Please select it manually."
                        : ""}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Button
                      href={`mailto:${personal.email}`}
                      icon={<Send className="size-4" />}
                    >
                      Start a Conversation
                    </Button>
                    <span className="inline-flex items-center gap-2 text-xs text-muted">
                      <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                      {personal.location}
                    </span>
                  </div>
                </div>

                <div className="relative min-w-0 lg:border-l lg:border-dashed lg:border-line/70 lg:pl-9">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-lavender">
                        <span
                          aria-hidden="true"
                          className="relative flex size-2"
                        >
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50 [animation-duration:2.8s]" />
                          <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                        Direct channels
                      </p>
                      <p className="mt-2.5 max-w-xs text-[13px] leading-6 text-secondary">
                        Find me on GitHub and LinkedIn, or send a note straight to
                        my inbox.
                      </p>
                    </div>

                    <span className="relative hidden size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] sm:flex">
                      <span
                        aria-hidden="true"
                        className="absolute inset-2 rounded-lg border border-primary/10"
                      />
                      <Mail className="size-4 text-accent" aria-hidden="true" />
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {socialLinks.map((social) => {
                      const Icon = socialIcons[social.label];
                      return (
                        <li key={social.label}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${social.label} — opens in a new tab`}
                            className="group flex items-center gap-3 rounded-xl border border-line/70 bg-card/45 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card-hover/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                          >
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line/80 bg-canvas/40 text-secondary transition-colors duration-300 group-hover:border-primary/30 group-hover:text-accent">
                              <Icon className="size-[1.1rem]" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-medium text-white">
                                {social.label}
                              </span>
                              <span className="mt-0.5 block truncate text-[11px] text-muted">
                                {social.handle}
                              </span>
                            </span>
                            <ArrowUpRight
                              className="ml-auto size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-5 rounded-xl border border-line/60 bg-canvas/30 p-3.5">
                    <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex size-8 items-center justify-center rounded-lg border border-line/70 bg-card/50 text-accent">
                          <MapPin className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
                            Based in
                          </p>
                          <p className="mt-0.5 text-xs font-medium text-white">
                            {personal.location}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-line/60 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0 sm:text-right">
                        <p className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-muted sm:justify-end">
                          <span
                            aria-hidden="true"
                            className="relative flex size-1.5"
                          >
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 [animation-duration:2s]" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                          </span>
                          <Clock3 className="size-3 text-accent" aria-hidden="true" />
                          Local time
                        </p>
                        <p
                          role="timer"
                          aria-label={`Current time in ${personal.location}`}
                          className="mt-1 font-mono text-base font-medium tabular-nums tracking-tight text-lavender"
                        >
                          {clock?.time ?? "—"}
                        </p>
                        <p className="mt-0.5 text-[10px] leading-4 text-muted">
                          {clock?.date ?? "\u00A0"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
