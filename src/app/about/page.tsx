import Link from "next/link";
import { Metadata } from "next";
import {
  Code,
  Users,
  Rocket,
  HeartHandshake,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

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

const values = [
   { icon: Code, title: "Craft & Quality", desc: "Every pixel is intentional. We build with precision and care." },
   { icon: Users, title: "Human-First", desc: "Real conversations, real trust. Your success is our success." },
   { icon: Rocket, title: "Ship & Iterate", desc: "Fast MVPs, continuous improvements based on real data." },
   { icon: HeartHandshake, title: "Long-Term Partnerships", desc: "We stick around — supporting, optimizing, and growing with you." },
];

const timeline = [
   { year: "2024", event: "Shallavar was founded with a mission to build beautiful, functional digital experiences." },
   { year: "2024 Q3", event: "First major clients onboarded. Delivered web and mobile projects with measurable impact." },
   { year: "2025", event: "Expanded into UI/UX design, cloud deployment, and dashboard development." },
   { year: "2025 Q4", event: "Launched comprehensive support and maintenance programs for long-term client success." },
   { year: "2026", event: "Growing stronger with a focus on quality, transparency, and lasting partnerships." },
];

const stats = [
   { value: "98%", label: "Client Satisfaction" },
   { value: "<2s", label: "Avg Load Time" },
   { value: "100+", label: "Projects Delivered" },
   { value: "24/7", label: "Support Coverage" },
];

export default function AboutPage() {
  return (
      <div className="min-h-screen bg-background">
        <main>
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-36 pb-24 md:pt-48 md:pb-36">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-[128px]" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-[128px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">About Us</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                   We Build Things{" "}
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {"You"}{'ll'} Love
                   </span>
                </h1>
                 <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                  We{' '}
                  <span className="whitespace-nowrap">re</span>
                  {' '}a small, focused team that cares deeply about craft. No fluff, no overpromising — just clean work, honest communication, and solutions that actually solve problems.
                 </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-surface-container-lowest border-y border-outline/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                    <div className="font-label text-sm font-medium text-on-surface-variant">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="py-24 md:py-36 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">
                <div>
                  <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-on-surface">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
                    <p>
                      We noticed a pattern: too many great products fail because of poor UX, slow performance, or broken trust with the team building them.
                    </p>
                    <p>
                      Shallavar was born from a simple idea — what if the team building your product actually cared? What if design wasn{' '}
                       {' '}an afterthought, but the foundation?
                    </p>
                    <p>
                      We started as a small team of developers and designers who believed that great work comes from genuine partnership, not transactional relationships. Today, we help businesses like yours ship faster, look better, and build systems that scale. Based in Bangalore, we serve clients across India and beyond.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-outline/20" />

                <div>
                  <h3 className="font-headline text-3xl font-bold mb-6 text-on-surface">What Drives Us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Quality over quantity — we'd rather ship one thing perfectly than ten things 'meh'.",
                      "Transparency — no hidden fees, no surprises. Just honest work.",
                      "Craftsmanship — we treat every project like it's our own.",
                      "Long-term thinking — we build for tomorrow, not just today.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-on-surface-variant leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-24 md:py-36 bg-surface-container">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                  Our Values
                </h2>
                <p className="text-on-surface-variant text-xl">
                  The principles that guide every decision we make.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {values.map((v) => (
                  <div key={v.title} className="bg-background rounded-2xl p-8 shadow-sm border-outline/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                      <v.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">{v.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-24 md:py-36 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                  Our Journey
                </h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-20 font-headline text-xl font-bold text-primary flex-shrink-0">{item.year}</div>
                    <div className="flex-1 pb-8 border-l-2 border-primary/20 pl-6">
                      <p className="text-on-surface-variant text-lg leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact / CTA */}
          <section className="bg-gradient-to-br from-surface-container via-on-surface/5 to-primary py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Rocket className="absolute top-10 right-20 w-40 h-40 text-primary" />
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-on-surface">
                Ready to Work Together?
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 max-w-2xl mx-auto">
                Let{' '}
                 {' '}build something amazing. Reach out and let{' '}
                 {' '}discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
                  Let{' '}
                   {' '}Talk <Rocket className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919482137212"
                  className="inline-flex items-center gap-2 bg-white text-on-surface px-8 py-4 rounded-full font-label font-semibold border border-outline/10 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" /> +91 94821 37212
                </a>
              </div>
              <div className="mt-8 flex flex-col items-center gap-3 text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Banashankari, Bangalore 560070, Karnataka, India</span>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href="mailto:hello@shallavar.com" className="hover:text-primary transition-colors">hello@shallavar.com</a>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}