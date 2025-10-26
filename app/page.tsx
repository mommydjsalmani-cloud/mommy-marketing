import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creiamo Momenti Indimenticabili
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Matrimoni ed eventi privati su misura, curati in ogni dettaglio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contattaci
            </Link>
            <Link
              href="/matrimoni"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            I Nostri Servizi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/matrimoni"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-2xl font-bold mb-3">Matrimoni</h3>
              <p className="text-gray-600">
                Il tuo giorno speciale merita un&apos;organizzazione perfetta. Ci occupiamo di ogni dettaglio.
              </p>
            </Link>

            <Link
              href="/eventi-privati"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3">Eventi Privati</h3>
              <p className="text-gray-600">
                Compleanni, anniversari, feste aziendali: rendiamo speciale ogni occasione.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a Organizzare il Tuo Evento?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci oggi per una consulenza gratuita e inizia a pianificare il tuo evento da sogno.
          </p>
          <Link
            href="/contatti"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Richiedi Preventivo
          </Link>
        </div>
      </section>
    </div>
  );
}

