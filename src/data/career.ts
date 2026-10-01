/**
 * Karriere.
 *
 * QUELLE: hiwomed.de/de/karriere.html — Benefits und Arbeitgebermerkmale sind
 * wörtlich bzw. sinngleich übernommen, es wurden keine ergänzt. Die zuletzt
 * ausgeschriebene Stelle (Sachbearbeiter Innendienst) ist besetzt, daher
 * aktuell keine Einträge in openPositions -- Initiativbewerbungen sind der
 * aktive Bewerbungsweg (siehe karriere/page.tsx und CareerTeaser.tsx).
 */

export type Position = {
  id: string;
  title: string;
  employment: string;
  location: string;
  intro: string[];
  tasks: string[];
  profile: string[];
  offer: string[];
};

export const openPositions: Position[] = [];

/** Kurzform für den Teaser auf der Startseite. */
export const cultureHighlights = [
  "30 Tage Urlaub",
  "Flache Hierarchien",
  "Familienfreundlich",
  "Intensive Einarbeitung",
  "Vermögenswirksame Leistungen",
  "Sommerfest & Weihnachtsfeier",
];

/** „Was uns als Arbeitgeber auszeichnet“ – vollständig von der Karriereseite. */
export const employerFacts = [
  {
    title: "Elektronische Zeiterfassung",
    text: "Die Anwesenheit aller Mitarbeitenden wird elektronisch erfasst und ist jederzeit einsehbar. Transparent und fair.",
  },
  {
    title: "Familienfreundlich",
    text: "Bei uns arbeiten viele Eltern. Uns ist bewusst, dass Kinder auch mal krank werden.",
  },
  {
    title: "Betriebszugehörigkeit",
    text: "Wir wünschen uns eine lange Zusammenarbeit. Nicht ohne Grund gratulieren wir regelmäßig zu langjährigen Jubiläen.",
  },
  {
    title: "Flache Hierarchien",
    text: "Bei uns gelten flache Hierarchien. Dennoch ist jedem klar, für welches Team er verantwortlich ist.",
  },
  {
    title: "Eigenverantwortung",
    text: "Unsere Mitarbeitenden sind Mitgestalter. Das fordern wir nicht nur ein, darauf sind wir auch stolz.",
  },
  {
    title: "Einarbeitung",
    text: "Wir gehen durch eine intensive Einarbeitungsphase. So stärken wir die Position neuer Mitarbeitender von Anfang an.",
  },
  {
    title: "Vermögenswirksame Leistungen",
    text: "Werden nach der Probezeit angeboten.",
  },
  {
    title: "Events",
    text: "Jedes Jahr findet ein Sommergrillfest sowie eine Weihnachtsfeier statt.",
  },
  {
    title: "Parkplätze",
    text: "Kostenfrei vor Ort vorhanden. Auch ein Bahnhof befindet sich in unmittelbarer Nähe.",
  },
  {
    title: "Dienstwagen",
    text: "Für Dienstfahrten stehen moderne Fahrzeuge zur Verfügung.",
  },
  {
    title: "Dress-Code",
    text: "Bei uns eher casual als business. Außer natürlich bei Außenterminen.",
  },
];

/** Ansprechpartner für Bewerbungen laut Karriereseite. */
export const applicationContact = {
  name: "Armin van Wickeren",
  role: "Innendienstleitung",
  photo: "Armin-v3",
};
