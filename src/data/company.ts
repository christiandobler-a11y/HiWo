/**
 * Unternehmensdaten.
 *
 * QUELLE: Alle Werte in dieser Datei stammen aus öffentlich zugänglichen
 * Inhalten der bestehenden Website www.hiwomed.de (Stand der Analyse:
 * September 2026) bzw. aus dem dort verlinkten Katalog 2025/26.
 * Es wurden keine Zahlen ergänzt, gerundet oder geschätzt.
 * Unsicherheiten sind in docs/ANNAHMEN.md dokumentiert.
 */

import { teamHeadcount } from "@/data/team";

export const company = {
  legalName: "HiWo-med Medizintechnik GmbH",
  shortName: "HiWo-med",
  /** Steht so im Logo und auf dem Katalogtitel 2025/26. */
  foundedYear: 1989,
  claim: "Bleiben Sie Mediziner, wir kümmern uns um den Rest.",
  address: {
    street: "Lagerhausstraße 4",
    zip: "82449",
    city: "Uffing am Staffelsee",
    country: "Deutschland",
  },
  phone: { display: "+49 8846 920 40", href: "tel:+49884692040" },
  fax: "+49 8846 920 419",
  email: {
    general: "info@hiwomed.de",
    jobs: "bewerbung@hiwomed.de",
    training: "schulungen@hiwomed.de",
  },
  hours: {
    weekdays: "Montag bis Donnerstag",
    weekdaysTime: "08:00 – 17:00 Uhr durchgehend",
    friday: "Freitag",
    fridayTime: "08:00 – 15:00 Uhr durchgehend",
    /** Kompakte Fassung für Fakten-Zeilen und Fließtext. */
    compact: "Montag bis Donnerstag 08:00 – 17:00 Uhr, Freitag bis 15:00 Uhr, durchgehend",
  },
  register: {
    court: "Amtsgericht München",
    number: "HRB 268150",
    vatId: "DE345016059",
    lucid: "DE5177025654191",
  },
  managingDirector: "Simon Hirschvogel",
  founder: "Wolfgang Hirschvogel",
  /** Externer Datenschutzbeauftragter laut hiwomed.de/de/datenschutz.html. */
  dataProtectionOfficer: {
    company: "Fischer Management Beratungs GmbH",
    contact: "Alexander G.V. Fischer",
    street: "Bretonischer Ring 6",
    zip: "85630",
    city: "Grasbrunn",
    email: "datenschutz@fischer-management.de",
  },
  links: {
    fastOrder: "https://hiwomed.fast-order.cloud/login",
    shop: "https://hiwomed-shop.de/register",
    catalog: "https://www.hiwomed.de/media/files/downloads/HiWo-Katalog_2019-20.pdf",
  },
} as const;

/**
 * Kennzahlen. Jede Zahl ist auf der bestehenden Website belegbar.
 * `source` dokumentiert, wo sie herkommt – hilfreich für das Lektorat
 * vor einem echten Relaunch.
 *
 * Bewusst keine aus dem Gründungsjahr berechnete Jahreszahl mehr ("X
 * Jahre") -- das war an mehreren Stellen inkonsistent formatiert und
 * macht die Seite ohne echten Mehrwert wartungsintensiv. Überall nur
 * noch das feste Gründungsjahr 1989.
 */
export const keyFigures = [
  {
    value: company.foundedYear,
    unit: "",
    label: "gegründet in Uffing am Staffelsee",
    detail: "Familiengeführt, heute in zweiter Generation.",
    source: "Logo / Katalogtitel 2025/26",
    countUp: false,
    numberFormat: "plain" as const,
  },
  {
    value: 1500,
    unit: "m²",
    label: "eigene Lagerfläche",
    detail: "Ein Lager, das zum Versorgungsgebiet passt – nicht umgekehrt.",
    source: "hiwomed.de/de/unser-anspruch.html",
    countUp: true,
  },
  {
    value: 6000,
    unit: "+",
    label: "Artikel sofort verfügbar",
    detail: "Von der Akupunkturnadel bis zur Zylinderampulle.",
    source: "hiwomed.de/de/unser-anspruch.html",
    countUp: true,
  },
  {
    value: teamHeadcount,
    unit: "",
    label: "Kolleginnen und Kollegen",
    detail: "Innendienst, Außendienst, Einkauf, Lager, Logistik und Buchhaltung.",
    source: "hiwomed.de/de/team.html (gezählt)",
    countUp: true,
  },
] as const;

/**
 * Liefergebiete des hauseigenen Lieferdienstes.
 * Laufzeiten exakt wie auf hiwomed.de/de/leistungen.html angegeben.
 */
export const deliveryRegions = [
  {
    region: "Großraum München",
    lead: "in der Regel am Folgetag",
    mode: "Eigener Lieferdienst",
  },
  {
    region: "Oberland & Bad Tölz",
    lead: "innerhalb von 1–3 Arbeitstagen",
    mode: "Eigener Lieferdienst",
  },
  {
    region: "Rosenheim & Traunstein",
    lead: "innerhalb von 1–3 Arbeitstagen",
    mode: "Eigener Lieferdienst",
  },
  {
    region: "Augsburg & Schwaben",
    lead: "innerhalb von 1–3 Arbeitstagen",
    mode: "Eigener Lieferdienst",
  },
  {
    region: "Übriges Bundesgebiet",
    lead: "Bestellung bis 13:00 Uhr – Versand am selben Tag",
    mode: "Paketversand über UPS",
  },
] as const;

/** Zielgruppen – wörtlich aus „Unsere Kunden“ übernommen und gruppiert. */
export const customerGroups = [
  "Arztpraxen aller Fachrichtungen",
  "Medizinische Versorgungszentren",
  "Ambulante OP-Zentren",
  "Tageskliniken",
  "Pflege- und Senioreneinrichtungen",
  "Weitere medizinische Einrichtungen",
] as const;
