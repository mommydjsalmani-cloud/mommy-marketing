import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventi Privati - Mommy Events",
  description: "Organizziamo eventi privati indimenticabili: compleanni, anniversari, feste aziendali",
};

export default function EventiPrivati() {
  const eventTypes = [
    {
      title: "Compleanni",
      description: "Feste di compleanno uniche per tutte le età",
      icon: "🎂",
    },
    {
      title: "Anniversari",
      description: "Celebra i momenti importanti con stile",
      icon: "🥂",
    },
    {
      title: "Baby Shower",
      description: "Accogliamo i nuovi arrivi con dolcezza",
      icon: "👶",
    },
    {
      title: "Feste Aziendali",
      description: "Eventi corporate di successo",
      icon: "🏢",
    },
    {
      title: "Addii al Celibato/Nubilato",
      description: "Festeggia l'ultimo giorno da single",
      icon: "🎊",
    },
    {
      title: "Lauree",
      description: "Celebra il tuo successo accademico",
      icon: "🎓",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Eventi Privati Indimenticabili
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ogni occasione merita di essere celebrata. Organizziamo eventi privati su misura per rendere speciale ogni momento.
          </p>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tipologie di Eventi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cosa Offriamo
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">🎨 Tema Personalizzato</h3>
              <p className="text-gray-600">
                Creiamo un tema unico che rispecchia la tua personalità e i tuoi gusti
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">📍 Location Esclusiva</h3>
              <p className="text-gray-600">
                Selezioniamo la location perfetta per il tuo evento
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">🍰 Catering di Qualità</h3>
              <p className="text-gray-600">
                Menu personalizzati con prodotti di eccellenza
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">🎵 Intrattenimento</h3>
              <p className="text-gray-600">
                Musica, animazione e spettacoli per tutti i gusti
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">📸 Fotografia & Video</h3>
              <p className="text-gray-600">
                Immortaliamo ogni momento speciale del tuo evento
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">🎁 Coordinamento Totale</h3>
              <p className="text-gray-600">
                Ci occupiamo di ogni dettaglio, dal setup alla chiusura
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            I Nostri Pacchetti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-gray-600 mb-6">Perfetto per eventi intimi</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Consulenza iniziale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Selezione location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Coordinamento base</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-purple-500 to-indigo-600 text-white p-8 rounded-lg shadow-xl transform md:-translate-y-4">
              <div className="bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                POPOLARE
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="mb-6">La scelta ideale</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Tutto del Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Allestimenti personalizzati</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Catering completo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Intrattenimento</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Luxury</h3>
              <p className="text-gray-600 mb-6">Esperienza esclusiva</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Tutto del Premium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Location esclusiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Servizio fotografico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Wedding planner dedicato</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rendi Speciale il Tuo Prossimo Evento
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci per discutere delle tue idee e ricevere un preventivo personalizzato.
          </p>
          <Link
            href="/contatti"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Richiedi Preventivo
          </Link>
        </div>
      </section>
    </div>
  );
}
