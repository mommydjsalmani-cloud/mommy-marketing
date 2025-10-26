import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DJ Mommy - Musica per Matrimoni ed Eventi Privati",
  description: "DJ professionista per matrimoni ed eventi privati. Musica su misura, playlist personalizzate e regia impeccabile per il tuo giorno speciale.",
  keywords: "dj matrimoni, dj eventi, musica matrimonio, intrattenimento matrimonio, dj professionista",
  openGraph: {
    title: "DJ Mommy - Musica per Matrimoni ed Eventi Privati",
    description: "DJ professionista per matrimoni ed eventi privati. Musica su misura per il tuo giorno speciale.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DJ Mommy",
    "description": "DJ professionista per matrimoni ed eventi privati",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT"
    },
    "telephone": "+39-123-456-7890",
    "email": "info@djmommy.it",
    "priceRange": "€€",
    "url": "https://mommy-marketing.vercel.app"
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Salta al contenuto
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
