import { Metadata } from "next";
import { experience, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience | Rupali Gera",
  description:
    "Professional experience and career journey of Rupali Gera - Content Writer & Strategist with 6+ years of experience.",
};

export default function ExperiencePage() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My professional journey through content writing, strategy, and
            digital marketing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-violet-200 dark:bg-violet-900" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-600 dark:bg-violet-400 rounded-full border-4 border-white dark:border-zinc-950 z-10" />

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                  } pl-8 md:pl-0`}
                >
                  <div
                    className={`p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-700 transition-colors ${
                      index % 2 === 0 ? "" : "md:ml-auto"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <span className="px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/30 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">
                      {exp.period} • {exp.location}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="max-w-lg mx-auto">
            <div className="p-8 bg-gradient-to-br from-violet-50 to-rose-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center shadow-sm">
                  <svg
                    className="w-8 h-8 text-violet-600 dark:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium">
                    {education.institution}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                    {education.period}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "6+" },
            { label: "Companies Worked", value: "8+" },
            { label: "Industries", value: "4+" },
            { label: "Content Pieces", value: "500+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
            >
              <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                {stat.value}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
