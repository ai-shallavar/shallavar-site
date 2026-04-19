"use client";

import Link from "next/link";

interface PricingCard {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaType: "gradient" | "outline" | "secondary";
  badge?: string;
}

const webPricing: PricingCard[] = [
  {
    name: "Starter",
    description: "Essential digital presence for new businesses.",
    price: "₹25,000",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "1 Revision Round",
    ],
    cta: "Choose Starter",
    ctaType: "outline",
  },
  {
    name: "Business",
    description: "Comprehensive solution for growing companies.",
    price: "₹45,000",
    features: [
      "Up to 12 Pages",
      "Advanced Responsive Design",
      "Comprehensive SEO",
      "WhatsApp Integration",
      "CMS Setup",
      "3 Revision Rounds",
    ],
    highlighted: true,
    cta: "Choose Business",
    ctaType: "gradient",
    badge: "Most Popular",
  },
  {
    name: "Growth",
    description: "Advanced features for scaling operations.",
    price: "₹85,000",
    features: [
      "Unlimited Pages (CMS)",
      "E-commerce Ready",
      "Premium SEO Optimization",
      "Third-party API Integrations",
      "Priority Deployment",
      "Unlimited Revisions*",
    ],
    cta: "Choose Growth",
    ctaType: "outline",
  },
];

const customServices: PricingCard[] = [
  {
    name: "Custom Portal",
    description: "Bespoke web applications, SaaS platforms, and complex enterprise solutions.",
    price: "Custom",
    features: [
      "Custom Architecture",
      "Dedicated Team",
      "SLA Support",
      "Detailed Scoping",
    ],
    cta: "Talk to Engineering",
    ctaType: "secondary",
  },
  {
    name: "Mobile Apps",
    description: "Native and cross-platform mobile experiences for engagement and performance.",
    price: "₹1,25,000+",
    features: [
      "iOS & Android",
      "Native & Cross-platform",
      "Consumer & Enterprise",
      "Scope-Based Pricing",
    ],
    cta: "Contact for App Quote",
    ctaType: "outline",
  },
];

function PricingCard({ card, delay }: { card: PricingCard; delay: number }) {
  const gradientBtn =
    card.ctaType === "gradient"
      ? "bg-gradient-to-br from-primary-container to-primary text-on-primary shadow-[0_4px_24px_rgba(0,62,199,0.2)]"
      : card.ctaType === "secondary"
        ? "bg-surface-container-lowest border border-outline-variant/20 text-on-surface"
        : "border border-outline-variant/30 text-primary hover:bg-surface-container-low";

  return (
    <div
      className={`bg-surface-container-lowest rounded-2xl p-8 relative overflow-hidden transition-all duration-300 ease-out-expo ${
        card.highlighted
          ? "shadow-[0_8px_48px_rgba(0,62,199,0.08)] border border-primary/10 z-10 md:-translate-y-4"
          : "border border-outline-variant/15 hover:-translate-y-2 opacity-0 animate-fade-in-up"
      } flex flex-col h-full`}
      style={
        !card.highlighted ? { animationDelay: `${delay}ms`, animationFillMode: "forwards" } : undefined
      }
    >
      {card.highlighted && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-primary" />
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
        </>
      )}

      {card.badge && (
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
          {card.badge}
        </span>
      )}

      <div className="mb-8 relative z-10">
        <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{card.name}</h3>
        <p className="font-body text-sm text-on-surface-variant mb-6 h-10">{card.description}</p>
        <div className="flex items-baseline gap-2">
          <span className="font-headline text-4xl font-extrabold text-on-surface">{card.price}</span>
        </div>
      </div>

      <ul className="space-y-4 font-body text-sm text-on-surface-variant mb-8 flex-grow">
        {card.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
              {card.highlighted ? "check_circle" : "check_circle"}
            </span>
            <span className={card.highlighted ? "font-medium text-on-surface" : ""}>{feat}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-full font-label font-semibold text-sm transition-all duration-300 ease-out-expo mt-auto ${gradientBtn}`}
      >
        {card.cta}
      </button>
    </div>
  );
}

export default function PricingGrid() {
  return (
    <div className="mb-32">
      <h2 className="font-headline text-3xl font-bold text-on-surface mb-2 tracking-tight">Website Packages</h2>
      <p className="font-body text-on-surface-variant text-base max-w-2xl mb-12">
        Transparent pricing for digital excellence. Choose the perfect foundation for your digital presence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webPricing.map((card, i) => (
          <PricingCard key={card.name} card={card} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}
