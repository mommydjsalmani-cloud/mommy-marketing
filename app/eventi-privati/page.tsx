'use client';

import Link from "next/link";

export default function EventiPrivati() {
  const formats = [
    {
      title: "18 anni",
      icon: "🎂",
      description: "La festa della maggiore età. Energia, divertimento e musica che spacca dall'inizio alla fine.",
      guests: "50-150 persone"
    },
    {
      title: "30 anni",
      icon: "🥳",
      description: "Festa elegante ma divertente. Mix perfetto tra musica da ballare e momenti più rilassati.",
      guests: "40-100 persone"
    },
    {
      title: "40 anni",
      icon: "🎊",
      description: "Celebrazione raffinata. Musica che piace a tutti, dal disco degli anni '80 ai successi recenti.",
      guests: "50-120 persone"
    },
    {
      title: "Anniversari",
      icon: "💑",
      description: "10, 25, 50 anni insieme. Musica romantica e brani speciali per una serata indimenticabile.",
      guests: "30-80 persone"
    },
    {
      title: "Aziendali",
      icon: "🏢",
      id: "corporate",
      description: "Team building, inaugurazioni, feste di fine anno. Professionalità e discrezione.",
      guests: "30-200 persone"
    }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-accent">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">Eventi Privati</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom text-center">
          <h1 className="mb-6">Eventi Privati</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Compleanni, anniversari, feste aziendali. Ogni evento merita la sua colonna sonora perfetta.
          </p>
        </div>
      </section>

      {/* Format tipici */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Format tipici</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formats.map((format, index) => (
              <div key={index} id={format.id} className="card bg-gray-50 p-6">
                <div className="text-5xl mb-4">{format.icon}</div>
                <h3 className="mb-2">{format.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{format.guests}</p>
                <p className="text-gray-700">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Durata, Setup, Extra */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Durata */}
            <div className="card bg-white p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="mb-3">Durata</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>4 ore</strong> - formato standard</li>
                <li>• <strong>5-6 ore</strong> - serata completa</li>
                <li>• <strong>Open bar</strong> - fino a chiusura</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                La durata si adatta alle vostre esigenze e al tipo di location.
              </p>
            </div>

            {/* Setup */}
            <div className="card bg-white p-6">
              <div className="text-4xl mb-4">🎛️</div>
              <h3 className="mb-3">Setup</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Console professionale</li>
                <li>• Impianto audio adeguato</li>
                <li>• Luci d'atmosfera</li>
                <li>• Microfono per annunci</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Tutto il necessario per una festa perfetta, adattato allo spazio.
              </p>
            </div>

            {/* Extra */}
            <div className="card bg-white p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="mb-3">Extra</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Luci scenografiche</li>
                <li>• Effetti speciali</li>
                <li>• Video LED wall</li>
                <li>• Karaoke</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Servizi aggiuntivi su richiesta per rendere l'evento unico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Come funziona</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="mb-2">Contatto iniziale</h3>
                <p className="text-gray-700">
                  Mi racconti del tuo evento: tipo di festa, numero ospiti, location, data.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="mb-2">Preventivo personalizzato</h3>
                <p className="text-gray-700">
                  Ti invio un preventivo su misura in base alle tue esigenze (durata, setup, extra).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="mb-2">Playlist condivisa</h3>
                <p className="text-gray-700">
                  Creiamo insieme la scaletta perfetta per i tuoi ospiti. Tu aggiungi i brani che ami, io faccio il resto.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="mb-2">Il giorno della festa</h3>
                <p className="text-gray-700">
                  Arrivo in anticipo per il setup, gestisco la musica e l'energia della serata. Tu ti godi la festa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Pronto per la tua festa?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Raccontami del tuo evento e verifichiamo subito la disponibilità.
          </p>
          <a
            href="#main-content"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#contatto-rapido';
            }}
            className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Richiedi preventivo
          </a>
        </div>
      </section>
    </div>
  );
}
