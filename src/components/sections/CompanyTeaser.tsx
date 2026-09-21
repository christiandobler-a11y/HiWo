import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead } from "@/components/ui/Section";
import { company } from "@/data/company";
import { longTenureCount, teamGroups, teamHeadcount } from "@/data/team";

/** Eine Auswahl quer durch alle Bereiche – nicht nur die Führungsebene. */
const portraitStrip = [
  "Andrea-v3",
  "Anton1-v3",
  "Hafi-v3",
  "Klaus-v3",
  "Sandra2-v3",
  "Niki-v3",
  "Daniela1-v3",
  "Franz-v3",
  "Kathi-v3",
  "Branko-v3",
  "Michi1-v3",
  "Heiko-v3",
];

const nameByPhoto = new Map(
  teamGroups.flatMap((g) => g.members.map((m) => [m.photo, m.name] as const)),
);

export function CompanyTeaser() {
  return (
    <section className="section-y" aria-labelledby="unternehmen">
      <div className="container-site">
        {/* Bild zuerst im Markup: Auf Schmalbildschirmen (wo "grid" ohne
            lg:grid-cols einfach in Reihenfolge stapelt) stand hier vorher
            erst der ganze Textblock und das Foto von Simon und Wolfgang
            Hirschvogel kam erst danach -- beim Scrollen kaum mehr als ein
            Sliver sichtbar. lg:col-start hält die Desktop-Anordnung
            (Text links, Bild rechts) unabhängig von der Reihenfolge im
            Markup bei. */}
        <div className="grid items-start gap-x-12 gap-y-12 lg:grid-cols-12">
          <figure className="lg:col-span-5 lg:col-start-8 lg:row-start-1" data-reveal>
            <Figure
              name="geschaeftsfuehrung-v2"
              widths={[1000, 700]}
              ratio={1.6}
              alt={`${company.managingDirector} und Firmengründer ${company.founder} im Gespräch vor einer HiWo-med-Bande.`}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[1.6/1] w-full"
            />
            <FigureCaption>
              {company.managingDirector}, Geschäftsführer seit 2021, mit Firmengründer{" "}
              {company.founder}.
            </FigureCaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <SectionHead
              index="08"
              label="Unternehmen"
              title={<span id="unternehmen">Zwei Generationen, dieselbe Aufgabe.</span>}
            />
            <blockquote className="mt-9 border-l-2 border-magenta pl-6">
              <p className="t-serif text-[clamp(1.25rem,1rem+0.9vw,1.6rem)] leading-[1.45] text-ink">
                „Unsere Kunden sollen ihre Zeit und Energie in das Wesentliche investieren
                können: in das Wohl und die Gesundheit ihrer Patienten.“
              </p>
              <footer className="mt-4 text-[0.875rem] text-muted">
                Aus dem Selbstverständnis von HiWo-med
              </footer>
            </blockquote>
            <p className="mt-8 leading-relaxed text-muted">
              {company.founder} hat das Unternehmen {company.foundedYear} gegründet,{" "}
              {company.managingDirector} führt es heute. Seither ist aus einem Fachhandel für
              niedergelassene Praxen ein Versorgungsbetrieb mit eigenem Lager, eigenem
              Fuhrpark und {teamHeadcount} Kolleginnen und Kollegen geworden – weiterhin aus
              Uffing.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
              <Button href="/unternehmen/" variant="outline">
                Über HiWo-med
                <ArrowRight />
              </Button>
              <Button href="/team/" variant="quiet">
                Alle {teamHeadcount} Kolleginnen und Kollegen
              </Button>
            </div>
          </div>
        </div>

        {/* Porträtleiste: zeigt in einer Zeile, dass hinter der Firma
            tatsächlich Menschen stehen – ohne Telefonbuch-Optik. */}
        <div className="mt-16 border-t border-line pt-8" data-reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="t-eyebrow text-muted">Das Team</h3>
            <p className="text-[0.875rem] text-muted">
              {teamHeadcount} Menschen in {teamGroups.length} Bereichen – {longTenureCount} davon seit mehr als 20 Jahren.
            </p>
          </div>
          <ul className="-mx-[var(--gutter)] mt-6 flex gap-3 overflow-x-auto px-[var(--gutter)] pb-2 [scrollbar-width:thin]">
            {portraitStrip.map((photo) => (
              <li key={photo} className="w-[86px] shrink-0 sm:w-[104px]">
                <div className="figure-frame aspect-[4/5] w-full">
                  <img
                    src={`/team/${photo}.webp`}
                    width={420}
                    height={525}
                    alt={`Porträt von ${nameByPhoto.get(photo) ?? "Mitarbeitenden"} bei HiWo-med`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
