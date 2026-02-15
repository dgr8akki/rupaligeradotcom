import { Metadata } from "next";
import Link from "next/link";
import {
  siteConfig,
  services,
  certifications,
  languages,
  education,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Rupali Gera",
  description:
    "Learn more about Rupali Gera - Content Writer & Strategist with 6+ years of experience in B2B SaaS, fintech, tech, and e-commerce.",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-rose-400 rounded-2xl blur-3xl opacity-20" />
              <div className="relative aspect-square bg-gradient-to-br from-violet-100 to-rose-100 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl flex items-center justify-center border-4 border-white dark:border-zinc-800 shadow-xl">
                <span className="text-9xl">✍️</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
              {siteConfig.title}
            </p>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              {siteConfig.summary.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-zinc-600 dark:text-zinc-400 mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg transition-colors"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-violet-600 dark:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
              Education
            </h2>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-violet-600 dark:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400">
                    {education.institution}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                    {education.period}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Languages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <p className="font-semibold text-zinc-900 dark:text-white">
                  {lang.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="text-center py-12 bg-gradient-to-r from-violet-50 to-rose-50 dark:from-zinc-900 dark:to-zinc-900 rounded-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              className="w-6 h-6 text-violet-600 dark:text-violet-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-zinc-600 dark:text-zinc-400">Based in</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">
            {siteConfig.location}
          </p>
        </section>
      </div>
    </div>
  );
}
