import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Shallavar Technologies",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shallavar Technologies",
    description: "Simplified Tech, Significant Impact.",
    images: ["/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta property="og:image" content="/logo-full.png" />
        <meta property="twitter:image" content="/logo-full.png" />
      </head>
      <body className={`${manrope.variable} ${inter.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
