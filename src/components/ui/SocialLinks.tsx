import { socialLinks } from "@/data/personal";
import { cn } from "@/lib/cn";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

type SocialLinksProps = {
  variant?: "icons" | "links";
  className?: string;
};

export function SocialLinks({ variant = "icons", className }: SocialLinksProps) {
  if (variant === "links") {
    return (
      <ul className={cn("flex flex-wrap items-center gap-5", className)}>
        {socialLinks.map((social) => {
          const Icon = social.label === "GitHub" ? GitHubIcon : LinkedInIcon;
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-white"
              >
                <Icon className="size-4 text-muted transition-colors group-hover:text-accent" />
                {social.label}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {socialLinks.map((social) => {
        const Icon = social.label === "GitHub" ? GitHubIcon : LinkedInIcon;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} — opens in a new tab`}
              className="flex size-10 items-center justify-center rounded-full border border-line/80 bg-card/40 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
