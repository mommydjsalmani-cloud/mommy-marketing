import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import MixcloudPlayer from "../components/MixcloudPlayer";
import { availableMixes, hasMixes } from "../data/mixes";
import styles from "./ascolta.module.css";

export const metadata: Metadata = {
  title: "Ascolta i miei mix | Mommy DJ",
  description: "La selezione dei DJ set di Mommy DJ, con i player ufficiali Mixcloud.",
  robots: { index: hasMixes, follow: hasMixes },
};

export default function Ascolta() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}><ArrowIcon direction="left" /> Mommy DJ</Link>
        <p className={styles.eyebrow}>Musica</p>
        <h1>Ascolta i miei mix</h1>
        <p className={styles.intro}>House e tech house sono le mie radici. Il repertorio attraversa anche pop, rock, disco, funk, dance, EDM ed elettronica.</p>
        {hasMixes ? (
          <div className={styles.list}>
            {availableMixes.map((mix) => (
              <article key={mix.id} className={styles.mix}>
                <p className={styles.genre}>{mix.genre}</p>
                <h2>{mix.title}</h2>
                {mix.description ? <p>{mix.description}</p> : null}
                <div className={styles.player}><MixcloudPlayer mix={mix} /></div>
                <a href={mix.url} target="_blank" rel="noopener noreferrer" className={styles.external}>Apri su Mixcloud <ArrowIcon /></a>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span className={styles.record} aria-hidden="true">♪</span>
            <h2>La selezione dei mix non è ancora disponibile.</h2>
            <p>Per parlare della musica del tuo evento, puoi scrivermi indicando data, luogo e cosa ti piacerebbe ascoltare.</p>
            <Link href="/contatti#modulo" className={styles.button}>Chiedi disponibilità</Link>
          </div>
        )}
      </div>
    </div>
  );
}
