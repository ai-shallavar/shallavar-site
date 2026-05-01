"use client";

import { useState, useTransition, useRef } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Globe,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });
        if (!res.ok) {
          // Parse the specific error message from the API response
          let errorMessage = "Submission failed. Please check your inputs.";
          try {
            const body = await res.json();
            if (body?.error) {
              errorMessage = body.error;
            }
          } catch {
            // Fall back to default message if JSON parsing fails
          }
          setStatus("error");
          setErrorMsg(errorMessage);
          return;
        }
        // Parse success response
        let successMessage = "Message sent successfully! We'll get back to you soon.";
        try {
          const body = await res.json();
          if (body?.message) {
            successMessage = body.message;
          }
        } catch {
          // Fall back to default message
        }
        setStatus("success");
        setSuccessMsg(successMessage);
        // Clear the form after successful submission
        formRef.current?.reset();
      } catch {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again or email us directly.");
      }
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Directly",
      subtitle: "Available Mon-Fri, 9am-6pm IST",
      detail: "+91 94821 37212",
      link: "tel:+919482137212",
      gradient: "from-blue-50 to-cyan-50 border-blue-100",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "We aim to reply within 2 hours.",
      detail: "hello@shallavar.com",
      link: "mailto:hello@shallavar.com",
      gradient: "from-violet-50 to-purple-50 border-violet-100",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
      secondary: "shallavar.tech@gmail.com",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      subtitle: "Innovation Hub, Karnataka",
      detail: "View on Google Maps",
      link: "https://maps.google.com",
      gradient: "from-orange-50 to-red-50 border-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      subtitle: "Monday to Friday",
      detail: "9:00 AM - 6:00 PM IST",
      link: "#",
      gradient: "from-emerald-50 to-teal-50 border-emerald-100",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
  ];

  const services = [
    { value: "web", label: "Website Development" },
    { value: "mobile", label: "Mobile App Development" },
    { value: "cloud", label: "Cloud & Deployment" },
    { value: "design", label: "UI/UX Design" },
    { value: "seo", label: "SEO Optimization" },
    { value: "support", label: "Maintenance & Support" },
    { value: "other", label: "Other" },
  ];

  const budgets = [
    { value: "under25k", label: "Under ₹25,000" },
    { value: "25k-50k", label: "₹25,000 - ₹50,000" },
    { value: "50k-1l", label: "₹50,000 - ₹1,00,000" },
    { value: "1l-5l", label: "₹1,00,000 - ₹5,00,000" },
    { value: "5l+", label: "₹5,00,000+" },
    { value: "discuss", label: "Let's Discuss" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-violet-50 pb-20 pt-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-100/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              We typically respond within 24 hours
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight mb-6">
              Let's start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                conversation
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Whether you have a question about our services, pricing, or anything else — our team is ready to help.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Contact Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              {contactInfo.map((info) => {
                const isExternal = info.link.startsWith("http");
                return (
                  <a
                    key={info.title}
                    href={info.link}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group block bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-visible relative z-[1] hover:z-[2]`}
                  >
                    <div className="flex items-start gap-4">
                    <div className={`${info.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-headline text-base font-bold text-on-surface mb-0.5">
                        {info.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant mb-1">{info.subtitle}</p>
                      {info.secondary && (
                        <span className="block text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors mb-1 cursor-pointer" onClick={(e) => { e.stopPropagation(); window.location.href = `mailto:${info.secondary}`; }}>
                          {info.secondary}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                        {info.detail}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                    </div>
                  </a>
                );
              })}

              {/* Trust Badge */}
              <div className="mt-8 bg-white rounded-2xl p-6 border border-outline/10 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-headline font-bold text-on-surface">Why choose us?</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Dedicated project manager for every client",
                    "Transparent pricing with no hidden fees",
                    "Post-launch support & maintenance plans",
                    "100% source code ownership included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-outline/10 shadow-sm sticky top-28">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h2 className="font-headline text-xl font-bold text-on-surface">Send us a message</h2>
                </div>

                {/* Success / Error */}
                {status === "success" && (
                  <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-on-surface animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p className="text-sm font-medium text-emerald-800">{successMsg || "Message sent successfully! We'll get back to you soon."}</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-on-surface">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <p className="text-sm font-medium text-red-800">{errorMsg}</p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-on-surface">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full bg-surface-container-lowest border border-outline/20 rounded-xl px-4 py-3 text-on-surface focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 placeholder:text-on-surface-variant/40"
                        placeholder="Jane Doe"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-on-surface">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        className="w-full bg-surface-container-lowest border border-outline/20 rounded-xl px-4 py-3 text-on-surface focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 placeholder:text-on-surface-variant/40"
                        placeholder="jane@company.com"
                        type="email"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-on-surface">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        className="w-full bg-surface-container-lowest border border-outline/20 rounded-xl px-4 py-3 text-on-surface focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 placeholder:text-on-surface-variant/40"
                        placeholder="+91 XXXXX XXXXX"
                        type="tel"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-on-surface">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        className="w-full bg-surface-container-lowest border border-outline/20 rounded-xl px-4 py-3 text-on-surface focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 placeholder:text-on-surface-variant/40"
                        placeholder="Acme Inc."
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-on-surface">
                        Service of Interest
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          className="w-full bg-surface-container-lowest border border-outline/20 rounded-xl px-4 pr-10 py-3 text-on-surface focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 appearance-none"
                        >
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-semibold text-on-surface">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          className="w-full bg-surface-container-lowest border border-outline/20 rounded-xl px-4 pr-10 py-3 text-on-surface focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 appearance-none"
                        >
                          <option value="" disabled>Select a range</option>
                          {budgets.map((b) => (
                            <option key={b.value} value={b.value}>{b.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-on-surface">
                      How can we help? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full bg-surface-container-lowest border border-outline/20 rounded-xl px-4 py-3 text-on-surface focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 resize-none placeholder:text-on-surface-variant/40"
                      placeholder="Tell us a bit about your project, goals, and timeline..."
                      rows={5}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <Globe className="w-3.5 h-3.5" />
                      <span>By submitting, you agree to our privacy policy.</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl px-8 py-3.5 font-label font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                    >
                      {isPending ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-10 md:p-14 text-center">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
            
            <div className="relative">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white mb-4">
                Prefer a direct conversation?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Schedule a free 30-minute discovery call with our team. We'll discuss your project and provide expert recommendations.
              </p>
              <a
                href="tel:+919482137212"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call +91 94821 37212
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
