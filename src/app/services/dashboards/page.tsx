"use client";

import { LayoutDashboard, Database, BarChart3, Settings2, Users, RefreshCw } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const features = [
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Custom admin panels with role-based access control and real-time data visualization." },
  { icon: BarChart3, title: "Analytics Dashboards", desc: "Interactive charts, KPI tracking, and custom reporting for data-driven decisions." },
  { icon: Database, title: "CMS Solutions", desc: "Content management systems that empower your team to manage content without technical skills." },
  { icon: Settings2, title: "Custom Workflows", desc: "Tailored business process automation and workflow management tools." },
  { icon: Users, title: "User Management", desc: "Comprehensive user administration with permissions, roles, and audit logging." },
  { icon: RefreshCw, title: "Data Integration", desc: "Seamless integration with third-party APIs and data sources for unified views." },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Supabase", "PostgreSQL",
  "Chart.js", "Recharts", "Tailwind CSS", "REST APIs", "GraphQL"
];

const pricing = [
  {
    name: "Simple Dashboard",
    price: "₹50,000",
    desc: "Basic admin panel with essential features",
    features: ["User Authentication", "Basic CRUD Operations", "Simple Analytics", "Responsive Design"],
  },
  {
    name: "Advanced Dashboard",
    price: "₹1,00,000",
    desc: "Feature-rich dashboard with analytics",
    features: ["Role-Based Access", "Custom Charts", "Real-time Updates", "Export Features", "API Integration"],
    popular: true,
  },
  {
    name: "Enterprise CMS",
    price: "₹2,50,000+",
    desc: "Full-scale content management system",
    features: ["Multi-tenant Architecture", "Custom Workflows", "Media Library", "SEO Tools", "Team Collaboration"],
  },
];

export default function DashboardsPage() {
  return (
    <ServicePage
      theme="dashboard"
      badgeLabel="Dashboards & CMS"
      icon={LayoutDashboard}
      heroTitle="Powerful"
      heroHighlight="Management Tools"
      heroSubtitle="Admin panels, content management systems, and real-time dashboards tailored to your workflows. Take control of your data with intuitive interfaces."
      ctaText="Start Your Project"
      featuresTitle="Management Interfaces"
      featuresSubtitle="Custom management interfaces that streamline your operations."
      features={features}
      techTitle="Dashboard Tech Stack"
      techSubtitle="Modern tools for powerful dashboard development."
      techStack={techStack}
      pricingTitle="Dashboard Pricing"
      pricingSubtitle="Transparent pricing based on complexity and features."
      pricing={pricing}
      ctaTitle="Need a Custom Dashboard?"
      ctaSubtitle="Let's build a management tool that perfectly fits your workflow."
    />
  );
}