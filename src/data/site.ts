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
 * ACHTUNG (Prototyp): Die bestehende Website nennt keine Warengruppen –
 * sie verweist nur auf den Gesamtkatalog. Die folgenden Bereiche sind aus
 * belegbaren Hinweisen abgeleitet (Katalogtitel „Medizintechnik von A–Z“,
 * Leistungs- und Seminarseiten, Produktaufnahmen aus dem Lager) und vor
 * einem echten Relaunch anhand des Katalogs 2025/26 zu verifizieren.
 * Siehe docs/ANNAHMEN.md.
 */
export const assortment = [
  {
    name: "Verbandstoffe & Wundversorgung",
    note: "Klassische Verbandmittel bis zur modernen, herstellerneutralen Wundversorgung.",
  },
  {
    name: "Hygiene, Desinfektion & Flächenschutz",
    note: "Hände-, Haut-, Flächen- und Instrumentendesinfektion inklusive Dokumentationshilfen.",
  },
  {
    name: "Instrumente & Aufbereitung",
    note: "Instrumente für die tägliche Anwendung sowie Bedarf für die Medizinprodukteaufbereitung.",
  },
  {
    name: "Injektion & Infusion",
    note: "Von der Akupunkturnadel bis zur Zylinderampulle.",
  },
  {
    name: "Einmalartikel & Praxisbedarf",
    note: "Medizinische Verbrauchsartikel für den laufenden Praxisbetrieb.",
  },
  {
    name: "Notfallausstattung",
    note: "Notfallequipment und Defibrillation – auf Wunsch mit passendem Training.",
  },
  {
    name: "Praxiseinrichtung",
    note: "Mobiliar und Ausstattung für Behandlungsräume und Funktionsbereiche.",
  },
] as const;
