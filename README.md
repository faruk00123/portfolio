# Md. Omar — Portfolio

A compact, premium dark-royal-purple portfolio for **Md. Omar**, Full Stack
Software Engineer. Built with Next.js App Router, TypeScript, Tailwind CSS,
Framer Motion, GSAP ScrollTrigger, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## What is implemented

- Fixed navbar with a wordmark logo (`O` badge + `OMAR.` + `Md. Omar`), an
  animated purple active-section indicator, a scroll progress bar, and an
  accessible mobile menu.
- Full-screen hero with a muted, looping, autoplaying background video, poster
  fallback, constant readability overlays, and a subtle GSAP media-only scale.
  The hero brightness does not change on scroll.
- Typewriter headline cycling eleven developer phrases with a blinking caret.
  It renders the first phrase statically when
  `prefers-reduced-motion: reduce` is set.
- Portrait composition with fourteen tech logos arranged across three
  independent orbit rings (different sizes, speeds, and directions). Icons stay
  upright, pause and highlight on hover, and the orbit stops under reduced
  motion.
- About section includes **View My Resume** (opens the PDF in a new tab) and
  **Download My Resume** (downloads it as `Md-Omar-Resume.pdf`).
- Section headings: **About Me**, **My Skills**, **My Development Journey**,
  **Featured Projects**, and **Let's Connect**.
- Responsive CSS grids: one column on mobile, two on tablet, and four on desktop
  for skills, with one to two for journey and two to three for projects.
- Skills are grouped into Frontend Development, Backend Development, Database,
  and Tools &amp; Deployment, with individual cards, real brand logos, and no
  percentage bars.
- Journey uses six balanced stage cards (five stages plus a next-chapter card),
  with no pinning or sticky stacking.
- Projects use a premium card grid with image hover zoom, stack badges, and
  only real links. Placeholder projects are clearly marked and render no fake
  links.
- Contact card with copy-email feedback, `mailto:` action, real GitHub and
  LinkedIn links, Barishal location, and live local time.
- Semantic landmarks, visible focus states, keyboard support, and no horizontal
  overflow from 320px to 1920px.

## Replace the hero media

Paths live in `src/data/personal.ts`:

```ts
export const heroMedia = {
  videoSrc: "/videos/hero-background.mp4",
  posterSrc: "/images/hero-poster.jpg",
};
```

Replace these files in place:

- `public/videos/hero-background.mp4`
- `public/images/hero-poster.jpg`

Recommended video: H.264 MP4, 1920×1080, 8–15 seconds, seamless loop, under
~5 MB. Compose the subject toward the centre-right so the left side stays open
for the hero text. If the video cannot play, the poster and overlays remain.

## Replace the portrait

```ts
// src/data/personal.ts
portrait: "/images/omar-portrait.png",
```

Drop a replacement at `public/images/omar-portrait.png`. A transparent
background cutout works best. The hero and About section both use this file.

## Resume

Both Resume actions read from `src/data/personal.ts`:

```ts
resume: {
  path: "/images/Omar%20Resume.pdf",
  downloadName: "Md-Omar-Resume.pdf",
},
```

The file must exist at `public/images/Omar Resume.pdf`. The View action opens
that public URL in a new tab; the Download action saves the same file as
`Md-Omar-Resume.pdf`. If the PDF is missing, both links will 404 until the file
is added.

## Edit projects

Project content lives in `src/data/projects.ts`. The current entries are
**placeholders**:

- `isPlaceholder: true`
- `githubUrl: null`
- `liveUrl: null`

Fill in real titles, descriptions, stacks, screenshots, and URLs. Cards only
render links when a URL exists, so no dead links are shown. Placeholder previews
live in `public/images/projects/`. Replace them with real screenshots and update
`image.src` and `image.alt`.

## Personal data

- `src/data/personal.ts` — name, title, email, location, social links, about
  copy, hero media paths, and Resume paths.
- `src/data/navigation.ts` — section nav items and active-section ids.
- `src/data/skills.ts` — fourteen technologies, four skill categories, and the
  orbit data, all with brand colors and logo keys.
- `src/data/journey.ts` — learning stages (no invented dates or employers).
- `src/data/projects.ts` — project cards and placeholder flags.

## SEO and metadata

Metadata and Open Graph tags are defined in `src/app/layout.tsx`. In production,
set `NEXT_PUBLIC_SITE_URL` so canonical and Open Graph URLs resolve to the live
domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

On Vercel the app falls back to `VERCEL_PROJECT_PRODUCTION_URL` automatically.
The `OMAR` favicon is `src/app/icon.svg`; the social preview is
`public/images/og-image.jpg` (1200×630).

## Project structure

```text
src/
  app/            layout, page, global styles, icon
  components/
    animations/   AmbientBackground, MotionProvider, ScrollReveal
    hero/         HeroSection, HeroContent, HeroPortrait, HeroVideo, Typewriter
    layout/       Navbar, Footer, HashScrollRestoration
    sections/     About, Skills, Journey, Projects, Contact
    ui/           Button, SectionHeading, SocialLinks, ProjectCard,
                  JourneyCard, TechLogos, BrandIcons
  data/           personal, navigation, skills, journey, projects
  hooks/          useActiveSection, usePrefersReducedMotion
  lib/            gsap registration, class helper
public/
  images/         hero poster, portrait, OG image, project previews
  videos/         hero-background.mp4
```

## Deploy

### GitHub

```bash
git add .
git commit -m "Build premium developer portfolio"
git branch -M main
git remote add origin https://github.com/faruk00123/<repo>.git
git push -u origin main
```

### Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected). Build command `npm run build`,
   output is handled automatically.
4. Add `NEXT_PUBLIC_SITE_URL` with the production URL (for example
   `https://your-domain.com`).
5. Deploy. No secrets or environment-specific URLs are required for the build.

## Notes

- The hero video, poster, portrait, and project previews are local assets; no
  external image hosts are used.
- GSAP timelines and ScrollTriggers are cleaned up on unmount and guarded
  against React Strict Mode duplication.
- `MotionProvider` sets Framer Motion's `reducedMotion="user"` globally, and
  `usePrefersReducedMotion` is hydration-safe so server and client markup match.
- Animation is skipped or simplified when `prefers-reduced-motion: reduce` is
  set.
# portfolio
