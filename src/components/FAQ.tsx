"use client";

import { useState } from "react";
import { CircleHelp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most projects are completed within 4-8 weeks depending on complexity. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes! All our packages include post-launch support. We also offer ongoing retainer plans for continuous maintenance and updates.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely. We specialize in integrating with existing infrastructure, APIs, and third-party platforms to create seamless experiences.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We primarily use modern tech stacks including Next.js, React, Node.js, Python, and cloud platforms like AWS, Azure, and Vercel.",
  },
  {
    question: "How does the pricing work?",
    answer: "We offer both project-based and retainer pricing. View our transparent pricing plans or contact us for a custom quote tailored to your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container mb-6">
          <CircleHelp className="w-4 h-4 text-primary" />
          <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Everything you need to know about working with us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-outline/15 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left bg-surface-container-lowest hover:bg-surface-container transition-colors duration-300"
            >
              <span className="font-headline font-bold text-on-surface pr-4">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            <div className={`transition-all duration-300 ease-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
              <p className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
