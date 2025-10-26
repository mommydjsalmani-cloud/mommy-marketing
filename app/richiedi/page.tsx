import Link from "next/link";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Richiedi - Mommy DJ",
  description: "Verifica disponibilità e richiedi un preventivo per il tuo evento.",
};

export default function Richiedi() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Verifica Disponibilità
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Controlla se siamo disponibili per la data del tuo evento
          </p>
        </div>
      </Section>

      {/* Info Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8 mb-8">
            <div className="text-5xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Pagina in Configurazione
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Questa pagina sarà presto collegata al sistema di prenotazione "Banger Request" 
              per permetterti di verificare la disponibilità e richiedere un preventivo in tempo reale.
            </p>
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="font-bold text-lg mb-3">Per gli amministratori:</h3>
              <p className="text-gray-700 mb-2">
                Consulta il file <code className="bg-gray-100 px-2 py-1 rounded">README.md</code> per 
                istruzioni su come collegare questa pagina all'app Banger Request su Vercel.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                Opzioni disponibili: link esterno, Vercel rewrites, o multi-zone setup.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">
            Nel Frattempo, Contattaci Direttamente
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Puoi comunque contattarci per verificare la disponibilità e ricevere un preventivo personalizzato
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@mommydj.com" className="text-purple-600 hover:text-purple-700 font-semibold">
                info@mommydj.com
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Telefono</h3>
              <a href="tel:+391234567890" className="text-purple-600 hover:text-purple-700 font-semibold">
                +39 123 456 7890
              </a>
            </div>
          </div>

          <Link
            href="/contatti"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Vai alla Pagina Contatti
          </Link>
        </div>
      </Section>
    </>
  );
}
