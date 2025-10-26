'use client';

import { useState } from "react";
import type { Metadata } from "next";

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulazione invio form (nessun backend)
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: '',
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contattaci
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Siamo qui per trasformare i tuoi sogni in realtà. Parlaci del tuo evento!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informazioni di Contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@mommyevents.it</p>
                    <p className="text-gray-600">preventivi@mommyevents.it</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📱</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefono</h3>
                    <p className="text-gray-600">+39 123 456 7890</p>
                    <p className="text-gray-600">+39 098 765 4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Indirizzo</h3>
                    <p className="text-gray-600">Via Example, 123</p>
                    <p className="text-gray-600">00100 Roma, Italia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Orari</h3>
                    <p className="text-gray-600">Lun - Ven: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sab: 10:00 - 14:00</p>
                    <p className="text-gray-600">Dom: Chiuso</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Seguici sui Social</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-4xl hover:scale-110 transition-transform">📘</a>
                  <a href="#" className="text-4xl hover:scale-110 transition-transform">📷</a>
                  <a href="#" className="text-4xl hover:scale-110 transition-transform">🐦</a>
                  <a href="#" className="text-4xl hover:scale-110 transition-transform">📌</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Richiedi un Preventivo</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  <strong className="font-bold">Grazie!</strong>
                  <span className="block sm:inline"> Il tuo messaggio è stato inviato con successo. Ti contatteremo presto!</span>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo di Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Seleziona un tipo</option>
                    <option value="matrimonio">Matrimonio</option>
                    <option value="compleanno">Compleanno</option>
                    <option value="anniversario">Anniversario</option>
                    <option value="aziendale">Evento Aziendale</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Data Prevista
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Raccontaci del tuo evento..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-colors"
                >
                  Invia Richiesta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Dove Siamo</h2>
          <div className="max-w-4xl mx-auto bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">🗺️ Mappa Google (Placeholder)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
