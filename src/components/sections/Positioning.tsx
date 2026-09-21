"use client";

import { useState } from "react";

import { company } from "@/data/company";
import { PlusToggleIcon } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Section";

/**
 * Warum HiWo-med. Bewusst drei Punkte, bewusst keine Karten:
 * eine große typografische Aussage links, drei durch Haarlinien
 * getrennte Argumente rechts. Jeder Punkt lässt sich per "Mehr erfahren"
 * um einen zusätzlichen, konkreten Beleg aufklappen -- die Seite ist sonst
 * reiner Fließtext, das hier ist die einzige Stelle zum Anfassen.
 */
const reasons = [
  {
    title: "Ein Ansprechpartner statt einer Warteschleife",
    text: `${company.hours.compact} geht jemand ans Telefon, der die Praxis kennt. Dazu ein fester Außendienstpartner mit eigenem Gebiet, der vorbeikommt – nicht nur anruft.`,
    detail:
      "Fünf feste Gebiete, fünf feste Gesichter: Oberbayern, Oberland und Schwaben, Chiemgau und Niederbayern werden jeweils von derselben Person betreut – dazu die durchgehend besetzte Auftragsannahme im Innendienst.",
  },
  {
    title: "Ware aus dem eigenen Lager, nicht aus dem Katalog",
    text: "Über 6.000 Artikel liegen auf 1.500 m² sofort verfügbar. Was bestellt wird, ist in der Regel schon da – im Großraum München am Folgetag, ausgefahren vom eigenen Lieferdienst.",
    detail:
      "Oberland, Rosenheim, Traunstein, Augsburg und Schwaben: 1–3 Werktage mit dem eigenen Lieferdienst. Restliches Bundesgebiet: Bestellung bis 13 Uhr, Versand per UPS noch am selben Tag.",
  },
  {
    title: "Beratung, die über den Karton hinausgeht",
    text: "Hygiene, Wundversorgung, Notfallmanagement, Trinkwasserproben: Fachleute aus dem eigenen Haus schulen Ihr Team – herstellerneutral und bei Ihnen vor Ort.",
    detail:
      "Im Team stecken eigene Qualifikationen dahinter, keine externen Referenten: staatlich geprüfte Desinfektorin, ausgebildeter Hygieneberater und mehrere Kolleginnen und Kollegen mit Zusatzqualifizierung zum Medizinprodukteberater.",
  },
];

function ReasonItem({
  reason,
  index,
}: {
  reason: (typeof reasons)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const detailId = `positionierung-detail-${index}`;

  return (
    <li
      className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-t border-line py-7 last:border-b sm:grid-cols-[3.5rem_1fr] sm:gap-x-4"
      data-reveal
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <span className="t-index pt-1.5 text-magenta-ink" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="t-h3">{reason.title}</h3>
        <p className="mt-2.5 leading-relaxed text-muted">{reason.text}</p>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={detailId}
          className="mt-3.5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-magenta-ink transition-colors hover:text-magenta-deep"
        >
          {open ? "Weniger anzeigen" : "Mehr erfahren"}
          <PlusToggleIcon open={open} />
        </button>

        <div className="accordion-rows" data-open={open || undefined}>
          <div id={detailId} className="overflow-hidden" aria-hidden={!open}>
            <p className="pt-3 leading-relaxed text-muted">{reason.detail}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function Positioning() {
  return (
    <section className="section-y" aria-labelledby="positionierung">
      <div className="container-site">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              index="02"
              label="Positionierung"
              title={
                <span id="positionierung">
                  Persönlich betreut. Digital bestellt. Zuverlässig versorgt.
                </span>
              }
            />
            {/* Zielgruppen kurz benannt -- stand vorher als längerer Absatz
                im Hero, ist dort aber zu viel Text neben der Headline. */}
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              Für Arztpraxen, MVZ, ambulante OP-Zentren, Kliniken und Pflegeeinrichtungen –
              im Großraum München und darüber hinaus.
            </p>
            <p className="t-serif mt-6 text-[clamp(1.2rem,1rem+0.7vw,1.5rem)] leading-[1.5] text-ink">
              Der größte Teil unserer Kundenbeziehungen entsteht nicht über ein
              Bestellformular, sondern über Menschen: über den Außendienst, über
              Empfehlungen und über Zusammenarbeit, die oft schon seit Jahrzehnten läuft.
            </p>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
              Für Bestandskunden gibt es mit FastOrder ein eigenes Bestellportal. Es ist ein
              Werkzeug für den Alltag – nicht das Geschäftsmodell.
            </p>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {reasons.map((r, i) => (
              <ReasonItem key={r.title} reason={r} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
