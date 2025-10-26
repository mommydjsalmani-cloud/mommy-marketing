'use client';

import Link from "next/link";

export default function Recensioni() {
  const reviews = [
    {
      name: "Maria & Luca",
      event: "Matrimonio",
      location: "Milano",
      year: "2024",
      rating: 5,
      text: "Professionale, attento e con un gusto musicale perfetto. Ha capito esattamente cosa volevamo e tutti i nostri ospiti hanno ballato dall'inizio alla fine. Consigliatissimo!",
      image: "💑"
    },
    {
      name: "Giulia R.",
      event: "30° Compleanno",
      location: "Roma",
      year: "2024",
      rating: 5,
      text: "Ha reso la mia festa indimenticabile! La call preliminare è stata utilissima per capire i miei gusti. La playlist era perfetta e l'atmosfera fantastica.",
      image: "🥳"
    },
    {
      name: "Marco S.",
      event: "Matrimonio",
      location: "Firenze",
      year: "2023",
      rating: 5,
      text: "Consigliatissimo! Musica sempre azzeccata, attenzione ai dettagli e grande professionalità. Il nostro matrimonio è stato perfetto anche grazie a lui.",
      image: "💍"
    },
    {
      name: "Francesca B.",
      event: "Evento Aziendale",
      location: "Bologna",
      year: "2024",
      rating: 5,
      text: "Abbiamo organizzato la festa aziendale di fine anno e siamo stati molto soddisfatti. Discreto, professionale e con ottimo gusto musicale.",
      image: "🏢"
    },
    {
      name: "Alessandro & Sofia",
      event: "Matrimonio",
      location: "Verona",
      year: "2024",
      rating: 5,
      text: "La musica perfetta per ogni momento della giornata. Dalla cerimonia al party finale, tutto è filato liscio. Grazie di cuore!",
      image: "💒"
    },
    {
      name: "Chiara M.",
      event: "18° Compleanno",
      location: "Torino",
      year: "2023",
      rating: 5,
      text: "La mia festa è stata epica! Ha fatto ballare tutti, dai miei amici ai miei genitori. Playlist super aggiornata e mix perfetti.",
      image: "🎂"
    },
    {
      name: "Roberto & Anna",
      event: "25° Anniversario",
      location: "Napoli",
      year: "2024",
      rating: 5,
      text: "Abbiamo celebrato le nostre nozze d'argento con una festa bellissima. La musica ha creato l'atmosfera perfetta per questa serata speciale.",
      image: "🥂"
    },
    {
      name: "Matteo P.",
      event: "40° Compleanno",
      location: "Genova",
      year: "2023",
      rating: 5,
      text: "Festa perfetta! Mix generazionale fantastico che ha fatto ballare tutti gli ospiti. Professionale e simpatico.",
      image: "🎊"
    },
    {
      name: "Laura & Davide",
      event: "Matrimonio",
      location: "Brescia",
      year: "2024",
      rating: 5,
      text: "Il migliore! Ha saputo creare la giusta atmosfera in ogni momento. I nostri ospiti ci chiedono ancora il suo contatto!",
      image: "💕"
    },
    {
      name: "Sara T.",
      event: "30° Compleanno",
      location: "Padova",
      year: "2024",
      rating: 5,
      text: "Organizzazione impeccabile e musica fantastica. La festa è stata un successo totale grazie anche a lui!",
      image: "🎉"
    },
    {
      name: "Giuseppe & Elena",
      event: "Matrimonio",
      location: "Palermo",
      year: "2023",
      rating: 5,
      text: "Consigliato dalla nostra wedding planner e confermo: è bravissimo! Musica perfetta e grande professionalità.",
      image: "👰"
    },
    {
      name: "Federica L.",
      event: "Evento Aziendale",
      location: "Milano",
      year: "2024",
      rating: 5,
      text: "Team building perfettamente riuscito. Ha saputo adattarsi al nostro pubblico corporate mantenendo alto il livello di divertimento.",
      image: "🏆"
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
            <li className="text-gray-900 font-medium" aria-current="page">Recensioni</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom text-center">
          <h1 className="mb-6">Recensioni</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            La soddisfazione dei miei clienti è la mia migliore pubblicità. Ecco cosa dicono di me.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600 text-sm">Eventi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-600 text-sm">Anni Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-600 text-sm">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-gray-600 text-sm">Rating Medio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">{review.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.event}</p>
                    <p className="text-xs text-gray-500">{review.location}, {review.year}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm italic">&quot;{review.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Support Note */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-gray-600 mb-4">
            📸 Tutte le recensioni sono verificate. Su richiesta posso fornire screenshot delle recensioni originali.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Vuoi essere il prossimo cliente soddisfatto?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contattami per il tuo evento e verifica la disponibilità.
          </p>
          <a
            href="#main-content"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#contatto-rapido';
            }}
            className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Richiedi disponibilità
          </a>
        </div>
      </section>
    </div>
  );
}
