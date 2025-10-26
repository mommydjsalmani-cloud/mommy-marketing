import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rendi il Tuo Evento Indimenticabile
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            DJ professionista per matrimoni, eventi privati e feste. Musica di qualità e intrattenimento su misura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/richiedi"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Verifica disponibilità
            </Link>
            <Link
              href="/contatti"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-block"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Section - 3 Cards */}
      <Section background="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          I Nostri Servizi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">💍</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Matrimoni</h3>
            <p className="text-gray-600 mb-6">
              Il tuo giorno speciale merita la musica perfetta. Creiamo l'atmosfera ideale per ogni momento del tuo matrimonio.
            </p>
            <Link
              href="/matrimoni"
              className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
            >
              Scopri di più
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Eventi Privati</h3>
            <p className="text-gray-600 mb-6">
              Feste di compleanno, anniversari, eventi aziendali. Musica personalizzata per ogni occasione speciale.
            </p>
            <Link
              href="/eventi-privati"
              className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
            >
              Scopri di più
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎵</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Intrattenimento Premium</h3>
            <p className="text-gray-600 mb-6">
              Attrezzatura professionale, mix personalizzati e un'esperienza musicale che farà ballare tutti i tuoi ospiti.
            </p>
            <Link
              href="/contatti"
              className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
            >
              Scopri di più
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Reviews Section - 3 Reviews */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Cosa Dicono di Noi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Professionale, attento ai dettagli e con un gusto musicale impeccabile. Ha reso il nostro matrimonio magico!"
            </p>
            <p className="font-semibold text-purple-600">- Maria & Giuseppe</p>
          </div>

          {/* Review 2 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Festa di compleanno fantastica! Tutti gli ospiti hanno ballato tutta la sera. Super consigliato!"
            </p>
            <p className="font-semibold text-purple-600">- Laura T.</p>
          </div>

          {/* Review 3 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Servizio eccellente per il nostro evento aziendale. Musica perfetta per creare la giusta atmosfera!"
            </p>
            <p className="font-semibold text-purple-600">- Marco R.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/recensioni"
            className="text-purple-600 font-semibold hover:text-purple-700 text-lg inline-flex items-center"
          >
            Leggi tutte le recensioni
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Richiedi Informazioni
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Compila il form per ricevere un preventivo gratuito
          </p>
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Messaggio *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
            >
              Invia Richiesta
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Oppure verifica subito la disponibilità per il tuo evento
            </p>
            <Link
              href="/richiedi"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
            >
              🎵 Verifica disponibilità ora
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
