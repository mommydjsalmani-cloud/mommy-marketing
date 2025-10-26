'use client';

export default function DetailedContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie per il tuo interesse! Questa è una demo. In produzione, il form invierà la tua richiesta.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Nome e Cognome *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Mario Rossi"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="mario.rossi@email.com"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
          Telefono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="+39 123 456 7890"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eventType" className="block text-gray-700 font-semibold mb-2">
          Tipo di Evento *
        </label>
        <select
          id="eventType"
          name="eventType"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="">Seleziona...</option>
          <option value="matrimonio">Matrimonio</option>
          <option value="compleanno">Festa di Compleanno</option>
          <option value="anniversario">Anniversario</option>
          <option value="aziendale">Evento Aziendale</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
          Data Evento
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Parlaci del tuo evento..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-colors"
      >
        Invia Richiesta
      </button>
    </form>
  );
}
