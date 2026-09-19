/**
 * Services & Schulungen.
 *
 * QUELLE: hiwomed.de/de/seminare-services.html — Inhalte, Zielgruppen,
 * Rechtsgrundlagen, Dauern und Referentinnen/Referenten sind übernommen.
 * Neu ist ausschließlich die Struktur: Die vier Angebote werden als
 * eigenständiger Geschäftsbereich mit einheitlichem Raster dargestellt.
 */

export type Trainer = {
  name: string;
  photo: string;
  qualifications: string[];
};

export const trainers: Record<string, Trainer> = {
  daniela: {
    name: "Daniela Engels",
    photo: "Daniela1-v2",
    qualifications: [
      "Wundexpertin ICW",
      "Medizinprodukteberaterin",
      "Staatlich geprüfte Desinfektorin",
      "Probennehmerin mit Sachkundezertifikat",
    ],
  },
  andreas: {
    name: "Andreas Kirschner",
    photo: "Andreas_K-v2",
    qualifications: ["Medizinprodukteberater", "Hygieneberater"],
  },
  tatjana: {
    name: "Tatjana Leserer",
    photo: "Tatjana1-v2",
    qualifications: [
      "Dipl. Pflegewirtin (FH)",
      "Examinierte Gesundheits- und Krankenpflegerin",
      "BG-zertifizierte Erste-Hilfe-Trainerin",
      "Wundexpertin ICW",
      "Medizinprodukteberaterin",
    ],
  },
};

export type Service = {
  id: string;
  /** Kurzform für Listen und Navigation. */
  title: string;
  /** Format: Seminar, Inhouse-Leistung, Dienstleistung … */
  format: string;
  /** Eine Zeile, die den Nutzen benennt – kein Marketingtext. */
  claim: string;
  description: string[];
  /** Eckdaten als Schlüssel/Wert – erscheinen als typografische Datenzeile. */
  facts: { label: string; value: string }[];
  contents: string[];
  audience?: string[];
  legalBasis?: string[];
  note?: string;
  trainers: Trainer[];
};

export const services: Service[] = [
  {
    id: "hygiene-seminar",
    title: "Hygiene in der Arztpraxis",
    format: "Seminar",
    claim:
      "Der jährliche Rezertifizierungskurs für Hygienebeauftragte – mit praktischen Übungen statt Folienschlacht.",
    description: [
      "An die Hygiene in der Praxis werden laufend höhere Anforderungen gestellt. Das Seminar bringt Ihr Team auf den aktuellen Stand der Hygienevorschriften, vermittelt praxisnahe Tipps und schließt praktische Übungen ein.",
      "Die Schulung gilt für Hygienebeauftragte als jährlicher Rezertifizierungskurs gemäß § 4 DGUV Vorschrift 1. Inzwischen werden zwei Hygienebeauftragte pro Praxis gefordert.",
    ],
    facts: [
      { label: "Format", value: "Präsenzseminar" },
      { label: "Dauer", value: "ca. 3,5 Stunden (14:00 – ca. 17:30 Uhr)" },
      { label: "Rezertifizierung", value: "§ 4 DGUV Vorschrift 1" },
    ],
    contents: [
      "Basiswissen und Mikroorganismen",
      "Rechtliche Grundlagen",
      "Haut- und Händehygiene",
      "Flächendesinfektion",
      "Dienstkleidung: Lagerung und Aufbereitung",
      "Risikobewertung und Einstufung von Medizinprodukten",
    ],
    audience: ["Ärztinnen und Ärzte", "Hygienebeauftragte", "Medizinische Fachangestellte"],
    note: "Neue Veranstaltungstermine werden in Kürze bekanntgegeben. Anmeldungen sind jederzeit per E-Mail möglich.",
    trainers: [trainers.daniela, trainers.andreas],
  },
  {
    id: "hygiene-check",
    title: "Hygiene-Check",
    format: "Inhouse",
    claim:
      "Eine strukturierte Ist-Aufnahme in Ihren eigenen Räumen – herstellerunabhängig und mit fertiger Dokumentation.",
    description: [
      "Unsere ausgebildeten Hygienefachberaterinnen und -berater kommen in die Praxis, erheben den Ist-Zustand und beraten anschließend individuell. Das gibt die nötige Sicherheit bei der Einhaltung aller geltenden Hygienevorschriften.",
      "Ob Hygienebeauftragte, Mediziner oder die gesamte Belegschaft: In rund zwei Stunden erhalten die Teilnehmenden Grundwissen zu den gesetzlichen Vorgaben und eine Beratung, die direkt auf Ihren Praxisbetrieb zugeschnitten ist.",
    ],
    facts: [
      { label: "Format", value: "Inhouse, bei Ihnen vor Ort" },
      { label: "Dauer", value: "ca. 2 Stunden" },
      { label: "Bindung", value: "Herstellerunabhängig" },
    ],
    contents: [
      "Alle Hygienebereiche: Hände-, Haut-, Flächen- und Instrumentendesinfektion",
      "Strukturierte Ist-Erhebung und individuelle Hygieneberatung",
      "Kostenlose Unterlagen: Dosiertabellen, Desinfektionsplan, Sicherheitsdatenblätter, Betriebsanweisungen, Gefahrstoffverzeichnis",
      "Vollständige Dokumentation zur Begehung inklusive Optimierungsvorschlägen",
    ],
    trainers: [trainers.daniela, trainers.andreas],
  },
  {
    id: "trinkwasserprobe",
    title: "Trinkwasserprobenentnahme",
    format: "Dienstleistung",
    claim:
      "Die jährliche Untersuchung für die Medizinprodukteaufbereitung – Entnahme, Labor und Prüfbericht aus einer Hand.",
    description: [
      "Die mikrobiologische Qualität des Trinkwassers spielt eine entscheidende Rolle bei der Aufbereitung von Medizinprodukten. Gesundheitsämter fordern die regelmäßige Untersuchung derjenigen Entnahmestelle, die für die Instrumentenaufbereitung verwendet wird.",
      "HiWo-med übernimmt die fachgerechte Probenentnahme sowie die Organisation der Laboruntersuchung – unkompliziert, rechtssicher und praxisnah.",
    ],
    facts: [
      { label: "Turnus", value: "Jährlich" },
      { label: "Labor", value: "Akkreditiertes Partnerlabor" },
      { label: "Ergebnis", value: "Prüfbericht inklusive Rückfragenklärung" },
    ],
    contents: [
      "Fachgerechte Probenentnahme an der Entnahmestelle für die Instrumentenaufbereitung (nach Zweck B oder Zweck C)",
      "Versand der Probe an ein akkreditiertes Labor",
      "Organisation und Dokumentation der Untersuchung",
      "Übersendung des Prüfberichts",
      "Unterstützung bei Rückfragen zum Untersuchungsergebnis",
    ],
    audience: ["Arztpraxen", "MVZ", "Medizinische Einrichtungen mit Medizinprodukteaufbereitung"],
    legalBasis: [
      "Trinkwasserverordnung (TrinkwV), § 14",
      "Infektionsschutzgesetz (IfSG), § 37",
      "Anforderungen der zuständigen Gesundheitsämter",
    ],
    note: "Die untersuchte Entnahmestelle darf ausschließlich für die Instrumentenaufbereitung genutzt werden und nicht gleichzeitig als hygienischer Handwaschplatz dienen. Untersucht wird auf E. coli, coliforme Keime, Enterokokken, Pseudomonas aeruginosa sowie die Koloniezahl bei 22 °C und 36 °C.",
    trainers: [trainers.daniela],
  },
  {
    id: "notfalltraining",
    title: "Basis-Notfalltraining",
    format: "Inhouse",
    claim:
      "Damit das Praxisteam im Ernstfall nicht überlegen muss – inklusive Kontrolle Ihres Notfallequipments.",
    description: [
      "Präventiv zu helfen ist die wirksamste Maßnahme für den Notfall. Wir bereiten Ihr Praxisteam auf einen Notfall in Ihren eigenen Räumen vor – die Schwerpunkte legen wir nach Bedarf fest.",
    ],
    facts: [
      { label: "Format", value: "Inhouse, bei Ihnen vor Ort" },
      { label: "Dauer", value: "ca. 3 Stunden" },
      { label: "Gruppengröße", value: "bis zu 10 Teilnehmende" },
    ],
    contents: [
      "Grundlagen der Ersten Hilfe",
      "Stabile Seitenlage",
      "Herz-Lungen-Wiederbelebung (HLW)",
      "Kontrolle des Notfallequipments",
    ],
    note: "Hinweis: Dies ist kein BG-zertifizierter Erste-Hilfe-Kurs.",
    trainers: [trainers.tatjana],
  },
  {
    id: "wundworkshop",
    title: "Wundworkshop",
    format: "Inhouse",
    claim:
      "Moderne Wundversorgung, herstellerneutral und auf den Kenntnisstand Ihres Teams zugeschnitten.",
    description: [
      "Der Workshop vertieft vorhandene Kenntnisse der modernen Wundversorgung. Inhalte und Tiefe stimmen wir vorab individuell mit Ihnen ab.",
    ],
    facts: [
      { label: "Format", value: "Inhouse, bei Ihnen vor Ort" },
      { label: "Dauer", value: "ca. 1 – 2 Stunden" },
      { label: "Bindung", value: "Herstellerneutral" },
    ],
    contents: [
      "Individuell auf Ihre Bedürfnisse zugeschnitten",
      "Intensivierung vorhandener Kenntnisse der modernen Wundversorgung",
      "Herstellerneutrale Produktauswahl",
    ],
    trainers: [trainers.tatjana],
  },
];
