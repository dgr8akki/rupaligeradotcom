import Image from "next/image";
import { WorkSample } from "@/lib/data";

interface WorkCardProps {
  work: WorkSample;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-zinc-200 dark:border-zinc-700">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {work.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
          {work.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
