'use client';

import Link from "next/link";

export default function EventiPrivati() {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="bg-gray-900 border-b border-gray-800 py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 font-sans">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Eventi Privati</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container-custom text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="mb-6 text-white font-display">DJ per compleanni, anniversari, aziendali</h1>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trovare il "centro" della festa entro tre brani.<br />
            Poi mantenerlo.
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="font-display text-center mb-16 text-white">Formato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="font-display text-white mb-4">18/30/40 e anniversari</h3>
              <p className="font-sans text-gray-400 leading-relaxed">Set flessibile, momenti parlati chiari.</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-display text-white mb-4">Aziendali</h3>
              <p className="font-sans text-gray-400 leading-relaxed">Volumi controllati, finestre speech, transizioni pulite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa porto */}
      <section className="py-20 bg-black">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-center mb-12 text-white">Dotazione</h2>
          <div className="bg-gray-900 border border-gray-800 p-8 md:p-10 rounded-2xl">
            <p className="font-sans text-gray-300 leading-relaxed mb-6">
              Consolle, impianto dimensionato, microfoni, luci base.
            </p>
            <div>
              <h3 className="font-display text-white font-semibold mb-3 text-sm">Extra</h3>
              <p className="font-sans text-gray-400 leading-relaxed">
                uplighting, seconda postazione, sax live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Come lavoro */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Come lavoro</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">1</div>
              <h3 className="text-white mb-2 uppercase tracking-wide text-xs">Brief rapido</h3>
              <p className="text-gray-400 text-sm">Capiamo tipo di evento e atmosfera desiderata</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">2</div>
              <h3 className="text-white mb-2 uppercase tracking-wide text-xs">Paletti musicali</h3>
              <p className="text-gray-400 text-sm">Definiamo generi e brani chiave</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">3</div>
              <h3 className="text-white mb-2 uppercase tracking-wide text-xs">Orari definiti</h3>
              <p className="text-gray-400 text-sm">Timeline e timing dell'evento</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">4</div>
              <h3 className="text-white mb-2 uppercase tracking-wide text-xs">Richieste live</h3>
              <p className="text-gray-400 text-sm">Gli ospiti usano la mia app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="py-20 bg-black">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🏢</div>
            <h2 className="mb-6 text-white uppercase tracking-wider">Eventi Corporate</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Sfilate, presentazioni prodotto, cocktail aziendali. Professionalità, discrezione e adattamento al contesto.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-8 md:p-10 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">Tipologie</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Sfilate moda</li>
                  <li>• Presentazioni prodotto</li>
                  <li>• Cocktail aziendali</li>
                  <li>• Inaugurazioni</li>
                  <li>• Gala e charity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">Approccio</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Musica di sottofondo calibrata, nessun elemento invasivo, coordinamento con agenzia/organizzatore, backup sempre previsto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="font-display mb-6 text-white">Chiedi un preventivo</h2>
          <p className="font-sans text-gray-400 mb-10 leading-relaxed">
            Ogni evento è diverso. Raccontami la tua idea e ti preparo una proposta chiara.
          </p>
          <Link
            href="/contatti"
            className="font-sans inline-block bg-accent hover:bg-accent-hover text-white px-12 py-4 rounded-full font-semibold transition-colors uppercase tracking-wider text-sm"
          >
            Contattami ora
          </Link>
        </div>
      </section>
    </div>
  );
}
