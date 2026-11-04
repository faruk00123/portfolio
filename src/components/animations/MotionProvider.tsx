"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

type MotionProviderProps = {
  children: ReactNode;
};

/**
 * Applies the visitor's reduced-motion preference to every Framer Motion
 * component in the tree. Components still guard their own `initial` props with
 * the hydration-safe hook, but this keeps any unguarded motion in check.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
