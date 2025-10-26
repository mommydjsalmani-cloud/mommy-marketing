import Link from "next/link";
import Section from "@/components/Section";
import DetailedContactForm from "@/components/DetailedContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti - Mommy DJ",
  description: "Contattaci per informazioni e preventivi. Siamo a tua disposizione per rendere il tuo evento speciale.",
};

export default function Contatti() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contatti
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Siamo qui per te
          </p>
        </div>
      </Section>

      {/* Contact Info and Form Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Informazioni di Contatto
            </h2>
            <p className="text-gray-700 mb-8">
              Hai domande o vuoi ricevere un preventivo personalizzato? Siamo a tua completa disposizione. 
              Contattaci tramite il form o utilizzando uno dei metodi qui sotto.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@mommydj.com" className="text-purple-600 hover:text-purple-700">
                    info@mommydj.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefono</h3>
                  <a href="tel:+391234567890" className="text-purple-600 hover:text-purple-700">
                    +39 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Orari</h3>
                  <p className="text-gray-700">Lun-Ven: 9:00 - 19:00</p>
                  <p className="text-gray-700">Sab: 10:00 - 18:00</p>
                  <p className="text-gray-700">Dom: Su appuntamento</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-600">
                Verifica Subito la Disponibilità
              </h3>
              <p className="text-gray-700 mb-4">
                Vuoi sapere se siamo disponibili per la data del tuo evento? 
                Clicca qui sotto per verificare in tempo reale.
              </p>
              <Link
                href="/richiedi"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                🎵 Verifica disponibilità
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">
                Invia una Richiesta
              </h2>
              <DetailedContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Domande Frequenti
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2 text-purple-600">
                Quanto tempo prima devo prenotare?
              </h3>
              <p className="text-gray-700">
                Consigliamo di prenotare con almeno 3-6 mesi di anticipo, specialmente per matrimoni ed eventi 
                nei mesi più richiesti (maggio-settembre). Tuttavia, contattaci comunque anche per date più 
                ravvicinate!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2 text-purple-600">
                Quali tipi di eventi coprite?
              </h3>
              <p className="text-gray-700">
                Ci occupiamo di matrimoni, feste di compleanno, anniversari, eventi aziendali, lauree e 
                qualsiasi altro tipo di festa o celebrazione. Ogni evento viene personalizzato in base alle 
                tue esigenze.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2 text-purple-600">
                L'attrezzatura è inclusa nel servizio?
              </h3>
              <p className="text-gray-700">
                Sì! Il servizio include tutto il necessario: impianto audio professionale, luci, mixer e tutto 
                il materiale tecnico. Non devi preoccuparti di nulla!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
