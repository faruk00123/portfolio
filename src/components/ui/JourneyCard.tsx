import {
  Compass,
  LayoutDashboard,
  Rocket,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { JourneyStage, JourneyIconName } from "@/data/journey";

const journeyIcons: Record<JourneyIconName, LucideIcon> = {
  compass: Compass,
  layout: LayoutDashboard,
  wrench: Wrench,
  server: Server,
  rocket: Rocket,
};

type JourneyCardProps = {
  stage: JourneyStage;
  index: number;
  total: number;
};

export function JourneyCard({ stage, index, total }: JourneyCardProps) {
  const Icon = journeyIcons[stage.icon];
  const stageNumber = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-gradient-to-br from-card/90 via-card/60 to-canvas-alt p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_26px_60px_-34px_rgba(139,92,246,0.55)]">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-20" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-primary/10 blur-2xl transition-colors duration-500 group-hover:bg-primary/20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-1 -top-5 select-none font-display text-[5.5rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.035]"
      >
        {stageNumber}
      </span>

      <div className="relative flex items-start justify-between gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-accent transition-colors duration-500 group-hover:border-primary/45 group-hover:bg-primary/15">
          <Icon className="size-[1.1rem]" strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="rounded-full border border-line/70 bg-canvas/40 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-lavender">
          {stage.category}
        </span>
      </div>

      <h3 className="relative mt-4 min-h-[3.15rem] font-display text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-white">
        {stage.title}
      </h3>
      <p className="relative mt-2 text-[13px] leading-6 text-secondary">
        {stage.description}
      </p>

      <div className="relative mt-auto flex items-center gap-3 pt-5">
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-line/80 to-transparent"
        />
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          Stage {stageNumber} / {totalNumber}
        </span>
      </div>
    </article>
  );
}
