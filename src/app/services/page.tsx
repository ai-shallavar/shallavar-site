"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/Services";
import ProcessFlow from "@/components/ProcessFlow";

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: "web",
      icon: "language",
      title: "Website Development",
      description: "Bespoke web platforms engineered for speed, scalability, and seamless user experiences across all devices. We build everything from landing pages to complex web applications using modern frameworks and best practices.",
      features: ["Custom Design & Development", "Headless CMS Integration", "Performance Optimization", "Security Hardening", "Scalable Architecture"],
    },
    {
      id: "mobile",
      icon: "smartphone",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that connect your brand directly to your audience's fingertips. From consumer apps to enterprise mobility solutions.",
      features: ["iOS & Android Development", "React Native & Flutter", "App Store Optimization", "Offline Capabilities", "Push Notifications"],
    },
    {
      id: "cloud",
      icon: "cloud",
      title: "Cloud Hosting & Deployment",
      description: "Secure, high-availability cloud infrastructure management ensuring your applications remain robust and responsive. We architect for scale from day one.",
      features: ["AWS / GCP / Azure", "CI/CD Pipelines", "Auto-scaling Infrastructure", "Monitoring & Alerting", " Disaster Recovery"],
    },
    {
      id: "design",
      icon: "design_services",
      title: "UI/UX Design",
      description: "Intuitive, aesthetically striking interfaces rooted in deep user research and elegant interaction models. Every pixel is intentional.",
      features: ["User Research & Personas", "Wireframing & Prototyping", "Design Systems", "Accessibility (WCAG)", "Usability Testing"],
    },
    {
      id: "support",
      icon: "build",
      title: "Maintenance & Support",
      description: "Continuous monitoring, security updates, and dedicated technical support to keep your digital assets flawless.",
      features: ["24/7 Monitoring", "Security Patching", "Performance Reviews", "Content Updates", "Dedicated Support Channel"],
    },
    {
      id: "seo",
      icon: "rocket_launch",
      title: "SEO-Ready Launch",
      description: "Strategic deployment optimized for search engines from day one, ensuring maximum visibility and organic growth.",
      features: ["Technical SEO", "On-Page Optimization", "Schema Markup", "Core Web Vitals", "Analytics Integration"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-32">
        {/* Hero */}
        <section className="space-y-6 max-w-3xl">
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
            Architecting Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">
              Excellence.
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Our core disciplines are designed to elevate your brand from concept to deployment. We do not just build software; we curate high-performance digital ecosystems tailored for modern enterprises.
          </p>
        </section>

        {/* Service Cards */}
        <ServiceCards />

        {/* Detailed Services */}
        <section className="space-y-16">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface">
            In Detail
          </h2>
          <div className="space-y-24">
            {serviceDetails.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="font-headline text-3xl font-bold text-on-surface">{service.title}</h3>
                  </div>
                  <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">
                          check_circle
                        </span>
                        <span className="font-body text-on-surface">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <div className="bg-surface-container-lowest rounded-2xl p-12 shadow-sm border border-outline-variant/10 flex items-center justify-center min-h-[300px]">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-container to-primary rounded-3xl flex items-center justify-center shadow-lg">
                        <span className="material-symbols-outlined text-white text-5xl">{service.icon}</span>
                      </div>
                      <p className="font-label text-on-surface-variant text-sm">
                        Professional {service.title.toLowerCase()} solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProcessFlow />
      </main>
      <Footer />
    </div>
  );
}
