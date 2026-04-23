import { Metadata } from "next";
import { Cloud } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import { metadata as pageMetadata } from "./metadata";

export const metadata: Metadata = pageMetadata;

const features = [
   { icon: Cloud, title: "AWS / GCP / Azure", desc: "Multi-cloud architecture design and deployment on leading cloud platforms." },
   { icon: Cloud, title: "CI/CD Pipelines", desc: "Automated build, test, and deployment pipelines for rapid release cycles." },
   { icon: Cloud, title: "Auto-scaling", desc: "Infrastructure that automatically scales to handle traffic spikes without downtime." },
   { icon: Cloud, title: "Security Hardening", desc: "Encryption at rest and in transit, IAM policies, and compliance certifications." },
   { icon: Cloud, title: "Monitoring & Alerting", desc: "24/7 observability with CloudWatch, Datadog, and custom alerting thresholds." },
   { icon: Cloud, title: "Disaster Recovery", desc: "Automated backups, multi-region replication, and tested recovery procedures." },
];

const techStack = [
   "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes",
   "Terraform", "GitHub Actions", "Jenkins", "CloudFront", "Lambda"
];

const pricing = [
   {
    name: "Setup & Deploy",
    price: "₹40,000",
    desc: "Cloud infrastructure setup and deployment",
    features: ["Environment Setup", "CI/CD Pipeline", "SSL Configuration", "Basic Monitoring"],
   },
   {
    name: "Managed Hosting",
    price: "₹15,000/mo",
    desc: "Ongoing cloud infrastructure management",
    features: ["24/7 Monitoring", "Auto-scaling", "Daily Backups", "Security Patching", "Monthly Reports"],
    popular: true,
   },
   {
    name: "Enterprise Architecture",
    price: "₹2,00,000+",
    desc: "Custom cloud architecture and migration",
    features: ["Architecture Design", "Migration Planning", "Multi-region Setup", "DR Strategy", "Team Training"],
   },
];

export default function CloudDeploymentPage() {
   return (
      <ServicePage
        theme="cloud"
        badgeLabel="Cloud & Deployment"
        icon={Cloud}
        heroTitle="Cloud Infrastructure"
        heroHighlight="That Scales"
        heroSubtitle="Secure, high-availability cloud infrastructure management ensuring your applications remain robust and responsive. We architect for scale from day one."
        ctaText="Get Started"
        featuresTitle="Cloud Solutions"
        featuresSubtitle="Enterprise-grade cloud solutions with reliability and performance at their core."
        features={features}
        techTitle="Cloud Tech Stack"
        techSubtitle="Industry-standard tools for reliable cloud infrastructure."
        techStack={techStack}
        pricingTitle="Cloud Pricing"
        pricingSubtitle="Flexible pricing for setup, managed services, and enterprise architecture."
        pricing={pricing}
        ctaTitle="Ready to Go Cloud-Native?"
        ctaSubtitle="Let's architect a cloud solution that grows with your business."
      />
   );
}