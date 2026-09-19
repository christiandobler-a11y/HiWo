/**
 * Karriere.
 *
 * QUELLE: hiwomed.de/de/karriere.html — Stellenausschreibung, Aufgaben,
 * Anforderungen, Leistungen und Arbeitgebermerkmale sind wörtlich bzw.
 * sinngleich übernommen. Es wurden keine Benefits ergänzt.
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

export const openPositions: Position[] = [
  {
    id: "sachbearbeiter-innendienst",
    title: "Sachbearbeiter Innendienst / Vertriebsinnendienst (m/w/d)",
    employment: "Vollzeit, unbefristet",
    location: "Uffing am Staffelsee",
    intro: [
      "Die HiWo-med Medizintechnik GmbH ist ein inhabergeführtes Familienunternehmen mit Sitz in Uffing. Seit über 37 Jahren versorgen wir Arztpraxen, ambulante OP-Zentren, Tageskliniken und Medizinische Versorgungszentren zuverlässig mit Medizinprodukten und individuellen Versorgungslösungen.",
      "Damit unsere Kunden auch künftig persönlich und kompetent betreut werden, suchen wir zum nächstmöglichen Zeitpunkt Verstärkung für unseren Innendienst.",
    ],
    tasks: [
      "Kompetente persönliche und telefonische Betreuung unserer Kunden",
      "Bearbeitung von Kundenanfragen sowie Erstellung und Nachverfolgung von Angeboten",
      "Begleitung von Kundenaufträgen von der Bestellung bis zur Auslieferung",
      "Koordination und Terminüberwachung der Auftragsabwicklung",
      "Erstellung von Auftragsbestätigungen, Lieferscheinen und Rechnungen",
      "Bearbeitung von Reklamationen sowie lösungsorientierte Kundenbetreuung",
      "Pflege und Aktualisierung von Kunden-, Artikel- und Preisdaten",
      "Enge Zusammenarbeit mit dem Außendienst sowie mit Einkauf und Logistik",
      "Unterstützung bei allgemeinen administrativen und organisatorischen Aufgaben",
    ],
    profile: [
      "Erfolgreich abgeschlossene kaufmännische Ausbildung oder eine vergleichbare Qualifikation",
      "Berufserfahrung im Vertriebsinnendienst oder Kundenservice ist von Vorteil",
      "Kenntnisse im Gesundheitswesen oder im medizinischen Fachhandel sind von Vorteil – wir arbeiten Sie aber umfassend ein",
      "Quereinsteigerinnen und Quereinsteiger mit kaufmännischem Hintergrund sind ebenfalls willkommen",
      "Sicherer Umgang mit den gängigen MS-Office-Anwendungen",
      "Strukturierte, eigenverantwortliche und sorgfältige Arbeitsweise",
      "Ausgeprägte Service- und Kundenorientierung sowie Kommunikationsstärke",
      "Teamgeist, Organisationstalent und ein hohes Maß an Eigeninitiative",
    ],
    offer: [
      "Ein unbefristetes Arbeitsverhältnis in einem wachsenden Familienunternehmen",
      "Eine attraktive und leistungsgerechte Vergütung",
      "30 Tage Urlaub",
      "Vermögenswirksame Leistungen",
      "Firmenwagen (auch zur privaten Nutzung) nach erfolgreicher Probezeit möglich",
      "Eine strukturierte und umfassende Einarbeitung",
      "Eigenverantwortliches Arbeiten mit kurzen Entscheidungswegen und flachen Hierarchien",
      "Ein modern ausgestatteter Arbeitsplatz in einem kollegialen Umfeld",
      "Individuelle Fort- und Weiterbildungsmöglichkeiten, einschließlich der Qualifizierung zum Medizinprodukteberater (m/w/d)",
      "Langfristige Entwicklungsperspektiven",
      "Kostenlose Heiß- und Kaltgetränke sowie Kaffee",
      "Elektroladestation für Elektrofahrzeuge",
    ],
  },
];

/** Kurzform für den Teaser auf der Startseite. */
export const cultureHighlights = [
  "30 Tage Urlaub",
  "Flache Hierarchien",
  "Familienfreundlich",
  "Intensive Einarbeitung",
  "Kostenfreie Parkplätze",
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
