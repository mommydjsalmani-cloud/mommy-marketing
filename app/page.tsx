import Image from "next/image";
import Link from "next/link";
import styles from "./press-kit.module.css";

export default function Home() {
  return (
    <div className={styles.kit}>
      <section className={styles.hero} aria-labelledby="mommy-title">
        <div className={styles.heroMedia}>
          <Image
            src="/mommy-dj-live.webp"
            alt="Mommy DJ al mixer e ai giradischi durante un DJ set"
            fill
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.heroPhoto}
          />
        </div>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>DJ · Matrimoni · Eventi privati</p>
          <h1 id="mommy-title" className={styles.heroTitle}>Mommy DJ</h1>
          <p className={styles.heroSummary}>
            Un percorso nei club, con la house e la tech house.
            Oggi anche al fianco di coppie e wedding planner,
            per la parte musicale del ricevimento.
          </p>
          <div className={styles.actions}>
            <Link href="/contatti" className={styles.primaryLink}>Contatti</Link>
            <a href="#profilo" className={styles.secondaryLink}>Il mio percorso</a>
          </div>
        </div>
        <a href="#profilo" className={styles.scrollLink} aria-label="Scorri al profilo">
          <span>Scorri</span><span aria-hidden="true">↓</span>
        </a>
      </section>

      <nav className={styles.sectionNav} aria-label="Sezioni del press kit">
        <div className={styles.sectionNavInner}>
          <a href="#profilo">Profilo</a>
          <a href="#matrimoni">Matrimoni selezionati</a>
          <a href="#musica">Musica</a>
          <a href="#contatti">Contatti</a>
        </div>
      </nav>

      <section id="profilo" className={styles.section} aria-labelledby="profilo-title">
        <div className={styles.profileGrid}>
          <figure className={styles.portraitFigure}>
            <picture>
              <source
                type="image/webp"
                srcSet="/mommy-dj-ritratto-640.webp 640w, /mommy-dj-ritratto-1280.webp 1280w, /mommy-dj-ritratto-1920.webp 1920w"
                sizes="(min-width: 1280px) 504px, (min-width: 900px) calc(45vw - 72px), (min-width: 636px) 580px, (min-width: 540px) calc(100vw - 56px), calc(100vw - 44px)"
              />
              <Image
                src="/mommy-dj-ritratto-1920.webp"
                alt="Mommy DJ, ritratto tra luci viola e blu"
                width={1920}
                height={1920}
                unoptimized
                loading="lazy"
                className={styles.portrait}
              />
            </picture>
            <figcaption>Mommy DJ</figcaption>
          </figure>
          <div className={styles.profileText}>
            <p className={styles.eyebrow}>Profilo</p>
            <h2 id="profilo-title">Mommy DJ</h2>
            <p>
              Sono cresciuto nella periferia di Modena. Ho cominciato da adolescente,
              con giradischi Technics e mixer Stanton. A 17 anni suonavo nel privé
              del Cenerentola, a Rubiera.
            </p>
            <p>
              Del mio percorso fanno parte Le Scuderie, Echoes, Matis e Cassero.
            </p>
            <p>
              Tra il 2007 e il 2008 ho anche gestito Le Scuderie insieme a un socio,
              occupandomi dell’intero locale e del personale. Un’esperienza che fa
              parte del mio percorso anche sul piano organizzativo.
            </p>
          </div>
        </div>
      </section>

      <section id="matrimoni" className={styles.workSection} aria-labelledby="matrimoni-title">
        <div className={styles.section}>
          <div className={styles.workHeading}>
            <p className={styles.eyebrow}>Esperienze</p>
            <h2 id="matrimoni-title">Matrimoni selezionati</h2>
            <p className={styles.workIntro}>
              Ho curato la parte musicale dei matrimoni di Cariba Heine,
              attrice della serie H2O, e di Oliver Krause, figlio di Kyle Krause,
              proprietario e presidente del Parma Calcio. In entrambi ho seguito
              l’aperitivo con gli artisti, la musica durante la cena e il DJ set conclusivo.
            </p>
          </div>
          <div className={styles.workList}>
            <article className={styles.workRow}>
              <div>
                <h3>Cariba Heine</h3>
                <p className={styles.workDescription}>Attrice della serie televisiva H2O</p>
              </div>
              <p className={styles.workDetail}>Parte musicale del ricevimento</p>
            </article>
            <article className={styles.workRow}>
              <div>
                <h3>Oliver Krause</h3>
                <p className={styles.workDescription}>
                  Figlio di Kyle Krause, proprietario e presidente del Parma Calcio
                </p>
              </div>
              <p className={styles.workDetail}>Castello di Tabiano<br />Settembre 2023</p>
            </article>
          </div>
          <ul className={styles.receptionParts} aria-label="Parte musicale seguita nei due matrimoni">
            <li>Aperitivo con gli artisti</li>
            <li>Musica per la cena</li>
            <li>DJ set conclusivo</li>
          </ul>
        </div>
      </section>

      <section id="musica" className={styles.section} aria-labelledby="musica-title">
        <div className={styles.musicGrid}>
          <div className={styles.musicText}>
            <p className={styles.eyebrow}>Musica</p>
            <h2 id="musica-title">La selezione musicale</h2>
            <p>
              House e tech house sono le mie radici, ma il repertorio è più ampio:
              pop, rock, disco, funk, dance, R&amp;B, hip hop, latino e reggaeton,
              insieme ai classici italiani e internazionali dagli anni ’70 a oggi.
            </p>
            <p>
              Quando una coppia mi contatta, cerco prima di capire come immagina
              il matrimonio e cosa si aspetta da me. Da lì comincia il confronto
              sulla musica, anche con la wedding planner coinvolta nella preparazione.
            </p>
          </div>
          <ul className={styles.genres} aria-label="Generi e repertorio musicale">
            <li>Pop e rock</li>
            <li>Classici italiani</li>
            <li>Disco, funk e revival</li>
            <li>Dance e commerciale</li>
            <li>R&amp;B e hip hop</li>
            <li>Latino e reggaeton</li>
            <li>House e tech house</li>
          </ul>
        </div>
      </section>

      <section id="contatti" className={styles.contactSection} aria-labelledby="contatti-title">
        <div className={styles.section}>
          <p className={styles.eyebrow}>Contatti</p>
          <h2 id="contatti-title">Mommy DJ</h2>
          <a href="mailto:info@mommydj.com" className={styles.email}>info@mommydj.com</a>
          <div className={styles.contactLinks}>
            <a href="tel:+393462122933">+39 346 212 2933</a>
            <a href="https://wa.me/393462122933" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <Link href="/contatti">Richiedi informazioni</Link>
            <Link href="/richiedi">Richiedi una canzone</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
