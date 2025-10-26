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
      description: "Ingresso, momenti chiave, uscita. Microfoni inclusi.",
      details: "Musica d'ingresso, momenti chiave, uscita degli sposi. Gestione microfoni per letture e celebrante."
    },
    {
      id: 1,
      title: "Aperitivo",
      icon: "🥂",
      description: "Selezione soft/lounge. Volume per parlare.",
      details: "Selezione musicale lounge/soft. Volume calibrato per favorire le conversazioni."
    },
    {
      id: 2,
      title: "Cena",
      icon: "🍽️",
      description: "Entrata sposi, taglio torta, interventi. Timing con cucina e foto.",
      details: "Entrata sposi, taglio torta, interventi. Coordinamento con cucina, fotografo e planner."
    },
    {
      id: 3,
      title: "Party",
      icon: "🎵",
      description: "Mix veloce, lettura pista, nessuna pausa.",
      details: "Mix veloce, lettura continua della pista, zero pause. Generi: hip hop, R&B, dance, '90/2000, latin. Richieste live tramite app."
    }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="bg-gray-900 border-b border-gray-800 py-3">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-400">
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
          <h1 className="mb-6 text-white">Matrimoni</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Seguo tutte le fasi e i tempi. Mi coordino con planner, band e fornitori.
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
                <h3 className="text-sm uppercase tracking-wide font-semibold">{phase.title}</h3>
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          <div className="bg-gray-800 border border-gray-700 p-10 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="text-6xl">{phases[activePhase].icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {phases[activePhase].title}
                </h3>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  {phases[activePhase].description}
                </p>
                <p className="text-gray-400 leading-relaxed">
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
          <h2 className="text-center mb-12 text-white uppercase tracking-wider">Come scegliamo la musica</h2>
          <div className="bg-gray-800 border border-gray-700 p-8 md:p-10 rounded-2xl">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Nessuna scaletta fissa.</strong> La direzione musicale viene definita insieme.
              </p>
              <p>
                Dopo il primo contatto organizziamo una <strong className="text-white">call di 20 minuti</strong> dove ci conosciamo e capiamo i vostri gusti musicali.
              </p>
              <p>
                Creo una <strong className="text-white">playlist condivisa</strong> su Spotify dove inserisco le proposte e voi potete aggiungere i vostri brani preferiti.
              </p>
              <p>
                Durante il party, gli ospiti possono fare <strong className="text-white">richieste live</strong> tramite la mia web app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="mb-6 text-white uppercase tracking-wider">Verifica la disponibilità</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Le date estive si riempiono velocemente. Contattami per verificare la disponibilità per il tuo matrimonio.
          </p>
          <Link
            href="/contatti"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-12 py-4 rounded-full font-semibold transition-colors uppercase tracking-wider text-sm"
          >
            Contattami ora
          </Link>
        </div>
      </section>
    </div>
  );
}
