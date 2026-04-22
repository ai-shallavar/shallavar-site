import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Headphones,
  Clock,
  Wrench,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock system monitoring with proactive issue detection and instant alerts." },
  { icon: Wrench, title: "Bug Fixes & Patches", desc: "Rapid response to bugs and security patches keeping your applications secure." },
  { icon: ShieldCheck, title: "Performance Optimization", desc: "Continuous performance tuning and database optimization for peak efficiency." },
  { icon: MessageCircle, title: "Dedicated Support", desc: "Direct access to your development team via Slack, email, or phone." },
  { icon: TrendingUp, title: "Feature Updates", desc: "Ongoing feature enhancements based on user feedback and analytics." },
  { icon: AlertTriangle, title: "Incident Response", desc: "Structured incident management with root cause analysis and prevention plans." },
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-24 md:py-36">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/80 backdrop-blur-sm">
                <Headphones className="w-4 h-4 text-teal-600" />
                <span className="font-label text-sm font-semibold text-teal-700 uppercase tracking-widest">Support & Maintenance</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Always-On{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Support
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                Your applications deserve expert care even after launch. Our support plans ensure your digital products stay fast, secure, and up-to-date — 24/7.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3.5 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  Get Support <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/plans" className="px-8 py-3.5 rounded-full font-label font-semibold text-on-surface bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              Our Support Services
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Comprehensive maintenance and support to keep your applications running smoothly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-teal-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2 text-on-surface">{f.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLA Stats */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
                Our SLA Commitments
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                We stand behind our support with industry-leading response times.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "< 1hr", label: "Critical Response" },
                { number: "< 4hrs", label: "High Priority" },
                { number: "99.9%", label: "Uptime SLA" },
                { number: "< 24hrs", label: "Bug Fixes" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-headline text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-on-surface-variant font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
              Support Tools
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Industry-standard tools for efficient support delivery.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-gray-50 rounded-full text-sm font-semibold text-on-surface border border-gray-200 hover:border-teal-300 hover:text-teal-700 transition-colors duration-200 cursor-default">
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
                Support Plans
              </h2>
              <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
                Choose the support level that fits your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-teal-600 to-cyan-600 text-white shadow-xl shadow-teal-500/20 md:-translate-y-4"
                    : "bg-white border border-gray-200 hover:border-teal-100 hover:shadow-lg"
                }`}>
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 bg-white/20 text-white font-label text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-headline text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-teal-100" : "text-on-surface-variant"}`}>
                    {plan.desc}
                  </p>
                  <div className={`font-headline text-4xl font-extrabold mb-8 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-teal-600"}`} />
                        <span className={plan.popular ? "text-teal-50" : "text-on-surface-variant"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-full font-label font-semibold text-sm text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-teal-700 hover:bg-teal-50"
                        : "bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:shadow-lg"
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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Headphones className="absolute top-10 left-20 w-40 h-40 text-teal-400" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Need Reliable Support?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to keep your applications running at peak performance.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}