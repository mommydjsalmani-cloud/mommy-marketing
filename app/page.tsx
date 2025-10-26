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
          <h1 className="mb-6 max-w-4xl mx-auto text-white uppercase tracking-wide">
            Leggende di Mare
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Nato da pescatori, stregato dal mare, rapito dalla musica.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Credo che il mare sia un luogo interiore ed esteriore. Esploro il mare che c'è fuori, perché sono curioso. Esploro il mare che le persone hanno dentro, per conoscere le loro emozioni. La musica è ciò che mi permettere di fare tutto questo.
          </p>
          <a
            href="#about"
            className="inline-block border-2 border-accent hover:bg-accent text-white px-12 py-4 rounded-full font-semibold transition-all uppercase tracking-wider text-sm"
          >
            Scopri come diventare DJ Producer
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
          <h2 className="mb-4 text-white uppercase tracking-wider">Aperitivo Vista Mare</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Liberi di volare, di crescere e di prendere forma. Sappiamo che quando questa piccola parte sarà cresciuta sarà diventata Grande, allora, solo allora... con tutta la sua esperienza sarà capace di compiere grandi azioni, perfino di zittire chi non ha mai creduto in Lei.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            In questo spazio racconto pensieri, parole e sogni non solo della mia vita ma anche dell'immaginazione. Racconto la mia storia e di come sono riuscito a sconfiggere le innumerevoli difficoltà e se non ti saranno d'aiuto, almeno lo faccio per me stesso.
          </p>
          <Link
            href="/contatti"
            className="inline-block border-2 border-accent hover:bg-accent text-white px-10 py-3 rounded-full font-semibold transition-all uppercase tracking-wider text-sm"
          >
            Connettiti
          </Link>
        </div>
      </section>

      {/* 3. Video Section */}
      <section id="video" className="py-20 bg-black">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12 text-white uppercase tracking-wider">Guarda il video</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/matrimoni" className="group bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-accent hover:bg-gray-800/80 transition-all block">
              <div className="text-5xl mb-6">💍</div>
              <h3 className="mb-4 text-white uppercase tracking-wide">Matrimoni</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Musica per ogni momento: cerimonia, aperitivo, cena e party. Scaletta personalizzata dopo call conoscitiva.
              </p>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider group-hover:underline">Scopri di più →</span>
            </Link>

            <Link href="/eventi-privati" className="group bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-accent hover:bg-gray-800/80 transition-all block">
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="mb-4 text-white uppercase tracking-wide">Eventi Privati</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Compleanni 18/30/40, anniversari, feste aziendali. Setup flessibile e playlist su misura.
              </p>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider group-hover:underline">Scopri di più →</span>
            </Link>

            <Link href="/eventi-privati#corporate" className="group bg-gray-800 border border-gray-700 p-8 rounded-xl hover:border-accent hover:bg-gray-800/80 transition-all block">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="mb-4 text-white uppercase tracking-wide">Corporate</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Feste aziendali, team building, inaugurazioni. Professionalità e discrezione.
              </p>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider group-hover:underline">Scopri di più →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Recensioni - 3 Box */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Dicono di me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                &quot;Professionale, attento e con un gusto musicale perfetto. Tutti hanno ballato!&quot;
              </p>
              <p className="font-semibold text-white">Maria & Luca</p>
              <p className="text-xs text-gray-500">Milano, 2024</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                &quot;Ha capito subito cosa volevamo. La festa è stata un successo totale.&quot;
              </p>
              <p className="font-semibold text-white">Giulia R.</p>
              <p className="text-xs text-gray-500">Roma, 2024</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6 italic text-sm leading-relaxed">
                &quot;Consigliatissimo! Musica sempre azzeccata e attenzione ai dettagli.&quot;
              </p>
              <p className="font-semibold text-white">Marco S.</p>
              <p className="text-xs text-gray-500">Firenze, 2023</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/recensioni" className="text-accent hover:underline font-semibold text-sm uppercase tracking-wider">
              Leggi tutte le recensioni →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contatto Rapido */}
      <section id="contatto-rapido" className="py-20 bg-gray-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-12 text-white uppercase tracking-wider">Contatto rapido</h2>
          <div className="bg-gray-800 border border-gray-700 p-8 md:p-10 rounded-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-gray-300 mb-2">
                    Data evento
                  </label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="es. Milano"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
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
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-300 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500"
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
          <div className="mt-10 text-center p-8 bg-gray-800/50 border-2 border-accent border-dashed rounded-xl">
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


