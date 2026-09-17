import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MotionRuntime } from "@/components/ui/MotionRuntime";
import { company } from "@/data/company";
import { SITE_URL } from "@/data/site";

/**
 * Archivo trägt die ganze Seite: eine sachliche, etwas kompaktere Grotesk,
 * die in schweren Schnitten Haltung hat und in leichten Schnitten für große
 * Kennzahlen taugt. Source Serif setzt punktuell Wärme – für Zitate und
 * hervorgehobene Einleitungen.
 * Beide werden selbst gehostet (next/font) – keine externen Requests.
 */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  // Nur die Strichstärke als Achse: die Breitenachse wird nicht gebraucht
  // und würde die Schriftdatei ohne Nutzen mehr als verdoppeln.
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HiWo-med Medizintechnik – Versorgungspartner für medizinische Einrichtungen",
    template: "%s | HiWo-med Medizintechnik",
  },
  description:
    "Medizinischer Fachhandel aus Uffing am Staffelsee: über 6.000 Artikel sofort ab Lager, eigener Lieferdienst im Großraum München und Oberbayern, persönlicher Außendienst und Schulungen für Praxen, MVZ und Kliniken.",
  applicationName: "HiWo-med",
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "HiWo-med Medizintechnik",
    title: "HiWo-med Medizintechnik – Versorgungspartner für medizinische Einrichtungen",
    description:
      "Über 6.000 Artikel sofort ab Lager, eigener Lieferdienst und persönliche Betreuung – seit 1989 aus Uffing am Staffelsee.",
    images: [{ url: "/img/lieferdienst-sprinter-1280.webp", width: 1280, height: 514 }],
  },
  robots: {
    // Prototyp: bewusst nicht indexierbar, damit er der echten Seite nicht
    // in die Quere kommt. Vor einem Livegang zu entfernen.
    index: false,
    follow: false,
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

/**
 * Schema.org-Basis. Bewusst schlank gehalten: nur Angaben, die auf der
 * bestehenden Website belegbar sind. Erweiterbar um Öffnungszeiten je
 * Wochentag, Geokoordinaten und Bewertungen beim echten Relaunch.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: company.legalName,
  alternateName: company.shortName,
  url: SITE_URL,
  foundingDate: String(company.foundedYear),
  telephone: company.phone.display,
  faxNumber: company.fax,
  email: company.email.general,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    postalCode: company.address.zip,
    addressLocality: company.address.city,
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  areaServed: [
    "München",
    "Oberbayern",
    "Bad Tölz",
    "Rosenheim",
    "Traunstein",
    "Augsburg",
    "Schwaben",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <body>
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
        <MotionRuntime />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
