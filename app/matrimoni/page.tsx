'use client';

import Link from "next/link";
import { useState } from "react";

export default function Matrimoni() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: "Cerimonia",
      icon: "💒",
      description: "Ingressi, momenti chiave, uscita. Microfoni testati prima.",
      details: "Musica d'ingresso coordinata, momenti chiave (scambio fedi, firma), uscita. Microfoni wireless testati 30 minuti prima per letture e celebrante. Volume calibrato sulla location."
    },
    {
      id: 1,
      title: "Aperitivo",
      icon: "🥂",
      description: "Musica che non copre le voci. Cambio mood a vista segnale.",
      details: "Selezione musicale lounge/soft. Volume calibrato per conversazioni naturali. Cambio di mood su segnale del planner o catering. Transizioni impercettibili."
    },
    {
      id: 2,
      title: "Cena",
      icon: "🍽️",
      description: "Entrata sposi, brindisi, torta. Cue precisi con foto e cucina.",
      details: "Entrata sposi coordinata, brindisi, taglio torta con cue sincronizzati al secondo. Timing condiviso con fotografo e cucina. Microfoni per interventi degli ospiti."
    },
    {
      id: 3,
      title: "Party",
      icon: "🎵",
      description: "Primi tre brani decisi. Poi lettura della sala. Cambio in <8″ se serve.",
      details: "Primi 3 brani concordati. Poi lettura continua della pista. Cambio traccia in meno di 8 secondi se il brano non funziona. Generi: commerciale italiano, 2000s, latino, hip hop/R&B. Richieste live via app."
    }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="bg-gray-900 border-b border-gray-800 py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400 font-sans">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Matrimoni</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container-custom text-center">
          <div className="text-6xl mb-6">💍</div>
          <h1 className="mb-6 text-white font-display">Regia musicale del matrimonio</h1>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ogni fase ha un obiettivo diverso. Io allineo tempi, volumi e passaggi.<br />
            Zero corse. Zero fischi. Zero silenzi imbarazzanti.
          </p>
        </div>
      </section>

      {/* Timeline - 4 Fasi */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom max-w-6xl">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Le 4 fasi del matrimonio</h2>
          
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`p-6 rounded-xl border-2 transition-all text-center ${
                  activePhase === phase.id
                    ? 'border-accent bg-gray-800 text-white'
                    : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="text-4xl mb-3">{phase.icon}</div>
                <h3 className="font-display text-sm font-semibold">{phase.title}</h3>
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          <div className="bg-gray-800 border border-gray-700 p-10 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="text-6xl">{phases[activePhase].icon}</div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {phases[activePhase].title}
                </h3>
                <p className="font-sans text-gray-300 mb-4 text-lg leading-relaxed">
                  {phases[activePhase].description}
                </p>
                <p className="font-sans text-gray-400 leading-relaxed">
                  {phases[activePhase].details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché scegliere Mommy DJ */}
      <section className="py-20 bg-black">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-16 text-white uppercase tracking-wider">Perché scegliere Mommy DJ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-white mb-3 uppercase tracking-wide text-sm">Esperienza Internazionale</h3>
              <p className="text-gray-400 text-sm">Eventi con ospiti anche internazionali</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-white mb-3 uppercase tracking-wide text-sm">Audio e Luci Complete</h3>
              <p className="text-gray-400 text-sm">Setup professionale dimensionato</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-white mb-3 uppercase tracking-wide text-sm">Coordinamento</h3>
              <p className="text-gray-400 text-sm">Sinergia con planner, band e fornitori</p>
            </div>
          </div>
        </div>
      </section>

      {/* Come scelgo la musica */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-center mb-12 text-white">Metodo</h2>
          <div className="bg-gray-800 border border-gray-700 p-8 md:p-10 rounded-2xl">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="font-sans">
                <strong className="text-white">Call di 20 minuti.</strong>
              </p>
              <p className="font-sans">
                <strong className="text-white">Lista Sì / No / Mai.</strong>
              </p>
              <p className="font-sans">
                <strong className="text-white">Playlist condivisa.</strong>
              </p>
              <p className="font-sans">
                <strong className="text-white">Backup sempre con me.</strong>
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-800 border border-gray-700 p-8 md:p-10 rounded-2xl">
            <h3 className="font-display text-xl text-white mb-4">Richieste brani</h3>
            <p className="font-sans text-gray-300 leading-relaxed">
              Le accetto. Le filtro. Le inserisco nel punto giusto.<br />
              La tua app "Richiedi un brano" è disponibile con QR.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="font-display mb-6 text-white">Verifica la data</h2>
          <p className="font-sans text-gray-400 mb-10 leading-relaxed">
            Le date si riempiono velocemente. Contattami per verificare la disponibilità.
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
