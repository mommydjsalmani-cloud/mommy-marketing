'use client';

import Link from "next/link";
import { useState } from "react";

export default function Matrimoni() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: "Accoglienza & Cerimonia",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M32 8L40 16L48 8M32 8V28M24 16L32 8L40 16" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="20" y="28" width="24" height="28" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 38H38M26 44H38" strokeLinecap="round"/>
          <circle cx="32" cy="18" r="3" fill="currentColor"/>
        </svg>
      ),
      description: "Dalla musica di benvenuto agli ingressi, fino ai momenti chiave della cerimonia.",
      details: "Curo la colonna sonora dall'accoglienza degli ospiti fino all'uscita degli sposi. Coordino microfoni per letture e celebrante, testando tutto in anticipo. Volume e atmosfera calibrati per emozionare senza sovrastare."
    },
    {
      id: 1,
      title: "Aperitivo",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 16L24 36C24 40 26 44 32 44C38 44 40 40 40 36L44 16" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 44V54M26 54H38" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 16H46" strokeLinecap="round"/>
          <circle cx="32" cy="12" r="2" fill="currentColor"/>
          <circle cx="28" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
          <circle cx="36" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      description: "Musica lounge e soft che accompagna le conversazioni senza coprire le voci.",
      details: "Selezione musicale elegante e discreta. Volume ottimale per permettere conversazioni naturali. Coordino i cambi di mood con wedding planner e catering per transizioni fluide e armoniose."
    },
    {
      id: 2,
      title: "Dinner Set",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="32" cy="32" r="18" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
          <path d="M22 28L32 32L42 36" strokeLinecap="round"/>
          <path d="M20 32H16M48 32H44M32 16V20M32 44V48" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      ),
      description: "Sottofondo musicale durante la cena, con cue precisi per momenti speciali.",
      details: "Musica selezionata per accompagnare la cena senza distrarre. Entrata sposi, brindisi e taglio torta sincronizzati con fotografo e cucina. Microfoni pronti per interventi e discorsi degli ospiti."
    },
    {
      id: 3,
      title: "Party Finale & DJ Set",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="14" y="20" width="36" height="28" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="32" r="6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="40" cy="32" r="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 20V14M34 20V14M26 48L32 54L38 48" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 32L24 38M40 32L40 38" strokeLinecap="round" strokeWidth="3"/>
        </svg>
      ),
      description: "DJ set dinamico con lettura del pubblico in tempo reale e musica live.",
      details: "Alternanza di generi e ritmi (house, pop, R&B, hip hop, '70-'80, latino) con mashup e transizioni creative. Coordino musicisti e cantanti live quando presenti. Gli ospiti inviano richieste tramite app dedicata per mantenere energia e coinvolgimento costanti."
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
      <section className="relative py-16 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container-custom text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 text-accent">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="32" cy="28" r="12" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 40C32 40 20 46 20 52C20 56 25 58 32 58C39 58 44 56 44 52C44 46 32 40 32 40Z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 28L28 22L32 18L36 22L38 28" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.2"/>
              <circle cx="32" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 12L38 12" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="mb-4 md:mb-6 text-white font-display px-4">DJ per Matrimoni</h1>
          <p className="font-sans text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            La musica accompagna ogni momento, ma quando si tratta del tuo matrimonio, deve raccontare la tua storia.<br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Dalla cerimonia al party finale, curo ogni dettaglio sonoro, creando un'atmosfera che rispecchia voi e i vostri ospiti.</span>
          </p>
          <div className="mt-8 md:mt-10 px-4">
            <a
              href="#contatti"
              className="font-sans inline-block bg-accent hover:bg-accent-hover text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold transition-colors uppercase tracking-wider text-xs md:text-sm"
            >
              Verifica disponibilità
            </a>
          </div>
        </div>
      </section>

      {/* Timeline - 4 Fasi */}
      <section className="py-12 md:py-20 bg-gray-900">
        <div className="container-custom max-w-6xl">
          <h2 className="text-center mb-8 md:mb-16 text-white uppercase tracking-wider px-4">Cosa Faccio</h2>
          <p className="font-sans text-center text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 text-base md:text-lg leading-relaxed px-4">
            Ogni matrimonio è unico.<br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Preparo la colonna sonora di ogni fase: accoglienza e cerimonia, aperitivo e dinner set, party finale con DJ set e musica live.</span><br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">Coordino musicisti, cantanti e performer per garantire fluidità, ritmo e armonia durante tutta la giornata.</span>
          </p>
          
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`p-5 md:p-6 rounded-xl border-2 transition-all text-center min-h-[140px] md:min-h-[160px] flex flex-col items-center justify-center gap-3 ${
                  activePhase === phase.id
                    ? 'border-accent bg-gray-800 text-accent'
                    : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                }`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14">{phase.icon}</div>
                <h3 className="font-display text-[10px] md:text-xs font-semibold leading-tight px-1">{phase.title}</h3>
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          <div className="bg-gray-800 border border-gray-700 p-6 md:p-10 rounded-2xl">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0 text-accent flex-shrink-0">{phases[activePhase].icon}</div>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center md:text-left">
                  {phases[activePhase].title}
                </h3>
                <p className="font-sans text-gray-300 mb-3 md:mb-4 text-base md:text-lg leading-relaxed">
                  {phases[activePhase].description}
                </p>
                <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed">
                  {phases[activePhase].details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approccio */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8 md:mb-16 text-white uppercase tracking-wider px-4">Approccio</h2>
          <div className="bg-gray-800 border border-gray-700 p-6 md:p-10 rounded-2xl mb-8 md:mb-12">
            <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed">
              <p className="font-sans text-base md:text-lg">
                Prima di ogni evento dedico tempo all'ascolto della coppia e alla costruzione della scaletta.
              </p>
              <p className="font-sans text-base md:text-lg">
                Mi confronto con la wedding planner, il catering e i tecnici audio per curare anche tempi e regia generale.
              </p>
              <p className="font-sans text-base md:text-lg">
                Durante la serata leggo il pubblico e adatto la musica in tempo reale, alternando generi e mashup per mantenere sempre energia e coinvolgimento.
              </p>
            </div>
          </div>

          {/* Destination Wedding */}
          <div className="bg-gray-800 border border-gray-700 p-6 md:p-10 rounded-2xl">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-accent">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="32" cy="32" r="24" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 8V56M8 32H56" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                  <path d="M16 18C16 18 20 28 32 28C44 28 48 18 48 18" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 46C16 46 20 36 32 36C44 36 48 46 48 46" strokeLinecap="round" strokeLinejoin="round"/>
                  <ellipse cx="32" cy="32" rx="20" ry="10" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-white mb-3 md:mb-4 px-4">Destination Wedding</h3>
            </div>
            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed">
              <p className="font-sans text-base md:text-lg">
                Ho lavorato con coppie provenienti da Irlanda, Inghilterra, Stati Uniti, India, Francia, Australia e molti altri paesi.
              </p>
              <p className="font-sans text-base md:text-lg">
                Comprendere culture musicali diverse è fondamentale per creare un'atmosfera accogliente per tutti gli ospiti.
              </p>
              <p className="font-sans text-base md:text-lg">
                Lavoro regolarmente in <strong className="text-white">Svizzera, Toscana, Lombardia e Veneto</strong>, collaborando con le migliori wedding planner italiane e internazionali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Richiedi un Brano */}
      <section className="py-12 md:py-20 bg-gray-900">
        <div className="container-custom max-w-4xl">
          <div className="bg-gray-800 border border-gray-700 p-6 md:p-10 rounded-2xl">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-accent">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 14L20 50C20 52 22 54 24 54L32 50L40 54C42 54 44 52 44 50V14" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="32" cy="26" r="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M28 26V30M36 26V30M32 22V26" strokeLinecap="round" strokeWidth="3"/>
                  <path d="M24 38H40M26 44H38" strokeLinecap="round" opacity="0.5"/>
                  <rect x="18" y="10" width="28" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-display text-xl md:text-2xl text-white mb-4 md:mb-6 px-4">App "Richiedi un Brano"</h2>
            </div>
            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed">
              <p className="font-sans text-base md:text-lg text-center">
                Durante il party, gli ospiti possono inviare le loro richieste musicali in tempo reale tramite un'app dedicata che ho sviluppato personalmente.
              </p>
              <p className="font-sans text-base md:text-lg text-center">
                In questo modo ogni persona partecipa e la pista rimane sempre viva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contatti" className="py-12 md:py-20 bg-black">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="font-display mb-4 md:mb-6 text-white px-4">Vuoi una colonna sonora creata su misura per il tuo matrimonio?</h2>
          <p className="font-sans text-gray-400 mb-8 md:mb-10 leading-relaxed px-4">
            Contattami per verificare la disponibilità e ricevere una proposta personalizzata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <Link
              href="/contatti"
              className="font-sans inline-block bg-accent hover:bg-accent-hover text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold transition-colors uppercase tracking-wider text-xs md:text-sm"
            >
              Richiedi informazioni
            </Link>
            <a
              href="https://wa.me/393123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold transition-colors uppercase tracking-wider text-xs md:text-sm"
            >
              Scrivimi su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
