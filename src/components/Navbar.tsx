  "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Code, Smartphone, Palette, Cloud, Headphones, LayoutDashboard, Phone } from "lucide-react";
import Logo from "@/components/Logo";

// Extend Window interface for custom property
declare global {
  interface Window {
    _preventScrollHandler: ((e: TouchEvent) => void) | null;
  }
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/web-development", label: "Web Development", icon: Code, description: "Custom websites and web applications" },
      { href: "/services/mobile-apps", label: "Mobile Apps", icon: Smartphone, description: "iOS and Android applications" },
      { href: "/services/ui-ux-design", label: "UI/UX Design", icon: Palette, description: "Human-centered design solutions" },
      { href: "/services/cloud-deployment", label: "Cloud & Deployment", icon: Cloud, description: "Scalable cloud infrastructure" },
      { href: "/services/support", label: "Maintenance & Support", icon: Headphones, description: "24/7 technical support" },
    ],
  },
  { href: "/plans", label: "Plans" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

interface ServiceDropdownItem {
  href: string;
  label: string;
  icon: typeof Code;
  description: string;
}

// Mobile dropdown item component (separate to allow hooks)
function MobileDropdownItem({ 
  link, 
  isActive, 
  onClose 
}: { 
  link: typeof navLinks[0]; 
  isActive: (href: string) => boolean;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!link.children) return null;

  return (
    <div>
      <button
        type="button"
        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 ${
          isActive(link.href)
            ? "bg-blue-50 text-[#2563eb] font-semibold"
            : "text-slate-700 hover:bg-slate-50"
        }`}
        onClick={() => setOpen(!open)}
      >
        <span>{link.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 mt-2 mb-2" : "max-h-0 opacity-0"}`}>
        <div className="pl-4 border-l-2 border-blue-100 space-y-1">
          {(link.children as ServiceDropdownItem[]).map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive(child.href) ? "bg-blue-50" : "hover:bg-slate-50"
              }`}
              onClick={onClose}
            >
              <child.icon className={`w-4 h-4 flex-shrink-0 ${isActive(child.href) ? "text-[#2563eb]" : "text-slate-400"}`} />
              <div>
                <span className="text-sm font-medium block text-slate-800">{child.label}</span>
                <span className="text-xs text-slate-500">{child.description}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

   const prevPathnameRef = useRef<string | null>(null);

   useEffect(() => {
     if (prevPathnameRef.current !== null && prevPathnameRef.current !== pathname) {
       if (mobileOpen) {
         setMobileOpen(false);
         }
       }
     prevPathnameRef.current = pathname;
       }, [pathname, mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Set overflow hidden on body to prevent scroll
      document.body.style.overflow = 'hidden';
      
      // For iOS Safari - prevent touchmove from scrolling
      const preventDefault = (e: TouchEvent) => {
        // Allow scrolling within the menu itself
        const target = e.target as HTMLElement;
        if (target.closest('[data-scrollable]') || target.closest('nav') || target.closest('.mobile-menu-scrollable')) {
          return;
        }
        e.preventDefault();
      };
      
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      // Add passive:false touchmove listener to prevent iOS scroll
      document.addEventListener('touchmove', preventDefault, { passive: false });
      
      // Store for cleanup
      window._preventScrollHandler = preventDefault;
    } else {
      // Remove the touchmove listener
      if (window._preventScrollHandler) {
        document.removeEventListener('touchmove', window._preventScrollHandler);
        window._preventScrollHandler = null;
      }
      
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      // Restore scroll position to top
      window.scrollTo(0, 0);
    }
    // Cleanup on unmount
    return () => {
      if (window._preventScrollHandler) {
        document.removeEventListener('touchmove', window._preventScrollHandler);
        window._preventScrollHandler = null;
      }
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (href: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(href);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

// isDropdownLink removed - was assigned but never used

  return (
    <>
      {/* Top accent gradient line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-[#2563eb] via-blue-500 to-cyan-400" />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "mt-0" : "mt-0"
        }`}
      >
        <div className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-lg shadow-black/[0.04]"
            : "bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl shadow-sm"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* Brand - Butterfly icon + brand name with advanced animations */}
              <Link href="/" className="group" aria-label="Shallavar Technologies Home">
                  <Logo variant="header" size="lg" animated={true} />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div
                        key={link.href}
                        className="relative"
                        onMouseEnter={() => handleDropdownEnter(link.href)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isActive(link.href)
                              ? "text-[#2563eb] bg-blue-50/80"
                              : "text-slate-600 hover:text-[#2563eb] hover:bg-blue-50/50"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              activeDropdown === link.href ? "rotate-180" : ""
                            } ${isActive(link.href) ? "text-[#2563eb]" : "text-slate-400"}`}
                          />
                        </button>
                        {/* Dropdown */}
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 transition-all duration-300 ${
                            activeDropdown === link.href
                              ? "opacity-100 translate-y-0 visible"
                              : "opacity-0 -translate-y-1.5 invisible"
                          }`}
                        >
                          <div className="w-80 bg-white rounded-2xl shadow-xl shadow-black/[0.06] border border-slate-100/80 p-2 mt-1 backdrop-blur-xl">
                            <div className="px-4 py-2 border-b border-slate-100">
                              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Our Services</p>
                            </div>
                            {(link.children as ServiceDropdownItem[]).map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${
                                  isActive(child.href)
                                    ? "bg-blue-50/90"
                                    : "hover:bg-slate-50/80"
                                }`}
                              >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                  isActive(child.href)
                                    ? "bg-[#2563eb] text-white"
                                    : "bg-blue-50 text-[#2563eb] group-hover/item:bg-[#2563eb] group-hover/item:text-white"
                                }`}>
                                  <child.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <p className={`font-semibold text-sm transition-colors duration-200 ${
                                    isActive(child.href) ? "text-[#2563eb]" : "text-slate-800 group-hover/item:text-[#2563eb]"
                                  }`}>
                                    {child.label}
                                  </p>
                                  <p className="text-xs text-slate-500 group-hover/item:text-slate-600">{child.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? "text-[#2563eb] bg-blue-50/80"
                          : "text-slate-600 hover:text-[#2563eb] hover:bg-blue-50/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop Right Actions */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="tel:+919482137212"
                  className="flex items-center gap-2 text-slate-500 hover:text-[#2563eb] transition-all duration-300 text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +91 94821 37212
                </a>
                <div className="w-px h-6 bg-slate-200" />
                <Link
                  href="/contact"
                  className="relative group bg-gradient-to-r from-[#2563eb] to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-[#2563eb]/15 hover:shadow-lg hover:shadow-[#2563eb]/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8] to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors duration-300"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <Logo variant="horizontal" size="sm" animated={false} />
            </Link>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-all duration-300"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-1">
              {navLinks.map((link) => {
                if (link.children) {
                  return (
                    <MobileDropdownItem
                      key={link.href}
                      link={link}
                      isActive={isActive}
                      onClose={() => setMobileOpen(false)}
                    />
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive(link.href)
                        ? "bg-blue-50 text-[#2563eb] font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-5 border-t border-slate-100 space-y-4 bg-slate-50/50">
            <a href="tel:+919482137212" className="flex items-center gap-3 text-slate-600 hover:text-[#2563eb] transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 94821 37212</span>
            </a>
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-[#2563eb] to-blue-600 text-white rounded-xl px-6 py-3.5 font-semibold text-sm text-center shadow-md shadow-[#2563eb]/15 hover:shadow-lg hover:shadow-[#2563eb]/25 transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}