'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-6 right-8 z-50">
      <div className="bg-white/40 backdrop-blur-lg border border-pink-100 rounded-full px-6 py-3 shadow-xl">
        <div className="flex items-center justify-end space-x-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 text-sm"
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 text-sm"
          >
            Projects
          </Link>
          <a
            href="/winniezhang_resume_bs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
