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
            <Link href="https://winniezhangg.github.io/ML-credit-card-fraud-detection/" target="_blank">
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
            </Link>
            {/* Project Card 2 */}
            <Link href="https://winniezhangdesigns.webflow.io/projects/gt-scheduler" target="_blank">
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
            </Link>
            
            {/* Project Card 3 */}
            <Link href="https://winniezhangdesigns.webflow.io/projects/angels-among-us" target="_blank">
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
            </Link>
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
    </main>
  );
}
