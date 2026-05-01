"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  Zap,
  Users,
  Globe,
  Wrench,
  Phone,
} from "lucide-react";

const faqs = [
  {
    question: "How much does a website cost in Bangalore?",
    answer:
      "Our website development starts from ₹12,500 for our Starter plan. Pricing depends on complexity, features, and timeline. We offer transparent pricing with no hidden fees. Contact us for a free custom quote tailored to your business needs.",
  },
  {
    question: "What is the typical timeline for mobile app development in Bangalore?",
    answer:
      "Most mobile app projects are completed within 6–12 weeks depending on complexity. We provide a detailed timeline during the discovery phase. Our team works closely with you to ensure timely delivery without compromising quality.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes! All our packages include post-launch support. We also offer ongoing retainer plans starting from ₹10,000/month for continuous maintenance, updates, and 24/7 tech support across Bangalore and beyond.",
  },
  {
    question: "What makes you different from other IT companies in Bangalore?",
    answer:
      "We focus on quality over quantity, offer transparent pricing with no hidden fees, provide dedicated project managers, and build for long-term success. Our 98% client satisfaction rate and 50+ delivered projects speak for themselves.",
  },
  {
    question: "Do you work with startups and small businesses in Bangalore?",
    answer:
      "Absolutely! We specialize in working with startups and small businesses in Bangalore. Our starter plan at ₹12,500 is specifically designed for small businesses and entrepreneurs. We also offer affordable web development solutions across Bengaluru.",
  },
  {
    question: "Do you develop websites for specific industries like restaurants in Bangalore?",
    answer:
      "Yes! We have experience building websites for restaurants, e-commerce businesses, healthcare, education, and more. Our team understands industry-specific requirements and creates tailored digital solutions for Bangalore businesses.",
  },
  {
    question: "Can you redesign our existing website to improve performance?",
    answer:
      "Yes, we offer website redesign services that include modern UI/UX, mobile responsiveness, speed optimization, SEO improvements, and CMS integration. We've helped numerous Bangalore businesses refresh their online presence.",
  },
  {
    question: "How do I hire a web developer in Bangalore for my project?",
    answer:
      "Simply fill out our contact form or call +91 94821 37212 for a free consultation. We'll discuss your requirements, provide a detailed proposal, and start your project within days — not weeks.",
  },
];

// Unique icon for each FAQ item — no repeats
const faqIcons = [
  HelpCircle,       // Cost question
  Clock,            // Timeline question
  ShieldCheck,      // Support question
  Zap,              // Differentiation question
  Users,            // Startups question
  Globe,            // Industries question
  Wrench,           // Redesign question
  Phone,            // Hire developer question
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
  icon: Icon,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.FC<{ className?: string }>;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-500 ease-out ${
        isOpen
          ? "border-primary/40 bg-gradient-to-br from-white via-primary-container/10 to-transparent shadow-lg shadow-primary/5"
          : "border-[#E8DFEE] bg-white shadow-sm hover:border-primary/30 hover:shadow-md"
      }`}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Animated accent bar on the left */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-all duration-500 ${
          isOpen
            ? "bg-gradient-to-b from-primary via-secondary to-primary"
            : "bg-transparent group-hover:bg-primary/30"
        }`}
      />

      {/* Top gradient line that appears on open */}
      <div
        className={`absolute inset-x-0 top-0 h-[2px] transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-primary), var(--color-secondary), transparent)",
        }}
      />

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative flex w-full items-start gap-4 px-6 pt-6 pb-5 text-left"
      >
        {/* Icon circle */}
        <div
          className={`flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-500 ${
            isOpen
              ? "bg-primary text-white scale-110"
              : "bg-primary-container/60 text-primary group-hover:bg-primary-container group-hover:scale-105"
          }`}
          style={{
            animation: isOpen ? "iconPulse 2s ease-in-out infinite" : undefined,
          }}
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Question */}
        <div className="flex-1 min-w-0">
          <h3
            className={`font-headline font-bold text-lg leading-snug transition-colors duration-300 ${
              isOpen ? "text-primary" : "text-on-surface"
            }`}
          >
            {faq.question}
          </h3>
        </div>

        {/* Animated chevron */}
        <div className="flex-shrink-0 mt-1">
          <div
            className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
              isOpen
                ? "bg-primary text-white"
                : "bg-[#F6F5F5] text-on-surface-variant group-hover:bg-primary-container/60 group-hover:text-primary"
            }`}
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-500 ${
                isOpen ? "-rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </button>

      {/* Answer with animated height */}
      <div
        className="transition-all duration-500 ease-out overflow-hidden"
        style={{
          maxHeight: isOpen ? height + 40 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="px-6 pb-6 pt-0 pl-[4.25rem]">
          <div className="relative">
            {/* Decorative quote mark */}
            <span className="absolute -left-1 -top-1 text-5xl text-primary/10 font-serif leading-none select-none">
              "
            </span>
            <p className="text-on-surface-variant text-base leading-relaxed relative">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb top-right */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary-container) 0%, transparent 70%)",
          }}
        />
        {/* Large gradient orb bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary-container) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #505F60 1px, transparent 1px), linear-gradient(to bottom, #505F60 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary/15 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-primary/25 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container/60 mb-8 shadow-md shadow-primary/5">
            <Sparkles className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: "3s" }} />
            <span className="font-label text-sm font-bold text-primary uppercase tracking-widest">
              FAQ
            </span>
          </div>

          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6">
            Frequently Asked{" "}
            <span
              className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto" }}
            >
              Questions
            </span>
          </h2>

          <p className="text-on-surface-variant text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about working with our Bangalore-based
            team. Can't find what you're looking for?{" "}
            <a
              href="/contact"
              className="font-semibold text-primary hover:text-secondary transition-colors duration-300 inline-flex items-center gap-1"
            >
              Reach out to us
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div className="relative space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faqIcons[index] || Sparkles;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <FAQItem
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  icon={IconComponent}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-1000 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary-container/30 via-primary-container/20 to-primary-container/30 shadow-lg shadow-primary/5">
            <p className="text-on-surface-variant font-medium text-sm">
              Still have questions?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Global keyframe animations */}
      <style>{`
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}