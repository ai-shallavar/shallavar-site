import Link from "next/link";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    icon: "language",
    title: "Website Development",
    description: "Bespoke web platforms engineered for speed, scalability, and seamless user experiences across all devices.",
    color: "text-primary",
    bgColor: "bg-primary-fixed",
    href: "/services#web",
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that connect your brand directly to your audience's fingertips.",
    color: "text-secondary",
    bgColor: "bg-secondary-fixed",
    href: "/services#mobile",
  },
  {
    icon: "cloud",
    title: "Cloud Hosting & Deployment",
    description: "Secure, high-availability cloud infrastructure management ensuring your applications remain robust and responsive.",
    color: "text-tertiary",
    bgColor: "bg-tertiary-fixed",
    href: "/services#cloud",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description: "Intuitive, aesthetically striking interfaces rooted in deep user research and elegant interaction models.",
    color: "text-primary",
    bgColor: "bg-primary-fixed",
    href: "/services#design",
  },
  {
    icon: "build",
    title: "Maintenance & Support",
    description: "Continuous monitoring, security updates, and dedicated technical support to keep your digital assets flawless.",
    color: "text-secondary",
    bgColor: "bg-secondary-fixed",
    href: "/services#support",
  },
  {
    icon: "rocket_launch",
    title: "SEO-Ready Launch",
    description: "Strategic deployment optimized for search engines from day one, ensuring maximum visibility and organic growth.",
    color: "text-tertiary",
    bgColor: "bg-tertiary-fixed",
    href: "/services#seo",
  },
];

function ServiceCard({ service, delay }: { service: ServiceCard; delay: number }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-500 ease-out-expo hover:-translate-y-2 relative shadow-[0_24px_48px_-12px_rgba(0,62,199,0.04)] border border-outline-variant/10 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-48 w-full relative overflow-hidden">
        <div className={`absolute inset-0 ${service.bgColor} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent" />
        <div className="absolute bottom-4 left-6">
          <div className={`w-12 h-12 rounded-full ${service.bgColor} ${service.color} flex items-center justify-center shadow-sm`}>
            <span className="material-symbols-outlined text-xl">{service.icon}</span>
          </div>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="font-body text-on-surface-variant leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>
        <span className="inline-flex items-center space-x-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
          <span>Explore Service</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} delay={i * 100} />
      ))}
    </div>
  );
}
