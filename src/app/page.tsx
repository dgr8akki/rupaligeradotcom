import Link from "next/link";
import { siteConfig, workCategories, workSamples, services } from "@/lib/data";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  const featuredWork = workSamples.slice(0, 3);

  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-rose-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slideUp">
              <p className="text-violet-600 dark:text-violet-400 font-medium mb-4">
                👋 Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                {siteConfig.name}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-4">
                {siteConfig.title}
              </p>
              <p className="text-zinc-500 dark:text-zinc-500 mb-8">
                {siteConfig.tagline}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
                6+ years of experience helping brands tell clearer stories,
                connect with the right audiences, and drive meaningful results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors"
                >
                  View My Work
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="relative animate-slideUp hidden md:block">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-rose-400 rounded-full blur-3xl opacity-20" />
                <div className="relative w-full h-full bg-gradient-to-br from-violet-100 to-rose-100 dark:from-zinc-800 dark:to-zinc-700 rounded-full flex items-center justify-center border-4 border-white dark:border-zinc-800 shadow-xl">
                  <span className="text-8xl">✍️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              I help businesses communicate better through strategic content
              that drives results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-700"
              >
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center mb-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              My Work
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Explore my portfolio across different content categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/work/${category.slug}`}
                className="group p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-700"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                Featured Work
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Some of my recent projects and content pieces.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors"
            >
              View All
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors"
            >
              View All Work
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Looking for someone who can turn complex ideas into clear, engaging
            content? I&apos;d love to hear about your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors text-lg"
          >
            Get in Touch
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
