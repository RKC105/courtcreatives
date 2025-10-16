import type { Metadata } from "next";
import { Geist, Geist_Mono, Tangerine } from "next/font/google";
import "./globals.css";

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
  title: "Wedding Content Creator Northern Ireland | Belfast Wedding Videographer | CourtCreatives",
  description: "Professional wedding content creator in Northern Ireland & Belfast. Specialising in wedding TikTok, Instagram reels, and cinematic wedding videos. Book your NI wedding content creator today.",
  keywords: [
    "wedding content creator ni",
    "wedding content creator northern ireland",
    "wedding content creator belfast",
    "wedding videographer ni",
    "wedding videographer northern ireland",
    "belfast wedding content",
    "ni wedding content creator",
    "northern ireland wedding videographer",
    "wedding tiktok ni",
    "wedding reels belfast"
  ],
  authors: [{ name: "CourtCreatives" }],
  creator: "CourtCreatives",
  publisher: "CourtCreatives",
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
    locale: "en_GB",
    url: "https://courtcreativesni.com",
    siteName: "CourtCreatives",
    title: "Wedding Content Creator Northern Ireland | Belfast Wedding Videographer",
    description: "Professional wedding content creator in Northern Ireland & Belfast specialising in TikTok, Instagram reels, and cinematic wedding videos.",
    images: [
      {
        url: "https://courtcreativesni.com/logo.png",
        width: 1200,
        height: 630,
        alt: "CourtCreatives - Wedding Content Creator Northern Ireland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Content Creator Northern Ireland | Belfast Wedding Videographer",
    description: "Professional wedding content creator in Northern Ireland & Belfast specialising in TikTok, Instagram reels, and cinematic wedding videos.",
    images: ["https://courtcreativesni.com/logo.png"],
  },
  alternates: {
    canonical: "https://courtcreativesni.com",
  },
  other: {
    "geo.region": "GB-NIR",
    "geo.placename": "Northern Ireland",
    "geo.position": "54.5973;-5.9301", // Belfast coordinates
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tangerine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
