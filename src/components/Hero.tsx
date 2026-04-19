"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-container/10 via-primary/5 to-transparent py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/30 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-container/20 rounded-full blur-[80px] opacity-20 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <div className="space-y-8">
          <p className="text-primary font-label font-bold tracking-widest uppercase text-sm">
            Simplified Tech, Significant Impact
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight">
            Crafting Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">
              Masterpieces.
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg">
            We build high-performance websites, intuitive mobile applications, and scalable dashboards for brands that refuse to blend in.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/contact"
              className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-full px-8 py-4 font-label font-semibold shadow-[0_12px_32px_rgba(0,62,199,0.25)] hover:-translate-y-1 transition-all duration-300 ease-out-expo text-lg"
            >
              Get Free Consultation
            </a>
            <a
              href="/services"
              className="rounded-full px-8 py-4 font-label font-semibold text-primary border border-outline-variant/30 hover:bg-surface-container-low transition-all duration-300 ease-out-expo text-lg"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary-fixed-dim blur-[100px] opacity-20 rounded-full" />
          {/* Placeholder illustration */}
          <div className="relative w-full max-w-lg aspect-[4/3] bg-gradient-to-br from-primary-container/20 to-primary-fixed/30 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.08)] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-container to-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-4xl">rocket_launch</span>
              </div>
              <p className="font-label text-on-surface-variant text-sm px-8">
                High-performance digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
