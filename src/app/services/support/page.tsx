import { Metadata } from "next";
import { Headset } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import { metadata as pageMetadata } from "./metadata";

export const metadata: Metadata = pageMetadata;

const features = [
       { icon: Headset, title: "24/7 Help Desk", desc: "Round-the-clock support via phone, email, and live chat for urgent issues." },
       { icon: Headset, title: "Bug Fixing", desc: "Rapid identification and resolution of bugs with minimal business disruption." },
       { icon: Headset, title: "Performance Tuning", desc: "Systematic optimization of code, database queries, and server configurations." },
       { icon: Headset, title: "Security Updates", desc: "Regular security patches, vulnerability scans, and dependency updates." },
       { icon: Headset, title: "Feature Development", desc: "Ongoing feature additions and enhancements based on user feedback." },
       { icon: Headset, title: "Monthly Reports", desc: "Detailed reports on uptime, performance, issues resolved, and recommendations." },
];

const techStack = [
        "AWS", "Docker", "GitHub", "Datadog", "Sentry",
        "Jira", "Slack", "PostgreSQL", "Redis", "Nginx"
];

const pricing = [
         {
        name: "Basic Support",
        price: "₹10,000/mo",
        desc: "Essential maintenance and support",
        features: ["Email Support", "Bug Fixes", "Monthly Report", "Security Updates"],
         },
         {
        name: "Premium Support",
        price: "₹25,000/mo",
        desc: "Priority support with faster response",
        features: ["24/7 Phone Support", "Performance Tuning", "Feature Updates", "Monthly Reports", "Backup Management"],
        popular: true,
         },
         {
        name: "Enterprise Support",
        price: "₹50,000/mo",
        desc: "Comprehensive support with dedicated team",
        features: ["Dedicated Team", "SLA Guarantee", "Feature Development", "Infrastructure Management", "Disaster Recovery"],
         },
];

export default function SupportPage() {
     return (
            <ServicePage
            theme="support"
            badgeLabel="Support"
            icon={Headset}
            heroTitle="Ongoing"
            heroHighlight="Support"
            heroSubtitle="Reliable IT support and maintenance services ensuring your applications run smoothly. We handle the tech so you can focus on your business."
            ctaText="Contact Us"
            featuresTitle="Support Services"
            featuresSubtitle="Comprehensive support to keep your applications running smoothly."
            features={features}
            techTitle="Support Tools"
            techSubtitle="Industry-leading tools for monitoring and issue resolution."
            techStack={techStack}
            pricingTitle="Support Plans"
            pricingSubtitle="Transparent pricing for reliable ongoing support."
            pricing={pricing}
            ctaTitle="Need Support?"
            ctaSubtitle="Get in touch — our team is available 24/7 to help."
            />
        );
}