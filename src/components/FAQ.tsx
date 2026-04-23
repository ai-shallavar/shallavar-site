"use client";

import { useState } from "react";
import { CircleHelp, ChevronDown } from "lucide-react";

const faqs = [
   {
     question: "How much does a website cost in Bangalore?",
     answer: "Our website development starts from ₹12,500 for our Starter plan. Pricing depends on complexity, features, and timeline. We offer transparent pricing with no hidden fees. Contact us for a free custom quote tailored to your business needs.",
   },
   {
     question: "What is the typical timeline for mobile app development in Bangalore?",
     answer: "Most mobile app projects are completed within 6-12 weeks depending on complexity. We provide a detailed timeline during the discovery phase. Our team works closely with you to ensure timely delivery without compromising quality.",
   },
   {
     question: "Do you provide post-launch support and maintenance?",
     answer: "Yes! All our packages include post-launch support. We also offer ongoing retainer plans starting from ₹10,000/month for continuous maintenance, updates, and 24/7 tech support across Bangalore and beyond.",
   },
   {
     question: "What makes you different from other IT companies in Bangalore?",
     answer: "We focus on quality over quantity, offer transparent pricing with no hidden fees, provide dedicated project managers, and build for long-term success. Our 98% client satisfaction rate and 50+ delivered projects speak for themselves.",
   },
   {
     question: "Do you work with startups and small businesses in Bangalore?",
     answer: "Absolutely! We specialize in working with startups and small businesses in Bangalore. Our starter plan at ₹12,500 is specifically designed for small businesses and entrepreneurs. We also offer affordable web development solutions across Bengaluru.",
   },
   {
     question: "Do you develop websites for specific industries like restaurants in Bangalore?",
     answer: "Yes! We have experience building websites for restaurants, e-commerce businesses, healthcare, education, and more. Our team understands industry-specific requirements and creates tailored digital solutions for Bangalore businesses.",
   },
   {
     question: "Can you redesign our existing website to improve performance?",
     answer: "Yes, we offer website redesign services that include modern UI/UX, mobile responsiveness, speed optimization, SEO improvements, and CMS integration. We've helped numerous Bangalore businesses refresh their online presence.",
   },
   {
     question: "How do I hire a web developer in Bangalore for my project?",
     answer: "Simply fill out our contact form or call +91 86600 39954 for a free consultation. We'll discuss your requirements, provide a detailed proposal, and start your project within days — not weeks.",
   },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
       <div className="text-center mb-16">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container mb-6">
           <CircleHelp className="w-4 h-4 text-primary" />
           <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
         </div>
         <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
           Frequently Asked Questions
         </h2>
         <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
           Everything you need to know about working with our Bangalore-based team.
         </p>
       </div>

       <div className="max-w-3xl mx-auto space-y-4">
         {faqs.map((faq, index) => (
           <div key={index} className="border border-[#E8DFEE] rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
             <button
               onClick={() => setOpenIndex(openIndex === index ? null : index)}
               className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F6F5F5] transition-colors duration-300"
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