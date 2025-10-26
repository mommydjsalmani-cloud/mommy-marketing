import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrimoni - Mommy Events",
  description: "Organizziamo matrimoni da sogno con cura e attenzione ai dettagli",
};

export default function Matrimoni() {
  const services = [
    {
      title: "Consulenza Completa",
      description: "Ti affianchiamo in ogni fase della pianificazione del tuo matrimonio",
      icon: "💬",
    },
    {
      title: "Selezione Location",
      description: "Troviamo la location perfetta per il tuo stile e budget",
      icon: "🏰",
    },
    {
      title: "Coordinamento Fornitori",
      description: "Gestiamo tutti i fornitori per garantire un servizio impeccabile",
      icon: "🤝",
    },
    {
      title: "Allestimenti Personalizzati",
      description: "Creiamo allestimenti unici che rispecchiano la vostra personalità",
      icon: "🌸",
    },
    {
      title: "Catering & Menu",
      description: "Menu su misura per soddisfare tutti i palati dei vostri ospiti",
      icon: "🍽️",
    },
    {
      title: "Regia del Giorno",
      description: "Coordinamento perfetto di tutta la giornata, dall'inizio alla fine",
      icon: "⏰",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-rose-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Matrimoni da Sogno
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Il tuo giorno speciale merita un&apos;organizzazione perfetta. Ci occupiamo di ogni dettaglio per rendere il vostro matrimonio indimenticabile.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            I Nostri Servizi per Matrimoni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Come Lavoriamo
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Primo Incontro</h3>
                <p className="text-gray-600">
                  Ci conosciamo e raccogliamo tutti i vostri desideri e necessità
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pianificazione</h3>
                <p className="text-gray-600">
                  Creiamo un piano dettagliato e selezioniamo i migliori fornitori
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Coordinamento</h3>
                <p className="text-gray-600">
                  Gestiamo tutti i dettagli e le comunicazioni con i fornitori
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Il Grande Giorno</h3>
                <p className="text-gray-600">
                  Coordiniamo tutto in modo che voi possiate godervi ogni momento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Inizia a Pianificare il Tuo Matrimonio
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita e scopri come possiamo rendere il tuo matrimonio perfetto.
          </p>
          <Link
            href="/contatti"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Richiedi Consulenza Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
