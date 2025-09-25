import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Peak Futuristic Landing Page — Sleek, Apple-like Intro",
  description: "Peak unveils a sleek, futuristic single-page site with bold visuals, quick CTAs, and concise sections: hero, about, buy steps, and tokenomics.",
  keywords: ["peak", "futuristic landing page", "apple like design", "single page site", "landing page", "tokenomics", "buy peak", "web3", "crypto", "premium design"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Peak Futuristic Landing Page — Sleek, Apple-like Intro",
    description: "Peak unveils a sleek, futuristic single-page site with bold visuals, quick CTAs, and concise sections: hero, about, buy steps, and tokenomics.",
    type: "website",
    url: "/",
    siteName: "Peak",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "Peak Futuristic Landing Page"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Peak Futuristic Landing Page — Sleek, Apple-like Intro",
    description: "Peak unveils a sleek, futuristic single-page site with bold visuals, quick CTAs, and concise sections: hero, about, buy steps, and tokenomics.",
    images: "/images/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}