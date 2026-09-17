import { SectionHead } from "@/components/ui/Section";

/**
 * Warum HiWo-med. Bewusst drei Punkte, bewusst keine Karten:
 * eine große typografische Aussage links, drei durch Haarlinien
 * getrennte Argumente rechts.
 */
const reasons = [
  {
    title: "Ein Ansprechpartner statt einer Warteschleife",
    text: "Montag bis Freitag von 8 bis 17 Uhr geht jemand ans Telefon, der die Praxis kennt. Dazu ein fester Außendienstpartner mit eigenem Gebiet, der vorbeikommt – nicht nur anruft.",
  },
  {
    title: "Ware aus dem eigenen Lager, nicht aus dem Katalog",
    text: "Über 6.000 Artikel liegen auf 1.500 m² sofort verfügbar. Was bestellt wird, ist in der Regel schon da – im Großraum München am Folgetag, ausgefahren vom eigenen Lieferdienst.",
  },
  {
    title: "Beratung, die über den Karton hinausgeht",
    text: "Hygiene, Wundversorgung, Notfallmanagement, Trinkwasserproben: Fachleute aus dem eigenen Haus schulen Ihr Team – herstellerneutral und bei Ihnen vor Ort.",
  },
];

export function Positioning() {
  return (
    <section className="section-y" aria-labelledby="positionierung">
      <div className="container-site">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              index="02"
              label="Positionierung"
              title={<span id="positionierung">Kein Onlineshop. Ein Versorgungspartner.</span>}
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
              <li
                key={r.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-t border-line py-7 last:border-b sm:grid-cols-[3.5rem_1fr] sm:gap-x-4"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <span className="t-index pt-1.5 text-magenta-ink" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="t-h3">{r.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
