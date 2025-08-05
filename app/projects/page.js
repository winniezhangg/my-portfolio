import Link from 'next/link';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        
        {/* Page Header */}
        <section className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 leading-tight">
            My Projects
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A collection of different dev and design projects I have worked on throughout the years.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project Card 1 - Credit Card Fraud Detection */}
          <a href="https://winniezhangg.github.io/ML-credit-card-fraud-detection/" target="_blank">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    Credit Card Fraud Detection
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Dev
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Machine learning models to detect fraudulent transactions with 99.9% accuracy
                </p>
                <div className="flex items-center pt-2 space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Python
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    ML
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Pandas
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project Card 2 - GT Scheduler */}
          <a href="https://winniezhangdesigns.webflow.io/projects/gt-scheduler" target="_blank">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    GT Scheduler
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Design
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  New feature for a scheduling tool used by 50k+ Georgia Tech students annually
                </p>
                <div className="flex items-center pt-2 space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    UI/UX
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project Card 3 - Angels Among Us */}
          <a href="https://winniezhangdesigns.webflow.io/projects/angels-among-us" target="_blank">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    Angels Among Us
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Design
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Streamlining the foster dog application process for volunteers by creating a foster matching application
                </p>
                <div className="flex items-center pt-2 space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    UI/UX
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project Card 4 - Tech Dining */}
          <a href="https://winniezhangdesigns.webflow.io/projects/techeats-dining" target="_blank">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    Tech Dining
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Design
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Case study researching and designing an efficient application for exploring dining options around Georgia Tech
                </p>
                <div className="flex items-center pt-2 space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    UI/UX
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </a>

        </section>

        {/* Back to Home */}
        <section className="text-center mt-20">
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 border border-pink-600 text-pink-600 hover:bg-pink-50 font-medium rounded-full transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
        </section>

      </div>
    </main>
  );
} 