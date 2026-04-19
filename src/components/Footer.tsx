import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full pt-20 pb-10 border-t border-slate-100 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="text-xl font-bold text-on-surface mb-4 font-headline tracking-tight">
            Shallavar Technologies
          </div>
          <p className="font-body text-base text-on-surface-variant leading-relaxed mb-6 max-w-sm">
            Curating exceptional digital experiences for modern brands. Simplified Tech, Significant Impact.
          </p>
          <p className="font-body text-sm text-on-surface-variant/70">
            © {new Date().getFullYear()} Shallavar Technologies (shallavar.in). All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-headline font-bold mb-4 text-on-surface text-sm uppercase tracking-wider">Pages</h4>
          <ul className="space-y-3">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold mb-4 text-on-surface text-sm uppercase tracking-wider">Connect</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:hello@shallavar.in"
                className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block"
              >
                hello@shallavar.in
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/shallavar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shallavar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200 block"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
