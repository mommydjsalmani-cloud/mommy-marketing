'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import FocusTrap from 'focus-trap-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/matrimoni', label: 'Matrimoni' },
    { href: '/eventi-privati', label: 'Eventi Privati' },
    { href: '/recensioni', label: 'Recensioni' },
    { href: '/contatti', label: 'Contatti' },
  ];

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-1px 0px 0px 0px',
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Gestione overlay: scroll lock, Esc, click esterno
  useEffect(() => {
    if (isMenuOpen) {
      // Blocca scroll
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Chiusura con Esc
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  // Click esterno per chiudere (solo sul backdrop, non sul contenuto)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sentinel - 1px sopra l'hero */}
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-px pointer-events-none" aria-hidden="true" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800 py-3 md:py-4'
            : 'bg-transparent backdrop-blur-md py-4 md:py-6'
        }`}
      >
        <nav className="container-custom" aria-label="Navigazione principale">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity relative z-10">
              <Image
                src="/Logo_Bianco.png"
                alt="Mommy DJ Logo"
                width={160}
                height={45}
                priority
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-accent transition-colors font-sans font-medium text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contatto-rapido"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-sans font-semibold transition-colors text-sm uppercase tracking-wide"
              >
                Verifica disponibilità
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-200 focus:outline-none focus:ring-2 focus:ring-accent rounded p-2 relative z-10"
              aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-7 h-7 transition-transform duration-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <FocusTrap
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            escapeDeactivates: true,
          }}
        >
          <div
            ref={overlayRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione mobile"
            className="fixed inset-0 z-40 lg:hidden animate-fadeIn"
            onClick={handleBackdropClick}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col animate-scaleIn">
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                {/* Close button - accessibile */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent rounded p-2 transition-colors"
                  aria-label="Chiudi menu"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Menu Items */}
                <nav className="flex-1 flex flex-col justify-center space-y-6" role="navigation" aria-label="Menu principale mobile">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-3xl font-display text-white hover:text-accent focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded px-4 py-2 transition-colors uppercase tracking-wider text-center"
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        animation: `slideIn 0.3s ease-out ${index * 0.08}s both`,
                      }}
                      tabIndex={0}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA Mobile */}
                <div className="mt-8">
                  <a
                    href="#contatto-rapido"
                    className="block w-full bg-accent hover:bg-accent-hover focus:bg-accent-hover text-white px-8 py-4 rounded-full font-sans font-bold text-center transition-all text-lg uppercase tracking-wide focus:outline-none focus:ring-4 focus:ring-accent/50"
                    onClick={() => setIsMenuOpen(false)}
                    tabIndex={0}
                  >
                    Verifica disponibilità
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 justify-center mt-8 pt-8 border-t border-gray-800">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent focus:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded p-2"
                    aria-label="Segui su Facebook"
                    tabIndex={0}
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent focus:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded p-2"
                    aria-label="Segui su Instagram"
                    tabIndex={0}
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FocusTrap>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}
