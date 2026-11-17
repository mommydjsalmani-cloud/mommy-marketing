import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import styles from "./equipment.module.css";

export default function EquipmentBlock({ eventType }: { eventType: "wedding" | "private" }) {
  return (
    <section className={styles.section} aria-labelledby="equipment-title">
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>La parte tecnica</p>
          <h2 id="equipment-title">Audio, microfoni e luci</h2>
        </div>
        <div className={styles.copy}>
          <p>Posso occuparmi della consolle e dell’impianto audio in base agli spazi, dei microfoni per i discorsi e delle luci per la festa. Se l’evento si svolge in più ambienti, valutiamo insieme le postazioni necessarie.</p>
          {eventType === "private" ? (
            <p>La dotazione comprende consolle, impianto dimensionato, microfoni e luci base. Uplighting, seconda postazione e sax live sono opzioni extra da concordare.</p>
          ) : null}
          <p className={styles.note}>Configurazione e voci incluse vengono definite nel preventivo, in base alla location e al programma.</p>
          <Link href="/contatti#modulo" className={styles.link}>Parliamo degli spazi del tuo evento <span aria-hidden="true"><ArrowIcon /></span></Link>
        </div>
      </div>
    </section>
  );
}
