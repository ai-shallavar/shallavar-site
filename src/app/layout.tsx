import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shallavar Technologies — Simplified Tech, Significant Impact",
    template: "%s | Shallavar Technologies",
  },
  description:
    "Shallavar Technologies delivers high-performance websites, intuitive mobile applications, and scalable cloud solutions. Simplified Tech, Significant Impact.",
  keywords: [
    "digital agency",
    "web development",
    "mobile app development",
    "cloud solutions",
    "UI/UX design",
    "SEO optimization",
    "technology consulting",
    "Shallavar Technologies",
    "shallavar.in",
  ],
  authors: [{ name: "Shallavar Technologies" }],
  metadataBase: new URL("https://shallavar.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shallavar Technologies",
    title: "Shallavar Technologies — Simplified Tech, Significant Impact",
    description:
      "High-performance websites, intuitive mobile applications, and scalable cloud solutions for brands that refuse to blend in.",
    url: "https://shallavar.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shallavar Technologies",
    description: "Simplified Tech, Significant Impact.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
