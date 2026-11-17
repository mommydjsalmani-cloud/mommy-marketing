import styles from "./service-icon.module.css";

const symbols = {
  rings: <><circle cx="18" cy="28" r="9" /><circle cx="30" cy="28" r="9" /><path d="m26 11 4-4 4 4-4 5Z" className={styles.tone} /><path d="M30 16v3" /></>,
  ceremony: <><path d="M11 41V22a13 13 0 0 1 26 0v19M17 41V23a7 7 0 0 1 14 0v18M7 41h34" /><path d="M19 12h10" className={styles.detail} /></>,
  toast: <><g transform="rotate(-12 15 22)"><path d="M10 9h10v10a5 5 0 0 1-10 0ZM15 24v14m-5 0h10" /><path d="M11 16h8" className={styles.detail} /></g><g transform="rotate(12 33 22)"><path d="M28 9h10v10a5 5 0 0 1-10 0ZM33 24v14m-5 0h10" /><path d="M29 16h8" className={styles.detail} /></g><path d="M24 5v3m-2 4h4" className={styles.detail} /></>,
  dinner: <><circle cx="24" cy="26" r="11" className={styles.tone} /><circle cx="24" cy="26" r="7" className={styles.detail} /><path d="M3 14v8a3 3 0 0 0 6 0v-8M6 14v25M42 14v25m0-25c6 4 6 12 0 14" /></>,
  decks: <><rect x="5" y="14" width="38" height="24" rx="4" /><circle cx="15" cy="26" r="6" className={styles.tone} /><circle cx="33" cy="26" r="6" className={styles.tone} /><circle cx="15" cy="26" r="1" fill="currentColor" stroke="none" /><circle cx="33" cy="26" r="1" fill="currentColor" stroke="none" /><path d="M24 19v13m-2-8h4M11 10h6m14 0h6" /></>,
  globe: <><circle cx="24" cy="24" r="17" /><ellipse cx="24" cy="24" rx="7" ry="17" className={styles.detail} /><path d="M7 24h34M10 15h28M10 33h28" className={styles.detail} /></>,
  request: <><rect x="13" y="5" width="22" height="38" rx="5" /><path d="M21 10h6M21 38h6M28 17v11m0-11-7 2v11" /><ellipse cx="18" cy="30" rx="3" ry="2" className={styles.tone} /><ellipse cx="25" cy="28" rx="3" ry="2" className={styles.tone} /></>,
  speaker: <><rect x="13" y="5" width="22" height="38" rx="4" /><circle cx="24" cy="15" r="3" /><circle cx="24" cy="30" r="7" className={styles.tone} /><circle cx="24" cy="30" r="2" /><path d="M7 20a13 13 0 0 0 0 10m34-10a13 13 0 0 1 0 10" className={styles.detail} /></>,
  lighting: <><ellipse cx="24" cy="17" rx="10" ry="4" className={styles.tone} /><path d="m14 17 3 14a3 3 0 0 0 3 2h8a3 3 0 0 0 3-2l3-14M13 26v6a11 7 0 0 0 22 0v-6M24 39v4m-8 0h16" /><path d="M12 5l5 6m7-8v7m12-5-5 6" className={styles.detail} /></>,
  location: <><path d="M36 20c0 9-12 21-12 21S12 29 12 20a12 12 0 1 1 24 0Z" /><circle cx="24" cy="20" r="4" className={styles.tone} /></>,
  plan: <><path d="M22 41H13a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h19a3 3 0 0 1 3 3v8M17 15h11m-11 6h8m-8 6h4" /><path d="m27 32 10-10 4 4-10 10-6 2Z" className={styles.tone} /><path d="m34 25 4 4" className={styles.detail} /></>,
  setup: <><path d="M19 7v8m10-8v8M16 15h16v8a8 8 0 0 1-16 0ZM24 31v3a7 7 0 0 1-14 0v-3" /><path d="M21 22h6" className={styles.detail} /></>,
  party: <><path d="m8 40 8-24 16 16Z" className={styles.tone} /><path d="m12 29 7 7m-5-13 11 11M27 8c6-4 12 1 7 6l-3 3M25 23l6-3M11 10l3 3m21 11 4 2M38 8l2-3" /></>,
  cake: <><rect x="10" y="26" width="28" height="14" rx="3" /><path d="M10 31c4 4 5-4 9 0s6-4 10 0 5-4 9 0M15 26v-5h18v5M24 21v-7M7 40h34" /><path d="M24 7c-5 4-3 7 0 7s5-3 0-7Z" className={styles.tone} /></>,
  office: <><rect x="13" y="9" width="22" height="33" rx="3" /><path d="M19 9V5h10v4M20 17h2m5 0h2m-9 7h2m5 0h2M21 42V32h6v10M8 42h32" /></>,
} as const;

export type ServiceIconName = keyof typeof symbols;

export default function ServiceIcon({ name, illustration = false }: { name: ServiceIconName; illustration?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      data-service-icon={name}
      className={[styles.icon, illustration ? styles.illustration : ""].filter(Boolean).join(" ")}
    >
      {symbols[name]}
    </svg>
  );
}
