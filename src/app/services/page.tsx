import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/Services";
import ProcessFlow from "@/components/ProcessFlow";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-float-delayed" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Architecting Digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Excellence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                We don't just build software — we curate high-performance digital ecosystems tailored for modern enterprises. From concept to deployment, our disciplines elevate your brand.
              </p>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <ServiceCards />

        {/* Process Flow */}
        <ProcessFlow />

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
                Why Choose Shallavar?
              </h2>
              <p className="text-slate-300 font-body text-xl max-w-2xl mx-auto">
                We combine technical expertise with creative vision to deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "100+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "3+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="font-headline text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-slate-400 font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}