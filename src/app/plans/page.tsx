import { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simple, Honest Pricing — Shallavar Technologies Bangalore",
  description:
      "Transparent web development pricing starting from ₹25,000. Custom quotes after a free 30-minute discovery call. React, Next.js, mobile apps.",
  keywords: [
       "web development pricing Bangalore",
       "affordable website cost India",
       "website development packages Bangalore",
       "best web developer Bangalore",
       "startup website design company Bangalore",
       "small business website Bangalore under 50000",
       "web development company Bangalore",
       "Shallavar Technologies pricing",
       ],
  robots: {
    index: true,
    follow: true,
       "max-snippet": -1,
       "max-image-preview": "large",
     },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shallavar Technologies",
    title: "Simple, Honest Pricing — Shallavar Technologies Bangalore",
    description: "Transparent web development pricing starting from ₹25,000. Custom quotes after a free 30-minute discovery call.",
    url: "https://shallavar.com/plans",
    images: [{
       url: "/logo-full.png",
       width: 1200,
       height: 630,
       alt: "Simple, Honest Pricing — Shallavar Technologies",
       type: "image/png",
      }],
     },
  twitter: {
    card: "summary_large_image",
    site: "@shallavar_tech",
    creator: "@shallavar_tech",
    title: "Simple, Honest Pricing — Shallavar Technologies Bangalore",
    description: "Transparent web development pricing starting from ₹25,000. Custom quotes after a free 30-minute discovery call.",
    images: ["/logo-full.png"],
     },
  alternates: {
    canonical: "https://shallavar.com/plans",
     },
};

import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "₹25,000",
    period: "one-time · delivery in 2–3 weeks",
    desc: "Perfect for small businesses that need a clean, professional online presence fast.",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Contact form + WhatsApp button",
      "Basic SEO setup",
      "Google Maps integration",
      "1 month free support",
    ],
    cta: "Get a free quote →",
    popular: false,
  },
  {
    name: "Business Website",
    price: "₹45,000",
    period: "one-time · delivery in 3–4 weeks",
    desc: "For growing businesses that need more pages, SEO, and lead generation tools.",
    features: [
      "Up to 12 pages",
      "CMS (update content yourself)",
      "Advanced SEO setup",
      "WhatsApp + enquiry integration",
      "Google Analytics",
      "3 revision rounds",
      "3 months support",
    ],
    cta: "Get a free quote →",
    popular: true,
  },
  {
    name: "Web Application",
    price: "₹85,000+",
    period: "based on scope · timeline discussed",
    desc: "Custom web apps with backend, database, and admin panel for complex needs.",
    features: [
      "Unlimited pages (CMS)",
      "Custom backend + database",
      "User login / admin panel",
      "API integrations",
      "Payment gateway",
      "Ongoing maintenance available",
    ],
    cta: "Let's discuss your project →",
    popular: false,
  },
];

const steps = [
  { num: "1", title: "Free discovery call (30 min)", desc: "We understand your business, goals, and timeline." },
  { num: "2", title: "Custom proposal", desc: "You get a clear scope, timeline, and fixed price. No surprises." },
  { num: "3", title: "We build, you review", desc: "Regular updates, revisions included, you stay in control." },
  { num: "4", title: "Launch + support", desc: "We don't disappear after delivery. 1–3 months support included." },
];

const faqs = [
  {
    q: "Not sure which plan fits? That's completely fine — most of our clients aren't sure either before we talk. Book a free 30-minute call and we'll tell you exactly what you need (and what you don't).",
    a: "",
  },
  {
    q: "Do you work with businesses outside Bangalore?",
    a: "Yes — we work fully remote across India. All meetings are on Google Meet or WhatsApp call.",
  },
  {
    q: "What if my project doesn't fit a package?",
    a: "We quote every project individually after understanding your needs. The packages above are starting points, not rigid boxes.",
  },
];

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary/5 py-24 md:py-36">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Simple,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Honest Pricing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                Every project is different — but we believe you should have a clear starting point before we talk. These are our base packages. We'll give you an exact quote after a free 30-minute discovery call.
              </p>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-3xl transition-all duration-500 flex flex-col min-h-[620px] ${
                plan.popular
                  ? "bg-gradient-to-br from-primary to-secondary text-on-primary shadow-2xl shadow-primary/30"
                  : "bg-surface-container-lowest border border-outline-variant/15 hover:border-primary/20 hover:shadow-xl"
              }`}>

                <div className="flex flex-col p-8 lg:p-10 flex-1">

                  {plan.popular && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-on-primary font-label text-xs font-bold rounded-full mb-6 uppercase tracking-wider w-fit">
                      Most Popular
                    </span>
                  )}

                  <h3 className={`font-headline text-2xl font-bold mb-2 ${
                    plan.popular ? "text-on-primary" : "text-on-surface"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    plan.popular ? "text-on-primary/80" : "text-on-surface-variant"
                  }`}>
                    {plan.desc}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    <span className={`font-headline text-4xl lg:text-5xl font-extrabold ${
                      plan.popular ? "text-on-primary" : "text-on-surface"
                    }`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className={`text-sm mb-6 ${
                    plan.popular ? "text-on-primary/70" : "text-on-surface-variant"
                  }`}>
                    {plan.period}
                  </p>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-on-primary" : "text-primary"
                        }`} />
                        <span className={
                          plan.popular ? "text-on-primary/90" : "text-on-surface-variant"
                        }>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full py-4 rounded-full font-label font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-on-primary text-primary hover:bg-white/90 shadow-lg"
                        : "bg-gradient-to-r from-primary to-secondary text-on-primary hover:shadow-lg hover:shadow-primary/20"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="bg-surface-container-lowest py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                How we work with you
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 font-headline text-xl font-bold text-primary mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-container py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/15">
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                    {faq.q}
                  </h3>
                  {faq.a && (
                    <p className="text-on-surface-variant">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-container py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-on-surface">
              Need a Custom Quote?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your requirements and create a tailored solution.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-4 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}