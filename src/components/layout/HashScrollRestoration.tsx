"use client";

import { useEffect } from "react";

/**
 * Deep links such as `/#projects` can land short of their target while fonts,
 * images, and client components finish settling. Re-align once the page and
 * fonts are ready so the hash always points at the correct section.
 */
export function HashScrollRestoration() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#home") return;

    let cancelled = false;
    let frame = 0;

    const scrollToTarget = () => {
      if (cancelled) return;

      frame = window.requestAnimationFrame(() => {
        if (cancelled) return;

        let id: string;
        try {
          id = decodeURIComponent(hash.slice(1));
        } catch {
          return;
        }

        const target = document.getElementById(id);
        if (!target) return;

        const root = document.documentElement;
        const previousBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        target.scrollIntoView({ block: "start" });
        root.style.scrollBehavior = previousBehavior;
      });
    };

    if (document.readyState === "complete") {
      scrollToTarget();
    } else {
      window.addEventListener("load", scrollToTarget, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scrollToTarget);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
