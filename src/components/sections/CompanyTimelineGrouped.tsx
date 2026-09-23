"use client";

import { useState } from "react";

import { PlusToggleIcon } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { company } from "@/data/company";

/**
 * Zweite TEST-Variante der Geschichte-Section: zehn Stationen bleiben
 * -- inhaltlich unkürzbar, siehe Rückmeldung -- aber in drei Epochen
 * gruppiert, innerhalb jeder Epoche zweispaltig. Das reduziert den
 * ersten Eindruck auf drei große Blöcke statt einer langen Liste von
 * zehn; jede Station ist weiterhin einzeln per Klick aufklappbar,
 * unabhängig von den anderen. Noch nicht produktiv verlinkt, siehe
 * /unternehmen-test/.
 */
type Milestone = { year: string; title: string; text: string };

const eras: { range: string; title: string; items: Milestone[] }[] = [
  {
    range: "1989 – 2002",
    title: "Die Gründerjahre",
    items: [
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
    ],
  },
  {
    range: "2009 – 2018",
    title: "Wachstum am Standort",
    items: [
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
    ],
  },
  {
    range: "2021 – heute",
    title: "Zweite Generation",
    items: [
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
    ],
  },
];

function MilestoneItem({ item }: { item: Milestone }) {
  const [open, setOpen] = useState(false);
  const detailId = `milestone-${item.year}`;

  return (
    <div className="border-t border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={detailId}
        className="group flex w-full items-start justify-between gap-4 text-left"
      >
        <span>
          <span
            className={`t-figure-sm block transition-colors ${isOpenColor(open)}`}
          >
            {item.year}
          </span>
          <span className="mt-1 block text-[0.9375rem] font-semibold leading-snug text-ink">
            {item.title}
          </span>
        </span>
        <PlusToggleIcon
          open={open}
          className="mt-2 shrink-0 text-muted transition-colors group-hover:text-magenta-ink"
        />
      </button>

      <div className="accordion-rows" data-open={open || undefined}>
        <div id={detailId} className="overflow-hidden" aria-hidden={!open}>
          <p className="max-w-[32rem] pt-3 leading-relaxed text-muted">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

function isOpenColor(open: boolean) {
  return open ? "text-magenta-ink" : "text-ink";
}

export function CompanyTimelineGrouped() {
  return (
    <div className="mt-14">
      <figure className="mx-auto max-w-xl" data-reveal>
        <Figure
          name="standort-frueher-v1"
          widths={[1200, 800]}
          ratio={1.5}
          alt="Historische Schwarz-Weiß-Luftaufnahme des ersten eigenen HiWo-med-Standorts „An der Ach“ in Uffing am Staffelsee."
          sizes="(min-width: 1024px) 36rem, 100vw"
          className="aspect-[3/2] w-full"
        />
        <FigureCaption>Der erste eigene Standort „An der Ach“ in Uffing, 1996.</FigureCaption>
      </figure>

      {eras.map((era, i) => (
        <div key={era.range} className={i === 0 ? "mt-14" : "mt-16"}>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t-2 border-magenta pt-4">
            <span className="t-eyebrow text-magenta-ink">{era.range}</span>
            <h3 className="t-h3">{era.title}</h3>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {era.items.map((item) => (
              <MilestoneItem key={item.year} item={item} />
            ))}
          </div>
        </div>
      ))}

      <div className="mx-auto mt-16 max-w-xl">
        <div className="figure-frame flex aspect-[3/2] w-full items-center justify-center border border-dashed border-line-strong bg-paper-tint">
          <p className="max-w-[16rem] text-center text-[0.8125rem] leading-relaxed text-muted">
            Platzhalter – Drohnenbild vom heutigen Standort folgt in Kürze.
          </p>
        </div>
        <FigureCaption>HiWo-med heute, Lagerhausstraße in Uffing.</FigureCaption>
      </div>
    </div>
  );
}
