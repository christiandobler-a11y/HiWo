/**
 * Team.
 *
 * QUELLE: hiwomed.de/de/team.html — Namen, Eintrittsjahre, Funktionen und
 * Abteilungszuordnung wurden 1:1 übernommen. Die Porträts sind die
 * Original-Aufnahmen der bestehenden Website (auf 420 px skaliert, WebP).
 * Die Reihenfolge der Bereiche wurde gegenüber der alten Seite geändert:
 * Geschäftsführung und Kundenkontakt stehen jetzt vorne.
 */

export type TeamMember = {
  name: string;
  /** Dateiname in /public/team ohne Endung. */
  photo: string;
  /** Eintrittsjahr laut Website, oder ein Statustext wie „in Babypause“. */
  since?: number;
  status?: string;
  /** Funktion oder Zusatzqualifikation, sofern auf der Website ausgewiesen. */
  role?: string;
  /** Porträt liegt nur in geringer Auflösung vor (150 × 185 px). */
  lowRes?: boolean;
};

export type TeamGroup = {
  id: string;
  name: string;
  /** Kurzer, konkreter Einordnungstext – beschreibt die Aufgabe des Bereichs. */
  summary: string;
  members: TeamMember[];
};

export const teamGroups: TeamGroup[] = [
  {
    id: "geschaeftsfuehrung",
    name: "Geschäftsführung",
    summary:
      "Zwei Generationen, ein Unternehmen: der Gründer als Berater, die zweite Generation in der Verantwortung.",
    members: [
      { name: "Simon Hirschvogel", photo: "Simon1", since: 2016, role: "Geschäftsführer" },
      { name: "Wolfgang Hirschvogel", photo: "Senior3", role: "Firmengründer, Berater" },
    ],
  },
  {
    id: "aussendienst",
    name: "Außendienst & Kundenbetreuung",
    summary:
      "Feste Ansprechpartner mit eigenem Gebiet. Sie kommen in die Praxis, kennen die Abläufe und halten Schulungen vor Ort.",
    members: [
      {
        name: "Klaus Staltmeier",
        photo: "Klaus",
        since: 2008,
        role: "Vertriebsleiter · Außendienst Oberbayern",
      },
      {
        name: "Michaela Bauer",
        photo: "Michi1",
        since: 2011,
        role: "Außendienst Oberland und Schwaben",
      },
      {
        name: "Tatjana Leserer",
        photo: "Tatjana1",
        since: 2015,
        role: "Außendienst Chiemgau und Niederbayern",
      },
      {
        name: "Daniela Engels",
        photo: "Daniela1",
        since: 2018,
        role: "Außendienst Oberbayern · staatlich geprüfte Desinfektorin",
      },
      {
        name: "Andreas Kirschner",
        photo: "Andreas_K",
        since: 2021,
        role: "Außendienst Niederbayern · Hygieneberater",
      },
    ],
  },
  {
    id: "innendienst",
    name: "Auftragsannahme & Verwaltung",
    summary:
      "Nimmt Bestellungen entgegen, klärt Rückfragen und begleitet Aufträge bis zur Auslieferung. Montag bis Freitag durchgehend besetzt.",
    members: [
      { name: "Andrea Poschenrieder", photo: "Andrea", since: 1997 },
      { name: "Sandra Akdogan", photo: "Sandra2", since: 2002 },
      {
        name: "Armin van Wickeren",
        photo: "Armin",
        since: 2019,
        role: "Innendienstleitung",
      },
      {
        name: "Sarah Stahr",
        photo: "sarah_stahr_0",
        status: "in Babypause",
        lowRes: true,
      },
      { name: "Katharina Weber", photo: "Kathi", since: 2022 },
      { name: "Christoph Gansler", photo: "Christoph", since: 2022 },
    ],
  },
  {
    id: "einkauf",
    name: "Einkauf",
    summary:
      "Sorgt dafür, dass die über 6.000 Lagerartikel verfügbar bleiben – und dass nur Lieferanten mit eigener Qualitätssicherung zum Zug kommen.",
    members: [{ name: "Gabriele Bergmeister", photo: "Gabriele_Bergmeister", since: 2022 }],
  },
  {
    id: "lager",
    name: "Warenannahme, Qualitätskontrolle & Lager",
    summary:
      "Prüft jede Eingangslieferung, kommissioniert die Tagesaufträge und hält 1.500 m² Lagerfläche in Ordnung.",
    members: [
      { name: "Wolfgang Haf", photo: "Hafi", since: 2006 },
      { name: "Ursula Pfister", photo: "Ursula", since: 2020 },
      { name: "Heiko Kiesewetter", photo: "Heiko", since: 2021 },
      { name: "Christian Dobler", photo: "Chris", since: 2021 },
      { name: "Andreas Metzenroth", photo: "Andreas_M", since: 2022 },
      { name: "Athanasios Polymeridis", photo: "Athanasios_Polymeridis", since: 2024 },
      { name: "Christine Hoiß", photo: "Tina", since: 2024 },
    ],
  },
  {
    id: "logistik",
    name: "Lieferlogistik & Fuhrpark",
    summary:
      "Acht Kolleginnen und Kollegen fahren die Ware selbst aus – bis an den gewünschten Lagerort in der Praxis, inklusive Rücknahme der Verpackungen.",
    members: [
      {
        name: "Anton Wölfle",
        photo: "Anton1",
        since: 1999,
        role: "Leitung Fuhrpark & Logistik",
      },
      { name: "Nikolaus Gall", photo: "Niki", since: 2002 },
      { name: "Branko Zutic", photo: "Branko", since: 2007 },
      { name: "Andreas Fischer", photo: "Andreas_F", since: 2009 },
      { name: "Roland Steiger", photo: "Roland", since: 2017 },
      { name: "Peter Utecht", photo: "Peter", since: 2021 },
      { name: "Ziarat Khan Daharwal", photo: "Ziarat", since: 2022 },
      { name: "James Fuchs", photo: "James_Fuchs", since: 2024, lowRes: true },
    ],
  },
  {
    id: "buchhaltung",
    name: "Buchhaltung & Controlling",
    summary: "Rechnungen, Zahlen und Auswertungen – die kaufmännische Seite des Betriebs.",
    members: [
      { name: "Franz Mangold", photo: "Franz", since: 2018 },
      { name: "Melanie Redekop", photo: "Melanie_Redekop", since: 2025 },
    ],
  },
];

export const teamHeadcount = teamGroups.reduce((n, g) => n + g.members.length, 0);

const allMembers = teamGroups.flatMap((g) => g.members);

/** Frühestes Eintrittsjahr im Team – wird für die Faktenzeile gebraucht. */
export const earliestYear = Math.min(
  ...allMembers.map((m) => m.since).filter((y): y is number => typeof y === "number"),
);

/**
 * Wie viele Kolleginnen und Kollegen sind seit mindestens 20 Jahren dabei?
 * Wird berechnet statt behauptet – die Zahl bleibt damit auch in Zukunft korrekt.
 */
export const longTenureCount = allMembers.filter(
  (m) => typeof m.since === "number" && new Date().getFullYear() - m.since >= 20,
).length;

/** Die fünf Außendienst-Porträts für den Teaser auf der Startseite. */
export const fieldServiceMembers =
  teamGroups.find((g) => g.id === "aussendienst")?.members ?? [];
