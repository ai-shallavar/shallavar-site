import { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Plans & Pricing Bangalore — Starter ₹12,500, Professional ₹75,000, Enterprise Custom",
  description:
      "Affordable web development plans in Bangalore. Starter ₹12,500, Professional ₹75,000, Enterprise custom pricing. 50% off on Starter plan. React, Next.js, mobile apps. Call +91 86600 39954.",
  keywords: [
       "web development plans Bangalore",
       "website pricing Bangalore",
       "affordable web development Bangalore",
       "cheap website design Bengaluru",
       "best web developer Bangalore",
       "startup website design company Bangalore",
       "small business website Bangalore under 50000",
       "web development company Bangalore",
       "mobile app development cost India 2025",
       "website development for restaurants Bangalore",
       "ecommerce website for small business Bangalore",
       "website maintenance plans Bangalore",
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
    title: "Web Development Plans & Pricing Bangalore — Starter ₹12,500",
    description: "Affordable web development plans in Bangalore. Starter ₹12,500, Professional ₹75,000, Enterprise custom. 50% off on Starter plan.",
    url: "https://shallavar.com/plans",
    images: [{
       url: "/logo-full.png",
       width: 1200,
       height: 630,
       alt: "Web Development Plans & Pricing Bangalore — Shallavar Technologies",
       type: "image/png",
      }],
     },
  twitter: {
    card: "summary_large_image",
    site: "@shallavar_tech",
    creator: "@shallavar_tech",
    title: "Web Development Plans & Pricing Bangalore — Starter ₹12,500",
    description: "Affordable web development plans in Bangalore. Starter ₹12,500, Professional ₹75,000, Enterprise custom. 50% off on Starter plan.",
    images: ["/logo-full.png"],
     },
  alternates: {
    canonical: "https://shallavar.com/plans",
     },
};

import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Flame,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹12,500",
    originalPrice: "₹25,000",
    discount: 50,
    period: "per project",
    desc: "Perfect for small businesses and startups — now at an exclusive launch price.",
    features: [
      "5-Page Responsive Website",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Mobile-First Design",
      "1 Month Free Support",
      "Performance Optimization",
    ],
    cta: "Grab This Offer",
    popular: false,
    basic: true,
    urgency: {
      badge: "50% OFF",
      countdownText: "⏰ Hurry! Only a few days left",
      subtext: "We're offering this at half the price for a limited time. Don't miss out.",
      highlightFeatures: ["Limited to first 10 customers", "Regular price ₹25,000"],
    },
  },
  {
    name: "Professional",
    price: "₹75,000",
    period: "per project",
    desc: "Ideal for growing businesses that need advanced features and custom functionality.",
    features: [
      "10-Page Custom Website",
      "Advanced SEO & Analytics",
      "CMS Integration",
      "E-commerce (up to 50 products)",
      "Custom Dashboard/Admin Panel",
      "API Integrations",
      "3 Months Priority Support",
      "A/B Testing Setup",
    ],
    cta: "Start Your Project",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "let's talk",
    desc: "For large organizations requiring complex integrations, scalability, and dedicated support.",
    features: [
      "Unlimited Pages",
      "Full-Stack Development",
      "Custom Mobile App (iOS + Android)",
      "Advanced Security & Compliance",
      "Multi-Cloud Deployment",
      "Dedicated Project Manager",
      "12 Months Support & Maintenance",
      "SLA Guarantee (99.9% uptime)",
      "Team Training & Documentation",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const addOns = [
  { name: "Additional Mobile App", price: "+₹1,50,000" },
  { name: "AI/ML Features", price: "+₹1,00,000" },
  { name: "Advanced Security Audit", price: "+₹35,000" },
  { name: "Performance Testing", price: "+₹25,000" },
  { name: "Content Creation (per page)", price: "+₹2,000" },
  { name: "Ongoing Hosting (monthly)", price: "+₹5,000/mo" },
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">Pricing Plans</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Transparent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Pricing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our signature design quality and performance optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-3xl transition-all duration-500 flex flex-col min-h-[580px] ${
                plan.basic
                  ? "bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white shadow-2xl shadow-red-500/25"
                  : plan.popular
                  ? "bg-gradient-to-br from-primary to-secondary text-on-primary shadow-2xl shadow-primary/30"
                  : "bg-surface-container-lowest border border-outline-variant/15 hover:border-primary/20 hover:shadow-xl"
              }`}>

                {/* Inner container with consistent padding */}
                <div className="flex flex-col p-8 lg:p-10 flex-1">

                  {/* Discount Badge for Starter */}
                  {plan.basic && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-label text-xs font-bold rounded-full mb-6 uppercase tracking-wider w-fit">
                      <Flame className="w-3.5 h-3.5" /> {plan.urgency.badge} — Hurry!
                    </span>
                  )}

                  {plan.popular && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-on-primary font-label text-xs font-bold rounded-full mb-6 uppercase tracking-wider w-fit">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular
                    </span>
                  )}

                  <h3 className={`font-headline text-2xl font-bold mb-2 ${
                    plan.basic ? "text-white" : plan.popular ? "text-on-primary" : "text-on-surface"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${
                    plan.basic ? "text-white/80" : plan.popular ? "text-on-primary/80" : "text-on-surface-variant"
                  }`}>
                    {plan.desc}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    {plan.basic && plan.originalPrice && (
                      <span className="font-headline text-lg font-semibold line-through text-white/50">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className={`font-headline text-4xl lg:text-5xl font-extrabold ${
                      plan.basic ? "text-white" : plan.popular ? "text-on-primary" : "text-on-surface"
                    }`}>
                      {plan.price}
                    </span>
                    {plan.basic && (
                      <span className="inline-flex items-center px-2.5 py-1 bg-green-400/30 backdrop-blur-sm text-white font-label text-xs font-bold rounded-full">
                        SAVE {plan.discount}%
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-4 ${
                    plan.basic ? "text-white/70" : plan.popular ? "text-on-primary/70" : "text-on-surface-variant"
                  }`}>
                    {plan.period}
                  </p>

                  {/* Urgency message for basic */}
                  {plan.basic && (
                    <div className="mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <p className="text-xs font-label font-semibold text-white mb-2">{plan.urgency.countdownText}</p>
                      <ul className="space-y-1">
                        {plan.urgency.highlightFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs font-label text-white/90">
                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.basic ? "text-white" : plan.popular ? "text-on-primary" : "text-primary"
                        }`} />
                        <span className={
                          plan.basic ? "text-white/90" : plan.popular ? "text-on-primary/90" : "text-on-surface-variant"
                        }>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full py-4 rounded-full font-label font-semibold text-center transition-all duration-300 ${
                      plan.basic
                        ? "bg-white text-red-600 hover:bg-gray-100 shadow-lg"
                        : plan.popular
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

          {/* Bottom Urgency Banner */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-3 px-8 py-5 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl border border-red-100 shadow-md max-w-lg mx-auto">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-500" />
                <p className="font-label font-semibold text-on-surface">
                  Starter plan at <span className="text-red-600 font-bold">50% off</span> — Only a few days left!
                </p>
                <Flame className="w-5 h-5 text-red-500" />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
              >
                Claim Your Spot <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="bg-surface-container-lowest py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                Optional Add-ons
              </h2>
              <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
                Enhance any plan with these additional services.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {addOns.map((addon) => (
                <div key={addon.name} className="flex items-center justify-between p-5 rounded-xl bg-surface-container-low border border-outline-variant/15 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <span className="font-label font-semibold text-on-surface">{addon.name}</span>
                  <span className="font-headline font-bold text-primary whitespace-ml-1">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="bg-surface-container py-24 relative overflow-hidden">
          <div className="absolute top-10 right-20 text-primary/10 pointer-events-none">
            <Sparkles className="w-40 h-40" />
          </div>
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