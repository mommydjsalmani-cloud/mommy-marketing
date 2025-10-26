'use client';

import Link from "next/link";

export default function Matrimoni() {
  const timeline = [
    {
      title: "Cerimonia",
      icon: "💒",
      description: "Musica d'ingresso, accompagnamento e uscita. Sottofondo discreto ed emozionante per il momento più importante.",
      time: "30-45 min"
    },
    {
      title: "Aperitivo",
      icon: "🥂",
      description: "Atmosfera rilassata e conviviale. Musica lounge, jazz, soul per accogliere gli ospiti e creare la giusta energia.",
      time: "1-2 ore"
    },
    {
      title: "Cena",
      icon: "🍽️",
      description: "Sottofondo elegante che permette la conversazione. Graduale crescita del ritmo verso la fine del pasto.",
      time: "2-3 ore"
    },
    {
      title: "Party",
      icon: "🎊",
      description: "Il momento clou! Playlist costruita sui vostri gusti e su ciò che fa ballare tutti. Dal primo all'ultimo brano.",
      time: "3-4 ore"
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
            <li className="text-gray-900 font-medium" aria-current="page">Matrimoni</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom text-center">
          <h1 className="mb-6">Musica per Matrimoni</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            La colonna sonora del vostro giorno speciale, curata in ogni dettaglio. Dalla cerimonia al party finale.
          </p>
        </div>
      </section>

      {/* Timeline - 4 Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Le fasi del matrimonio</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {timeline.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="card bg-gray-50 p-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{phase.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl">{phase.title}</h3>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{phase.time}</span>
                      </div>
                      <p className="text-gray-700">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come scelgo la musica */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Come scelgo la musica</h2>
          <div className="card bg-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl mb-4">📞</div>
                <h3 className="mb-3">Call conoscitiva 20'</h3>
                <p className="text-gray-700">
                  Ci parliamo al telefono o via video. Vi faccio domande sui vostri gusti musicali, sul tipo di atmosfera che volete e sui momenti chiave della giornata.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="mb-3">Playlist condivisa</h3>
                <p className="text-gray-700">
                  Vi creo una playlist Spotify condivisa dove potete aggiungere i brani che amate e segnalare quelli da evitare. La affiniamo insieme fino al giorno del matrimonio.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-accent bg-opacity-10 rounded-lg">
              <p className="text-gray-800 font-medium text-center">
                💡 L&apos;obiettivo è semplice: farvi godere la festa senza pensieri e far ballare tutti i vostri ospiti!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Foto Placeholder */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">Un assaggio dei miei matrimoni</h2>
          <div className="card bg-gray-800 rounded-2xl overflow-hidden aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-lg">Foto/Video Gallery</p>
                <p className="text-sm text-gray-300 mt-2">(Placeholder - inserire gallery reale)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Vuoi la musica perfetta per il tuo matrimonio?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Verifica subito se sono disponibile nella tua data.
          </p>
          <a
            href="#main-content"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#contatto-rapido';
            }}
            className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Verifica data disponibile
          </a>
        </div>
      </section>
    </div>
  );
}

