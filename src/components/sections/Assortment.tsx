import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { SectionHead } from "@/components/ui/Section";
import { company } from "@/data/company";
import { assortment } from "@/data/site";

/**
 * Sortiment als typografisches Verzeichnis – ausdrücklich kein Shop-Raster.
 * Der Katalog ist das eigentliche Nachschlagewerk und wird als solcher gezeigt.
 */
export function Assortment() {
  return (
    <section className="section-y bg-paper-raised" aria-labelledby="versorgung">
      <div className="container-site">
        <SectionHead
          index="03"
          label="Versorgung"
          split
          title={<span id="versorgung">Medizintechnik von A&nbsp;bis&nbsp;Z – und zwar vorrätig.</span>}
          lead={
            <>
              Von der Akupunkturnadel bis zur Zylinderampulle. Wir führen, was im Praxisalltag
              regelmäßig gebraucht wird, beziehen ausschließlich CE-gekennzeichnete Produkte und
              arbeiten nur mit Lieferanten, die wie wir eine Qualitätssicherung eingeführt haben.
            </>
          }
        />

        <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2 sm:gap-x-10">
              {assortment.map((a, i) => (
                <li
                  key={a.name}
                  className="border-t border-line py-5 last:border-b sm:last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b"
                  data-reveal
                  style={{ "--reveal-delay": `${(i % 4) * 60}ms` } as React.CSSProperties}
                >
                  <h3 className="text-[1.0625rem] font-semibold text-ink">{a.name}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">{a.note}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[44rem] text-[0.9rem] leading-relaxed text-muted">
              Der Überblick ist ein Auszug. Was Sie nicht finden, beschaffen wir – ein Anruf
              genügt, und Sie bekommen ein konkretes Angebot.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
              <Button href="/leistungen/" variant="outline">
                Leistungen im Detail
                <ArrowRight />
              </Button>
              <Button href={`tel:${company.phone.href.replace("tel:", "")}`} variant="quiet">
                Oder direkt anrufen: {company.phone.display}
              </Button>
            </div>
          </div>

          {/* Der gedruckte Katalog als echtes Objekt – nicht als Icon. */}
          <div className="lg:col-span-4">
            <a
              href={company.links.catalog}
              target="_blank"
              rel="noreferrer noopener"
              className="group/card block"
              data-reveal
            >
              <Figure
                name="katalog-cover-v2"
                widths={[560, 380]}
                ratio={0.707}
                alt="Titelseite des HiWo-med Gesamtkatalogs 2025/26 mit dem Schriftzug „Medizintechnik von A–Z, seit 1989“."
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 80vw"
                className="figure-zoom mx-auto max-w-[320px] border border-line lg:mx-0"
              />
              <div className="mx-auto mt-5 flex max-w-[320px] items-start gap-3 lg:mx-0">
                <span className="mt-[0.5em] h-[2px] w-5 shrink-0 bg-magenta" aria-hidden="true" />
                <p className="text-[0.9rem] leading-relaxed">
                  <span className="font-semibold text-ink">Gesamtkatalog 2025/26</span>
                  <span className="block text-muted">
                    Als PDF herunterladen – oder sich das gedruckte Exemplar vom Außendienst
                    mitbringen lassen.
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
