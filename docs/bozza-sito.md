# Bozza Mommy DJ: struttura e materiali

Base verificata: branch `codex/homepage-photo`, commit pubblico `4e9d9ef`.
La bozza viene mostrata in anteprima; nessuna pubblicazione su mommydj.com è autorizzata per questa fase.

## Homepage

Foto reale al mixer e testi forniti dal proprietario. Ordine: Matrimoni ed Eventi privati; matrimonio di Oliver Krause al Castello di Tabiano; mix; bio con percorso nei club; contatti. I pulsanti principali aprono `/contatti#modulo`.

La schermata iniziale con il solo logo non viene montata nella bozza: l’offerta e la CTA restano accessibili subito, con il logo nella barra di navigazione e i movimenti di entrata sui contenuti. Le dissolvenze tra pagine non traslano il contenuto, per conservare la posizione dell’ancora del modulo.

Il caso matrimonio riusa fatti già approvati: aperitivo con artisti, musica durante la cena, DJ set finale. Le foto disponibili del DJ non vengono presentate come foto di quel matrimonio. Nessuna recensione viene attribuita alla coppia senza conferma.

## Mixcloud e pagina Ascolta

**Decisione del proprietario: lasciare disattivati i collegamenti pubblici ad Ascolta.**

La pagina `/ascolta` esiste per controllare la struttura, senza indicizzazione quando vuota. La voce “Ascolta i miei mix” compare nel menu desktop e mobile come elemento non attivo con indicazione “In arrivo”; non ha un collegamento. Il footer non la collega; il secondo pulsante della hero è disattivato. Non sono presenti mix dimostrativi o player fittizi.

Quando il proprietario chiederà l’attivazione, inserire i mix reali in `app/data/mixes.ts`, nell’array `mixes`:

```ts
{
  id: "identificativo-univoco",
  title: "Titolo reale del mix",
  genre: "Genere fornito da Mommy DJ",
  description: "Descrizione facoltativa approvata",
  url: "https://www.mixcloud.com/NOME_PROFILO/NOME_MIX/",
  published: true,
}
```

Verificare il link di un singolo mix e la riproduzione prima di impostare `published: true`. Sono accettati soltanto link HTTPS al dominio Mixcloud con percorso profilo/mix. Con almeno un mix valido e pubblicato, si attivano menu, footer e inviti dalla homepage. La modifica richiede build e nuova anteprima.

I player sono iframe ufficiali Mixcloud, responsivi, con titolo accessibile, caricamento differito e riproduzione avviata dal visitatore. Non servono chiavi API. Riferimento: https://www.mixcloud.com/developers/widget/.

## Servizi e strumentazione

Le pagine Matrimoni ed Eventi privati riusano `app/components/EquipmentBlock.tsx` con il titolo “Audio, microfoni e luci”. Si parla di impianto, microfoni per discorsi, luci e spazi differenti.

Per gli eventi privati, la pagina precedente elencava consolle, impianto dimensionato, microfoni e luci base come dotazione, e uplighting, seconda postazione e sax live come extra. Questa distinzione è mantenuta; la configurazione e le voci incluse vanno comunque definite nel preventivo. Non viene inventato un pacchetto incluso per i matrimoni.

**Da confermare:** il Service audio e luci è disponibile anche senza il DJ? La pagina attuale non lo esplicita. La voce è conservata nella bozza; l’impostazione si trova in `app/data/navigation.ts` (`showServiceLink`).

## Richiedi una canzone

È la funzione autonoma per gli invitati. Non ospita i mix.

- Banger Request resta nel repository/progetto separato, senza modifiche.
- `next.config.ts` e `vercel.json` conservano gli inoltri esatti di `/richiedi` e `/richiedi/:path*`.
- I link del sito usano normali anchor verso `/richiedi`, senza animazioni o intercettazione del router marketing.
- I QR esistenti portano a URL dell’app con token `s` ed eventuale `code`. Questi percorsi e parametri restano invariati.
- Anche l’anteprima marketing inoltra verso il Banger Request attuale: non costituisce da sola un database di test.

Per l’invio end-to-end reale serve un ambiente o evento di test separato identificato dal proprietario. Le prove simulate del browser devono intercettare tutte le richieste dell’app e non inoltrare alcun POST ai servizi reali. Riportare separatamente simulazione client e prova reale con salvataggio dei dati.

## Verifiche e materiali mancanti

Controllare desktop e smartphone, menu, ritaglio della foto, CTA nella prima schermata, ancoraggio al modulo, validazione e stati del modulo, link WhatsApp, movimento ridotto, assenza di link attivi ad Ascolta, accesso diretto e dal menu a Banger Request e percorsi dei QR.

Materiali da fornire per completare le parti oggi non disponibili: mix reali con generi e descrizioni; fotografie del matrimonio con diritto di utilizzo; eventuale recensione attribuibile e autorizzata; conferma sul Service autonomo e sul dettaglio delle dotazioni; ambiente o evento di test Banger Request.

## Revisione visiva del logo

Carattere Montserrat, geometrico e pieno, per avvicinare titoli e navigazione allo stile della scritta del logo. È una scelta visiva affine, non un’identificazione del font originale nel file PNG. Titoli principali maiuscoli, paragrafi con peso più leggero. Logo, favicon e fotografie rimangono i file originali.
