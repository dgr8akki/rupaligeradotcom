import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-md">
              {siteConfig.title} helping brands tell clearer stories, connect
              with the right audiences, and drive meaningful results.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/work", label: "Work" },
                { href: "/experience", label: "Experience" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Categories */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Work
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/work/blogs", label: "Blogs" },
                { href: "/work/documentation", label: "Documentation" },
                { href: "/work/case-studies", label: "Case Studies" },
                { href: "/work/how-to-guides", label: "How to Guides" },
                { href: "/work/lead-magnets", label: "Lead Magnets" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-zinc-500 dark:text-zinc-500 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
