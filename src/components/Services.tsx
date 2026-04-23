import Link from "next/link";
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  LayoutDashboard,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites and web applications built with modern tech stacks for performance, SEO, and scale.",
    href: "/services/web-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design with research-backed interfaces, stunning visuals, and seamless user experiences.",
    href: "/services/ui-ux-design",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    href: "/services/mobile-apps",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Scalable, secure cloud infrastructure with CI/CD pipeline automation on AWS, GCP, and Azure.",
    href: "/services/cloud-deployment",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & CMS",
    description: "Admin panels, content management systems, and real-time dashboards tailored to your workflows.",
    href: "/services/dashboards",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "24/7 monitoring, updates, security patching, and performance optimization for peace of mind.",
    href: "/services/support",
  },
];

// Service-specific color configurations for Tailwind compatibility
const serviceColors: Record<string, { topBar: string; iconBg: string; iconColor: string; hoverText: string; linkColor: string; hoverBg: string }> = {
  "/services/web-development": {
    topBar: "bg-gradient-to-r from-service-web to-blue-600",
    iconBg: "bg-service-web-container",
    iconColor: "text-service-web",
    hoverText: "group-hover:text-service-web",
    linkColor: "text-service-web",
    hoverBg: "bg-service-web-container/10",
  },
  "/services/ui-ux-design": {
    topBar: "bg-gradient-to-r from-service-uiux to-purple-600",
    iconBg: "bg-service-uiux-container",
    iconColor: "text-service-uiux",
    hoverText: "group-hover:text-service-uiux",
    linkColor: "text-service-uiux",
    hoverBg: "bg-service-uiux-container/10",
  },
  "/services/mobile-apps": {
    topBar: "bg-gradient-to-r from-service-mobile to-orange-600",
    iconBg: "bg-service-mobile-container",
    iconColor: "text-service-mobile",
    hoverText: "group-hover:text-service-mobile",
    linkColor: "text-service-mobile",
    hoverBg: "bg-service-mobile-container/10",
  },
  "/services/cloud-deployment": {
    topBar: "bg-gradient-to-r from-service-cloud to-indigo-600",
    iconBg: "bg-service-cloud-container",
    iconColor: "text-service-cloud",
    hoverText: "group-hover:text-service-cloud",
    linkColor: "text-service-cloud",
    hoverBg: "bg-service-cloud-container/10",
  },
  "/services/dashboards": {
    topBar: "bg-gradient-to-r from-service-dashboard to-emerald-600",
    iconBg: "bg-service-dashboard-container",
    iconColor: "text-service-dashboard",
    hoverText: "group-hover:text-service-dashboard",
    linkColor: "text-service-dashboard",
    hoverBg: "bg-service-dashboard-container/10",
  },
  "/services/support": {
    topBar: "bg-gradient-to-r from-service-support to-teal-600",
    iconBg: "bg-service-support-container",
    iconColor: "text-service-support",
    hoverText: "group-hover:text-service-support",
    linkColor: "text-service-support",
    hoverBg: "bg-service-support-container/10",
  },
};

export default function ServiceCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">What We Offer</span>
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
          Our Premium Services
        </h2>
        <p className="text-on-surface-variant font-body text-xl">
          Comprehensive digital solutions engineered for modern businesses that demand excellence.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          const colors = serviceColors[service.href] || {
            topBar: "bg-gradient-to-r from-primary to-blue-600",
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
            hoverText: "group-hover:text-primary",
            linkColor: "text-primary",
            hoverBg: "bg-primary/10",
          };
          return (
              <Link
                key={i}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl bg-white border-[#E8DFEE] hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-500 ease-out-expo"
              >
              {/* Colored top bar per service */}
              <div className={`h-1.5 ${colors.topBar}`} />
              
              <div className="p-8 space-y-5">
                {/* Icon */}
                <div className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className={`w-7 h-7 ${colors.iconColor}`} />
                </div>

                {/* Title & Description */}
                <h4 className={`font-headline font-bold text-xl text-on-surface ${colors.hoverText} transition-colors duration-300`}>
                  {service.title}
                </h4>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <div className={`flex items-center ${colors.linkColor} font-semibold group-hover:gap-3 gap-2 transition-all duration-300`}>
                  Explore Service
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover background effect */}
              <div className={`absolute inset-0 ${colors.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-on-surface-variant mb-4">Don't see what you're looking for?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Tell us about your project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export function ServiceDetailSection() {
  const details = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Every project starts with understanding your unique requirements. We architect solutions that scale.",
    },
    {
      icon: Sparkles,
      title: "Modern Tech Stack",
      description: "React, Next.js, Node.js, Python - we use the best tools for your specific project needs.",
    },
    {
      icon: CheckCircle2,
      title: "Rigorous Testing",
      description: "Comprehensive QA ensures your product works flawlessly across all devices and browsers.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {details.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-surface-container-lowest hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-headline font-bold text-xl mb-3 text-on-surface">{item.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}