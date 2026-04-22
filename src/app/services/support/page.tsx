"use client";

import { Headphones, Clock, Wrench, ShieldCheck, MessageCircle, Activity } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const features = [
  { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock system monitoring with proactive issue detection and instant alerts." },
  { icon: Wrench, title: "Bug Fixes & Patches", desc: "Rapid response to bugs and security patches keeping your applications secure." },
  { icon: ShieldCheck, title: "Performance Optimization", desc: "Continuous performance tuning and database optimization for peak efficiency." },
  { icon: MessageCircle, title: "Dedicated Support", desc: "Direct access to your development team via Slack, email, or phone." },
  { icon: Clock, title: "Feature Updates", desc: "Ongoing feature enhancements based on user feedback and analytics." },
  { icon: Activity, title: "Incident Response", desc: "Structured incident management with root cause analysis and prevention plans." },
];

const slaStats = [
  { number: "< 1hr", label: "Critical Response" },
  { number: "< 4hrs", label: "High Priority" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "< 24hrs", label: "Bug Fixes" },
];

const techStack = [
  "GitHub", "Jira", "Slack", "Datadog", "Sentry",
  "PagerDuty", "Notion", "Linear", "Vercel", "Railway"
];

const pricing = [
  {
    name: "Basic Care",
    price: "₹10,000/mo",
    desc: "Essential maintenance and monitoring",
    features: ["Monthly Updates", "Basic Monitoring", "Email Support", "Backup Management"],
  },
  {
    name: "Priority Care",
    price: "₹25,000/mo",
    desc: "Comprehensive support with fast response times",
    features: ["Weekly Updates", "24/7 Monitoring", "Priority Support", "Performance Reports", "Security Scanning"],
    popular: true,
  },
  {
    name: "Enterprise Care",
    price: "₹50,000/mo",
    desc: "Full-service support with dedicated team",
    features: ["Dedicated Developer", "Instant Response", "Feature Development", "Architecture Reviews", "SLA Guarantee"],
  },
];

export default function SupportPage() {
  return (
    <ServicePage
      theme="support"
      badgeLabel="Support & Maintenance"
      icon={Headphones}
      heroTitle="Always-On"
      heroHighlight="Support"
      heroSubtitle="Your applications deserve expert care even after launch. Our support plans ensure your digital products stay fast, secure, and up-to-date — 24/7."
      ctaText="Get Support"
      featuresTitle="Support Services"
      featuresSubtitle="Comprehensive maintenance and support to keep your applications running smoothly."
      features={features}
      slaStats={slaStats}
      techTitle="Support Tools"
      techSubtitle="Industry-standard tools for efficient support delivery."
      techStack={techStack}
      pricingTitle="Support Plans"
      pricingSubtitle="Choose the support level that fits your needs."
      pricing={pricing}
      ctaTitle="Need Reliable Support?"
      ctaSubtitle="Our team is ready to keep your applications running at peak performance."
    />
  );
}