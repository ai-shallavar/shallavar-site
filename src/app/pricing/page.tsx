import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingGrid from "@/components/PricingGrid";
import CTA from "@/components/CTA";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-32">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
            Transparent pricing for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              digital excellence
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Choose the perfect foundation for your digital presence. No hidden fees, just clear value tailored to your growth stage.
          </p>
        </section>

        {/* Pricing Grid */}
        <PricingGrid />

        {/* Mobile App CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16 border border-outline-variant/15 shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="flex-1 z-10 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-3xl">📱</span>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">
                  Mobile Applications
                </h2>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                Native and cross-platform mobile experiences designed for engagement and performance. From consumer apps to enterprise mobility solutions.
              </p>
              <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/10">
                  <p className="font-body text-sm text-on-surface font-medium flex items-center gap-2">
                    ℹ️ Final pricing depends on scope, features, and platform requirements.
                  </p>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col items-start md:items-end z-10 relative">
              <p className="font-body text-sm text-outline mb-1 uppercase tracking-wider font-semibold">
                Starting From
              </p>
              <div className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                ₹1,25,000+
              </div>
                <a
                  href="/contact"
                  className="w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-br from-primary to-secondary text-on-primary font-label font-semibold text-base hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_24px_rgba(0,62,199,0.25)] flex items-center justify-center gap-2"
                >
                  Contact for App Quote →
                </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
