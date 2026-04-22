"use client";

import { Smartphone, Apple, Zap, Shield, Activity, ArrowRight } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const features = [
  { icon: Smartphone, title: "Native iOS & Android", desc: "High-performance native applications built with Swift and Kotlin for optimal user experience." },
  { icon: Apple, title: "Apple Ecosystem", desc: "Apps optimized for iPhone, iPad, and Mac with App Store submission support." },
  { icon: Smartphone, title: "Google Ecosystem", desc: "Android apps across phones, tablets, and Wear OS with Play Store deployment." },
  { icon: Zap, title: "Cross-Platform", desc: "React Native and Flutter solutions for faster time-to-market across platforms." },
  { icon: Shield, title: "Security First", desc: "End-to-end encryption, biometric auth, and secure data storage in all mobile apps." },
  { icon: Activity, title: "Performance Monitoring", desc: "Real-time crash reporting, analytics, and performance optimization tools." },
];

const techStack = [
  "React Native", "Flutter", "Swift", "Kotlin", "Firebase",
  "Node.js", "GraphQL", "REST APIs", "Redux", "Tailwind CSS"
];

const pricing = [
  {
    name: "Simple App",
    price: "₹80,000",
    desc: "Basic mobile application with core features",
    features: ["Single Platform", "User Authentication", "Push Notifications", "Basic UI/UX"],
  },
  {
    name: "Complex App",
    price: "₹2,00,000",
    desc: "Feature-rich cross-platform application",
    features: ["iOS + Android", "Real-time Features", "Payment Integration", "Admin Panel", "Analytics"],
    popular: true,
  },
  {
    name: "Enterprise Solution",
    price: "₹5,00,000+",
    desc: "Custom enterprise mobile solutions",
    features: ["Multi-platform", "Backend Development", "API Integration", "Security Audit", "Maintenance"],
  },
];

export default function MobileAppsPage() {
  return (
    <ServicePage
      theme="mobile"
      badgeLabel="Mobile Apps"
      icon={Smartphone}
      heroTitle="Mobile Apps"
      heroHighlight="That Impress"
      heroSubtitle="Native and cross-platform mobile applications for iOS and Android that users love. From concept to app store launch, we deliver excellence."
      ctaText="Start Your Project"
      featuresTitle="Mobile Solutions"
      featuresSubtitle="Beautiful, performant mobile apps for both major platforms."
      features={features}
      techTitle="Mobile Tech Stack"
      techSubtitle="Modern tools for powerful mobile development."
      techStack={techStack}
      pricingTitle="Mobile App Pricing"
      pricingSubtitle="Transparent pricing based on platform and complexity."
      pricing={pricing}
      ctaTitle="Ready to Build Your App?"
      ctaSubtitle="Let's turn your mobile app idea into reality."
    />
  );
}