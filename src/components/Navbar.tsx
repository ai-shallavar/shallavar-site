"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out-expo ${
        scrolled
          ? "bg-surface/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm shadow-blue-500/5"
          : "bg-surface/70 backdrop-blur-xl"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 h-20">
        {/* Brand */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-on-surface font-headline">
          Shallavar
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label text-sm font-semibold tracking-tight transition-all duration-300 ease-out-expo ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary hover:opacity-80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="mailto:hello@shallavar.in"
            className="hidden lg:block text-primary font-label font-semibold hover:opacity-80 transition-all duration-300 ease-out-expo px-4 py-2 text-sm"
          >
            hello@shallavar.in
          </a>
          <Link
            href="/contact"
            className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-full px-6 py-2.5 font-label font-semibold text-sm shadow-[0_8px_24px_rgba(0,62,199,0.2)] hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-2xl">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10">
          <div className="flex flex-col px-8 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label text-base font-semibold py-2 transition-colors ${
                  active === link.href
                    ? "text-primary border-l-2 border-primary pl-3"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-full px-6 py-3 font-label font-semibold text-sm text-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
