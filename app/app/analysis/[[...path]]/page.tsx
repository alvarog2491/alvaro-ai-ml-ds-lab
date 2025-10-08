import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface AnalysisPageProps {
  params: Promise<{
    path?: string[];
  }>;
}

export default async function AnalysisPage({ params }: AnalysisPageProps) {
  const resolvedParams = await params;
  const pathSegments = resolvedParams.path || [];

  // Construct the file path
  const relativePath = pathSegments.join('/');
  const filePath = path.join(process.cwd(), '..', relativePath);

  // Security check: ensure the path is within the project directory
  const projectRoot = path.join(process.cwd(), '..');
  const resolvedPath = path.resolve(filePath);

  if (!resolvedPath.startsWith(projectRoot)) {
    notFound();
  }

  // Check if file exists and is an HTML file
  if (!fs.existsSync(resolvedPath) || !resolvedPath.endsWith('.html')) {
    notFound();
  }

  // Read the HTML file
  const htmlContent = fs.readFileSync(resolvedPath, 'utf-8');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-800 text-white px-4 py-3 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* HTML Content */}
      <div className="max-w-7xl mx-auto">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="analysis-content"
        />
      </div>
    </div>
  );
}
