"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useTransition } from "react";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
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
        if (!res.ok) throw new Error("Submission failed");
        setStatus("success");
      } catch {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again or email us directly.");
      }
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
        {/* Header */}
        <section className="space-y-6 max-w-3xl">
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-tight">
            Let&apos;s start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">
              conversation
            </span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Whether you have a question about our services, pricing, or anything else — our team is ready to answer all your questions. We usually reply within 24 hours.
          </p>
        </section>

        {/* Success / Error */}
        {status === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800 font-body">
            ✅ Message sent successfully! We&apos;ll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-800 font-body">{errorMsg}</div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-sm border border-outline-variant/10">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-on-surface font-label">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/15 rounded-xl px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-primary/30 outline-none transition-colors duration-200 placeholder:text-on-surface-variant/50"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-on-surface font-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/15 rounded-xl px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-primary/30 outline-none transition-colors duration-200 placeholder:text-on-surface-variant/50"
                    placeholder="jane@company.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-on-surface font-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full bg-surface-container-low border border-outline-variant/15 rounded-xl px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-primary/30 outline-none transition-colors duration-200 placeholder:text-on-surface-variant/50"
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-on-surface font-label">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="w-full bg-surface-container-low border border-outline-variant/15 rounded-xl px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-primary/30 outline-none transition-colors duration-200 placeholder:text-on-surface-variant/50"
                    placeholder="Acme Inc."
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-on-surface font-label">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-surface-container-low border border-outline-variant/15 rounded-xl pl-4 pr-10 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-primary/30 outline-none appearance-none transition-colors duration-200"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="cloud">Cloud &amp; Deployment</option>
                    <option value="design">UI/UX Design</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="support">Maintenance &amp; Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-on-surface font-label">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full bg-surface-container-low border border-outline-variant/15 rounded-xl pl-4 pr-10 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-primary/30 outline-none appearance-none transition-colors duration-200"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="under25k">Under ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                    <option value="5l+">₹5,00,000+</option>
                    <option value="discuss">Let&apos;s Discuss</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-on-surface font-label">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-surface-container-low border border-outline-variant/15 rounded-xl px-4 py-3 text-on-surface focus:bg-surface-container-lowest focus:border-primary/30 outline-none transition-colors duration-200 resize-none placeholder:text-on-surface-variant/50"
                  placeholder="Tell us a bit about your project..."
                  rows={5}
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <p className="text-xs text-on-surface-variant max-w-[280px]">
                  By submitting, you agree to our privacy policy.
                </p>
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-full px-8 py-3.5 font-label font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 ease-out-expo shadow-[0_8px_24px_rgba(0,62,199,0.2)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isPending ? (
                    <>
                      <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                {
                  icon: "call",
                  title: "Call Us Directly",
                  desc: "Available Mon-Fri, 9am-6pm IST",
                  link: "tel:+918005550199",
                  linkText: "+91 800-555-0199",
                  accent: "primary",
                  bg: "primary-fixed",
                },
                {
                  icon: "mail",
                  title: "Email Support",
                  desc: "We aim to reply within 2 hours.",
                  link: "mailto:hello@shallavar.in",
                  linkText: "hello@shallavar.in",
                  accent: "primary",
                  bg: "primary-fixed",
                },
                {
                  icon: "location_on",
                  title: "Headquarters",
                  desc: "100 Innovation Drive, Suite 400, Bengaluru, KA",
                  link: "https://maps.google.com",
                  linkText: "View on Google Maps",
                  accent: "tertiary",
                  bg: "tertiary-fixed",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15 hover:-translate-y-1 transition-all duration-300 ease-out-expo shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${info.bg} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}>
                      <span className={`material-symbols-outlined ${info.accent === "tertiary" ? "text-tertiary" : "text-primary"}`}>{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-bold text-on-surface mb-1">{info.title}</h3>
                      <p className="font-body text-sm text-on-surface-variant mb-2">{info.desc}</p>
                      <a href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-primary font-semibold hover:opacity-80 transition-opacity text-sm">
                        {info.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
