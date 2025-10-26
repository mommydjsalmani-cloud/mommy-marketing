import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="mb-6 max-w-4xl mx-auto">
            La Musica Giusta per il Tuo Giorno Speciale
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            DJ professionista con oltre 10 anni di esperienza. Playlist personalizzate e regia impeccabile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contatto-rapido"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-colors inline-block text-center w-full sm:w-auto"
            >
              Verifica disponibilità
            </a>
            <a
              href="#video"
              className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-4 rounded-full font-semibold transition-colors inline-block text-center w-full sm:w-auto"
            >
              Guarda video 60s
            </a>
          </div>
        </div>
      </section>

      {/* 2. Chi sono - Short Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="mb-6">Chi sono</h2>
          <p className="text-gray-700 mb-4">
            Sono un DJ professionista specializzato in matrimoni ed eventi privati. La mia missione è creare l&apos;atmosfera perfetta per ogni momento della tua celebrazione.
          </p>
          <p className="text-gray-700 mb-6">
            Ascolto le tue esigenze, conosco i tuoi gusti musicali e costruisco una scaletta su misura che fa ballare tutti, dal primo all&apos;ultimo brano.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/matrimoni" className="text-accent hover:underline font-semibold">
              Servizio Matrimoni →
            </Link>
            <Link href="/eventi-privati" className="text-accent hover:underline font-semibold">
              Eventi Privati →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Video Section */}
      <section id="video" className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Guarda il video</h2>
          <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            {/* Video Placeholder - Replace with actual video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-lg">Video presentazione 60 secondi</p>
                <p className="text-sm text-gray-300 mt-2">(Placeholder - inserire video vero)</p>
              </div>
            </div>
            {/* TODO: Add video player with poster image */}
          </div>
        </div>
      </section>

      {/* 4. Cosa faccio - 3 Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Cosa faccio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Matrimoni Card */}
            <Link href="/matrimoni" className="card bg-white p-8 hover:shadow-2xl transition-shadow block">
              <div className="text-5xl mb-4">💍</div>
              <h3 className="mb-3">Matrimoni</h3>
              <p className="text-gray-600 mb-4">
                Musica per ogni momento: cerimonia, aperitivo, cena e party. Scaletta personalizzata dopo call conoscitiva di 20 minuti.
              </p>
              <span className="text-accent font-semibold">Scopri di più →</span>
            </Link>

            {/* Eventi Privati Card */}
            <Link href="/eventi-privati" className="card bg-white p-8 hover:shadow-2xl transition-shadow block">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="mb-3">Eventi Privati</h3>
              <p className="text-gray-600 mb-4">
                Compleanni 18/30/40, anniversari, feste aziendali. Setup flessibile e playlist su misura per i tuoi ospiti.
              </p>
              <span className="text-accent font-semibold">Scopri di più →</span>
            </Link>

            {/* Corporate Card */}
            <Link href="/eventi-privati#corporate" className="card bg-white p-8 hover:shadow-2xl transition-shadow block">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="mb-3">Corporate</h3>
              <p className="text-gray-600 mb-4">
                Feste aziendali, team building, inaugurazioni. Professionalità e discrezione per i tuoi eventi business.
              </p>
              <span className="text-accent font-semibold">Scopri di più →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Recensioni - 3 Box */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Dicono di me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Professionale, attento e con un gusto musicale perfetto. Tutti hanno ballato!&quot;
              </p>
              <p className="font-semibold">Maria & Luca</p>
              <p className="text-sm text-gray-500">Milano, 2024</p>
            </div>

            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Ha capito subito cosa volevamo. La festa è stata un successo totale.&quot;
              </p>
              <p className="font-semibold">Giulia R.</p>
              <p className="text-sm text-gray-500">Roma, 2024</p>
            </div>

            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Consigliatissimo! Musica sempre azzeccata e attenzione ai dettagli.&quot;
              </p>
              <p className="font-semibold">Marco S.</p>
              <p className="text-sm text-gray-500">Firenze, 2023</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/recensioni" className="text-accent hover:underline font-semibold text-lg">
              Leggi tutte le recensioni →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contatto Rapido */}
      <section id="contatto-rapido" className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-8">Contatto rapido</h2>
          <div className="card bg-gray-50 p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
                    Data evento
                  </label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="es. Milano"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="ospiti" className="block text-sm font-medium text-gray-700 mb-1">
                    N. ospiti
                  </label>
                  <input
                    type="number"
                    id="ospiti"
                    name="ospiti"
                    placeholder="es. 100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Raccontami del tuo evento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Invia richiesta
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-3">oppure scrivimi direttamente</p>
              <a
                href="https://wa.me/391234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span className="text-xl">💬</span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Richiedi un brano - Link ben visibile */}
          <div className="mt-8 text-center p-6 bg-accent bg-opacity-10 rounded-lg border-2 border-accent border-dashed">
            <p className="text-lg mb-3">Hai una canzone del cuore?</p>
            <Link
              href="/richiedi"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Richiedi un brano →
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              {/* TODO: Collegare l'app richieste a /richiedi via Vercel Domain Path o rewrites */}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


