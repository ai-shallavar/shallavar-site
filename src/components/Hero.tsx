"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-8 bg-surface-container">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 -left-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-float" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full mix-blend-multiply filter blur-[128px] opacity-25 animate-float-delayed" />
        <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-float" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8 pt-20 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container backdrop-blur-sm border border-primary/20 shadow-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-label text-xs font-bold tracking-widest text-primary uppercase">
            Digital Excellence, Delivered
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-on-surface leading-[0.95]">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Digital
          </span>
          <br />
          Products That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Thrive
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto font-light px-4">
          From stunning websites to powerful mobile apps and enterprise dashboards — we craft experiences that captivate users and accelerate growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-full font-label font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-label font-semibold text-lg text-on-surface bg-surface border-outline/20 hover:bg-surface-container-lowest hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="pt-12 pb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-on-surface-variant">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-sm font-bold">✓</span>
            </div>
            <span className="text-sm font-semibold">50+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
              <span className="text-primary text-sm font-bold">★</span>
            </div>
            <span className="text-sm font-semibold">5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
              <span className="text-primary text-sm font-bold">∞</span>
            </div>
            <span className="text-sm font-semibold">Unlimited Revisions</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}