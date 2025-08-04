import Link from 'next/link';

export default function Project4() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Project 4
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            A sample project to demonstrate additional portfolio entries.
          </p>
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-800">Key Features:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Next.js</span>
          </div>
          <div className="flex gap-4 mb-8">
            <span className="inline-flex items-center justify-center px-6 py-3 bg-gray-300 text-gray-600 font-medium rounded-full">
              Demo Only
            </span>
          </div>
          <Link href="/projects" className="text-yellow-600 hover:underline">← Back to Projects</Link>
        </section>
      </div>
    </main>
  );
} 