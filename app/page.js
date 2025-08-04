import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 sm:px-16 lg:px-32">
        {/* Soft pink radial gradients */}
        <div className="pointer-events-none select-none absolute -top-32 -left-32 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-pink-200 opacity-40 blur-3xl z-0" />
        <div className="pointer-events-none select-none absolute -bottom-32 -right-32 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-pink-100 opacity-40 blur-3xl z-0" />
        <div className="relative w-full max-w-3xl space-y-8 text-left z-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent leading-tight break-words">
              Winnie Zhang
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold leading-relaxed">
              developer & designer
            </p>
            <p className="text-base sm:text-lg text-gray-700 font-medium mt-2">
              currently a SWE Intern @ U.S. Bank + studying CS @ Georgia Tech
            </p>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 px-8 sm:px-16 lg:px-32 bg-gradient-to-br from-rose-50 to-pink-100"
      >
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <a href="https://winniezhangg.github.io/ML-credit-card-fraud-detection/">
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
                    Machine learning models to detect fraudulent transactions
                    with 99.9% accuracy
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
            {/* Project Card 2 */}
            <a href="https://winniezhangdesigns.webflow.io/projects/angels-among-us">
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
            {/* Project Card 3 - Placeholder */}
            <a href="https://winniezhangdesigns.webflow.io/projects/gt-scheduler">
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
          </div>
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <svg
                className="w-5 h-5 ml-2"
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
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-100">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-32 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 font-medium">© 2025 Winnie Zhang</p>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:wzhang710@gatech.edu"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://linkedin.com/in/winniezhang710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/winniezhangg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
