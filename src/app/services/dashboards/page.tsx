import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  LayoutDashboard,
  Database,
  BarChart3,
  Settings2,
  Users,
  ArrowRight,
  CheckCircle2,
  Code2,
  RefreshCw,
} from "lucide-react";

const features = [
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Custom admin panels with role-based access control and real-time data visualization." },
  { icon: BarChart3, title: "Analytics Dashboards", desc: "Interactive charts, KPI tracking, and custom reporting for data-driven decisions." },
  { icon: Database, title: "CMS Solutions", desc: "Content management systems that empower your team to manage content without technical skills." },
  { icon: Code2, title: "Custom Workflows", desc: "Tailored business process automation and workflow management tools." },
  { icon: Users, title: "User Management", desc: "Comprehensive user administration with permissions, roles, and audit logging." },
  { icon: RefreshCw, title: "Data Integration", desc: "Seamless integration with third-party APIs and data sources for unified views." },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Supabase", "PostgreSQL",
  "Chart.js", "Recharts", "Tailwind CSS", "REST APIs", "GraphQL"
];

const pricing = [
  {
    name: "Simple Dashboard",
    price: "₹50,000",
    desc: "Basic admin panel with essential features",
    features: ["User Authentication", "Basic CRUD Operations", "Simple Analytics", "Responsive Design"],
  },
  {
    name: "Advanced Dashboard",
    price: "₹1,00,000",
    desc: "Feature-rich dashboard with analytics",
    features: ["Role-Based Access", "Custom Charts", "Real-time Updates", "Export Features", "API Integration"],
    popular: true,
  },
  {
    name: "Enterprise CMS",
    price: "₹2,50,000+",
    desc: "Full-scale content management system",
    features: ["Multi-tenant Architecture", "Custom Workflows", "Media Library", "SEO Tools", "Team Collaboration"],
  },
];

export default function DashboardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-50 py-24 md:py-36">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 backdrop-blur-sm">
                <LayoutDashboard className="w-4 h-4 text-rose-600" />
                <span className="font-label text-sm font-semibold text-rose-700 uppercase tracking-widest">Dashboards & CMS</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
                Powerful{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600">
                  Management Tools
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
                Admin panels, content management systems, and real-time dashboards tailored to your workflows. Take control of your data with intuitive interfaces.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="bg-gradient-to-r from-rose-600 to-red-600 text-white px-8 py-3.5 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/plans" className="px-8 py-3.5 rounded-full font-label font-semibold text-on-surface bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
              What We Build
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Custom management interfaces that streamline your operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-rose-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2 text-on-surface">{f.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
                Common Use Cases
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                Dashboards and CMS solutions for every business function.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: "E-commerce Admin", desc: "Manage products, orders, and customers." },
                { title: "CRM Dashboard", desc: "Track leads, deals, and customer interactions." },
                { title: "Content Portal", desc: "Publish and manage digital content at scale." },
                { title: "Operations Center", desc: "Monitor KPIs and team performance in real-time." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-rose-100 hover:shadow-lg transition-all duration-300">
                  <LayoutDashboard className="w-10 h-10 text-rose-600 mx-auto mb-3" />
                  <h3 className="font-headline font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
              Our Tech Stack
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Modern tools for powerful dashboard development.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-gray-50 rounded-full text-sm font-semibold text-on-surface border border-gray-200 hover:border-rose-300 hover:text-rose-700 transition-colors duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">
                Dashboard Pricing
              </h2>
              <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
                Transparent pricing based on complexity and features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-rose-600 to-red-600 text-white shadow-xl shadow-rose-500/20 md:-translate-y-4"
                    : "bg-white border border-gray-200 hover:border-rose-100 hover:shadow-lg"
                }`}>
                  {plan.popular && (
                    <span className="inline-block px-3 py-1 bg-white/20 text-white font-label text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`font-headline text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-rose-100" : "text-on-surface-variant"}`}>
                    {plan.desc}
                  </p>
                  <div className={`font-headline text-4xl font-extrabold mb-8 ${plan.popular ? "text-white" : "text-on-surface"}`}>
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-white" : "text-rose-600"}`} />
                        <span className={plan.popular ? "text-rose-50" : "text-on-surface-variant"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-full font-label font-semibold text-sm text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-rose-700 hover:bg-rose-50"
                        : "bg-gradient-to-r from-rose-600 to-red-600 text-white hover:shadow-lg"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-rose-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Settings2 className="absolute bottom-10 left-20 w-40 h-40 text-rose-400" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Need a Custom Dashboard?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's build a management tool that perfectly fits your workflow.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 text-white px-8 py-4 rounded-full font-label font-semibold hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}