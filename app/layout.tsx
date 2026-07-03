import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

/*
  next/font/google downloads these fonts at BUILD time and self-hosts them
  from your own domain — no request to fonts.googleapis.com at runtime, no
  layout shift while fonts load, no <link rel="preconnect"> tags to manage
  by hand like the original index.html had. This is one of Next.js's
  actual "free wins" over a plain static site.

  `variable: "--font-fraunces"` tells Next to expose the loaded font as a
  CSS custom property with that name, which we then reference from
  globals.css's @theme block.
*/
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/*
  This `metadata` export is App Router magic: Next.js reads it and generates
  the <title> and <meta> tags in <head> for you. This replaces the manual
  <title> and <meta name="description"> tags from the old index.html <head>.
*/
export const metadata: Metadata = {
  title: "Devriks Sol — RetainIQ | Know who's about to leave, before they do",
  description:
    "Send us a year of transactions. We run predictive retention models and hand back a report showing exactly which customers are slipping away — and what they're worth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
        <WaFloat />
      </body>
    </html>
  );
}
