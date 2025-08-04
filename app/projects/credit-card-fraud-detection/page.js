import Link from 'next/link';

export default function CreditCardFraudDetection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">
            Credit Card Fraud Detection
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Developed machine learning models to detect fraudulent credit card transactions with high accuracy. Implemented Logistic Regression, K-Nearest Neighbors, and Decision Tree algorithms, achieving up to 99.9% accuracy.
          </p>
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-800">Key Features:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Multiple ML algorithms comparison</li>
              <li>99.9% accuracy in fraud detection</li>
              <li>Comprehensive data analysis and visualization</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Scikit-learn</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Pandas</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Matplotlib</span>
          </div>
          <div className="flex gap-4 mb-8">
            <a
              href="https://winniezhangg.github.io/ML-credit-card-fraud-detection/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">View Live Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <Link href="/projects" className="text-pink-600 hover:underline">← Back to Projects</Link>
        </section>
      </div>
    </main>
  );
} 