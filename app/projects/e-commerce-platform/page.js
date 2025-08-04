import Link from 'next/link';

export default function ECommercePlatform() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            E-Commerce Platform
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            A modern e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and secure payment processing.
          </p>
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-800">Key Features:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>User authentication and authorization</li>
              <li>Product catalog with search and filtering</li>
              <li>Shopping cart and checkout system</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Stripe</span>
          </div>
          <div className="flex gap-4 mb-8">
            <span className="inline-flex items-center justify-center px-6 py-3 bg-gray-300 text-gray-600 font-medium rounded-full">
              Coming Soon
            </span>
          </div>
          <Link href="/projects" className="text-blue-600 hover:underline">← Back to Projects</Link>
        </section>
      </div>
    </main>
  );
} 