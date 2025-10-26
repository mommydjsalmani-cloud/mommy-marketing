import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Mommy Events</h3>
            <p className="text-gray-400">
              Organizziamo matrimoni ed eventi privati indimenticabili con passione e professionalità.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/matrimoni" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Matrimoni
                </Link>
              </li>
              <li>
                <Link href="/eventi-privati" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Eventi Privati
                </Link>
              </li>
              <li>
                <Link href="/recensioni" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Recensioni
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@mommyevents.it</li>
              <li>Tel: +39 123 456 7890</li>
              <li>Indirizzo: Via Example, 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mommy Events. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
