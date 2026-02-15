import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workCategories, workSamples } from "@/lib/data";
import WorkCard from "@/components/WorkCard";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return workCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = workCategories.find((c) => c.slug === category);

  if (!categoryData) {
    return {
      title: "Not Found | Rupali Gera",
    };
  }

  return {
    title: `${categoryData.title} | Rupali Gera`,
    description: categoryData.description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = workCategories.find((c) => c.slug === category);

  if (!categoryData) {
    notFound();
  }

  const categoryWorks = workSamples.filter((w) => w.category === category);

  return (
    <div className="bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-zinc-400 dark:text-zinc-600">/</li>
            <li>
              <Link
                href="/work"
                className="text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                Work
              </Link>
            </li>
            <li className="text-zinc-400 dark:text-zinc-600">/</li>
            <li className="text-zinc-900 dark:text-white font-medium">
              {categoryData.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <span className="text-6xl mb-6 block">{categoryData.icon}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            {categoryData.title}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            {categoryData.description}
          </p>
        </div>

        {/* Work Grid */}
        {categoryWorks.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">
              No work samples in this category yet.
            </p>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/work"
            className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to All Work
          </Link>
        </div>
      </div>
    </div>
  );
}
