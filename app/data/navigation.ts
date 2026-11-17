import { hasMixes } from "./mixes";

// Conservato nella bozza: confermare se il Service è disponibile anche senza DJ.
export const showServiceLink = true;
export const contactFormHref = "/contatti#modulo";
export const menuItems = [
  { href: "/matrimoni", label: "Matrimoni", available: true },
  { href: "/eventi-privati", label: "Eventi privati", available: true },
  { href: "/ascolta", label: "Ascolta i miei mix", available: hasMixes },
  { href: "/contatti", label: "Contatti", available: true },
  ...(showServiceLink ? [{ href: "/service", label: "Service", available: true }] : []),
];
// Footer e altri collegamenti pubblici espongono solo le destinazioni disponibili.
export const navigationLinks = menuItems.filter((item) => item.available);
