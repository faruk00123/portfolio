import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <ScrollReveal>
        <p
          className={cn(
            "flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-lavender",
            isCentered && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(139,92,246,0.9)]"
          />
          {eyebrow}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.06}>
        <h2
          id={id}
          className="mt-4 font-display text-[clamp(2rem,4.2vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-white text-balance"
        >
          {title}
        </h2>
      </ScrollReveal>

      {description ? (
        <ScrollReveal delay={0.12}>
          <p
            className={cn(
              "mt-4 max-w-xl text-[15px] leading-7 text-secondary",
              isCentered && "mx-auto",
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      ) : null}
    </div>
  );
}
