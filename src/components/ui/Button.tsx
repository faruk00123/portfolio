"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

const variantStyles = {
  primary:
    "border border-primary/40 bg-gradient-to-r from-deep to-primary text-white shadow-[0_14px_40px_-14px_rgba(139,92,246,0.8)] hover:shadow-[0_18px_50px_-14px_rgba(139,92,246,0.95)]",
  secondary:
    "border border-line bg-card/55 text-white backdrop-blur-sm hover:border-primary/50 hover:bg-card-hover",
  ghost: "border border-transparent text-secondary hover:text-white",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon,
  external,
  ariaLabel,
}: ButtonProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const opensNewTab = external ?? href.startsWith("http");

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        variantStyles[variant],
        className,
      )}
    >
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </motion.a>
  );
}
