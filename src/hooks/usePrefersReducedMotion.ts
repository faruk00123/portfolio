"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  // The server cannot know the visitor's preference. Returning `false` keeps
  // the first client render identical to the server output, then React syncs
  // the real value immediately after hydration — no mismatch.
  return false;
}

/**
 * Hydration-safe replacement for Framer Motion's `useReducedMotion`, which can
 * return a different value on the client's first render and trip React's
 * hydration check when it is used to choose `initial` props.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
