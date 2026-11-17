import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecaptchaProvider from "./components/RecaptchaProvider";
import FloatingContactWidget from "./components/FloatingContactWidget";
import NavigationMotion from "./components/motion/NavigationMotion";

const brand = Montserrat({
  variable: "--font-brand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mommy DJ | DJ e regia musicale per matrimoni ed eventi privati",
  description: "Curo la musica dall’aperitivo al party finale e mi coordino con chi organizza l’evento. DJ per matrimoni ed eventi privati.",
  openGraph: {
    title: "Mommy DJ | DJ e regia musicale per matrimoni ed eventi privati",
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
    "telephone": "+39-346-212-2933",
    "email": "info@mommydj.com",
    "priceRange": "€€-€€€",
    "url": "https://mommydj.com"
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
        className={`${brand.variable} antialiased`}
      >
        <RecaptchaProvider>
          <NavigationMotion />
          <a href="#main-content" className="skip-to-content">
            Salta al contenuto
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingContactWidget />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
