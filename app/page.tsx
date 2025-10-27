import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4169e1] rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4169e1] rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#4169e1]">
            Regia musicale per matrimoni ed eventi.
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Definiamo i momenti. Allineiamo i fornitori. Costruiamo il party senza buchi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contatti"
              className="font-sans font-semibold px-10 py-4 bg-[#4169e1] text-white rounded-full hover:bg-[#3557c7] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4169e1]/50"
            >
              Verifica disponibilità
            </a>
            <a
              href="#processo"
              className="font-sans font-semibold px-10 py-4 border-2 border-white/20 text-white rounded-full hover:border-[#4169e1] hover:text-[#4169e1] transition-all duration-300"
            >
              Scopri il Processo
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Tre Punti Chiave */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4169e1] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Timing
              </h3>
              <p className="font-sans text-lg text-gray-300 leading-relaxed">
                Rispetto della scaletta al minuto.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Regia
              </h3>
              <p className="font-sans text-lg text-gray-300 leading-relaxed">
                Coordinamento con planner, catering, foto/video, band.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Pista
              </h3>
              <p className="font-sans text-lg text-gray-300 leading-relaxed">
                Set dinamico, richieste filtrate con criterio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dietro le quinte */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Dietro le quinte
            </h2>
          </div>
          <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8 md:p-12">
            <div className="space-y-4 text-gray-300">
              <p className="font-sans text-lg"><span className="text-[#4169e1] font-semibold">18:40</span> catering chiede 10′ di buffer.</p>
              <p className="font-sans text-lg">Allungo l'aperitivo con un set morbido.</p>
              <p className="font-sans text-lg"><span className="text-[#4169e1] font-semibold">19:10</span> fotografo pronto: cue torta al 00:47.</p>
              <p className="font-sans text-lg">Si parte. Nessuno aspetta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Servizi & Pacchetti
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-b from-[#4169e1]/10 to-transparent border border-[#4169e1]/30 rounded-2xl p-8 hover:border-[#4169e1] transition-all duration-300">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Base</h3>
              <p className="font-sans text-gray-300 mb-6">Consolle, impianto adeguato agli ospiti, 1 microfono, playlist su misura.</p>
            </div>

            <div className="bg-gradient-to-b from-[#4169e1]/20 to-transparent border-2 border-[#4169e1] rounded-2xl p-8 transform scale-105 shadow-xl shadow-[#4169e1]/20">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Plus</h3>
              <p className="font-sans text-gray-300 mb-6">Base + luci party + supporto cerimonia/aperitivo + 2° microfono.</p>
            </div>

            <div className="bg-gradient-to-b from-[#4169e1]/10 to-transparent border border-[#4169e1]/30 rounded-2xl p-8 hover:border-[#4169e1] transition-all duration-300">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Premium</h3>
              <p className="font-sans text-gray-300 mb-6">Plus + uplighting sala + seconda postazione.</p>
            </div>
          </div>

          <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8 mb-12">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Extra</h3>
            <p className="font-sans text-gray-300 mb-4">
              Sax live, proiettore, copertura esterni, monitoraggio dB se richiesto.
            </p>
            <p className="font-sans text-gray-400 text-sm">
              SIAE/SCF: da definire insieme in base al caso.
            </p>
          </div>

          <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-white mb-6">Tempi e logistica</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <p className="font-sans"><strong className="text-white">Montaggio:</strong> 90–120′ (location permettendo).</p>
              </div>
              <div>
                <p className="font-sans"><strong className="text-white">Spazio minimo postazione:</strong> 2×1,5 m.</p>
              </div>
              <div>
                <p className="font-sans"><strong className="text-white">Corrente:</strong> 3 kW dedicati consigliati (verifica con location).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Processo
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Contatto",
                description: "Data, location, ospiti, preferenze.",
              },
              {
                number: "02",
                title: "Call 20′",
                description: "Definiamo momenti chiave e divieti.",
              },
              {
                number: "03",
                title: "Run of Show",
                description: "Timeline condivisa con planner e fornitori.",
              },
              {
                number: "04",
                title: "Evento",
                description: "Regia silenziosa. Pista viva. Report finale se serve.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8 hover:border-[#4169e1] transition-all duration-300 group"
              >
                <div className="text-6xl font-bold text-[#4169e1]/20 group-hover:text-[#4169e1]/40 transition-colors mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="font-sans text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Recensioni - 3 Box */}
            {/* Reviews Section */}
      <section id="recensioni" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Recensioni
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Timeline rispettata. Nessun intoppo tecnico.",
                author: "Marco S.",
                location: "Lugano",
                year: "2024",
              },
              {
                text: "Ha tenuto insieme cucina, foto e pista.",
                author: "Laura M.",
                location: "Como",
                year: "2024",
              },
              {
                text: "Richieste gestite bene, ritmo costante.",
                author: "Luca P.",
                location: "Milano",
                year: "2023",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#4169e1]/10 to-transparent border border-[#4169e1]/30 rounded-2xl p-8 hover:border-[#4169e1] transition-all duration-300"
              >
                <div className="text-[#4169e1] text-4xl mb-4">"</div>
                <p className="font-sans text-gray-300 mb-6 leading-relaxed">{review.text}</p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="font-sans font-semibold text-white">{review.author}</p>
                  <p className="font-sans text-sm text-gray-400">
                    {review.location} · {review.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8">
              <h3 className="font-display text-xl text-white mb-4">Limite dB della location?</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                Lavoro con misurazione e settaggi adatti. Niente tagli improvvisi.
              </p>
            </div>

            <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8">
              <h3 className="font-display text-xl text-white mb-4">Piano pioggia?</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                Setup alternativo previsto in scheda tecnica. Cambio in 15′ se il percorso è libero.
              </p>
            </div>

            <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8">
              <h3 className="font-display text-xl text-white mb-4">Band + DJ?</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                Co-scaletta, transizioni senza "buchi", microfoni separati, livelli dedicati.
              </p>
            </div>

            <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8">
              <h3 className="font-display text-xl text-white mb-4">Brani "da evitare"?</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                Lista "No" rispettata sempre.
              </p>
            </div>

            <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8">
              <h3 className="font-display text-xl text-white mb-4">Se salta qualcosa?</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                Backup A/B. Alimentazioni separate quando possibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Contatti
            </h2>
            <p className="font-sans text-xl text-gray-400 max-w-2xl mx-auto">
              Scrivi data, location, numero ospiti e 3 brani che vi rappresentano.
              Ti rispondo con disponibilità e una proposta chiara.
            </p>
          </div>

          <div className="bg-black/50 border border-[#4169e1]/30 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#4169e1] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white mb-2">Email</h3>
                  <a href="mailto:info@mommydj.com" className="font-sans text-[#4169e1] hover:underline text-lg">
                    info@mommydj.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#4169e1] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white mb-2">WhatsApp</h3>
                  <a href="https://wa.me/393123456789" className="font-sans text-[#4169e1] hover:underline text-lg">
                    +39 312 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#4169e1] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white mb-2">Zona di Copertura</h3>
                  <p className="font-sans text-gray-300 text-lg">Italia Nord · Ticino · Canton Vallese</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="font-sans text-gray-400 text-center">
                Se vuoi, attivo il link "Richiedi un brano" per gli inviti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
