"use client";

import { useState } from "react";

import { Figure, FigureCaption } from "@/components/ui/Figure";
import { company } from "@/data/company";

/**
 * TEST-Variante der Geschichte-Zeitleiste: eine durchgehende Linie
 * verbindet das alte Luftbild oben mit dem künftigen Drohnenbild unten --
 * die Jahre sitzen als Punkte auf dieser Linie, der Text erscheint für
 * jeweils nur eine Station in einem gemeinsamen Feld darunter (statt
 * zehn einzelnen Ausklappern). Noch nicht produktiv verlinkt, siehe
 * /unternehmen-test/.
 */
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

export function CompanyTimelineSpine() {
  const [active, setActive] = useState<number | null>(null);
  const activeEntry = active !== null ? timeline[active] : null;

  return (
    <div className="mt-14">
      {/* Bild-Bookend oben: das alte Luftbild. */}
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

      {/* Die Linie, die von Foto zu Foto läuft -- die zehn Stationen sitzen
          als Punkte darauf, Text und Titel direkt daneben. */}
      <div className="relative mx-auto max-w-xl py-10">
        <div className="absolute bottom-0 left-[5px] top-0 w-px bg-line-strong" aria-hidden="true" />

        <ol>
          {timeline.map((t, i) => {
            const isOpen = active === i;
            return (
              <li key={t.year}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group relative flex w-full items-baseline gap-4 py-3 pl-8 text-left"
                >
                  <span
                    className={`absolute left-[5px] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-paper transition-colors ${
                      isOpen ? "border-magenta bg-magenta" : "border-line-strong group-hover:border-magenta"
                    }`}
                    aria-hidden="true"
                  />
                  <span className={`t-figure-sm shrink-0 ${isOpen ? "text-magenta-ink" : "text-ink"}`}>
                    {t.year}
                  </span>
                  <span className="text-[0.9375rem] font-semibold leading-snug text-ink">{t.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Gemeinsames Textfeld: zeigt immer nur die eine gerade gewählte
          Station -- die Höhe der Section bleibt dadurch unabhängig davon,
          welche (oder ob eine) Station offen ist. */}
      <div className="accordion-rows mx-auto max-w-xl" data-open={activeEntry ? true : undefined}>
        <div className="overflow-hidden">
          {activeEntry && (
            <div className="border-t border-line pb-10 pt-6">
              <p className="t-eyebrow text-magenta-ink">{activeEntry.year}</p>
              <h3 className="t-h3 mt-1.5">{activeEntry.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted">{activeEntry.text}</p>
            </div>
          )}
        </div>
      </div>
      {!activeEntry && (
        <p className="mx-auto max-w-xl text-[0.8125rem] text-muted">Jahr antippen, um mehr zu erfahren.</p>
      )}

      {/* Bild-Bookend unten: Platzhalter bis das Drohnenbild vom
          heutigen Standort vorliegt. */}
      <div className="mx-auto mt-10 max-w-xl">
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
