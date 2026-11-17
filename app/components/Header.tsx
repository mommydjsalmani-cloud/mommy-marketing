"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import { useEffect, useRef, useState } from "react";
import FocusTrap from "focus-trap-react";
import { contactFormHref, menuItems } from "../data/navigation";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1200px)");
    const onResize = () => { if (desktop.matches) setIsMenuOpen(false); };
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="Mommy DJ, homepage">
            <Image src="/Logo_Bianco.png" alt="Mommy DJ Music Entertainment" width={466} height={305} priority className={styles.logo} />
          </Link>
          <nav className={styles.desktopNav} aria-label="Navigazione principale">
            {menuItems.map((link) => link.available ? (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ) : (
              <span key={link.href} role="link" aria-disabled="true" className={styles.navUnavailable}><span>{link.label}</span><small>In arrivo</small></span>
            ))}
          </nav>
          <a href="/richiedi" className={styles.requestLink}><span aria-hidden="true">♪</span> Richiedi una canzone</a>
          <Link href={contactFormHref} className={styles.primary}>Chiedi disponibilità</Link>
          <button ref={menuButtonRef} type="button" onClick={() => setIsMenuOpen((open) => !open)} className={styles.menuButton} aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"} aria-expanded={isMenuOpen} aria-controls="mobile-menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {isMenuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </header>
      {isMenuOpen ? (
        <FocusTrap focusTrapOptions={{ initialFocus: "#mobile-menu a", escapeDeactivates: false, setReturnFocus: () => menuButtonRef.current || false }}>
          <div id="mobile-menu" className={styles.mobileMenu} role="dialog" aria-modal="true" aria-label="Menu di navigazione mobile">
            <div className={styles.mobilePanel}>
              <div className={styles.dialogTop}><span>Esplora</span><button type="button" onClick={() => setIsMenuOpen(false)} aria-label="Chiudi menu di navigazione">Chiudi <span aria-hidden="true">×</span></button></div>
              <nav aria-label="Menu principale mobile" className={styles.mobileNav}>
                {menuItems.map((link) => link.available ? (
                  <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}<span aria-hidden="true"><ArrowIcon /></span></Link>
                ) : (
                  <span key={link.href} role="link" aria-disabled="true" className={styles.navUnavailable}><span>{link.label}</span><small>In arrivo</small></span>
                ))}
              </nav>
              <Link href={contactFormHref} className={styles.mobilePrimary} onClick={() => setIsMenuOpen(false)}>Chiedi disponibilità <span aria-hidden="true"><ArrowIcon /></span></Link>
              <div className={styles.guestArea}><p>Durante la festa</p><a href="/richiedi">Richiedi una canzone <span aria-hidden="true">♪</span></a><p className={styles.guestNote}>Per gli invitati all’evento.</p></div>
              <a href="https://wa.me/393462122933" className={styles.whatsapp} target="_blank" rel="noopener noreferrer">Scrivimi su WhatsApp <ArrowIcon /></a>
            </div>
          </div>
        </FocusTrap>
      ) : null}
    </>
  );
}
