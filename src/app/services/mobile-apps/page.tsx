  import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";
import {
  Smartphone,
  Apple,
  Tablet,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
  Users,
  RefreshCw,
} from "lucide-react";

const features = [
  { icon: Apple, title: "iOS Development", desc: "Native iOS apps optimized for iPhone and iPad with App Store submission support." },
  { icon: Tablet, title: "Android Development", desc: "Powerful Android applications distributed via Google Play or direct APK deployment." },
  { icon: Smartphone, title: "Cross-Platform", desc: "Single codebase for iOS and Android using React Native and Flutter for faster delivery." },
  { icon: Zap, title: "Native Performance", desc: "Smooth 60fps animations, offline capabilities, and hardware acceleration built in." },
  { icon: Shield, title: "Secure Architecture", desc: "End-to-end encryption, secure authentication, and safe payment processing integration." },
  { icon: RefreshCw, title: "Continuous Updates", desc: "Regular feature updates, bug fixes, and compatibility patches for new OS versions." },
];

const techStack = [
  "React Native", "Flutter", "Swift", "Kotlin", "Firebase",
  "Node.js", "GraphQL", "AWS Amplify", "Push Notifications", "App Store Optimization"
];

const pricing = [
  {
    name: "Simple App",
    price: "₹1,25,000",
    desc: "Basic mobile app with core features",
    features: ["Single Platform", "Up to 5 Screens", "API Integration", "App Store Submission"],
  },
  {
    name: "Standard App",
    price: "₹2,50,000",
    desc: "Full-featured cross-platform app",
    features: ["iOS & Android", "Up to 15 Screens", "Push Notifications", "User Authentication", "Admin Panel"],
    popular: true,
  },
  {
    name: "Enterprise App",
    price: "₹5,00,000+",
    desc: "Complex app with advanced features",
    features: ["Custom Architecture", "Unlimited Screens", "Real-time Features", "Payment Integration", "AI/ML Features"],
  },
];

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-blue-600/10 py-24 md:py-36">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">Mobile App Development</span>
              </div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Mobile Apps That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Users Love
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                From consumer apps to enterprise mobility solutions, we build native and cross-platform mobile applications that engage users and drive business growth. Our expert team delivers seamless experiences on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3.5 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  Start Your App <ArrowRight className="w-4 h-4" />
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
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Our Expertise
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              What We Deliver
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              End-to-end mobile app development from concept to App Store launch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl shadow-sm transition-all duration-500">
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

        {/* Platforms */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Platforms
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                Build for Every Platform
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                Reach your audience wherever they are — iOS, Android, or both.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { Icon: Apple, title: "iOS / iPadOS", desc: "Optimized for Apple ecosystem with App Store submission." },
                { Icon: Tablet, title: "Android", desc: "Wide reach across all Android devices and form factors." },
                { Icon: Globe, title: "Cross-Platform", desc: "Single codebase delivering native experiences on both platforms." },
              ].map((p, i) => (
                <div key={i} className="text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                  <p.Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-headline font-bold text-lg mb-2 text-on-surface">{p.title}</h3>
                  <p className="text-on-surface-variant text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              Technologies
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              Our Tech Stack
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Modern frameworks and tools for reliable mobile experiences.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-6 py-3 bg-white rounded-full text-sm font-semibold text-on-surface border border-gray-200 hover:border-primary hover:text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Pricing Plans
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                Mobile App Pricing
              </h2>
              <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
                Transparent pricing based on complexity and platform requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl shadow-primary/20 md:-translate-y-4"
                    : "bg-white border border-gray-200 hover:border-blue-100 hover:shadow-lg"
                }`}>
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 bg-white/20 text-white font-label text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-headline text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-blue-100" : "text-on-surface-variant"}`}>
                    {plan.desc}
                  </p>
                  <div className={`font-headline text-4xl font-extrabold mb-8 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-primary"}`} />
                        <span className={plan.popular ? "text-blue-50" : "text-on-surface-variant"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-full font-label font-semibold text-sm text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-primary hover:bg-blue-50"
                        : "bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-lg"
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
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary via-blue-600 to-blue-700">
          <div className="absolute inset-0 opacity-10">
            <Smartphone className="absolute top-10 right-20 w-40 h-40 text-white" />
            <Users className="absolute bottom-10 left-20 w-40 h-40 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Have an App Idea? Let's Build It.
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Share your vision with us and we'll help you create a mobile experience your users will love.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-label font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}