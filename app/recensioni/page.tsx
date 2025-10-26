import Link from "next/link";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recensioni - Mommy DJ",
  description: "Leggi le recensioni dei nostri clienti soddisfatti. Matrimoni ed eventi indimenticabili.",
};

export default function Recensioni() {
  const reviews = [
    {
      name: "Maria & Giuseppe",
      event: "Matrimonio",
      date: "Settembre 2024",
      rating: 5,
      text: "Professionale, attento ai dettagli e con un gusto musicale impeccabile. Ha reso il nostro matrimonio magico! Tutti i nostri ospiti hanno ballato fino a tarda notte e continuano ancora a farci i complimenti per la musica. Consigliatissimo!",
    },
    {
      name: "Laura T.",
      event: "Festa di Compleanno",
      date: "Ottobre 2024",
      rating: 5,
      text: "Festa di compleanno fantastica! Tutti gli ospiti hanno ballato tutta la sera. Super consigliato! Ha saputo creare la giusta atmosfera e ha accontentato i gusti musicali di tutti, dai più giovani ai meno giovani.",
    },
    {
      name: "Marco R.",
      event: "Evento Aziendale",
      date: "Luglio 2024",
      rating: 5,
      text: "Servizio eccellente per il nostro evento aziendale. Musica perfetta per creare la giusta atmosfera! Professionale e puntuale, ha saputo adattarsi perfettamente al contesto formale mantenendo comunque un'atmosfera piacevole e coinvolgente.",
    },
    {
      name: "Alessandra & Luca",
      event: "Matrimonio",
      date: "Giugno 2024",
      rating: 5,
      text: "Non potevamo scegliere DJ migliore per il nostro matrimonio! Ha creato l'atmosfera perfetta per ogni momento della giornata, dalla cerimonia alla festa. I nostri ospiti continuano a parlarne!",
    },
    {
      name: "Francesca M.",
      event: "Anniversario",
      date: "Agosto 2024",
      rating: 5,
      text: "Abbiamo festeggiato il nostro 25° anniversario con una festa indimenticabile. La scelta musicale è stata perfetta, un mix tra classici e tormentoni che ha fatto ballare tutti i nostri amici e familiari.",
    },
    {
      name: "Roberto & Sara",
      event: "Matrimonio",
      date: "Maggio 2024",
      rating: 5,
      text: "Esperienza fantastica! Ci ha aiutato a scegliere la musica perfetta per ogni momento del nostro matrimonio. Professionale, preparato e con un'ottima energia. La pista da ballo era sempre piena!",
    },
    {
      name: "Giovanni P.",
      event: "Festa di Laurea",
      date: "Settembre 2024",
      rating: 5,
      text: "Festa di laurea super riuscita! La musica era perfetta per il mio gruppo di amici. Ottima attrezzatura e grande professionalità. Consigliatissimo per qualsiasi tipo di evento!",
    },
    {
      name: "Elena & Matteo",
      event: "Matrimonio",
      date: "Aprile 2024",
      rating: 5,
      text: "Il nostro matrimonio è stato un sogno anche grazie alla musica! Ha saputo coinvolgere tutti i nostri ospiti, dagli zii più anziani ai nostri amici più giovani. Playlist studiata nei minimi dettagli!",
    },
    {
      name: "Simone C.",
      event: "Evento Aziendale",
      date: "Novembre 2024",
      rating: 5,
      text: "Organizzato l'evento di fine anno della nostra azienda e il risultato è stato oltre le aspettative. Musica di qualità, attrezzatura professionale e grande capacità di lettura del pubblico.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Recensioni
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cosa dicono i nostri clienti
          </p>
        </div>
      </Section>

      {/* Reviews Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-800">
              Valutazione Media: 5.0/5.0
            </p>
            <p className="text-gray-600 mt-2">
              Basata su {reviews.length} recensioni verificate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-purple-600">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.event} - {review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi Essere il Prossimo Cliente Soddisfatto?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contattaci ora per rendere il tuo evento indimenticabile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/richiedi"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity inline-block"
            >
              Verifica disponibilità
            </Link>
            <Link
              href="/contatti"
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors inline-block"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
