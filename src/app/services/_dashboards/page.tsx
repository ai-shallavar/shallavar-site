import { Metadata } from "next";
import { LayoutGrid } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import { metadata as pageMetadata } from "./metadata";

export const metadata: Metadata = pageMetadata;

const features = [
     { icon: LayoutGrid, title: "Admin Panels", desc: "Powerful admin interfaces with role-based access control, user management, and content control." },
     { icon: LayoutGrid, title: "Data Visualization", desc: "Interactive charts, graphs, and real-time data displays for actionable business insights." },
     { icon: LayoutGrid, title: "CMS Solutions", desc: "Custom content management systems that empower your team to manage content effortlessly." },
     { icon: LayoutGrid, title: "Analytics Dashboards", desc: "Track KPIs, user behavior, and business metrics with customizable reporting tools." },
     { icon: LayoutGrid, title: "ERP Integration", desc: "Seamless integration with ERP systems for unified business process management." },
     { icon: LayoutGrid, title: "Responsive Design", desc: "Mobile-friendly dashboards that work beautifully on any device or screen size." },
];

const techStack = [
      "React", "TypeScript", "Tailwind CSS", "Chart.js", "D3.js",
      "Supabase", "PostgreSQL", "Node.js", "Redis", "Docker"
];

const pricing = [
      {
        name: "Basic Dashboard",
        price: "₹60,000",
        desc: "Simple admin dashboard with core features",
        features: ["User Authentication", "Basic Charts", "Data Tables", "Responsive UI"],
      },
      {
        name: "Advanced Dashboard",
        price: "₹1,20,000",
        desc: "Feature-rich dashboard with analytics",
        features: ["Real-time Data", "Advanced Analytics", "Export Tools", "Role Management", "API Integration"],
        popular: true,
      },
      {
        name: "Enterprise Solution",
        price: "₹3,00,000+",
        desc: "Custom enterprise dashboard with full integration",
        features: ["Multi-tenant Architecture", "Custom Integrations", "Advanced Security", "Performance Optimization", "Training & Support"],
      },
];

export default function DashboardsPage() {
     return (
          <ServicePage
            theme="dashboard"
            badgeLabel="Dashboards"
            icon={LayoutGrid}
            heroTitle="Data-Driven"
            heroHighlight="Dashboards"
            heroSubtitle="Beautiful, intuitive dashboards that transform complex data into actionable insights. Built for performance, designed for clarity."
            ctaText="Start Your Project"
            featuresTitle="Dashboard Features"
            featuresSubtitle="Powerful tools that transform how you interact with data."
            features={features}
            techTitle="Dashboard Tech Stack"
            techSubtitle="Modern tools for powerful data visualization."
            techStack={techStack}
            pricingTitle="Dashboard Pricing"
            pricingSubtitle="Transparent pricing based on complexity and features."
            pricing={pricing}
            ctaTitle="Let's Build Your Dashboard"
            ctaSubtitle="Transform your data into actionable insights with custom dashboards."
          />
      );
}