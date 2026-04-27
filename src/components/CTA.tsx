"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-[120px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-screen filter blur-[120px] opacity-10" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Ready to Make a Significant Impact?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Let's discuss how we can simplify your tech and elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-white text-primary rounded-full px-10 py-4 font-headline font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919482137212"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white rounded-full px-10 py-4 font-headline font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
