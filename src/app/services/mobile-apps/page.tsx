import { Metadata } from "next";
import { Smartphone } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import { metadata as pageMetadata } from "./metadata";

export const metadata: Metadata = pageMetadata;

const features = [
     { icon: Smartphone, title: "Native iOS & Android", desc: "High-performance native applications built with Swift and Kotlin for optimal user experience." },
     { icon: Smartphone, title: "Apple Ecosystem", desc: "Apps optimized for iPhone, iPad, and Mac with App Store submission support." },
     { icon: Smartphone, title: "Google Ecosystem", desc: "Android apps across phones, tablets, and Wear OS with Play Store deployment." },
     { icon: Smartphone, title: "Cross-Platform", desc: "React Native and Flutter solutions for faster time-to-market across platforms." },
     { icon: Smartphone, title: "Security First", desc: "End-to-end encryption, biometric auth, and secure data storage in all mobile apps." },
     { icon: Smartphone, title: "Performance Monitoring", desc: "Real-time crash reporting, analytics, and performance optimization tools." },
];

const techStack = [
     "React Native", "Flutter", "Swift", "Kotlin", "Firebase",
     "Node.js", "GraphQL", "REST APIs", "Redux", "Tailwind CSS"
];

const pricing = [
     {
        name: "Simple App",
        price: "₹60,000",
        desc: "Single-platform mobile app with essential features and clean UI",
        features: ["Single Platform (iOS or Android)", "User Authentication", "Push Notifications", "Clean, Responsive UI/UX", "API Integration", "Basic Admin Panel"],
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