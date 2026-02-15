import { Metadata } from "next";
import { skills, tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills | Rupali Gera",
  description:
    "Skills and tools used by Rupali Gera - Content Writer & Strategist specializing in SEO, content strategy, and technical writing.",
};

export default function SkillsPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Skills & Tools
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            The skills I&apos;ve developed and tools I use to create impactful
            content.
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Core Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Tools I Work With
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Project Management */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
                Project Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.projectManagement.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CMS */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
                CMS & Marketing
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.cms.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Design */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-pink-600 dark:text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
                Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.design.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600 dark:text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
                Analytics & SEO
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.analytics.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Skills */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Additional Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "B2B SaaS Content",
              "Fintech Writing",
              "E-commerce Content",
              "Technical Writing",
              "UX Writing",
              "Email Marketing",
              "Newsletter Writing",
              "Social Media Content",
              "Content Audits",
              "Content Calendars",
              "Brand Voice Development",
              "Audience Research",
              "Competitor Analysis",
              "Content Repurposing",
              "AI-Assisted Writing",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
