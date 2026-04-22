"use client";

import Link from "next/link";
import { Code2, Globe, Zap, Shield, BarChart3, Smartphone, Layers, ArrowRight } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const features = [
  { icon: Globe, title: "Custom Web Applications", desc: "Tailored web apps built from the ground up to match your exact business requirements and workflows." },
  { icon: Zap, title: "Performance Optimized", desc: "Lightning-fast load times with optimized code splitting, lazy loading, and CDN integration." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect experiences across all devices — desktop, tablet, and mobile screens." },
  { icon: Shield, title: "Security First", desc: "Enterprise-grade security with HTTPS, CSRF protection, input sanitization, and data encryption." },
  { icon: BarChart3, title: "SEO-Ready Architecture", desc: "Built-in SEO best practices including semantic HTML, meta tags, sitemaps, and Core Web Vitals optimization." },
  { icon: Layers, title: "CMS Integration", desc: "Headless CMS and content management solutions that empower your team to manage content effortlessly." },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "MongoDB", "Tailwind CSS", "GraphQL", "Redis", "Docker"
];

const pricing = [
  {
    name: "Landing Page",
    price: "₹25,000",
    desc: "Single-page responsive website",
    features: ["Responsive Design", "Contact Form", "Basic SEO", "1 Revision Round"],
  },
  {
    name: "Business Website",
    price: "₹45,000",
    desc: "Multi-page professional website",
    features: ["Up to 12 Pages", "CMS Setup", "Advanced SEO", "WhatsApp Integration", "3 Revision Rounds"],
    popular: true,
  },
  {
    name: "Web Application",
    price: "₹85,000+",
    desc: "Custom web app with backend",
    features: ["Unlimited Pages (CMS)", "E-commerce Ready", "API Integrations", "Admin Dashboard", "Unlimited Revisions"],
  },
];

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      theme="web"
      badgeLabel="Web Development"
      icon={Code2}
      heroTitle="Custom"
      heroHighlight="Web Solutions"
      heroSubtitle="From stunning landing pages to complex web applications, we build digital experiences that drive growth and delight users. Our modern tech stack ensures performance, security, and scalability for businesses of all sizes."
      ctaText="Start Your Project"
      featuresTitle="What We Deliver"
      featuresSubtitle="Comprehensive web development services tailored to your business needs."
      features={features}
      techTitle="Our Tech Stack"
      techSubtitle="We use modern, battle-tested technologies to build reliable solutions."
      techStack={techStack}
      pricingTitle="Transparent Pricing"
      pricingSubtitle="Choose the plan that fits your project scope. No hidden fees."
      pricing={pricing}
      ctaTitle="Ready to Build Something Amazing?"
      ctaSubtitle="Let's discuss your project requirements and create a solution that exceeds expectations."
    />
  );
}