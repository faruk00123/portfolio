import { ArrowUp, Mail, MapPin } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line/70 bg-canvas/70">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 select-none font-display text-[11rem] font-semibold leading-none tracking-[-0.06em] text-white/[0.018] sm:text-[16rem]"
      >
        OMAR
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr_auto]">
          <div>
            <a
              href="#home"
              aria-label="Md. Omar — back to home"
              className="inline-flex items-center gap-2.5 transition-colors hover:text-lavender"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/25 via-card to-deep/25">
                <span className="font-display text-sm font-bold tracking-[-0.08em] text-white">
                  O
                </span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-[0.18em] text-white">
                  OMAR<span className="text-primary">.</span>
                </span>
                <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.24em] text-muted">
                  Md. Omar
                </span>
              </span>
            </a>
            <p className="mt-4 font-display text-lg font-medium text-white">
              {personal.name}
            </p>
            <p className="mt-1 text-sm text-muted">{personal.title}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-secondary">
              Building thoughtful digital experiences from Barishal, Bangladesh.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-secondary transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:min-w-[13rem]">
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-muted">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                  <span className="break-all">{personal.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPin className="size-4 text-muted" aria-hidden="true" />
                {personal.location}
              </li>
            </ul>
            <SocialLinks variant="links" className="mt-5" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Md. Omar. All rights reserved.
          </p>
          <p>Designed &amp; Built by Md. Omar</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
