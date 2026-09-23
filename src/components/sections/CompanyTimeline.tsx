"use client";

import { useState } from "react";

import { PlusToggleIcon } from "@/components/ui/Button";
import { company } from "@/data/company";

/** Zeitleiste ausschließlich aus belegbaren Daten. */
const timeline = [
  {
    year: "1989",
    title: "Gründung von HiWo-med",
    text: `${company.founder} gründet HiWo-med in Uffing am Staffelsee. Die ersten Geschäfte werden aus der eigenen Garage heraus aufgebaut.`,
  },
  {
    year: "1992 – 1996",
    title: "Erste eigene Lagerräume",
    text: "Mit den ersten Lagerräumen in der Kirchstraße in Uffing entstehen die Voraussetzungen für eine strukturierte Lagerhaltung und die weitere Entwicklung des Unternehmens.",
  },
  {
    year: "1996",
    title: "Neuer Standort „An der Ach“",
    text: "HiWo-med bezieht den ersten eigenen Unternehmensstandort „An der Ach“ in Uffing. Damit stehen erstmals eigene Räumlichkeiten für Lagerung und operative Abläufe zur Verfügung.",
  },
  {
    year: "2002",
    title: "Weiterentwicklung des Unternehmens",
    text: "HiWo-med beschäftigt inzwischen 12 Mitarbeitende. Die kontinuierliche Entwicklung des Kundenstamms und des Leistungsumfangs führt zu einem wachsenden Bedarf an Lager- und Arbeitsflächen.",
  },
  {
    year: "2009",
    title: "Umzug in die Lagerhausstraße",
    text: "Der nächste Entwicklungsschritt: HiWo-med zieht an den heutigen Standort in der Lagerhausstraße in Uffing. Die neuen Räumlichkeiten bieten deutlich mehr Platz für Lager, Verwaltung und die weitere Entwicklung des Unternehmens.",
  },
  {
    year: "2012",
    title: "Erweiterung der Lagerkapazitäten",
    text: "Am Standort Lagerhausstraße wird eine zweite Lagerhalle errichtet. Damit schafft HiWo-med zusätzliche Kapazitäten für Sortiment, Warenverfügbarkeit und die zuverlässige Versorgung seiner Kunden.",
  },
  {
    year: "2016",
    title: "Die nächste Generation kommt hinzu",
    text: `${company.managingDirector} tritt in das Familienunternehmen ein und übernimmt zunehmend Verantwortung für die weitere Entwicklung von HiWo-med.`,
  },
  {
    year: "2018",
    title: "Ausbau des bestehenden Standorts",
    text: "Die Lagerflächen des Hauptgebäudes werden erweitert und an die weiter gestiegenen Anforderungen angepasst. Der Standort in Uffing bleibt damit das zentrale Fundament für Lagerung, Verwaltung und Logistik.",
  },
  {
    year: "2021",
    title: "Übergang in die zweite Generation",
    text: `${company.managingDirector} übernimmt die Geschäftsleitung. Im selben Jahr wird die HiWo-med Medizintechnik GmbH gegründet. Das bisherige einzelkaufmännische Unternehmen HiWo-med Wolfgang Hirschvogel e.K. wird in die neue Gesellschaft überführt. Damit wird die Unternehmensnachfolge innerhalb der Familie auch rechtlich vollzogen – die persönliche Verbindung zum Unternehmen und seinen Kunden bleibt dabei bestehen.`,
  },
  {
    year: "Heute",
    title: "Medizinische Versorgung aus Uffing",
    text: "Heute verbindet HiWo-med die Erfahrung aus mehr als drei Jahrzehnten mit modernen Strukturen und einem umfassenden Leistungsspektrum für medizinische Einrichtungen. Am Standort in Uffing arbeiten Lager, Verwaltung und Fuhrpark eng zusammen. Eigene Lagerkapazitäten, ein eigener Fuhrpark und ein erfahrenes Team bilden die Grundlage für eine zuverlässige und persönliche Versorgung unserer Kunden.",
  },
];

/**
 * Zehn Stationen sind als Fließtext-Liste zu voll fürs Auge -- deshalb hier
 * als Ausklapper: Jahr und Titel bleiben immer sichtbar, der Text erscheint
 * erst auf Klick. Derselbe Aufklapp-Mechanismus wie bei den Warum-HiWo-med-
 * Gründen (Positioning.tsx) und dem Fuhrpark-Absatz (Logistics.tsx).
 */
function TimelineRow({
  entry,
  index,
}: {
  entry: (typeof timeline)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const detailId = `geschichte-detail-${index}`;

  return (
    <li
      className="border-t border-line py-5 last:border-b"
      data-reveal
      style={{ "--reveal-delay": `${index * 45}ms` } as React.CSSProperties}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={detailId}
        className="grid w-full grid-cols-1 gap-x-10 gap-y-1 text-left sm:grid-cols-[10rem_1fr] lg:grid-cols-[14rem_1fr]"
      >
        <span className="t-figure-sm text-magenta-ink sm:text-ink">{entry.year}</span>
        <span className="flex items-center justify-between gap-4">
          <span className="t-h3">{entry.title}</span>
          <PlusToggleIcon open={open} className="shrink-0 text-muted" />
        </span>
      </button>

      <div className="accordion-rows" data-open={open || undefined}>
        <div id={detailId} className="overflow-hidden" aria-hidden={!open}>
          <p className="max-w-[48rem] pt-3 leading-relaxed text-muted sm:pl-[calc(10rem+2.5rem)] lg:pl-[calc(14rem+2.5rem)]">
            {entry.text}
          </p>
        </div>
      </div>
    </li>
  );
}

export function CompanyTimeline() {
  return (
    <ol className="mt-14">
      {timeline.map((t, i) => (
        <TimelineRow key={t.year} entry={t} index={i} />
      ))}
    </ol>
  );
}
