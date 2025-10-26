'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Mommy DJ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/matrimoni" className="text-gray-700 hover:text-purple-600 transition-colors">
              Matrimoni
            </Link>
            <Link href="/eventi-privati" className="text-gray-700 hover:text-purple-600 transition-colors">
              Eventi Privati
            </Link>
            <Link href="/recensioni" className="text-gray-700 hover:text-purple-600 transition-colors">
              Recensioni
            </Link>
            <Link href="/contatti" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contatti
            </Link>
            <Link
              href="/richiedi"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-semibold"
            >
              Verifica disponibilità
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-purple-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/matrimoni"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Matrimoni
              </Link>
              <Link
                href="/eventi-privati"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Eventi Privati
              </Link>
              <Link
                href="/recensioni"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recensioni
              </Link>
              <Link
                href="/contatti"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contatti
              </Link>
              <Link
                href="/richiedi"
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Verifica disponibilità
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
