"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

export const typewriterPhrases = [
  "I am a Software Engineer.",
  "I am a Full Stack Developer.",
  "I am a React Developer.",
  "I am a Next.js Developer.",
  "I am a Node.js Developer.",
  "I am Omar.",
] as const;

type TypewriterProps = {
  className?: string;
};

export function Typewriter({ className }: TypewriterProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const current = typewriterPhrases[phraseIndex % typewriterPhrases.length];
    const finishedTyping = !isDeleting && text === current;
    const finishedDeleting = isDeleting && text.length === 0;

    let delay = isDeleting ? 34 : 74;
    if (finishedTyping) delay = 1600;
    if (finishedDeleting) delay = 360;

    const timeout = window.setTimeout(() => {
      if (finishedTyping) {
        setIsDeleting(true);
        return;
      }

      if (finishedDeleting) {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % typewriterPhrases.length);
        return;
      }

      setText(
        isDeleting
          ? current.slice(0, Math.max(0, text.length - 1))
          : current.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, shouldReduceMotion, text]);

  const displayedText = shouldReduceMotion ? typewriterPhrases[0] : text;

  return (
    <p
      className={cn(
        "flex min-h-[1.7em] items-baseline font-display text-[clamp(1.1rem,2.5vw,1.65rem)] font-medium tracking-[-0.02em] text-lavender",
        className,
      )}
    >
      <span aria-hidden="true" className="text-balance">
        {displayedText}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[0.12em] rounded-full bg-accent shadow-[0_0_10px_rgba(167,139,250,0.9)] animate-caret"
      />
      <span className="sr-only">
        I am Md. Omar, a Software Engineer, Full Stack Developer, React
        Developer, Next.js Developer, and Node.js Developer.
      </span>
    </p>
  );
}
