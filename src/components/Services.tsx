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
    gradient: "from-primary to-blue-600",
    bgLight: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design with research-backed interfaces, stunning visuals, and seamless user experiences.",
    href: "/services/ui-ux-design",
    gradient: "from-primary to-blue-500",
    bgLight: "bg-primary/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    href: "/services/mobile-apps",
    gradient: "from-primary to-blue-600",
    bgLight: "bg-primary/10",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Scalable, secure cloud infrastructure with CI/CD pipeline automation on AWS, GCP, and Azure.",
    href: "/services/cloud-deployment",
    gradient: "from-primary to-blue-500",
    bgLight: "bg-primary/10",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & CMS",
    description: "Admin panels, content management systems, and real-time dashboards tailored to your workflows.",
    href: "/services/dashboards",
    gradient: "from-primary to-blue-600",
    bgLight: "bg-primary/10",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "24/7 monitoring, updates, security patching, and performance optimization for peace of mind.",
    href: "/services/support",
    gradient: "from-primary to-blue-500",
    bgLight: "bg-primary/10",
  },
];

export default function ServiceCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
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
          return (
            <Link
              key={i}
              href={service.href}
              className="group relative overflow-hidden rounded-3xl bg-surface border-outline/20 hover:border-primary/20 hover:shadow-xl transition-all duration-500 ease-out-expo"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />
              
              <div className="p-8 space-y-5">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.bgLight} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title & Description */}
                <h4 className="font-headline font-bold text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                  Explore Service
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover background effect */}
              <div className={`absolute inset-0 ${service.bgLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
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