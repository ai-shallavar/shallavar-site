import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { type ComponentType, type SVGProps } from "react";

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
    gradientTo: "to-[#0891B2]",
    bgLight: "bg-cyan-50",
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
};

export type ServicePageProps = {
  theme: "web" | "mobile" | "design" | "cloud" | "dashboard" | "support";
  badgeLabel: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  ctaText: string;
  plansLink?: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; desc: string }[];
  slaStats?: { number: string; label: string }[];
  techTitle: string;
  techSubtitle: string;
  techStack: string[];
  pricingTitle: string;
  pricingSubtitle: string;
  pricing: { name: string; price: string; desc: string; features: string[]; popular?: boolean }[];
  ctaTitle: string;
  ctaSubtitle: string;
};

export default function ServicePage({
  theme,
  badgeLabel,
  icon: HeroIcon,
  heroTitle,
  heroHighlight,
  heroSubtitle,
  ctaText,
  plansLink,
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
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-on-surface-variant">
            <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
            <span className="mx-2">/</span>
             <Link href="/services" className="hover:text-on-surface transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-on-surface font-medium">{badgeLabel}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${t.bgLight}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${t.container} ${t.border} rounded-full mb-8`}>
              <HeroIcon className={`w-5 h-5 ${t.primary}`} />
              <span className={`${t.primary} font-label text-sm font-bold uppercase tracking-wide`}>{badgeLabel}</span>
            </div>
            <h1 className={`font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface mb-6`}>
              {heroTitle}{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo}`}>
                {heroHighlight}
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-on-surface-variant mb-10 leading-relaxed max-w-3xl mx-auto`}>
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`inline-flex items-center justify-center px-8 py-4 ${t.container} ${t.primary} font-label text-base font-bold rounded-lg shadow-lg ${t.hoverBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              {plansLink && (
                <a
                  href={plansLink}
                  className={`inline-flex items-center justify-center px-8 py-4 bg-surface-container-low font-label text-base font-bold rounded-lg border ${t.border} text-on-surface hover:bg-surface-container-highest transition-all duration-300`}
                >
                  View Plans
                </a>
              )}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricing.map((plan, i) => (
                  <div
                 key={i}
                 className={`group relative pricing-card ${plan.popular ? `pricing-card-popular pricing-card-popular-${theme}` : `pricing-card-${theme}`} transition-all duration-400`}
                  >
                    {/* Decorative gradient glow on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.gradientFrom}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
      {/* Card content wrapper with flexbox layout for proper button alignment */}
                      <div className="relative overflow-visible flex flex-col flex-1">
                        {plan.popular && (
                          <div className={`popular-badge popular-badge-${theme}`}>
                           ✨ Most Popular
                          </div>
                       )}
                       
                        <div className="mb-6">
                          <h3 className={`font-headline text-2xl font-bold text-on-surface mb-2`}>{plan.name}</h3>
                          <p className="text-on-surface-variant text-sm">{plan.desc}</p>
                        </div>
                     
                        <div className="pricing-price-display">
                          <span className="pricing-price-amount">{plan.price}</span>
                        </div>
                     
                        <ul className="pricing-features-list flex-grow mb-8">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle2 className={`w-5 h-5 ${t.primary} mt-0.5 flex-shrink-0`} />
                              <span className="text-on-surface-variant text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto">
                          <a
                      href="/contact"
                      className={`pricing-btn ${plan.popular ? `pricing-btn-${theme}` : 'pricing-btn-outline'} transition-all duration-300 block text-center`}
                        >
                         {plan.popular ? 'Get Started' : 'Choose Plan'}
                         <ArrowRight className={`ml-2 w-4 h-4 ${plan.popular ? 'text-white' : 'text-on-surface-variant'} transition-transform duration-300`} />
                        </a>
                      </div>
                      </div>
                  </div>
                ))}
              </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className={`py-20 ${t.bgLight}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
            {ctaTitle}
          </h2>
          <p className="text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
            {ctaSubtitle}
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center justify-center px-10 py-5 ${t.container} ${t.primary} font-label text-lg font-bold rounded-lg shadow-lg ${t.hoverBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}