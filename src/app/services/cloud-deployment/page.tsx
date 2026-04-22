import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Cloud,
  Server,
  Shield,
  Zap,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  CloudLightning,
  Activity,
} from "lucide-react";

const features = [
  { icon: Cloud, title: "AWS / GCP / Azure", desc: "Multi-cloud architecture design and deployment on leading cloud platforms." },
  { icon: Server, title: "CI/CD Pipelines", desc: "Automated build, test, and deployment pipelines for rapid release cycles." },
  { icon: Zap, title: "Auto-scaling", desc: "Infrastructure that automatically scales to handle traffic spikes without downtime." },
  { icon: Shield, title: "Security Hardening", desc: "Encryption at rest and in transit, IAM policies, and compliance certifications." },
  { icon: Activity, title: "Monitoring & Alerting", desc: "24/7 observability with CloudWatch, Datadog, and custom alerting thresholds." },
  { icon: RefreshCw, title: "Disaster Recovery", desc: "Automated backups, multi-region replication, and tested recovery procedures." },
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-24 md:py-36">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 backdrop-blur-sm">
                <Cloud className="w-4 h-4 text-orange-600" />
                <span className="font-label text-sm font-semibold text-orange-700 uppercase tracking-widest">Cloud & Deployment</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Cloud Infrastructure{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  That Scales
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                Secure, high-availability cloud infrastructure management ensuring your applications remain robust and responsive. We architect for scale from day one.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3.5 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/plans" className="px-8 py-3.5 rounded-full font-label font-semibold text-on-surface bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              What We Deliver
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Enterprise-grade cloud solutions with reliability and performance at their core.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2 text-on-surface">{f.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
                Multi-Cloud Expertise
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                We work with all major cloud providers to find the best fit for your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "AWS", desc: "Industry-leading cloud services with the widest feature set." },
                { name: "Google Cloud", desc: "Best-in-class AI/ML capabilities and data analytics." },
                { name: "Azure", desc: "Seamless Microsoft ecosystem integration for enterprises." },
              ].map((p, i) => (
                <div key={i} className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-orange-100 hover:shadow-lg transition-all duration-300">
                  <CloudLightning className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-headline font-bold text-lg mb-2">{p.name}</h3>
                  <p className="text-on-surface-variant text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
              Cloud Tech Stack
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Industry-standard tools for reliable cloud infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-gray-50 rounded-full text-sm font-semibold text-on-surface border border-gray-200 hover:border-orange-300 hover:text-orange-700 transition-colors duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                Cloud Pricing
              </h2>
              <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
                Flexible pricing for setup, managed services, and enterprise architecture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-orange-600 to-amber-600 text-white shadow-xl shadow-orange-500/20 md:-translate-y-4"
                    : "bg-white border border-gray-200 hover:border-orange-100 hover:shadow-lg"
                }`}>
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 bg-white/20 text-white font-label text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-headline text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-orange-100" : "text-on-surface-variant"}`}>
                    {plan.desc}
                  </p>
                  <div className={`font-headline text-4xl font-extrabold mb-8 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-orange-600"}`} />
                        <span className={plan.popular ? "text-orange-50" : "text-on-surface-variant"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-full font-label font-semibold text-sm text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-orange-700 hover:bg-orange-50"
                        : "bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-lg"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Activity className="absolute bottom-10 right-20 w-40 h-40 text-orange-400" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Ready to Go Cloud-Native?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's architect a cloud solution that grows with your business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}