"use client";

import { useState, useEffect, useRef } from "react";

const typingWords = [
  "digital products",
  "web apps",
  "mobile apps",
  "scalable platforms"
];
const TYPING_SPEED = 85;
const DELETE_SPEED = 40;
const PAUSE_DURATION = 2000;

export default function HeroModern() {
  const [displayText, setDisplayText] = useState<string>("");
  const [isBlinking, setIsBlinking] = useState<boolean>(true);
  const stateRef = useRef<{
    wordIndex: number;
    charIndex: number;
    isDeleting: boolean;
    isPaused: boolean;
  }>({
    wordIndex: 0,
    charIndex: 0,
    isDeleting: false,
    isPaused: false,
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    captchaAnswer: "",
  });
  const [captchaValue, setCaptchaValue] = useState({ a: 1, b: 3 });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // Cursor blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  // Initialize captcha
  useEffect(() => {
    const randomA = Math.floor(Math.random() * 9) + 1;
    const randomB = Math.floor(Math.random() * 9) + 1;
    setCaptchaValue({ a: randomA, b: randomB });
  }, []);

  // Typing animation logic
  useEffect(() => {
    const { current } = stateRef;

    function tick(): void {
      // Read the current word dynamically on each tick
      const currentWord = typingWords[current.wordIndex];

      if (current.isPaused) {
        current.isPaused = false;
        current.isDeleting = true;
        timeoutRef.current = setTimeout(tick, PAUSE_DURATION);
        return;
      }

      if (!current.isDeleting) {
        // Typing forward
        if (current.charIndex < currentWord.length) {
          current.charIndex++;
          setDisplayText(currentWord.slice(0, current.charIndex));
          timeoutRef.current = setTimeout(tick, TYPING_SPEED);
        } else {
          // Word complete, pause before moving to next word
          current.isDeleting = true;
          timeoutRef.current = setTimeout(tick, PAUSE_DURATION);
        }
      } else {
        // Deleting backward
        if (current.charIndex > 0) {
          current.charIndex--;
          setDisplayText(currentWord.slice(0, current.charIndex));
          timeoutRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          // Move to next word
          current.isDeleting = false;
          current.wordIndex = (current.wordIndex + 1) % typingWords.length;
          timeoutRef.current = setTimeout(tick, 400);
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRefreshCaptcha = () => {
    const randomA = Math.floor(Math.random() * 9) + 1;
    const randomB = Math.floor(Math.random() * 9) + 1;
    setCaptchaValue({ a: randomA, b: randomB });
    setFormData({ ...formData, captchaAnswer: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const expectedAnswer = captchaValue.a + captchaValue.b;

    if (formData.captchaAnswer !== expectedAnswer.toString()) {
      setSubmitStatus("error");
      setSubmitMessage("Incorrect captcha answer. Please try again.");
      return;
    }

    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: "Interested in services from hero form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message || "Thank you! We'll contact you soon.");
        setFormData({ name: "", email: "", phone: "", service: "", captchaAnswer: "" });
        const randomA = Math.floor(Math.random() * 9) + 1;
        const randomB = Math.floor(Math.random() * 9) + 1;
        setCaptchaValue({ a: randomA, b: randomB });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]">
      {/* Soft Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[150px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        />
        <div
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Content with Form */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Hero Content */}
          <div className="space-y-10 animate-fadeIn">
            {/* Base Line */}
            <p className="text-sm md:text-base font-medium tracking-[0.25em] uppercase text-white/40 mb-4">
              Built for today. Ready for what's next
            </p>

            {/* Main Headline with Typing Effect */}
           <div className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.15] max-w-3xl">
              <span className="block">We build what your business needs </span>
              <span className="inline-flex items-center mt-1">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.18))",
                    whiteSpace: "nowrap",
                  }}
                >
                  {displayText}
                  <span
                    className="inline-block w-[2px] align-middle"
                    style={{
                      height: "1.05em",
                      marginLeft: "1px",
                      background: "linear-gradient(to bottom, #22d3ee, #818cf8)",
                      opacity: isBlinking ? 0.2 : 1,
                    }}
                  />
                </span>
              </span>
            </div>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/50 max-w-xl font-light leading-relaxed">
              We build high performance digital products that are fast, scalable, and ready for real world growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto min-h-[56px] sm:min-w-[280px]"
              >
                Book a free consultation
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="tel:+919482137212"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white/70 hover:text-white transition-colors font-medium border border-white/15 hover:border-white/30 rounded-full backdrop-blur-sm hover:bg-white/[0.03] w-full sm:w-auto min-h-[56px] sm:min-w-[280px]"
              >
                <svg
                  className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="truncate">+91 94821 37212</span>
              </a>
            </div>

            {/* Google Reviews Badge */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/60 font-medium">
                Google Reviews <span className="text-white font-semibold">4.9</span>
              </span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div id="contact" className="w-full max-w-md ml-auto">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              {/* Form Header */}
              <div className="mb-8 text-center">
                <h3 className="font-sans text-2xl font-bold text-white mb-2">
                  Fill out the form, and we'll contact you
                </h3>
                <p className="text-white/50 text-sm">
                  Get a free consultation within 24 hours
                </p>
              </div>

              {/* Success/Error Message */}
              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm text-center">
                  ✓ {submitMessage}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                  {submitMessage}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='rgba(255,255,255,0.4)' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center"
                    }}
                  >
                    <option value="" className="bg-[#1a1a2e] text-white/40">Service</option>
                    <option value="web-development" className="bg-[#1a1a2e] text-white">Web Development</option>
                    <option value="mobile-apps" className="bg-[#1a1a2e] text-white">Mobile App Development</option>
                    <option value="ui-ux-design" className="bg-[#1a1a2e] text-white">UI/UX Design</option>
                    <option value="cloud-deployment" className="bg-[#1a1a2e] text-white">Cloud Deployment</option>
                    <option value="digital-marketing" className="bg-[#1a1a2e] text-white">Digital Marketing</option>
                    <option value="tech-support" className="bg-[#1a1a2e] text-white">Technical Support</option>
                  </select>
                </div>

                {/* Simple CAPTCHA */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm font-medium">
                      What is {captchaValue.a} + {captchaValue.b} ?
                    </span>
                    <button
                      type="button"
                      onClick={handleRefreshCaptcha}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      aria-label="Refresh captcha"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                  <input
                    type="text"
                    name="captchaAnswer"
                    required
                    value={formData.captchaAnswer}
                    onChange={handleChange}
                    placeholder="Type your answer"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 min-h-[52px]"
                >
                  {submitStatus === "loading" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-white/30 text-xs text-center mt-3">
                  By submitting, you agree to our privacy policy. We'll never share your data.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}