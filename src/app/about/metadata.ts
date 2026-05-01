import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shallavar Technologies — Bangalore's Trusted Web & Mobile App Development Company",
  description:
    "Shallavar Technologies is a leading web and mobile app development company in Bangalore. We build custom websites, iOS/Android apps, UI/UX design & dashboards for startups & enterprises. 98% client satisfaction. Call +91 94821 37212.",
  keywords: [
    "about Shallavar Technologies",
    "web development company Bangalore",
    "mobile app development company Bangalore",
    "best web developer Bangalore",
    "software development company Bangalore",
    "IT company Bangalore",
    "startup tech company Bangalore",
    "software company MG Road Bangalore",
    "tech startup South Bangalore",
    "best web development company Bangalore",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shallavar Technologies",
    title: "About Shallavar Technologies — Bangalore's Trusted Web & Mobile App Development Company",
    description: "Shallavar Technologies is a leading web and mobile app development company in Bangalore. 98% client satisfaction. Custom websites, iOS/Android apps, UI/UX design.",
    url: "https://shallavar.com/about",
    images: [{
      url: "/logo-full.png",
      width: 1200,
      height: 630,
      alt: "About Shallavar Technologies — Bangalore's Trusted Web & Mobile App Development Company",
      type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shallavar_tech",
    creator: "@shallavar_tech",
    title: "About Shallavar Technologies — Bangalore's Trusted Web & Mobile App Development Company",
    description: "Shallavar Technologies is a leading web and mobile app development company in Bangalore. 98% client satisfaction. Custom websites, iOS/Android apps, UI/UX design.",
    images: ["/logo-full.png"],
  },
  alternates: {
    canonical: "https://shallavar.com/about",
  },
};