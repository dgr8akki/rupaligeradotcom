"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/work",
    label: "Work",
    submenu: [
      { href: "/work/blogs", label: "Blogs" },
      { href: "/work/documentation", label: "Documentation" },
      { href: "/work/case-studies", label: "Case Studies" },
      { href: "/work/how-to-guides", label: "How to Guides" },
      { href: "/work/lead-magnets", label: "Lead Magnets" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-zinc-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      className="inline-block ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 py-2 animate-fadeIn">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800 animate-fadeIn">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => !item.submenu && setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
