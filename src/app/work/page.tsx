import Link from "next/link";
import { Metadata } from "next";
import { workCategories, workSamples } from "@/lib/data";
import WorkCard from "@/components/WorkCard";

export const metadata: Metadata = {
  title: "Work | Rupali Gera",
  description:
    "Explore my portfolio of content writing work including blogs, documentation, case studies, how-to guides, and lead magnets.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function WorkPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            My Work
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            A collection of my content writing projects across different
            categories. Click on any category to explore the work samples.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {workCategories.map((category) => {
            const categoryWorks = workSamples.filter(
              (w) => w.category === category.slug
            );
            return (
              <Link
                key={category.slug}
                href={`/work/${category.slug}`}
                className="group p-8 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:bg-violet-50 dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-700"
              >
                <span className="text-5xl mb-6 block">{category.icon}</span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {category.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {category.description}
                </p>
                <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                  {categoryWorks.length} samples →
                </p>
              </Link>
            );
          })}
        </div>

        {/* All Work Section */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            All Work Samples
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workSamples.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
