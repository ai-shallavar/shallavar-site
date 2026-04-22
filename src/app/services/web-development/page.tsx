import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Code2,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-24 md:py-36">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-secondary/10 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">Web Development</span>
              </div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Custom{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Web Solutions
                </span>{" "}
                That Scale
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                From stunning landing pages to complex web applications, we build digital experiences that drive growth and delight users. Our modern tech stack ensures performance, security, and scalability for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-3.5 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/plans" className="px-8 py-3.5 rounded-full font-label font-semibold text-on-surface bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-highest transition-all duration-300">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Our Expertise
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              What We Deliver
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group relative p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <f.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-headline font-bold text-xl mb-3 text-on-surface group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-surface-container-lowest py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Technologies
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                Our Tech Stack
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                We use modern, battle-tested technologies to build reliable solutions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="px-6 py-3 bg-surface-container-lowest rounded-full text-sm font-semibold text-on-surface border border-outline-variant/20 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Pricing Plans
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              Transparent Pricing
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Choose the plan that fits your project scope. No hidden fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary to-secondary text-on-primary shadow-xl shadow-primary/20 md:-translate-y-4"
                  : "bg-surface-container-lowest border border-outline-variant/15 hover:border-primary/30 hover:shadow-lg"
              }`}>
                {plan.popular && (
                  <span className="inline-block px-3 py-1 bg-white/20 text-on-primary font-label text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-headline text-2xl font-bold mb-2 ${plan.popular ? "text-on-primary" : "text-on-surface"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-on-primary/80" : "text-on-surface-variant"}`}>
                  {plan.desc}
                </p>
                <div className={`font-headline text-4xl font-extrabold mb-8 ${plan.popular ? "text-on-primary" : "text-on-surface"}`}>
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-on-primary" : "text-primary"}`} />
                      <span className={plan.popular ? "text-on-primary/90" : "text-on-surface-variant"}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full font-label font-semibold text-sm text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-surface-container-low"
                      : "bg-gradient-to-r from-primary to-secondary text-on-primary hover:shadow-lg"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary via-secondary to-blue-700">
          <div className="absolute inset-0 opacity-10">
            <Cpu className="absolute top-10 right-20 w-40 h-40 text-white" />
            <Layers className="absolute bottom-10 left-20 w-40 h-40 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-on-primary">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-on-primary/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-on-primary text-primary px-8 py-4 rounded-full font-label font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/plans" className="inline-flex items-center gap-2 bg-on-primary/10 backdrop-blur-sm border border-on-primary/30 text-on-primary px-8 py-4 rounded-full font-label font-semibold hover:bg-on-primary/20 transition-all duration-300">
                View All Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}