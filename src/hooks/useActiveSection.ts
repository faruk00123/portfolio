"use client";

import { useEffect, useState } from "react";

const ACTIVE_LINE = 0.42;

/**
 * Tracks the section crossing a thin reading line. The observer only wakes the
 * calculation when section geometry changes; the rAF-throttled measurement keeps
 * the active item exact when two long sections meet at the line.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    let frame = 0;
    let cancelled = false;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * ACTIVE_LINE;
      let next = sections[0].id;

      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= line && bottom > line) {
          next = section.id;
          break;
        }
      }

      const documentHeight = document.documentElement.scrollHeight;
      if (window.scrollY + window.innerHeight >= documentHeight - 2) {
        next = sections[sections.length - 1].id;
      }

      if (!cancelled) setActiveSection(next);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(scheduleUpdate, {
      rootMargin: "-38% 0px -56% 0px",
      threshold: [0, 0.01, 0.2, 0.5, 0.8],
    });

    sections.forEach((section) => observer.observe(section));
    update();

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  return [activeSection, setActiveSection] as const;
}
