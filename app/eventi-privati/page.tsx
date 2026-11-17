'use client';

import Link from "next/link";
import ServiceIcon from "../components/ServiceIcon";
import EquipmentBlock from "../components/EquipmentBlock";

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
      <section className="relative py-16 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container-custom text-center px-4">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 text-accent">
            <ServiceIcon name="party" />
          </div>
          <h1 className="mb-4 md:mb-6 text-white font-display">DJ per compleanni, anniversari, aziendali</h1>
          <p className="font-sans text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            DJ set per compleanni, anniversari, feste ed eventi aziendali.<br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Definiamo insieme musica, tempi e impianto in base al luogo e agli ospiti.</span>
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="py-12 md:py-20 bg-gray-900">
        <div className="container-custom px-4">
          <h2 className="font-display text-center mb-8 md:mb-16 text-white">Formato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="w-12 h-12 text-accent mb-4">
                <ServiceIcon name="cake" />
              </div>
              <h3 className="font-display text-white mb-4">18/30/40 e anniversari</h3>
              <p className="font-sans text-gray-400 leading-relaxed">Set flessibile, momenti parlati chiari.</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="w-12 h-12 text-accent mb-4">
                <ServiceIcon name="office" />
              </div>
              <h3 className="font-display text-white mb-4">Aziendali</h3>
              <p className="font-sans text-gray-400 leading-relaxed">Volumi controllati, finestre speech, transizioni pulite.</p>
            </div>
          </div>
        </div>
      </section>

      <EquipmentBlock eventType="private" />

      {/* Come lavoro */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Come lavoro</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-strong text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">1</div>
              <h3 className="text-white mb-2 uppercase tracking-wide text-xs">Brief rapido</h3>
              <p className="text-gray-400 text-sm">Capiamo tipo di evento e atmosfera desiderata</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-strong text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">2</div>
              <h3 className="text-white mb-2 uppercase tracking-wide text-xs">Paletti musicali</h3>
              <p className="text-gray-400 text-sm">Definiamo generi e brani chiave</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-strong text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">3</div>
              <h3 className="text-white mb-2 uppercase tracking-wide text-xs">Orari definiti</h3>
              <p className="text-gray-400 text-sm">Timeline e timing dell&apos;evento</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-strong text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">4</div>
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
            <div className="w-16 h-16 mx-auto mb-6 text-accent">
              <ServiceIcon name="office" />
            </div>
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
      <section className="py-12 md:py-20 bg-gray-900">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="font-display mb-4 md:mb-6 text-white px-4">Chiedi un preventivo</h2>
          <p className="font-sans text-gray-400 mb-8 md:mb-10 leading-relaxed px-4">
            Ogni evento è diverso. Raccontami la tua idea e ti preparo una proposta chiara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <Link
              href="/contatti#modulo"
              className="font-sans inline-block w-full sm:w-auto bg-gradient-to-r from-accent-strong to-accent-hover hover:from-accent-hover hover:to-accent-strong text-white px-10 md:px-12 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-wider text-sm shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Chiedi disponibilità
            </Link>
            <a
              href="https://wa.me/393462122933"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-block w-full sm:w-auto bg-gradient-to-r from-accent-strong to-accent-hover hover:from-accent-hover hover:to-accent-strong text-white px-10 md:px-12 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-wider text-sm shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Scrivimi su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
