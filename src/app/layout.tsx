import type { Metadata } from "next";
import { Geist, Geist_Mono, Tangerine } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  // Everything below resolves against site.url, so the canonical, OG and
  // Twitter URLs can never drift apart.
  metadataBase: new URL(site.url),
  title: "Wedding Content Creator Belfast & Northern Ireland | TikTok & Reels | CourtCreatives",
  description: "Belfast-based wedding content creator covering Northern Ireland and ROI. Candid, behind-the-scenes TikToks, Instagram Reels and stills from your day, delivered within 24–48 hours.",
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: "Wedding Content Creator Belfast & Northern Ireland",
    description: "Candid, behind-the-scenes TikToks, Instagram Reels and stills from your wedding day, delivered within 24–48 hours. Based in Belfast, covering NI and ROI.",
    images: [
      {
        // Square logo, so declared at its real size with a "summary" card. A
        // purpose-made 1200×630 image would allow summary_large_image.
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "CourtCreatives - Wedding Content Creator Northern Ireland",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Wedding Content Creator Belfast & Northern Ireland",
    description: "Candid, behind-the-scenes TikToks, Instagram Reels and stills from your wedding day, delivered within 24–48 hours. Based in Belfast, covering NI and ROI.",
    images: ["/logo.png"],
  },
  alternates: {
    // Self-referencing canonical, resolved against metadataBase. Next normalises
    // the root path away, so this renders as exactly `site.url` and can never
    // drift onto a different host from the OG/Twitter URLs above.
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tangerine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
