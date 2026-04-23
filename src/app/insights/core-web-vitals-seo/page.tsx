import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Core Web Vitals: The Invisible Architecture of SEO Success | Shallavar Blog Bangalore",
  description:
        "Google's Core Web Vitals have changed web performance. Learn how LCP, FID, CLS impact your rankings. Best SEO and web development company in Bangalore for performance optimization.",
  keywords: [
        "core web vitals SEO",
        "web performance Bangalore",
        "SEO optimization Bangalore",
        "website speed optimization India",
        "web development company Bangalore",
        "best web developer Bangalore",
        "website loading speed Bangalore",
        "Google ranking factors India",
        "technical SEO Bangalore",
        "mobile page speed India",
        "IT company Bangalore",
       ],
  robots: {
    index: true,
    follow: true,
         "max-snippet": -1,
         "max-image-preview": "large",
        },
  openGraph: {
    type: "article",
    locale: "en_IN",
    siteName: "Shallavar Technologies",
    title: "Core Web Vitals: The Invisible Architecture of SEO Success",
    description: "Learn how LCP, FID, CLS impact your Google rankings and what to do about it.",
    url: "https://shallavar.com/insights/core-web-vitals-seo",
    images: [{
       url: "/logo-full.png",
       width: 1200,
       height: 630,
       alt: "Core Web Vitals SEO — Shallavar Blog",
       type: "image/png",
        }],
        },
  twitter: {
    card: "summary_large_image",
    site: "@shallavar_tech",
    creator: "@shallavar_tech",
    title: "Core Web Vitals: The Invisible Architecture of SEO Success",
    description: "Learn how LCP, FID, CLS impact your Google rankings and what to do about it.",
    images: ["/logo-full.png"],
       },
  alternates: {
    canonical: "https://shallavar.com/insights/core-web-vitals-seo",
       },
};

export default function CoreWebVitalsSEO() {
  return (
       <div className="min-h-screen bg-background">
         <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
           <div className="mb-12">
             <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-label text-sm font-semibold rounded-full mb-6">SEO & Performance</span>
             <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight mb-6">
              Core Web Vitals: The Invisible Architecture of SEO Success
             </h1>
             <div className="flex items-center gap-4 text-sm text-on-surface-variant">
               <span>March 22, 2026</span>
               <span className="w-1 h-1 bg-outline-variant rounded-full" />
               <span>5 min read</span>
               <span className="w-1 h-1 bg-outline-variant rounded-full" />
               <span>By Shallavar Technologies Team</span>
             </div>
           </div>

           <div className="prose prose-lg text-on-surface-variant leading-relaxed space-y-6">
             <p className="text-on-surface text-lg">
              Google's Core Web Vitals have fundamentally changed how we think about web performance. It's not just about speed — it's about the quality of the user's visual and interactive experience. For web development companies in Bangalore, optimizing for Core Web Vitals is no longer optional. It's the difference between ranking on page 1 and page 10.
             </p>

             <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-4">What Are Core Web Vitals?</h2>
             <p>
              Core Web Vitals are a set of performance metrics Google uses to rank websites. They measure three critical aspects:
             </p>
             <ul className="space-y-3">
               <li><strong className="text-on-surface">LCP (Largest Contentful Paint):</strong> How long does the main content take to load? Target: under 2.5 seconds.</li>
               <li><strong className="text-on-surface">INP (Interaction to Next Paint):</strong> How responsive is the page when clicked? Target: under 200ms.</li>
               <li><strong className="text-on-surface">CLS (Cumulative Layout Shift):</strong> Does content shift around unexpectedly? Target: score under 0.1.</li>
             </ul>

             <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-4">Why They Matter for Bangalore Businesses</h2>
             <p>
              In Bangalore's competitive digital landscape — from Banashankari's small businesses to Whitefield's startups — every second of delay costs you customers. Research shows:
             </p>
             <ul className="space-y-3">
               <li><strong className="text-on-surface">53% of mobile users</strong> leave sites that take over 3 seconds to load.</li>
               <li><strong className="text-on-surface">Each 1-second delay</strong> in page load can result in a 7% reduction in conversions.</li>
               <li><strong className="text-on-surface">Core Web Vitals account for</strong> up to 20% of Google's ranking algorithm.</li>
               <li><strong className="text-on-surface">CLS problems cause</strong> 38% more user frustration than any other issue.</li>
             </ul>

             <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-4">How Shallavar Optimizes for Core Web Vitals</h2>
             <ul className="space-y-3">
               <li><strong className="text-on-surface">Image optimization:</strong> Next.js Image component, WebP format, lazy loading.</li>
               <li><strong className="text-on-surface">Code splitting:</strong> Only load what's needed, when it's needed.</li>
               <li><strong className="text-on-surface">Font loading strategies:</strong> font-display: swap, preconnect for third-party fonts.</li>
               <li><strong className="text-on-surface">Caching and CDN:</strong> Edge caching, service workers for offline support.</li>
               <li><strong className="text-on-surface">Performance monitoring:</strong> Lighthouse CI, Web Vitals tracking in production.</li>
             </ul>

             <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-4">Get a Fast, SEO-Optimized Website</h2>
             <p>
              At Shallavar Technologies, every website we build in Bangalore is optimized for Core Web Vitals from day one. From landing pages to e-commerce sites, from dashboards to mobile apps — performance is baked in, not bolted on.
             </p>
             <p>
               <strong className="text-on-surface">Ready for a website that ranks well and loads fast?</strong>{" "}
               <Link href="/services/web-development" className="text-primary font-semibold hover:underline">Explore our web development services</Link> or{" "}
               <Link href="/contact" className="text-primary font-semibold hover:underline">contact us for a free audit</Link>. Based in Banashankari, Bangalore.
             </p>
           </div>

           <div className="mt-16 pt-8 border-t border-outline/10">
             <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Related Services</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <Link href="/services/web-development" className="p-4 bg-surface-container-lowest rounded-xl border border-outline/10 hover:border-primary/20 transition-all">
                 <h4 className="font-semibold text-primary mb-1">Web Development</h4>
                 <p className="text-sm text-on-surface-variant">React, Next.js, custom web apps</p>
               </Link>
               <Link href="/services/mobile-apps" className="p-4 bg-surface-container-lowest rounded-xl border border-outline/10 hover:border-primary/20 transition-all">
                 <h4 className="font-semibold text-primary mb-1">Mobile Apps</h4>
                 <p className="text-sm text-on-surface-variant">iOS, Android, Flutter, React Native</p>
               </Link>
               <Link href="/services/cloud-deployment" className="p-4 bg-surface-container-lowest rounded-xl border border-outline/10 hover:border-primary/20 transition-all">
                 <h4 className="font-semibold text-primary mb-1">Cloud Deployment</h4>
                 <p className="text-sm text-on-surface-variant">AWS, Vercel, DevOps, CI/CD</p>
               </Link>
               <Link href="/services/support" className="p-4 bg-surface-container-lowest rounded-xl border border-outline/10 hover:border-primary/20 transition-all">
                 <h4 className="font-semibold text-primary mb-1">Support & Maintenance</h4>
                 <p className="text-sm text-on-surface-variant">24/7 support, performance monitoring</p>
               </Link>
             </div>
           </div>

           <div className="mt-12 text-center">
             <Link href="/insights" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
               ← Back to all insights
             </Link>
           </div>
         </main>
       </div>
     );
}