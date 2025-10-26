import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section - Full Width con immagine overlay */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10"></div>
        
        {/* Placeholder per immagine di sfondo - sostituire con vera immagine */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* TODO: Aggiungere immagine reale del DJ */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="text-9xl">🎧</span>
          </div>
        </div>

        <div className="container-custom text-center relative z-20 px-4">
          <h1 className="mb-6 max-w-4xl mx-auto text-white">
            DJ per matrimoni ed eventi in Italia e Svizzera
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Musica su misura. Coordinamento semplice.
          </p>
          
          {/* Bullet rapidi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">20</div>
              <div className="text-xs md:text-sm text-gray-400">anni dietro alla consolle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">5</div>
              <div className="text-xs md:text-sm text-gray-400">anni su matrimoni</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">🇮🇹🇨🇭</div>
              <div className="text-xs md:text-sm text-gray-400">Italia e Svizzera</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">📱</div>
              <div className="text-xs md:text-sm text-gray-400">App richieste live</div>
            </div>
          </div>

          <a
            href="#contatto-rapido"
            className="inline-block border-2 border-accent hover:bg-accent text-white px-12 py-4 rounded-full font-semibold transition-all uppercase tracking-wider text-sm"
          >
            Verifica disponibilità
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. Chi sono - Short Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-8 text-white uppercase tracking-wider">Chi sono</h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            Sono <strong className="text-white">Mommy DJ</strong>.
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed">
            DJ & Music Planner per matrimoni ed eventi privati.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Gestisco musica, tempi e coordinamento con planner, band e fornitori. Uso la mia web app per richieste in tempo reale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/matrimoni" className="text-accent hover:underline font-semibold uppercase tracking-wide text-sm">
              Matrimoni →
            </Link>
            <Link href="/eventi-privati" className="text-accent hover:underline font-semibold uppercase tracking-wide text-sm">
              Eventi Privati →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Video Section */}
      <section id="video" className="py-20 bg-black">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-4 text-white uppercase tracking-wider">Video highlight</h2>
          <p className="text-center text-gray-400 mb-12">60 secondi: momenti chiave e dancefloor</p>
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-lg">Video presentazione 60 secondi</p>
                <p className="text-sm text-gray-500 mt-2">(Placeholder - inserire video vero)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cosa faccio - 3 Cards */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Cosa faccio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/matrimoni" className="group bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-accent hover:bg-gray-800/80 transition-all block">
              <div className="text-5xl mb-6">💍</div>
              <h3 className="mb-4 text-white uppercase tracking-wide">Matrimoni</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Cerimonia, aperitivo, cena, party. Gestione completa di tutte le fasi.
              </p>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider group-hover:underline">Scopri di più →</span>
            </Link>

            <Link href="/eventi-privati" className="group bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-accent hover:bg-gray-800/80 transition-all block">
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="mb-4 text-white uppercase tracking-wide">Eventi Privati</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                18/30/40, anniversari, feste aziendali. Setup flessibile e playlist su misura.
              </p>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider group-hover:underline">Scopri di più →</span>
            </Link>

            <Link href="/eventi-privati#corporate" className="group bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-accent hover:bg-gray-800/80 transition-all block">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="mb-4 text-white uppercase tracking-wide">Corporate</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Sfilate, presentazioni, cocktail. Professionalità e discrezione.
              </p>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider group-hover:underline">Scopri di più →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Processo - 4 Step */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Come lavoriamo</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-white mb-3 uppercase tracking-wide text-sm">Contatto</h3>
              <p className="text-gray-400 text-sm">Primo contatto e verifica disponibilità</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-white mb-3 uppercase tracking-wide text-sm">Call 20'</h3>
              <p className="text-gray-400 text-sm">Conosciamoci e definiamo lo stile</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-white mb-3 uppercase tracking-wide text-sm">Playlist & Timeline</h3>
              <p className="text-gray-400 text-sm">Playlist condivisa e timing evento</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-white mb-3 uppercase tracking-wide text-sm">Evento</h3>
              <p className="text-gray-400 text-sm">Setup, regia e divertimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recensioni - 3 Box */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Dicono di me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                &quot;Pista sempre piena. Professionale dall'inizio alla fine.&quot;
              </p>
              <p className="font-semibold text-white">Sara & Marco</p>
              <p className="text-xs text-gray-500">Como, 2024</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                &quot;Organizzazione e musica perfette. Coordinamento impeccabile.&quot;
              </p>
              <p className="font-semibold text-white">Giulia & Luca</p>
              <p className="text-xs text-gray-500">Milano, 2024</p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                &quot;Ha gestito tutto senza stress. Lo richiameremo sicuramente.&quot;
              </p>
              <p className="font-semibold text-white">Francesca & Andrea</p>
              <p className="text-xs text-gray-500">Lugano, 2023</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/recensioni" className="text-accent hover:underline font-semibold text-sm uppercase tracking-wider">
              Leggi tutte le recensioni →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Contatto Rapido */}
      <section id="contatto-rapido" className="py-20 bg-black">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-12 text-white uppercase tracking-wider">Contatto rapido</h2>
          <div className="bg-gray-900 border border-gray-800 p-8 md:p-10 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome e cognome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-gray-300 mb-2">
                    Data evento
                  </label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="ospiti" className="block text-sm font-medium text-gray-300 mb-2">
                    N. ospiti
                  </label>
                  <input
                    type="number"
                    id="ospiti"
                    name="ospiti"
                    placeholder="es. 100"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="es. Como, Milano..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-300 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Raccontami del tuo evento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-colors uppercase tracking-wider text-sm"
              >
                Invia richiesta
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4 text-sm">oppure scrivimi direttamente</p>
              <a
                href="https://wa.me/391234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors text-sm uppercase tracking-wider"
              >
                <span className="text-xl">💬</span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Richiedi un brano */}
          <div className="mt-10 text-center p-8 bg-gray-900/50 border-2 border-accent border-dashed rounded-xl">
            <p className="text-lg mb-4 text-white">Hai una canzone del cuore?</p>
            <Link
              href="/richiedi"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-3 rounded-full font-semibold transition-colors uppercase tracking-wider text-sm"
            >
              Richiedi un brano →
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              {/* TODO: Collegare l'app richieste a /richiedi via Vercel Domain Path o rewrites */}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
