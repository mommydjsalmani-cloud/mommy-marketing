'use client';

import Link from "next/link";
import { useState } from "react";

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    data: '',
    location: '',
    messaggio: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        tipoEvento: '',
        data: '',
        location: '',
        messaggio: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <li className="text-gray-900 font-medium" aria-current="page">Contatti</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom text-center">
          <h1 className="mb-6">Contatti</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Scrivimi o chiamami per verificare la disponibilità e ricevere un preventivo personalizzato.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="mb-8 text-gray-900">Informazioni di contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@djmommy.it" className="text-accent hover:underline font-medium text-base">
                      info@djmommy.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Telefono</h3>
                    <a href="tel:+391234567890" className="text-accent hover:underline font-medium text-base">
                      +39 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/391234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-bold transition-colors text-sm shadow-sm"
                    >
                      Scrivimi su WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Zone coperte */}
              <div className="mt-12 card bg-white border-2 border-gray-200 p-6">
                <h3 className="mb-4 text-gray-900 font-bold">📍 Zone coperte</h3>
                <p className="text-gray-900 mb-4 font-medium">
                  Opero principalmente in Lombardia e nelle regioni limitrofe:
                </p>
                <ul className="space-y-2 text-gray-800 text-sm">
                  <li className="font-medium">• Milano e provincia</li>
                  <li className="font-medium">• Bergamo e provincia</li>
                  <li className="font-medium">• Brescia e provincia</li>
                  <li className="font-medium">• Como e Lecco</li>
                  <li className="font-medium">• Emilia Romagna (Bologna, Modena, Parma)</li>
                  <li className="font-medium">• Piemonte (Torino, Alessandria, Novara)</li>
                </ul>
                <p className="text-sm text-gray-700 mt-4 font-medium">
                  Per eventi in altre zone, contattami per valutare la fattibilità.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="card bg-white border-2 border-gray-200 p-6 md:p-8">
                <h2 className="mb-6 text-gray-900">Richiesta informazioni</h2>
                
                {isSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded mb-6">
                    <strong>Grazie!</strong> Ti risponderò al più presto.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
                        placeholder="email@esempio.it"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-gray-900 mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
                        placeholder="+39 123 456 7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="tipoEvento" className="block text-sm font-semibold text-gray-900 mb-2">
                        Tipo di evento *
                      </label>
                      <select
                        id="tipoEvento"
                        name="tipoEvento"
                        required
                        value={formData.tipoEvento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900"
                      >
                        <option value="">Seleziona...</option>
                        <option value="matrimonio">Matrimonio</option>
                        <option value="18-anni">18 anni</option>
                        <option value="30-anni">30 anni</option>
                        <option value="40-anni">40 anni</option>
                        <option value="50-anni">50 anni</option>
                        <option value="anniversario">Anniversario</option>
                        <option value="aziendale">Evento Aziendale</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="data" className="block text-sm font-semibold text-gray-900 mb-2">
                        Data evento
                      </label>
                      <input
                        type="date"
                        id="data"
                        name="data"
                        value={formData.data}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-2">
                      Location / Città
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="es. Milano"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-semibold text-gray-900 mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows={4}
                      value={formData.messaggio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Raccontami del tuo evento..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold transition-colors text-base"
                  >
                    Invia richiesta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
