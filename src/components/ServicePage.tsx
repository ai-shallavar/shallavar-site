"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Color theme definitions for each service
export const SERVICE_THEMES = {
  web: {
    primary: "text-service-web",
    container: "bg-service-web-container",
    border: "border-service-web/30",
    hoverBorder: "hover:border-service-web/50",
    shadow: "shadow-web",
    gradientFrom: "from-service-web",
    gradientTo: "to-[#2563EB]",
    bgLight: "bg-blue-50",
    textOnPrimary: "text-on-service-web",
  },
  mobile: {
    primary: "text-service-mobile",
    container: "bg-service-mobile-container",
    border: "border-service-mobile/30",
    hoverBorder: "hover:border-service-mobile/50",
    shadow: "shadow-mobile",
    gradientFrom: "from-service-mobile",
    gradientTo: "to-[#059669]",
    bgLight: "bg-emerald-50",
    textOnPrimary: "text-on-service-mobile",
  },
  design: {
    primary: "text-service-design",
    container: "bg-service-design-container",
    border: "border-service-design/30",
    hoverBorder: "hover:border-service-design/50",
    shadow: "shadow-design",
    gradientFrom: "from-service-design",
    gradientTo: "to-[#7C3AED]",
    bgLight: "bg-purple-50",
    textOnPrimary: "text-on-service-design",
  },
  cloud: {
    primary: "text-service-cloud",
    container: "bg-service-cloud-container",
    border: "border-service-cloud/30",
    hoverBorder: "hover:border-service-cloud/50",
    shadow: "shadow-cloud",
    gradientFrom: "from-service-cloud",
    gradientTo: "to-[#4F46E5]",
    bgLight: "bg-indigo-50",
    textOnPrimary: "text-on-service-cloud",
  },
  dashboard: {
    primary: "text-service-dashboard",
    container: "bg-service-dashboard-container",
    border: "border-service-dashboard/30",
    hoverBorder: "hover:border-service-dashboard/50",
    shadow: "shadow-dashboard",
    gradientFrom: "from-service-dashboard",
    gradientTo: "to-[#E11D48]",
    bgLight: "bg-rose-50",
    textOnPrimary: "text-on-service-dashboard",
  },
  support: {
    primary: "text-service-support",
    container: "bg-service-support-container",
    border: "border-service-support/30",
    hoverBorder: "hover:border-service-support/50",
    shadow: "shadow-support",
    gradientFrom: "from-service-support",
    gradientTo: "to-[#D97706]",
    bgLight: "bg-amber-50",
    textOnPrimary: "text-on-service-support",
  },
} as const;

export type ServiceThemeKey = keyof typeof SERVICE_THEMES;

// Feature item type
export interface ServiceFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

// Pricing plan type
export interface ServicePricingPlan {
  name: string;
  price: string;
  desc: string;
  features: string[];
  popular?: boolean;
}

// Tech stack items type
export type TechStackItem = string;

// SLA stat type
export interface SLAStat {
  number: string;
  label: string;
}

export interface ServicePageProps {
  theme: ServiceThemeKey;
  badgeLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  ctaText: string;
  plansLink?: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: ServiceFeature[];
  slaStats?: SLAStat[];
  techTitle: string;
  techSubtitle: string;
  techStack: TechStackItem[];
  pricingTitle: string;
  pricingSubtitle: string;
  pricing: ServicePricingPlan[];
  ctaTitle: string;
  ctaSubtitle: string;
}

/**
 * Shared Service Page Component
 * Provides a consistent structure for all service pages with theme-aware styling.
 */
export default function ServicePage({
  theme,
  badgeLabel,
  icon: Icon,
  heroTitle,
  heroHighlight,
  heroSubtitle,
  ctaText,
  plansLink = "/plans",
  featuresTitle,
  featuresSubtitle,
  features,
  slaStats,
  techTitle,
  techSubtitle,
  techStack,
  pricingTitle,
  pricingSubtitle,
  pricing,
  ctaTitle,
  ctaSubtitle,
}: ServicePageProps) {
  const t = SERVICE_THEMES[theme];

  return (
    <>
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${t.gradientFrom}-container via-background py-24 md:py-36`}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className={`absolute top-20 left-10 w-96 h-96 ${t.container} bg-opacity-50 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse`}
          />
          <div
            className={`absolute bottom-20 right-10 w-[28rem] h-[28rem] rounded-full mix-blend-multiply filter blur-[128px] animate-pulse`}
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${t.container} backdrop-blur-sm`}>
              <Icon className={`w-4 h-4 ${t.primary}`} />
              <span className={`font-label text-sm font-semibold ${t.primary} uppercase tracking-widest`}>
                {badgeLabel}
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className={`w-16 h-16 ${t.container} rounded-2xl flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${t.primary}`} />
              </div>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
              {heroTitle}{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo}`}>
                {heroHighlight}
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className={`bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} text-white px-8 py-3.5 rounded-full font-label font-semibold hover:shadow-lg ${t.shadow} hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2`}
              >
                {ctaText} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={plansLink}
                className="px-8 py-3.5 rounded-full font-label font-semibold text-on-surface bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-highest transition-all duration-300"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 ${t.container} ${t.primary} font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4`}>
            What We Offer
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
            {featuresTitle}
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
            {featuresSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className={`group relative p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 ${t.hoverBorder} transition-all duration-500`}>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.gradientFrom}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 ${t.container} rounded-xl flex items-center justify-center mb-5 group-hover:bg-service-web group-hover:scale-105 transition-all duration-300`}>
                  <f.icon className={`w-7 h-7 ${t.primary} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className={`font-headline font-bold text-xl mb-3 text-on-surface group-hover:${t.primary} transition-colors duration-300`}>
                  {f.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SLA Stats Section (optional) */}
      {slaStats && slaStats.length > 0 && (
        <section className="bg-surface-container-lowest py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className={`inline-block px-4 py-1.5 ${t.container} ${t.primary} font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4`}>
                SLA Commitments
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
                Our SLA Commitments
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                We stand behind our service with industry-leading response times.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {slaStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`font-headline text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} mb-2`}>
                    {stat.number}
                  </div>
                  <p className="text-on-surface-variant font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-1.5 ${t.container} ${t.primary} font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4`}>
            Technologies
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
            {techTitle}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            {techSubtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`px-6 py-3 bg-surface-container-lowest rounded-full text-sm font-semibold text-on-surface border border-outline-variant/20 ${t.hoverBorder} hover:${t.primary} hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 ${t.container} ${t.primary} font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4`}>
              Pricing Plans
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              {pricingTitle}
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              {pricingSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? `bg-gradient-to-br ${t.gradientFrom} to-[${plan.popular ? "var(--color-service-web-gradient-end, #2563EB)" : "#2563EB"}] text-white shadow-xl ${t.shadow} md:-translate-y-4`
                    : "bg-surface-container-lowest border border-outline-variant/15 hover:border-service-web/30 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-3 py-1 bg-white/20 text-on-service-web font-label text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-headline text-2xl font-bold mb-2 ${plan.popular ? "text-on-service-web" : "text-on-surface"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-on-service-web/80" : "text-on-surface-variant"}`}>
                  {plan.desc}
                </p>
                <div className={`font-headline text-4xl font-extrabold mb-8 ${plan.popular ? "text-on-service-web" : "text-on-surface"}`}>
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-on-service-web" : t.primary}`} />
                      <span className={plan.popular ? "text-on-service-web/90" : "text-on-surface-variant"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3.5 rounded-full font-label font-semibold text-sm text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-[#5B81E2] hover:bg-gray-100 shadow-lg border-2 border-white/50 hover:shadow-xl hover:scale-105"
                      : `bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} text-white border-2 border-transparent hover:shadow-lg hover:scale-105`
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative overflow-hidden py-24 bg-gradient-to-br ${t.gradientFrom} to-[${t.gradientTo.replace("to-", "")}]`}>
        <div className="absolute inset-0 opacity-10">
          <Icon className="absolute top-10 right-20 w-40 h-40 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-12 ${t.textOnPrimary}`}>
            {ctaTitle}
          </h2>
          <p className={`${t.textOnPrimary}/80 text-lg mb-8 max-w-2xl mx-auto`}>
            {ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 bg-on-service-web text-service-web px-8 py-4 rounded-full font-label font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={plansLink}
              className={`inline-flex items-center gap-2 bg-on-service-web/10 backdrop-blur-sm border border-on-service-web/30 ${t.textOnPrimary} px-8 py-4 rounded-full font-label font-semibold hover:bg-on-service-web/20 transition-all duration-300`}
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}