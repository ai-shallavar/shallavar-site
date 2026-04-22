"use client";

import { Palette, PenTool, Users, Eye, LayoutTemplate, MessageSquare } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const features = [
  { icon: Users, title: "User Research", desc: "Deep understanding of your target audience through interviews, surveys, and competitive analysis." },
  { icon: PenTool, title: "Visual Design", desc: "Stunning interfaces with consistent design systems, typography, color theory, and brand alignment." },
  { icon: Eye, title: "Usability Testing", desc: "Real user testing sessions to identify friction points and optimize conversion flows." },
  { icon: LayoutTemplate, title: "Design Systems", desc: "Scalable component libraries and style guides that ensure consistency across all touchpoints." },
  { icon: MessageSquare, title: "UX Strategy", desc: "Data-driven design decisions aligned with business goals and user needs." },
  { icon: Palette, title: "Brand Identity", desc: "Cohesive visual identity that resonates with your audience and strengthens brand recognition." },
];

const techStack = [
  "Figma", "Adobe XD", "Sketch", "Principle", "Framer",
  "InVision", "Miro", "Webflow", "Tailwind CSS", "Storybook"
];

const pricing = [
  {
    name: "Design Audit",
    price: "₹35,000",
    desc: "Expert review of existing UI/UX",
    features: ["UI Component Audit", "Usability Review", "Competitor Analysis", "Recommendations Report"],
  },
  {
    name: "UI/UX Design",
    price: "₹60,000",
    desc: "Complete design for one screen flow",
    features: ["User Research", "Wireframes", "High-Fidelity Mockups", "Interactive Prototype", "Design Specs"],
    popular: true,
  },
  {
    name: "Full Design System",
    price: "₹1,50,000+",
    desc: "End-to-end design system & components",
    features: ["Research & Strategy", "Component Library", "Design Tokens", "Documentation", "Developer Handoff"],
  },
];

export default function UIUXDesignPage() {
  return (
    <ServicePage
      theme="design"
      badgeLabel="UI/UX Design"
      icon={Palette}
      heroTitle="Design That"
      heroHighlight="Inspires Action"
      heroSubtitle="We create intuitive, beautiful interfaces rooted in deep user research. Every pixel is intentional — designed to convert visitors into loyal customers."
      ctaText="Start Design Project"
      featuresTitle="Design Process"
      featuresSubtitle="A systematic approach to creating exceptional user experiences."
      features={features}
      techTitle="Design Stack"
      techSubtitle="Industry-leading tools for pixel-perfect design delivery."
      techStack={techStack}
      pricingTitle="Design Pricing"
      pricingSubtitle="Transparent pricing for world-class design services."
      pricing={pricing}
      ctaTitle="Let's Design Something Beautiful"
      ctaSubtitle="Share your vision and we'll craft an experience that users will remember."
    />
  );
}