import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceCards from "@/components/Services";
import ProcessFlow from "@/components/ProcessFlow";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 space-y-32 max-w-7xl mx-auto px-4 sm:px-8">
        <Hero />
        <TrustStrip />
        <section className="space-y-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface">
              Our Expertise
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Tailored digital solutions to accelerate your growth.
            </p>
          </div>
          <ServiceCards />
        </section>
        <ProcessFlow />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
