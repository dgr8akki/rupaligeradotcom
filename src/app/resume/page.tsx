import { Metadata } from "next";
import Link from "next/link";
import {
  siteConfig,
  experience,
  education,
  skills,
  certifications,
  languages,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume | Rupali Gera",
  description:
    "View and download the resume of Rupali Gera - Content Writer & Strategist with 6+ years of experience.",
};

export default function ResumePage() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">
              Resume
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              View my professional background and experience
            </p>
          </div>
          <a
            href="/Profile (1).pdf"
            download="Rupali_Gera_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-8">
            <h2 className="text-3xl font-bold mb-2">{siteConfig.name}</h2>
            <p className="text-violet-100 text-lg mb-4">{siteConfig.title}</p>
            <div className="flex flex-wrap gap-4 text-sm text-violet-100">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.email}
              </span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="p-8">
            {/* Summary */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                Professional Summary
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Content writer and strategist with 6+ years of experience helping brands tell clearer stories, connect with the right audiences, and drive meaningful results. Experienced in B2B SaaS, fintech, tech, and e-commerce. Skilled in content strategy, SEO, brand messaging, and CRM workflows.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.slice(0, 6).map((exp, index) => (
                  <div key={index}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <p className="text-violet-600 dark:text-violet-400 text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-500 text-sm whitespace-nowrap">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <section>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                  Education
                </h3>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    {education.degree}
                  </h4>
                  <p className="text-violet-600 dark:text-violet-400 text-sm">
                    {education.institution}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                    {education.period}
                  </p>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                  Languages
                </h3>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {lang.name}
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-500">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Certifications */}
            <section className="mt-8">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
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
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Interested in working together?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
