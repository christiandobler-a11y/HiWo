"use client";

import { useState } from "react";

import { PlusToggleIcon } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead } from "@/components/ui/Section";
import { deliveryRegions } from "@/data/company";

/**
 * Logistik – die stärkste Sektion der Startseite und die einzige dunkle.
 * Der Wechsel auf Nachtblau setzt hier bewusst einen Akzent: eigener
 * Fuhrpark und eigenes Lager sind das, was HiWo-med vom Versandhandel trennt.
 */
const logisticsDetails = [
  {
    title: "Bis an den Lagerort",
    text: "Unsere Fahrer stellen die Ware nicht an der Tür ab, sondern bringen sie dorthin, wo sie hingehört.",
  },
  {
    title: "Verpackungen zurück",
    text: "Anfallende Verpackungen nehmen wir bei der nächsten Tour kostenfrei wieder mit.",
  },
  {
    title: "Bestellung bis 13:00 Uhr",
    text: "Außerhalb unseres Liefergebiets geht die Ware garantiert am selben Tag per UPS raus.",
  },
];

export function Logistics() {
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <section className="dark-section section-y" aria-labelledby="logistik">
      <div className="container-site">
        <SectionHead
          index="04"
          label="Logistik"
          onDark
          split
          title={<span id="logistik">Eigenes Lager. Eigene Fahrzeuge. Eigene Leute.</span>}
          lead={
            <span className="text-night-muted">
              Wir geben die Auslieferung nicht aus der Hand. Acht Kollegen fahren die Touren
              selbst – deshalb wissen wir, wann eine Lieferung ankommt, und können es auch
              zusagen.
            </span>
          }
        />

        <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <figure className="lg:col-span-5" data-reveal>
            <Figure
              name="lager-regale-v4"
              widths={[960, 640]}
              ratio={2.49}
              alt="Blick durch einen Gang im HiWo-med-Lager: beidseitig Regale mit Kartons und Verbandmaterial bis unter die Decke."
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[3/2] w-full"
              position="50% 50%"
            />
            <FigureCaption onDark>
              1.500 m² Lagerfläche in Uffing am Staffelsee. Über 6.000 Artikel sind sofort
              verfügbar – Wareneingang und Qualitätskontrolle laufen im Haus.
            </FigureCaption>

            <button
              type="button"
              onClick={() => setLocationOpen((o) => !o)}
              aria-expanded={locationOpen}
              aria-controls="logistik-standort-detail"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-night-ink transition-colors hover:text-magenta-glow"
            >
              {locationOpen ? "Weniger anzeigen" : "Fuhrpark"}
              <PlusToggleIcon open={locationOpen} />
            </button>
            <div className="accordion-rows" data-open={locationOpen || undefined}>
              <div id="logistik-standort-detail" className="overflow-hidden" aria-hidden={!locationOpen}>
                <p className="pt-3 text-[0.9375rem] leading-relaxed text-night-muted">
                  Acht Fahrer, ein Versorgungsgebiet: von Uffing bis in den Großraum München und
                  darüber hinaus.
                </p>
              </div>
            </div>
          </figure>

          {/* Liefergebiete als Tabelle: die Information, die Praxen wirklich
              interessiert – wann kommt was, und wie. */}
          <div className="lg:col-span-7">
            <h3 className="t-eyebrow text-night-ink">Liefergebiete und Laufzeiten</h3>
            <table className="mt-5 w-full border-collapse text-left">
              <caption className="sr-only">
                Liefergebiete des HiWo-med-Lieferdienstes mit den jeweiligen Laufzeiten
              </caption>
              <thead>
                <tr className="border-b border-white/20">
                  <th scope="col" className="py-3 pr-4 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-night-muted">
                    Gebiet
                  </th>
                  <th scope="col" className="py-3 pr-4 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-night-muted">
                    Laufzeit
                  </th>
                  <th scope="col" className="hidden py-3 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-night-muted sm:table-cell">
                    Weg
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliveryRegions.map((r) => (
                  <tr key={r.region} className="border-b border-white/12 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-night-ink">
                      {r.region}
                      <span className="mt-1 block text-[0.8125rem] font-normal text-night-muted sm:hidden">
                        {r.mode}
                      </span>
                    </th>
                    <td className="py-4 pr-4 text-[0.9375rem] text-night-muted">{r.lead}</td>
                    <td className="hidden py-4 text-[0.9375rem] text-night-muted sm:table-cell">
                      {r.mode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <dl className="mt-10 grid gap-y-6 sm:grid-cols-3 sm:gap-x-8">
              {logisticsDetails.map((d, i) => (
                <div
                  key={d.title}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  <span className="mb-3 block h-[2px] w-7 bg-magenta-glow" aria-hidden="true" />
                  <dt className="font-semibold text-night-ink">{d.title}</dt>
                  <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-night-muted">
                    {d.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
