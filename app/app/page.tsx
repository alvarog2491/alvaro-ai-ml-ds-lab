import Link from 'next/link';
import { projects, getAllCategories } from '@/lib/projects';

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-slate-900">
            AI, ML & Data Science Lab
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Explore statistical analyses, machine learning projects, and data science experiments
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category) => {
          const categoryProjects = projects.filter(p => p.category === category);

          return (
            <section key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/analysis${project.htmlPath}`}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border border-slate-200 hover:scale-[1.02]"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <svg
                          className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>

                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-xs text-slate-500">
                        {project.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-slate-600">
            Álvaro Granados Villodre - AI, ML & Data Science Lab
          </p>
        </div>
      </footer>
    </div>
  );
}
