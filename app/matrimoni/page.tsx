import Link from "next/link";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrimoni - Mommy DJ",
  description: "DJ professionale per matrimoni. Musica su misura per rendere il tuo giorno speciale indimenticabile.",
};

export default function Matrimoni() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            DJ per Matrimoni
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Il tuo giorno speciale merita la musica perfetta
          </p>
        </div>
      </Section>

      {/* Description Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Musica su Misura per il Tuo Matrimonio
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Il matrimonio è il giorno più importante della vostra vita e merita un'attenzione particolare in ogni dettaglio, 
            compresa la musica. Come DJ professionista specializzato in matrimoni, mi occupo di creare l'atmosfera perfetta 
            per ogni momento della vostra celebrazione.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Dalla cerimonia al ricevimento, dall'aperitivo alla festa, ogni fase del vostro matrimonio avrà la colonna 
            sonora ideale. Lavoro a stretto contatto con voi per comprendere i vostri gusti musicali e quelli dei vostri 
            ospiti, creando un'esperienza musicale indimenticabile.
          </p>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Cosa Include il Servizio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">🎶</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Playlist Personalizzata</h3>
            <p className="text-gray-700">
              Creiamo insieme la playlist perfetta, combinando i vostri brani preferiti con la musica adatta a far 
              ballare tutti i vostri ospiti.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Attrezzatura Professionale</h3>
            <p className="text-gray-700">
              Impianto audio di alta qualità, luci e effetti speciali per creare l'atmosfera perfetta in ogni 
              momento della giornata.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Consulenza Pre-Evento</h3>
            <p className="text-gray-700">
              Incontro preliminare per discutere tutti i dettagli: tempistiche, generi musicali preferiti, 
              momenti speciali e richieste particolari.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Intrattenimento Continuo</h3>
            <p className="text-gray-700">
              Presenza continua durante tutto l'evento per garantire che la musica non si fermi mai e 
              l'atmosfera rimanga sempre al top.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Pronto a Rendere il Tuo Matrimonio Indimenticabile?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contattami per discutere del tuo evento e verificare la disponibilità
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
              className="bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors inline-block"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
