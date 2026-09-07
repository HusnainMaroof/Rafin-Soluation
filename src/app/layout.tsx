import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GoogleAnalytics } from "@/src/components/GoogleAnalytics";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/src/lib/seo";

const tronica = localFont({
  src: [
    {
      path: "./fonts/Tronica-Mono.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-tronica",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Rafin Solutions",
    "compliance consultancy",
    "fintech compliance",
    "AML/CFT",
    "KYC KYB",
    "payment operations",
    "FCA authorisation",
    "financial services consultant",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_GB",
    images: [{ url: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: ["/favicon.ico", "/icon.png"],
    apple: "/apple-icon.png",
  },
  // Paste your tokens after verifying the site in each console:
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.YANDEX_VERIFICATION
      ? { "yandex-verification": process.env.YANDEX_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${tronica.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-yellow-400 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-md focus:font-bold"
        >
          Skip to content
        </a>
        <Navbar />

        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />
        {/* Rendered only when NEXT_PUBLIC_GA_ID is set */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
