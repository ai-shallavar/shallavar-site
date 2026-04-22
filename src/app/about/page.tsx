import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Code,
  Users,
  Rocket,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

// Consistent color tokens: primary = #2563EB, secondary = #7C3AED
// All pages use Tailwind theme tokens: primary, on-surface, on-surface-variant
// surface-container = #F3F1F8 (light gray-purple), surface-container-low = #FAFAFF

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
      <Navbar />
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
                  You'll Love
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                We're a small, focused team that cares deeply about craft. No fluff, no overpromising — just clean work, honest communication, and solutions that actually solve problems.
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
                    Shallavar was born from a simple idea — what if the team building your product actually cared? What if design wasn't an afterthought, but the foundation?
                  </p>
                  <p>
                    We started as a small team of developers and designers who believed that great work comes from genuine partnership, not transactional relationships. Today, we help businesses like yours ship faster, look better, and build systems that scale.
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

        {/* CTA */}
        <section className="bg-gradient-to-br from-surface-container via-on-surface/5 to-primary py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Rocket className="absolute top-10 right-20 w-40 h-40 text-primary" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-on-surface">
              Ready to Work Together?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-2xl mx-auto">
              Let's build something amazing. Reach out and let's discuss your project.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              Let's Talk <Rocket className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}