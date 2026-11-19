import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./components/ArrowIcon";
import HeroPhoto from "./components/HeroPhoto";
import AnimatedWords from "./components/motion/AnimatedWords";
import MotionScope from "./components/motion/MotionScope";
import { hasMixes } from "./data/mixes";
import styles from "./press-kit.module.css";

export default function Home() {
  return (
    <MotionScope className={styles.home}>
      <section className={styles.hero} aria-labelledby="mommy-title">
        <div className={styles.heroMedia}>
          <div className={styles.heroFrame}>
            <HeroPhoto className={styles.heroPhoto} />
          </div>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Mommy DJ · Music entertainment</p>
          <h1 id="mommy-title">DJ e regia musicale per <span>matrimoni ed eventi privati</span></h1>
          <p className={styles.heroSummary}>Curo la musica dall’aperitivo al party finale e mi coordino con chi organizza l’evento.</p>
          <div className={styles.actions}>
            <Link href="/contatti#modulo" className={styles.primaryButton}>Chiedi disponibilità <span aria-hidden="true"><ArrowIcon /></span></Link>
            {hasMixes ? (
              <Link href="/ascolta" className={styles.secondaryButton}>Ascolta i miei mix</Link>
            ) : (
              <button type="button" className={styles.secondaryButton} disabled aria-describedby="mix-note">Ascolta i miei mix</button>
            )}
          </div>
          {!hasMixes ? <p id="mix-note" className={styles.availability}>Mix non ancora disponibili.</p> : null}
        </div>
      </section>

      <section id="servizi" className={styles.section} aria-labelledby="servizi-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Per il tuo evento</p>
          <h2 id="servizi-title" data-reveal="words"><AnimatedWords text="Matrimoni ed eventi privati" /></h2>
        </div>
        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard} data-reveal="fade">
            <span className={styles.cardNumber}>Per coppie e wedding planner</span>
            <h3>Matrimoni</h3>
            <p>La parte musicale del ricevimento, costruita nel confronto con voi e con la wedding planner: aperitivo, cena e festa.</p>
            <Link href="/matrimoni" className={styles.textLink}>Scopri i matrimoni <span aria-hidden="true"><ArrowIcon /></span></Link>
          </article>
          <article className={styles.serviceCard} data-reveal="fade" data-reveal-delay="90">
            <span className={styles.cardNumber}>Compleanni, anniversari e aziende</span>
            <h3>Eventi privati</h3>
            <p>DJ set per compleanni, anniversari ed eventi aziendali. Repertorio e impianto vengono definiti in base agli ospiti e agli spazi.</p>
            <Link href="/eventi-privati" className={styles.textLink}>Scopri gli eventi privati <span aria-hidden="true"><ArrowIcon /></span></Link>
          </article>
        </div>
      </section>

      <section id="matrimoni" className={styles.caseSection} aria-labelledby="case-title">
        <div className={styles.section}>
          <div className={styles.caseHeading}>
            <div>
              <p className={styles.eyebrow}>Un matrimonio reale</p>
              <h2 id="case-title" data-reveal="words"><AnimatedWords text="Il ricevimento al Castello di Tabiano." /></h2>
            </div>
            <p className={styles.caseMeta}>Oliver Krause<br />Settembre 2023</p>
          </div>
          <p className={styles.caseIntro} data-reveal="fade">Per il matrimonio di Oliver Krause, figlio di Kyle Krause, proprietario e presidente del Parma Calcio, ho seguito la parte musicale del ricevimento: aperitivo con gli artisti, musica durante la cena e DJ set finale.</p>
          <ol className={styles.reception}>
            <li data-reveal="fade"><span className={styles.step}>01</span><h3>Aperitivo</h3><p>La parte musicale con gli artisti presenti.</p></li>
            <li data-reveal="fade" data-reveal-delay="70"><span className={styles.step}>02</span><h3>Cena</h3><p>La selezione musicale durante il ricevimento.</p></li>
            <li data-reveal="fade" data-reveal-delay="140"><span className={styles.step}>03</span><h3>Party finale</h3><p>Il DJ set conclusivo della festa.</p></li>
          </ol>
          <Link href="/contatti#modulo" className={styles.textLink}>Parliamo del tuo matrimonio <span aria-hidden="true"><ArrowIcon /></span></Link>
        </div>
      </section>

      <section id="musica" className={styles.section} aria-labelledby="musica-title">
        <div className={styles.listenGrid}>
          <div>
            <p className={styles.eyebrow}>La selezione musicale</p>
            <h2 id="musica-title" data-reveal="words"><AnimatedWords text="Ascolta i miei mix" /></h2>
          </div>
          <div className={styles.listenCopy} data-reveal="fade">
            <p>House e tech house sono le mie radici. Il repertorio attraversa anche pop, rock, disco, funk, dance, EDM ed elettronica, insieme ai classici italiani e internazionali.</p>
            {hasMixes ? (
              <Link href="/ascolta" className={styles.textLink}>Vai alla selezione dei mix <span aria-hidden="true"><ArrowIcon /></span></Link>
            ) : (
              <span className={styles.status}>Mix non ancora disponibili</span>
            )}
          </div>
        </div>
      </section>

      <section id="profilo" className={styles.bioSection} aria-labelledby="profilo-title">
        <div className={styles.section}>
          <div className={styles.bioGrid}>
            <figure className={styles.portraitFigure} data-reveal="image">
              <picture>
                <source type="image/webp" srcSet="/mommy-dj-ritratto-640.webp 640w, /mommy-dj-ritratto-1280.webp 1280w, /mommy-dj-ritratto-1920.webp 1920w" sizes="(min-width: 1100px) 420px, (min-width: 700px) 44vw, calc(100vw - 40px)" />
                <Image src="/mommy-dj-ritratto-1920.webp" alt="Mommy DJ, ritratto tra luci viola e blu" width={1920} height={1920} unoptimized loading="lazy" className={styles.portrait} />
              </picture>
              <figcaption>Mommy DJ · Modena</figcaption>
            </figure>
            <div className={styles.bioText}>
              <p className={styles.eyebrow}>Chi sono</p>
              <h2 id="profilo-title" data-reveal="words"><AnimatedWords text="Mommy DJ" /></h2>
              <p data-reveal="fade">Sono cresciuto nella periferia di Modena e ho cominciato da adolescente, con giradischi Technics e mixer Stanton. A 17 anni suonavo nel privé del Cenerentola, a Rubiera. Del mio percorso fanno parte Le Scuderie, Echoes, Matis e Cassero.</p>
              <p data-reveal="fade">Tra il 2007 e il 2008 ho anche gestito Le Scuderie con un socio, occupandomi del locale e del personale. Oggi mi confronto con coppie e wedding planner per preparare la parte musicale del ricevimento.</p>
              <p className={styles.bioNote}>Realizzo anche DJ set per sfilate con Modenamoremio e ho partecipato a iniziative a sostegno di Aut Aut Modena APS.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className={styles.contactSection} aria-labelledby="contatti-title">
        <div className={styles.section}>
          <p className={styles.eyebrow}>Contatti</p>
          <div className={styles.contactGrid}>
            <h2 id="contatti-title" data-reveal="words"><AnimatedWords text="Disponibilità e preventivo" /></h2>
            <div data-reveal="fade">
              <p>Indicami data, luogo e tipo di evento per verificare la disponibilità. Puoi aggiungere il numero indicativo di invitati e cosa immagini per la musica.</p>
              <div className={styles.actions}>
                <Link href="/contatti#modulo" className={styles.primaryButton}>Chiedi disponibilità <span aria-hidden="true"><ArrowIcon /></span></Link>
                <a href="https://wa.me/393462122933" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>Scrivimi su WhatsApp</a>
              </div>
              <a href="mailto:info@mommydj.com" className={styles.email}>info@mommydj.com</a>
            </div>
          </div>
          <div className={styles.guestLink}><span>Sei un invitato?</span><a href="/richiedi">Richiedi una canzone durante la festa <span aria-hidden="true"><ArrowIcon /></span></a></div>
        </div>
      </section>
    </MotionScope>
  );
}
