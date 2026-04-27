"use client";

import { Bolt, Mail, MapPin, X, Link2, GitBranch } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socials = [
    { icon: X, href: "https://twitter.com", label: "Twitter" },
    { icon: Link2, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: GitBranch, href: "https://github.com", label: "GitHub" },
  ];

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Cloud Deployment", href: "/services/cloud-deployment" },
    { name: "Dashboards", href: "/services/dashboards" },
    { name: "Support", href: "/services/support" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-surface-container mt-auto border-t border-outline/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="relative overflow-hidden mb-6 group w-fit">
              <Link href="/" className="flex items-center gap-3">
                <img 
                  src="/logo-full-square.png" 
                  alt="Shallavar Technologies" 
                  className="h-28 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
                />
              </Link>
            </div>
            <p className="text-on-surface-variant mb-6 leading-relaxed">Premium digital experiences for ambitious brands. We build, deploy, and scale.</p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center hover:bg-primary hover:text-white text-on-surface-variant transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-on-surface">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-on-surface-variant hover:text-primary transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-on-surface">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-on-surface-variant hover:text-primary transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            <div>
              <h4 className="font-headline font-bold text-lg mb-6 text-on-surface">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:hello@shallavar.com" className="hover:text-primary transition-colors duration-300">
                    hello@shallavar.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="https://maps.google.com/?q=Banashankari,Bangalore" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                    Banashankari, Bangalore 560070, Karnataka, India
                  </a>
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <Bolt className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+919482137212" className="hover:text-primary transition-colors duration-300">
                    +91 94821 37212
                  </a>
                </li>
              </ul>
            </div>
        </div>

        <div className="border-t border-outline/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-sm">&copy; {new Date().getFullYear()} Shallavar Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
