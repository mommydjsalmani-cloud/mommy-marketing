import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import { navigationLinks, contactFormHref } from "../data/navigation";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div><h2>Mommy DJ</h2><p>DJ e regia musicale per matrimoni ed eventi privati.</p><a href="https://instagram.com/mommymusicentertainment" target="_blank" rel="noopener noreferrer" className={styles.instagram}>Instagram <ArrowIcon /></a></div>
          <nav aria-label="Link nel footer"><h3>Esplora</h3><ul>{navigationLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></nav>
          <div><h3>Contatti</h3><ul><li><Link href={contactFormHref}>Chiedi disponibilità <ArrowIcon /></Link></li><li><a href="mailto:info@mommydj.com">info@mommydj.com</a></li><li><a href="tel:+393462122933">+39 346 212 2933</a></li><li><a href="https://wa.me/393462122933" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowIcon /></a></li></ul></div>
          <div className={styles.guest}><h3>Durante la festa</h3><a href="/richiedi">Richiedi una canzone <span aria-hidden="true">♪</span></a><p>La funzione per gli invitati all’evento.</p></div>
        </div>
        <div className={styles.bottom}><span>© {new Date().getFullYear()} Mommy DJ</span><span>Music entertainment</span></div>
      </div>
    </footer>
  );
}
