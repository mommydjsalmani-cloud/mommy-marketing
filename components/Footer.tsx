import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Mommy DJ</h3>
            <p className="text-gray-400">
              DJ professionista per matrimoni, eventi privati e feste. Musica di qualità per rendere il tuo evento indimenticabile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/matrimoni" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Matrimoni
                </Link>
              </li>
              <li>
                <Link href="/eventi-privati" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Eventi Privati
                </Link>
              </li>
              <li>
                <Link href="/recensioni" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Recensioni
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@mommydj.com</li>
              <li>Tel: +39 123 456 7890</li>
              <li>
                <Link 
                  href="/richiedi" 
                  className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-semibold"
                >
                  Verifica disponibilità
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mommy DJ. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
