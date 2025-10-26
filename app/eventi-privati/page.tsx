import Link from "next/link";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventi Privati - Mommy DJ",
  description: "DJ per feste private, compleanni, anniversari ed eventi aziendali. Musica personalizzata per ogni occasione.",
};

export default function EventiPrivati() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Eventi Privati
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Musica personalizzata per ogni occasione speciale
          </p>
        </div>
      </Section>

      {/* Description Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Intrattenimento su Misura per il Tuo Evento
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Che si tratti di un compleanno importante, un anniversario da celebrare, una festa aziendale o 
            qualsiasi altra occasione speciale, offro un servizio DJ professionale completamente personalizzato 
            per soddisfare le tue esigenze specifiche.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Ogni evento è unico e richiede un approccio diverso. Lavoro con te per capire l'atmosfera che 
            desideri creare, il tipo di musica che piace a te e ai tuoi ospiti, e qualsiasi richiesta particolare 
            per rendere il tuo evento davvero speciale.
          </p>
        </div>
      </Section>

      {/* Types of Events Section */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Tipologie di Eventi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🎂</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Feste di Compleanno</h3>
            <p className="text-gray-700">
              18 anni, 30, 40, 50... ogni compleanno merita di essere celebrato con la musica giusta!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🎊</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Anniversari</h3>
            <p className="text-gray-700">
              Celebra i momenti importanti della tua vita con un'atmosfera musicale indimenticabile.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Eventi Aziendali</h3>
            <p className="text-gray-700">
              Cene di gala, inaugurazioni, team building: musica professionale per eventi corporate.
            </p>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <h2 className="text-3xl font-bold mb-12 text-center">
          Cosa Offriamo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-3">🎵</div>
            <h3 className="font-bold text-lg mb-2">Musica Varia</h3>
            <p className="text-gray-600 text-sm">
              Tutti i generi musicali per soddisfare ogni gusto
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔊</div>
            <h3 className="font-bold text-lg mb-2">Audio Premium</h3>
            <p className="text-gray-600 text-sm">
              Impianto audio professionale di alta qualità
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="font-bold text-lg mb-2">Luci e Effetti</h3>
            <p className="text-gray-600 text-sm">
              Illuminazione scenica per creare atmosfera
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎤</div>
            <h3 className="font-bold text-lg mb-2">Microfoni</h3>
            <p className="text-gray-600 text-sm">
              Per discorsi, annunci e karaoke
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Organizziamo Insieme il Tuo Evento Perfetto
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contattaci per un preventivo personalizzato e senza impegno
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
