import Image from "next/image";
import type { CSSProperties } from "react";
import { orbitTechnologies } from "@/data/skills";
import { personal } from "@/data/personal";
import { TechLogo } from "@/components/ui/TechLogos";
import { cn } from "@/lib/cn";

/**
 * The portrait is the fixed centre of the composition. CSS rotates the orbit
 * stage while each icon counter-rotates, keeping every logo upright with no
 * JavaScript animation loop.
 */
export function HeroPortrait() {
  return (
    <div className="hero-orbit-stage relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[23rem] lg:max-w-[25rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[13%] rounded-full bg-primary/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-[7%] rounded-full border border-dashed border-primary/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full border border-primary/10"
      />

      <div aria-hidden="true" className="hero-orbit absolute inset-0">
        {orbitTechnologies.map((technology, index) => (
          <div
            key={technology.name}
            className="hero-orbit-item"
            style={
              {
                "--orbit-angle": `${index * (360 / orbitTechnologies.length)}deg`,
              } as CSSProperties
            }
          >
            <div className="hero-orbit-icon">
              <div className="flex size-8 items-center justify-center rounded-full border border-line/80 bg-canvas-alt/85 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(139,92,246,0.08)] backdrop-blur-md sm:size-10">
                <TechLogo
                  name={technology.logo}
                  className={cn("size-3.5 sm:size-[1.1rem]", technology.accent)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-[26%] rounded-full bg-[conic-gradient(from_160deg,rgba(139,92,246,0.95),rgba(167,139,250,0.25),rgba(109,40,217,0.85),rgba(139,92,246,0.95))] p-[3px] shadow-[0_30px_90px_-30px_rgba(109,40,217,0.75)]">
        <div className="relative size-full overflow-hidden rounded-full border border-white/10 bg-canvas-alt">
          <Image
            src={personal.portrait}
            alt={`Portrait of ${personal.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 180px, 150px"
            className="object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/55 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
