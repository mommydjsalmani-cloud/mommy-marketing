import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recensioni - Mommy Events",
  description: "Leggi le recensioni dei nostri clienti soddisfatti",
};

export default function Recensioni() {
  const reviews = [
    {
      name: "Maria & Luca",
      event: "Matrimonio",
      rating: 5,
      date: "Giugno 2024",
      text: "Il nostro matrimonio è stato semplicemente perfetto! Il team di Mommy Events ha curato ogni dettaglio con una professionalità incredibile. Dalla scelta della location agli allestimenti, tutto era esattamente come lo avevamo sognato. Grazie di cuore!",
      image: "👰",
    },
    {
      name: "Giulia R.",
      event: "Compleanno 30 anni",
      rating: 5,
      date: "Agosto 2024",
      text: "Ho festeggiato il mio trentesimo compleanno con una festa indimenticabile. L'organizzazione è stata impeccabile e gli ospiti sono rimasti entusiasti. Consiglio assolutamente Mommy Events a chiunque voglia un evento speciale!",
      image: "🎂",
    },
    {
      name: "Alessandro P.",
      event: "Evento Aziendale",
      rating: 5,
      date: "Settembre 2024",
      text: "Abbiamo organizzato il nostro evento aziendale annuale e siamo rimasti molto soddisfatti. Professionalità, creatività e attenzione ai dettagli hanno reso l'evento un grande successo. Sicuramente ci affideremo di nuovo a loro.",
      image: "🏢",
    },
    {
      name: "Francesca & Marco",
      event: "Matrimonio",
      rating: 5,
      date: "Luglio 2024",
      text: "Non avremmo potuto chiedere di meglio per il nostro giorno speciale. Il team è stato presente in ogni momento, risolvendo ogni piccolo imprevisto senza che noi ce ne accorgessimo. Tutto è filato liscio e abbiamo potuto goderci ogni istante.",
      image: "💑",
    },
    {
      name: "Stefania B.",
      event: "Baby Shower",
      rating: 5,
      date: "Maggio 2024",
      text: "Il mio baby shower è stato magico! Gli allestimenti erano da favola e l'atmosfera perfetta. Tutte le mie amiche mi hanno chiesto i contatti del team. Grazie per aver reso questo momento così speciale!",
      image: "👶",
    },
    {
      name: "Roberto & Anna",
      event: "Anniversario 25 anni",
      rating: 5,
      date: "Ottobre 2024",
      text: "Abbiamo celebrato le nostre nozze d'argento con una festa meravigliosa. L'attenzione ai dettagli e la cura nell'organizzazione hanno superato ogni nostra aspettativa. Un servizio davvero di qualità!",
      image: "🥂",
    },
  ];

  const stats = [
    { value: "500+", label: "Eventi Organizzati" },
    { value: "98%", label: "Clienti Soddisfatti" },
    { value: "10+", label: "Anni di Esperienza" },
    { value: "50+", label: "Partner Selezionati" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Le Recensioni dei Nostri Clienti
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra più grande ricompensa
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cosa Dicono di Noi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{review.image}</div>
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.event}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
              &quot;Professionalità, creatività e dedizione. Mommy Events ha trasformato il nostro sogno in realtà. Non potremmo essere più felici!&quot;
            </blockquote>
            <p className="text-xl text-gray-600">- Chiara & Matteo, Matrimonio 2024</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vuoi Essere il Prossimo Cliente Soddisfatto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci oggi e inizia a pianificare il tuo evento da sogno con noi.
          </p>
          <a
            href="/contatti"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contattaci Ora
          </a>
        </div>
      </section>
    </div>
  );
}
