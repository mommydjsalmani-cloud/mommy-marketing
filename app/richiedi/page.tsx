export default function Richiedi() {
  return (
    <div className="py-16">
      <div className="container-custom max-w-3xl">
        <h1 className="text-center mb-6">Richiedi un Brano</h1>
        <div className="card bg-gray-50 p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 text-accent">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="28" cy="36" r="8" strokeWidth="2"/>
              <circle cx="28" cy="36" r="4" strokeWidth="2"/>
              <path d="M36 36V16L48 14V34" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="48" cy="34" r="6" strokeWidth="2"/>
              <circle cx="48" cy="34" r="3" strokeWidth="2"/>
              <path d="M20 20L24 16L28 20M40 12L44 8L48 12" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Funzionalità in arrivo! Qui potrai richiedere i tuoi brani preferiti per l&apos;evento.
          </p>
          <p className="text-gray-600 text-sm">
            TODO: Collegare l&apos;app richieste a /richiedi via Vercel Domain Path o rewrites
          </p>
        </div>
      </div>
    </div>
  );
}
