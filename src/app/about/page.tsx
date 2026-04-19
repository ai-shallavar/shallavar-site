import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-32">
        {/* Hero */}
        <section className="space-y-8">
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
            Who We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">
              Are
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            Shallavar Technologies is a premium digital agency crafting websites, apps, and cloud solutions for brands that demand excellence. Based in India, serving globally.
          </p>
        </section>

        {/* Stats */}
        <div className="bg-surface-container-lowest rounded-2xl py-12 px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-surface-variant/50 text-center shadow-sm">
          {[
            { value: "250+", label: "Projects Delivered" },
            { value: "98%", label: "Happy Clients" },
            { value: "10+", label: "Years of Experience" },
            { value: "&lt;2h", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2 px-4">
              <div className="font-headline text-4xl font-extrabold text-primary">{stat.value}</div>
              <div className="font-label text-sm text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">
              Our Story
            </h2>
            <div className="font-body text-on-surface-variant leading-relaxed space-y-4">
              <p>
                Shallavar was born from a simple belief: technology should be accessible, impactful, and beautifully crafted. We saw too many digital agencies choosing between quality and affordability — so we built a third path.
              </p>
              <p>
                Our team combines deep technical expertise with an editorial sensibility. We don&apos;t just build websites; we curate digital experiences. Every project is a canvas, and we treat it with the care it deserves.
              </p>
              <p>
                From startups to established enterprises, we partner with brands who refuse to blend in. Our approach is systematic, transparent, and relentlessly focused on results.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-12 shadow-sm border border-outline-variant/10 flex items-center justify-center min-h-[350px]">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-container/20 to-primary-fixed/30 rounded-3xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-5xl">groups</span>
              </div>
              <p className="font-label text-on-surface-variant text-sm">
                A team of designers, developers & strategists
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="space-y-16">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "diamond",
                title: "Quality First",
                desc: "We never compromise on craft. Every pixel, every line of code — it all matters.",
              },
              {
                icon: "visibility",
                title: "Transparent",
                desc: "Clear pricing, honest timelines, and open communication at every stage.",
              },
              {
                icon: "trending_up",
                title: "Impact Driven",
                desc: "We measure success by the results we deliver — not the features we ship.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-all duration-300 ease-out-expo"
              >
                <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{value.title}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
