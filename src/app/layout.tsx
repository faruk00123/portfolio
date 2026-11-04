import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { AmbientBackground } from "@/components/animations/AmbientBackground";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { Footer } from "@/components/layout/Footer";
import { HashScrollRestoration } from "@/components/layout/HashScrollRestoration";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Md. Omar";
const description =
  "Portfolio of Md. Omar, an aspiring Full Stack Software Engineer from Barishal, Bangladesh. Explore skills, projects, and web development work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Md. Omar — Portfolio",
  authors: [{ name: "Md. Omar", url: "https://github.com/faruk00123" }],
  creator: "Md. Omar",
  keywords: [
    "Md. Omar",
    "Full Stack Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Barishal",
    "Bangladesh",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Md. Omar",
    title,
    description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Omar — Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#100d1d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only rounded-full bg-primary px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>

        <AmbientBackground />

        <MotionProvider>
          <div className="relative z-10 flex min-h-svh flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </MotionProvider>
        <HashScrollRestoration />
      </body>
    </html>
  );
}
