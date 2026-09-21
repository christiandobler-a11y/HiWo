import { company } from "./company";

/**
 * Navigation.
 *
 * Gegenüber der bestehenden Website deutlich vereinfacht: aus vier
 * Ebenen mit Dropdowns werden sechs gleichrangige Einstiege. Die alten
 * Unterseiten „Anspruch“, „Kunden“ und „Sortiment“ gehen in „Unternehmen“
 * bzw. „Leistungen“ auf (siehe docs/REDIRECTS.md).
 */
export const mainNav = [
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/services/", label: "Services" },
  { href: "/unternehmen/", label: "Unternehmen" },
  { href: "/team/", label: "Team" },
  { href: "/karriere/", label: "Karriere" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;

export const legalNav = [
  { href: "/impressum/", label: "Impressum" },
  { href: "/datenschutz/", label: "Datenschutz" },
] as const;

export const fastOrder = {
  href: company.links.fastOrder,
  label: "FastOrder",
  /** Erklärt in einem Wort, für wen der Zugang gedacht ist. */
  qualifier: "Bestandskunden",
} as const;

export const SITE_URL = "https://www.hiwomed.de";

/**
 * Sortimentsbereiche.
 *
 * Aus dem tatsächlichen Gesamtkatalog (HiWo-Katalog_2019-20.pdf, verlinkt
 * von der Sortimentsseite) übernommen -- die 11 echten Kapitel des
 * Katalogs auf die für das Kerngeschäft (Arztpraxen, MVZ, ambulante
 * OP-Zentren, Tageskliniken) relevanten 8 eingegrenzt. Nicht übernommen:
 * Röntgen, Inkontinenz und Pflegebedarf -- diese drei Kapitel richten
 * sich stärker an Pflege- und Senioreneinrichtungen, laut Positionierung
 * nur die sekundäre Zielgruppe. "Sprechstundenbedarf" zusätzlich als
 * eigene, 9. Kategorie ergänzt -- kein eigenes Katalogkapitel, aber ein
 * für Arztpraxen zentraler, gesondert abgerechneter Warenbereich.
 */
export const assortment = [
  {
    name: "Laborbedarf",
    note: "Laborzubehör und Verbrauchsmaterial für Diagnostik und Probenverarbeitung.",
  },
  {
    name: "Praxisbedarf",
    note: "Medizinische Verbrauchsartikel für den laufenden Praxisbetrieb.",
  },
  {
    name: "Sprechstundenbedarf",
    note: "Verbrauchsmaterial, das Praxen quartalsweise über die Sprechstundenbedarfs-Vereinbarung mit den Krankenkassen abrechnen.",
  },
  {
    name: "Praxiseinrichtung",
    note: "Mobiliar und Ausstattung für Behandlungsräume und Funktionsbereiche.",
  },
  {
    name: "Verbandmittel & Wundversorgung",
    note: "Klassische Verbandmittel bis zur modernen, herstellerneutralen Wundversorgung.",
  },
  {
    name: "Hygiene & Desinfektion",
    note: "Hände-, Haut-, Flächen- und Instrumentendesinfektion inklusive Dokumentationshilfen.",
  },
  {
    name: "EKG & Ultraschall",
    note: "Zubehör und Verbrauchsmaterial für EKG- und Ultraschalldiagnostik.",
  },
  {
    name: "Notfallmedizin",
    note: "Notfallequipment und Defibrillation – auf Wunsch mit passendem Training.",
  },
  {
    name: "Hospitalbedarf",
    note: "Klinischer Bedarf für ambulante OP-Zentren und Tageskliniken.",
  },
] as const;
