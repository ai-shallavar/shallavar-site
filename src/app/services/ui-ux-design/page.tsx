import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Palette,
  PenTool,
  Users,
  Eye,
  LayoutTemplate,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Frame,
  MessageSquare,
} from "lucide-react";

const features = [
  { icon: Users, title: "User Research", desc: "Deep understanding of your target audience through interviews, surveys, and competitive analysis." },
  { icon: Frame, title: "Wireframing & Prototyping", desc: "Interactive prototypes that validate concepts before development begins, saving time and budget." },
  { icon: PenTool, title: "Visual Design", desc: "Stunning interfaces with consistent design systems, typography, color theory, and brand alignment." },
  { icon: Eye, title: "Usability Testing", desc: "Real user testing sessions to identify friction points and optimize conversion flows." },
  { icon: LayoutTemplate, title: "Design Systems", desc: "Scalable component libraries and style guides that ensure consistency across all touchpoints." },
  { icon: MessageSquare, title: "UX Strategy", desc: "Data-driven design decisions aligned with business goals and user needs." },
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50 py-24 md:py-36">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm">
                <Palette className="w-4 h-4 text-primary-600" />
                <span className="font-label text-sm font-semibold text-primary-700 uppercase tracking-widest">UI/UX Design</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Design That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                  Inspires Action
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                We create intuitive, beautiful interfaces rooted in deep user research. Every pixel is intentional — designed to convert visitors into loyal customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-3.5 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  Start Design Project <ArrowRight className="w-4 h-4" />
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
              Our Design Process
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              A systematic approach to creating exceptional user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2 text-on-surface">{f.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Stats */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
                Design Impact
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                Measurable results from our design-driven approach.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "95%", label: "User Satisfaction" },
                { number: "40%", label: "Conversion Increase" },
                { number: "60%", label: "Faster Task Completion" },
                { number: "3x", label: "ROI on Design" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-headline text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 mb-2">
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
              Design Tools & Tech
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Industry-leading tools for pixel-perfect design delivery.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-gray-50 rounded-full text-sm font-semibold text-on-surface border border-gray-200 hover:border-primary-300 hover:text-primary-700 transition-colors duration-200 cursor-default">
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
                Design Pricing
              </h2>
              <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
                Transparent pricing for world-class design services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                  <div key={plan.name} className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-br from-primary-600 to-blue-600 text-white shadow-xl shadow-primary-500/20 md:-translate-y-4"
                      : "bg-white border border-gray-200 hover:border-primary-100 hover:shadow-lg"
                  }`}>
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 bg-white/20 text-white font-label text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-headline text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-primary-50" : "text-on-surface-variant"}`}>
                    {plan.desc}
                  </p>
                  <div className={`font-headline text-4xl font-extrabold mb-8 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-primary-600"}`} />
                        <span className={plan.popular ? "text-primary-50" : "text-on-surface-variant"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                      className={`block w-full py-3 rounded-full font-label font-semibold text-sm text-center transition-all duration-300 ${
                        plan.popular
                          ? "bg-white text-primary-700 hover:bg-primary-50"
                          : "bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:shadow-lg"
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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Sparkles className="absolute top-10 right-20 w-40 h-40 text-primary-400" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Let's Design Something Beautiful
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Share your vision and we'll craft an experience that users will remember.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}