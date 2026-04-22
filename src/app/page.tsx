import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceCards from "@/components/Services";
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustStrip />
        <ServiceCards />
        <ProcessFlow />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}