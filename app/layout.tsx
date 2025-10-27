import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoIntro from "./components/LogoIntro";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const michroma = Michroma({
  variable: "--font-michroma",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mommy DJ - DJ per Matrimoni ed Eventi in Italia e Svizzera",
  description: "DJ professionista per matrimoni, eventi privati e aziendali. 20 anni di esperienza, app richieste live, coordinamento con planner e fornitori.",
  openGraph: {
    title: "Mommy DJ - DJ per Matrimoni ed Eventi",
    description: "DJ professionista per matrimoni, eventi privati e aziendali in Italia e Svizzera.",
    type: "website",
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
    "name": "Mommy DJ",
    "description": "DJ professionista per matrimoni ed eventi privati in Italia e Svizzera",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT"
    },
    "areaServed": ["IT", "CH"],
    "telephone": "+39-123-456-7890",
    "email": "info@mommydj.com",
    "priceRange": "€€-€€€",
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
        className={`${inter.variable} ${michroma.variable} antialiased`}
      >
        <LogoIntro />
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
