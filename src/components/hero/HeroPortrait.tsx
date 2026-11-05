"use client";

import Image from "next/image";
import {
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { orbitTechnologies } from "@/data/skills";
import { personal } from "@/data/personal";
import { TechLogo } from "@/components/ui/TechLogos";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Offset = { x: number; y: number };

const orbitRings = [
  {
    technologies: orbitTechnologies.slice(0, 5),
    radius: 29,
    duration: "32s",
    direction: "normal" as const,
    startAngle: -90,
  },
  {
    technologies: orbitTechnologies.slice(5, 10),
    radius: 37,
    duration: "46s",
    direction: "reverse" as const,
    startAngle: -68,
  },
  {
    technologies: orbitTechnologies.slice(10),
    radius: 42,
    duration: "60s",
    direction: "normal" as const,
    startAngle: -112,
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * The portrait is the fixed centre of the composition. Three independent CSS
 * orbit rings rotate at different speeds and directions, while each icon
 * counter-rotates so the technology marks always stay upright.
 */
export function HeroPortrait() {
  const stageRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [interacting, setInteracting] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [tooltipAbove, setTooltipAbove] = useState(false);
  const [offsets, setOffsets] = useState<Offset[]>(() =>
    orbitTechnologies.map(() => ({ x: 0, y: 0 })),
  );
  const shouldReduceMotion = usePrefersReducedMotion();

  const resetInteraction = () => {
    setInteracting(false);
    setActiveIndex(null);
    setOffsets(orbitTechnologies.map(() => ({ x: 0, y: 0 })));
  };

  /**
   * The rings rotate continuously, so an icon's position relative to the
   * portrait changes. Recompute which side of the icon has room for its
   * tooltip whenever an icon becomes active.
   */
  const activateIcon = (index: number) => {
    setActiveIndex(index);

    const node = iconRefs.current[index];
    const stage = stageRef.current;
    if (!node || !stage) return;

    const nodeRect = node.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    setTooltipAbove(
      nodeRect.top + nodeRect.height / 2 <
        stageRect.top + stageRect.height / 2,
    );
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const pointerX = event.clientX;
    const pointerY = event.clientY;
    let nearestIndex: number | null = null;
    let nearestDistance = Number.POSITIVE_INFINITY;

    const nextOffsets = orbitTechnologies.map((_, index) => {
      const node = iconRefs.current[index];
      if (!node) return { x: 0, y: 0 };

      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = pointerX - centerX;
      const deltaY = pointerY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }

      if (shouldReduceMotion) return { x: 0, y: 0 };

      const pull = Math.max(0, 1 - distance / 260);
      return {
        x: clamp(deltaX * 0.07 * pull, -6, 6),
        y: clamp(deltaY * 0.07 * pull, -6, 6),
      };
    });

    if (nearestIndex !== null) activateIcon(nearestIndex);
    if (!shouldReduceMotion) setOffsets(nextOffsets);
  };

  return (
    <div
      ref={stageRef}
      role="group"
      aria-label="Technology stack orbiting the portrait"
      data-interacting={interacting ? "true" : undefined}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setInteracting(true);
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetInteraction}
      className="hero-orbit-stage relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[23rem] lg:max-w-[25rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.24),transparent_66%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-[8%] size-28 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[10%] size-24 rounded-full bg-deep/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[20%] rounded-full border border-dashed border-primary/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[11%] rounded-full border border-primary/[0.08]"
      />

      {orbitRings.map((ring, ringIndex) => (
        <div
          key={ringIndex}
          className="hero-orbit-ring absolute inset-0"
          style={
            {
              "--orbit-duration": ring.duration,
              "--orbit-direction": ring.direction,
            } as CSSProperties
          }
        >
          {ring.technologies.map((technology, indexInRing) => {
            const globalIndex = orbitTechnologies.findIndex(
              (item) => item.name === technology.name,
            );
            const angle =
              ring.startAngle +
              (360 / ring.technologies.length) * indexInRing;
            const isActive = activeIndex === globalIndex;
            const isTop = Math.sin((angle * Math.PI) / 180) < -0.35;
            const tooltipOnTop = isActive ? tooltipAbove : isTop;
            const offset = offsets[globalIndex] ?? { x: 0, y: 0 };
            const radius = ring.radius + ((globalIndex % 3) - 1) * 0.7;

            return (
              <div
                key={technology.name}
                className="hero-orbit-item"
                style={
                  {
                    "--orbit-angle": `${angle}deg`,
                    "--orbit-radius": `calc(${radius}cqw)`,
                  } as CSSProperties
                }
              >
                <div
                  className="hero-orbit-icon"
                  style={
                    {
                      "--orbit-duration": ring.duration,
                      "--orbit-counter-direction": ring.direction,
                    } as CSSProperties
                  }
                >
                  <div
                    className="orbit-float"
                    style={{ animationDelay: `${indexInRing * -1.7}s` }}
                  >
                    <div
                      ref={(node) => {
                        iconRefs.current[globalIndex] = node;
                      }}
                      role="img"
                      aria-label={technology.name}
                      tabIndex={0}
                      onFocus={() => activateIcon(globalIndex)}
                      onBlur={() => setActiveIndex(null)}
                      style={{
                        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${
                          isActive ? 1.1 : 1
                        })`,
                      }}
                      className={cn(
                        "orbit-magnet relative flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(139,92,246,0.12)] backdrop-blur-md transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:size-9 lg:size-10",
                        isActive &&
                          "border-primary/70 bg-primary/20 shadow-[0_0_22px_rgba(139,92,246,0.45),0_10px_30px_-12px_rgba(0,0,0,0.9)]",
                      )}
                    >
                      <TechLogo
                        name={technology.logo}
                        className={cn(
                          "size-3.5 transition-transform duration-200 sm:size-4 lg:size-[1.15rem]",
                          technology.accent,
                          isActive && "scale-110",
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          "pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/30 bg-canvas/95 px-2 py-0.5 text-[9px] font-medium tracking-wide text-lavender shadow-[0_8px_24px_-8px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-200",
                          tooltipOnTop
                            ? "bottom-[calc(100%+0.5rem)]"
                            : "top-[calc(100%+0.5rem)]",
                          isActive
                            ? "translate-y-0 opacity-100"
                            : tooltipOnTop
                              ? "translate-y-1 opacity-0"
                              : "-translate-y-1 opacity-0",
                        )}
                      >
                        {technology.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <div className="pointer-events-none absolute inset-[31%]">
        <div className="relative size-full">
          <div
            aria-hidden="true"
            className="portrait-mask absolute -inset-3 bg-gradient-to-br from-primary/40 via-accent/10 to-deep/45 opacity-70 blur-xl"
          />
          <div
            aria-hidden="true"
            className="portrait-mask absolute -inset-2 rotate-6 border border-dashed border-primary/20"
          />
          <div
            aria-hidden="true"
            className="portrait-mask absolute inset-0 translate-x-1.5 translate-y-1.5 border border-primary/25"
          />

          <div className="portrait-frame portrait-mask relative size-full p-[2px] shadow-[0_28px_80px_-28px_rgba(109,40,217,0.8)]">
            <div className="portrait-mask relative size-full overflow-hidden bg-canvas-alt">
              <Image
                src={personal.portrait}
                alt={`Portrait of ${personal.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 140px, 120px"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/45 via-transparent to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
              />
            </div>
          </div>

          <span
            aria-hidden="true"
            className="absolute -right-1 top-[18%] size-2.5 rounded-full bg-accent shadow-[0_0_16px_rgba(167,139,250,0.95)]"
          />
          <span
            aria-hidden="true"
            className="absolute -left-1.5 bottom-[22%] size-1.5 rounded-full bg-primary/90 shadow-[0_0_14px_rgba(139,92,246,0.9)]"
          />
        </div>
      </div>
    </div>
  );
}
