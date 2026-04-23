"use client";

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
    price: "₹25k",
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
    price: "₹45k",
    features: [
      "Up to 12 Pages",
      "Advanced Responsive",
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
    price: "₹85k",
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
];

function PricingCard({ card }: { card: PricingCard }) {
  const gradientBtn =
    card.ctaType === "gradient"
      ? "bg-gradient-to-br from-primary to-secondary text-on-primary hover:opacity-90 transition-all duration-300 shadow-[0_4px_24px_rgba(0,62,199,0.2)]"
      : card.ctaType === "secondary"
        ? "bg-surface-container-lowest border border-outline-variant/20 text-on-surface hover:bg-surface-container-highest"
        : "border border-outline-variant/30 text-primary hover:bg-surface-container-low";

  return (
    <div
      className={`rounded-lg p-8 relative overflow-hidden transition-transform duration-300 flex flex-col h-full ${
        card.highlighted
           ? "bg-white shadow-[0_8px_48px_rgba(91,129,226,0.10)] border-[2px] border-[#5B81E2]/40 z-10"
           : "bg-white border border-[#E8DFEE] shadow-sm hover:-translate-y-2 hover:shadow-lg"
      }`}
    >
      {card.highlighted && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
        </>
      )}

      {card.badge && (
          <span className="inline-block px-3 py-1 bg-[#5B81E2]/10 text-primary font-label text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
          {card.badge}
        </span>
      )}

      <div className={`mb-8 relative z-10 ${card.highlighted ? "" : "space-y-2"}`}>
        <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{card.name}</h3>
        <p className="font-body text-sm text-on-surface-variant mb-6 h-10">{card.description}</p>
        <div className="flex items-baseline gap-2">
          <span className="font-headline text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{card.price}</span>
        </div>
      </div>

      <ul className="space-y-4 font-body text-sm text-on-surface-variant mb-8 flex-grow">
        {card.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{webPricing.map((card) => (
            <PricingCard key={card.name} card={card} />
          ))}
      </div>
    </div>
  );
}
