import Link from "next/link";

import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead } from "@/components/ui/Section";
import { services } from "@/data/services";

/**
 * Services als Programm, nicht als Kachelwand: eine gesetzte Liste mit
 * laufender Nummer, Format und Dauer – so, wie ein Fortbildungsprogramm
 * tatsächlich gelesen wird.
 */
export function ServicesTeaser() {
  return (
    <section className="section-y bg-paper-raised" aria-labelledby="services">
      <div className="container-site">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              index="06"
              label="Services & Schulungen"
              title={<span id="services">Fortbildung, die im Haus bleibt.</span>}
              lead="Hygiene, Wundversorgung, Notfall und Trinkwasserproben: Unsere Referentinnen und Referenten sind eigene Mitarbeitende mit einschlägiger Qualifikation – nicht zugekaufte Trainer."
            />

            <figure className="mt-10" data-reveal>
              <Figure
                name="seminar-vor-ort-v2"
                widths={[960, 640]}
                ratio={2.49}
                alt="Schulungssituation bei HiWo-med mit Erste-Hilfe-Material auf dem Tisch und dem Hinweis „individuell und vor Ort“."
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[2.1/1] w-full"
              />
              <FigureCaption>
                Vier von fünf Angeboten finden inhouse statt – in Ihren Räumen, mit Ihrem Team
                und Ihrem Equipment.
              </FigureCaption>
            </figure>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul>
              {services.map((s, i) => (
                <li
                  key={s.id}
                  className="border-t border-line last:border-b"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <Link
                    href={`/services/#${s.id}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-3 py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-4"
                  >
                    <span className="t-index pt-1.5 text-magenta-ink" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="t-h3 transition-colors group-hover:text-magenta-ink">
                          {s.title}
                        </span>
                        <span className="border border-line-strong px-1.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-muted">
                          {s.format}
                        </span>
                      </span>
                      <span className="mt-2 block leading-relaxed text-muted">{s.claim}</span>
                      <span className="mt-2.5 block text-[0.8125rem] text-muted">
                        {s.facts.find((f) => f.label === "Dauer")?.value ??
                          s.facts.find((f) => f.label === "Turnus")?.value}
                      </span>
                    </span>
                    <ArrowRight className="mt-2 text-magenta transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/services/">
                Alle Services und Termine
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
