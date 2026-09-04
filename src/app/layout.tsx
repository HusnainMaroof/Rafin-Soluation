import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

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
  title: "Rafin Solutions ",
  description:
    "Rafin Solutions is a leading provider of compliance and fintech services, dedicated to helping businesses navigate the complex regulatory landscape with confidence and ease.",
      icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tronica.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
