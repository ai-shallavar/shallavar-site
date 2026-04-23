import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceCards from "@/components/Services";
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Shallavar Technologies — Web & Mobile App Development Company in Bangalore",
  description:
     "Top-rated web & mobile app development company in Bangalore. We build custom websites, iOS/Android apps, UI/UX design, dashboards & provide 24/7 tech support. Free consultation. Call +91 86600 39954.",
  keywords: [
     "web development company Bangalore",
     "mobile app development Bengaluru",
     "software development startup Bangalore",
     "UI UX design Bangalore",
     "website design Banashankari",
     "app development JP Nagar",
     "IT company Whitefield",
     "Next.js developer India",
     "React developer Bangalore",
     "affordable web development Bangalore",
     "best web developer Bangalore",
     "startup tech company Bangalore",
     "website development Bangalore",
     "app development company Bangalore",
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
    title: "Shallavar Technologies — Web & Mobile App Development Company in Bangalore",
    description:
       "Top-rated web & mobile app development company in Bangalore. Custom websites, iOS/Android apps, UI/UX design, dashboards & 24/7 support. Free consultation.",
    url: "https://shallavar.com",
    images: [
       {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Shallavar Technologies — Web & Mobile App Development Company in Bangalore",
        type: "image/png",
       },
     ],
   },
  twitter: {
    card: "summary_large_image",
    site: "@shallavar_tech",
    creator: "@shallavar_tech",
    title: "Shallavar Technologies — Web & Mobile App Development Company in Bangalore",
    description: "Top-rated web & mobile app development company in Bangalore. Custom websites, iOS/Android apps, UI/UX design, dashboards & 24/7 support.",
    images: ["/logo-full.png"],
   },
  alternates: {
    canonical: "https://shallavar.com",
   },
};

export default function Home() {
  return (
     <div className="min-h-screen bg-background text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container">
       <main className="pt-20">
         <Hero />
         <TrustStrip />
         <ServiceCards />
         <ProcessFlow />
         <Testimonials />
         <FAQ />
         <CTA />
       </main>
     </div>
   );
}