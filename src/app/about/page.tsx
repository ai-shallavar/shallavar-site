"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  Code,
  Users,
  Rocket,
  HeartHandshake,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Star,
  TrendingUp,
  Award,
  Clock,
  Target,
  Lightbulb,
} from "lucide-react";

const values = [
  { icon: Code, title: "Craft & Quality", desc: "Every pixel is intentional. We build with precision and care, ensuring every detail speaks excellence.", bgClass: "from-primary/10 to-secondary/10" },
  { icon: Users, title: "Human-First", desc: "Real conversations, real trust. Your success is our success — we measure ours by yours.", bgClass: "from-secondary/10 to-primary/10" },
  { icon: Rocket, title: "Ship & Iterate", desc: "Fast MVPs, continuous improvements based on real data. We move fast and break nothing.", bgClass: "from-primary/10 to-blue-400/10" },
  { icon: HeartHandshake, title: "Long-Term Partnerships", desc: "We stick around — supporting, optimizing, and growing with you through every phase.", bgClass: "from-secondary/10 to-blue-400/10" },
];

const timeline = [
  { year: "2024", event: "Shallavar was founded with a mission to build beautiful, functional digital experiences.", icon: Sparkles },
  { year: "2024 Q3", event: "First major clients onboarded. Delivered web and mobile projects with measurable impact.", icon: Zap },
  { year: "2025", event: "Expanded into UI/UX design, cloud deployment, and dashboard development.", icon: Globe },
  { year: "2025 Q4", event: "Launched comprehensive support and maintenance programs for long-term client success.", icon: Award },
  { year: "2026", event: "Growing stronger with a focus on quality, transparency, and lasting partnerships.", icon: TrendingUp },
];

const stats = [
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "<2s", label: "Avg Load Time", icon: Zap },
  { value: "100+", label: "Projects Delivered", icon: Rocket },
  { value: "24/7", label: "Support Coverage", icon: Clock },
];

const principles = [
  { text: "Quality over quantity — we'd rather ship one thing perfectly than ten things 'meh'." },
  { text: "Transparency — no hidden fees, no surprises. Just honest work." },
  { text: "Craftsmanship — we treat every project like it's our own." },
  { text: "Long-term thinking — we build for tomorrow, not just today." },
];

const teamMembers = [
  { name: "Founding Team", role: "Developers & Designers", desc: "A small, passionate team that believes in doing great work.", avatar: "👨‍💻" },
  { name: "Design Team", role: "UI/UX Specialists", desc: "Creating intuitive, beautiful interfaces that users love.", avatar: "🎨" },
  { name: "Dev Team", role: "Full-Stack Engineers", desc: "Building robust, scalable solutions from concept to deployment.", avatar: "⚙️" },
  { name: "Support Team", role: "Always Here for You", desc: "Dedicated to your success with round-the-clock assistance.", avatar: "🤝" },
];

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = scrollRef.current;
    if (currentRef) {
      const elements = currentRef.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden" ref={scrollRef}>
      {/* Global animation styles */}
      {/* eslint-disable-next-line styled-jsx/no-unsupported-api */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(91, 129, 226, 0.3); }
          50% { box-shadow: 0 0 40px rgba(91, 129, 226, 0.6); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 30s linear infinite; }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-blob { animation: blob 8s ease-in-out infinite; }
        
        /* Staggered animation delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        
        /* Scroll-triggered animations */
        .scroll-animate { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .scroll-animate.visible { opacity: 1; transform: translateY(0); }
        .scroll-animate-left { opacity: 0; transform: translateX(-40px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .scroll-animate-left.visible { opacity: 1; transform: translateX(0); }
        .scroll-animate-right { opacity: 0; transform: translateX(40px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .scroll-animate-right.visible { opacity: 1; transform: translateX(0); }
        .scroll-animate-scale { opacity: 0; transform: scale(0.8); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .scroll-animate-scale.visible { opacity: 1; transform: scale(1); }
      `}</style>

      <main>
        {/* ========== HERO SECTION ========== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-36 pb-24 md:pt-48 md:pb-36">
          {/* Animated background blobs */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-10 -left-20 w-96 h-96 bg-primary/8 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
            <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-secondary/8 rounded-full mix-blend-multiply filter blur-[128px] animate-blob delay-300" />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-400/5 rounded-full mix-blend-multiply filter blur-[96px] animate-blob delay-500" />
            {/* Rotating decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full animate-rotate-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-secondary/5 rounded-full animate-rotate-slow delay-200" style={{ animationDirection: "reverse" }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="animate-fade-in-down inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 shadow-lg">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">About Us</span>
              </div>

              {/* Main heading */}
              <h1 className="animate-fade-in-up delay-200 font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
                We Build Things{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-blue-400 animate-gradient-shift bg-[length:200%_auto]">
                  You'll Love
                </span>
              </h1>

              {/* Subtitle */}
              <p className="animate-fade-in-up delay-400 text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto px-4">
                We're a small, focused team that cares deeply about craft. No fluff, no overpromising — just clean work, honest communication, and solutions that actually solve problems.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-label font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-on-surface px-8 py-4 rounded-full font-label font-semibold border border-outline/20 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS SECTION ========== */}
        <section className="relative bg-gradient-to-r from-surface-container-lowest via-white to-surface-container-lowest border-y border-outline/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`scroll-animate-scale text-center group cursor-default`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="font-label text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== OUR STORY SECTION ========== */}
        <section className="py-24 md:py-36 bg-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/3 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/3 rounded-full filter blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Story */}
              <div className="scroll-animate-left space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="font-label text-xs font-semibold text-primary uppercase tracking-widest">Our Story</span>
                  </div>
                  <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-tight">
                    Born From a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Simple Idea
                    </span>
                  </h2>
                </div>
                <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
                  <p>
                    We noticed a pattern: too many great products fail because of poor UX, slow performance, or broken trust with the team building them.
                  </p>
                  <p>
                    Shallavar was born from a simple idea — what if the team building your product actually <strong className="text-on-surface">cared</strong>? What if design wasn't an afterthought, but the foundation?
                  </p>
                  <p>
                    We started as a small team of developers and designers who believed that great work comes from genuine partnership, not transactional relationships. Today, we help businesses like yours ship faster, look better, and build systems that scale.
                  </p>
                </div>
              </div>

              {/* Right - Visual element */}
              <div className="scroll-animate-right relative">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  {/* Gradient orbs */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl animate-blob" />
                  <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Animated grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" 
                         style={{ backgroundImage: 'radial-gradient(circle, #5B81E2 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <div className="text-center space-y-6 p-8 relative z-10">
                      <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl animate-float">
                        <Code className="w-12 h-12 text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-headline text-2xl font-bold text-on-surface">Craft. Care. Code.</p>
                        <p className="text-on-surface-variant">Every pixel intentional. Every line purposeful.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-outline/20 to-transparent mt-24" />

            {/* What Drives Us */}
            <div className="mt-24 scroll-animate">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
                  What Drives Us
                </h3>
                <p className="text-on-surface-variant text-lg">The principles behind every decision we make.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {principles.map((item, i) => (
                  <div
                    key={i}
                    className={`scroll-animate flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-outline/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-on-surface-variant leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== VALUES SECTION ========== */}
        <section className="py-24 md:py-36 bg-gradient-to-br from-surface-container via-primary/3 to-secondary/3 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-[128px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-[128px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-20 scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="font-label text-xs font-semibold text-primary uppercase tracking-widest">Our Values</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
                The Principles That Guide Us
              </h2>
              <p className="text-on-surface-variant text-xl">
                Every decision, every line of code — guided by these core beliefs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`scroll-animate-scale group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-outline/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors duration-300">{v.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TEAM SECTION ========== */}
        <section className="py-24 md:py-36 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ backgroundImage: 'radial-gradient(circle, #5B81E2 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-20 scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
                <Users className="w-4 h-4 text-secondary" />
                <span className="font-label text-xs font-semibold text-secondary uppercase tracking-widest">Our Team</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
                Meet the Minds Behind Shallavar
              </h2>
              <p className="text-on-surface-variant text-xl">
                Small team, big impact. Every member brings unique superpowers to the table.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, i) => (
                <div
                  key={member.name}
                  className={`scroll-animate-scale group text-center bg-gradient-to-br from-surface-container-lowest to-white rounded-2xl p-8 border border-outline/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-1 text-on-surface">{member.name}</h3>
                  <p className="text-primary font-label text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TIMELINE / JOURNEY SECTION ========== */}
        <section className="py-24 md:py-36 bg-gradient-to-br from-surface-container-highest via-white to-primary/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-20 scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-label text-xs font-semibold text-primary uppercase tracking-widest">Our Journey</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
                How It All Unfolded
              </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`scroll-animate flex gap-8 items-start relative`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="bg-white rounded-2xl p-6 md:p-8 border border-outline/10 hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="font-headline text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {item.year}
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                        </div>
                        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA / CONTACT SECTION ========== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-blue-600 py-28 md:py-36">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full animate-blob" />
            <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-white/5 rounded-full animate-blob delay-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-rotate-slow" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center scroll-animate space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Rocket className="w-4 h-4 text-white" />
                <span className="font-label text-sm font-semibold text-white uppercase tracking-widest">Let's Connect</span>
              </div>

              <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Build<br />Something Amazing?
              </h2>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project over a virtual coffee. No pressure, no hard sell — just a real conversation about how we can help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-label font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Let's Talk
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+919482137212"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-label font-semibold border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" /> +91 94821 37212
                </a>
              </div>

              <div className="pt-8 flex flex-col items-center gap-4 text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Banashankari, Bangalore 560070, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@shallavar.com" className="hover:text-white transition-colors">hello@shallavar.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}