import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { CompanyTimelineGrouped } from "@/components/sections/CompanyTimelineGrouped";
import { ContactCta } from "@/components/sections/ContactCta";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead, SectionMark } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";
import { company, keyFigures } from "@/data/company";
import { teamHeadcount } from "@/data/team";

/**
 * TEST-Seite für die alternative Geschichte-Darstellung (zehn Stationen
 * in drei Epochen gruppiert, innerhalb jeder Epoche zweispaltig) --
 * nicht verlinkt, nicht indexiert. Sobald das Drohnenbild vom heutigen
 * Standort da ist und sich der Aufbau bewährt hat, wandert das Ergebnis
 * in /unternehmen/ und diese Seite kann wieder weg.
 */
export const metadata: Metadata = {
  title: "Unternehmen (Test) – Familienbetrieb in zweiter Generation",
  robots: { index: false, follow: false },
};

const principles = [
  {
    title: "Partner, nicht Verkäufer",
    text: "Wir verstehen uns als Partner, der mit Qualitätsprodukten, kompetenter Beratung und zuverlässiger Betreuung dafür sorgt, dass Bestell- und Versorgungsprozesse effizient laufen. Wir verbinden fachliche Beratung mit zuverlässiger Versorgung und persönlicher Betreuung.",
  },
  {
    title: "Qualität, die überprüfbar ist",
    text: "Wir führen ausschließlich qualifizierte Produkte namhafter Hersteller und beziehen sie von Lieferanten, die wie wir eine Qualitätssicherung eingeführt haben. Unser eigenes Qualitätsmanagement ist nach ISO 9001 zertifiziert. Jede Lieferung durchläuft bei uns eine Wareneingangsprüfung, jede Charge ist rückverfolgbar. Bei Rückrufen und Sicherheitsmitteilungen der Hersteller informieren wir betroffene Kunden gezielt.",
  },
  {
    title: "Nachfragen statt annehmen",
    text: "Einmal im Jahr befragen wir unsere Kunden zu Umfang und Qualität unserer Leistungen. Die Rückmeldungen sind der Grund, warum sich Abläufe bei uns regelmäßig ändern.",
  },
  {
    title: "Mitarbeitende als Mitgestalter",
    text: "Wer bei uns arbeitet, übernimmt Verantwortung für seinen Bereich. Wir investieren jedes Jahr in Schulungs- und Weiterbildungsmaßnahmen – auch deshalb bleiben viele Kolleginnen und Kollegen über Jahrzehnte.",
  },
];

export default function UnternehmenTestPage() {
  return (
    <>
      <div className="container-site pt-6">
        <p className="border border-dashed border-line-strong bg-paper-tint px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
          Testseite -- nur zur internen Ansicht der alternativen Geschichte-Darstellung, nicht
          verlinkt und nicht für Suchmaschinen freigegeben.
        </p>
      </div>

      <PageHeader
        label="Unternehmen"
        title={<>Ein Familienbetrieb, der wie ein Versorger arbeitet.</>}
        lead={`Gegründet ${company.foundedYear}, heute in zweiter Generation geführt. ${teamHeadcount} Kolleginnen und Kollegen arbeiten in Uffing am Staffelsee an einem Standort, an dem Lager, Verwaltung und Fuhrpark zusammenliegen.`}
      />

      {/* Geschäftsführung */}
      <section className="pb-[var(--section-y)]">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
            <figure className="lg:col-span-7" data-reveal>
              <Figure
                name="geschaeftsfuehrung-v4"
                widths={[1000, 700]}
                ratio={1.6}
                alt={`${company.managingDirector} und Firmengründer ${company.founder} im Gespräch vor einer HiWo-med-Bande.`}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-[clamp(13rem,40vh,20rem)] w-full lg:h-[clamp(16rem,42vh,24rem)]"
                position="50% 40%"
                priority
              />
              <FigureCaption>
                {company.managingDirector} (links), Geschäftsführer seit 2021, mit Firmengründer{" "}
                {company.founder}.
              </FigureCaption>
            </figure>

            <div className="lg:col-span-5 lg:pt-6">
              <blockquote className="border-l-2 border-magenta pl-6">
                <p className="t-serif text-[clamp(1.2rem,1rem+0.8vw,1.55rem)] leading-[1.45] text-ink">
                  „Unsere Kunden sollen ihre Zeit und Energie in das Wesentliche investieren
                  können: in das Wohl und die Gesundheit ihrer Patienten.“
                </p>
                <footer className="mt-4 text-[0.875rem] text-muted">
                  {company.managingDirector}, Geschäftsführer
                </footer>
              </blockquote>
              <p className="mt-8 leading-relaxed text-muted">
                Das ist kein Leitbild, das an der Wand hängt. Es ist die Begründung für den
                eigenen Lieferdienst, für das große Lager und dafür, dass Montag bis Donnerstag
                von 8 bis 17 Uhr und freitags von 8 bis 15 Uhr persönlich jemand ans Telefon
                geht: Jede Minute, die eine Praxis nicht mit Beschaffung verbringt, ist eine
                Minute für Patienten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zeitleiste -- TEST: Spine-Variante statt Ausklapp-Liste */}
      <section className="section-y bg-paper-raised" aria-labelledby="geschichte">
        <div className="container-site">
          <SectionHead
            label="Geschichte"
            title={<span id="geschichte">Seit {company.foundedYear}. Gewachsen aus Verantwortung.</span>}
            lead="Seit der Gründung im Jahr 1989 hat sich HiWo-med kontinuierlich weiterentwickelt. Aus dem ursprünglichen Handelsunternehmen entstand über die Jahre ein leistungsfähiger medizinischer Versorger mit eigenem Lager, Fuhrpark und einem gewachsenen Team."
          >
            <p className="mt-4 leading-relaxed text-muted">
              Dabei ist eines immer gleich geblieben: die persönliche Verantwortung für unsere
              Kunden und eine zuverlässige Versorgung, auf die sich medizinische Einrichtungen
              im Alltag verlassen können.
            </p>
          </SectionHead>

          <CompanyTimelineGrouped />
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="section-y" aria-labelledby="anspruch">
        <div className="container-site">
          <SectionHead
            label="Anspruch"
            title={<span id="anspruch">Wie wir arbeiten</span>}
            lead={
              <span className="[hyphens:none]">
                Vier Grundsätze, die sich im Alltag überprüfen lassen – nicht vier Werte auf
                einer Folie.
              </span>
            }
          />

          <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="border-t border-line pt-6"
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 70}ms` } as React.CSSProperties}
              >
                <span className="t-index text-magenta-ink" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3 mt-3">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kennzahlen + Region */}
      <section className="dark-section section-y" aria-labelledby="substanz">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionMark label="Reichweite" onDark className="mb-6" />
              <h2 id="substanz" className="t-h2">
                Regional verwurzelt, überregional lieferfähig
              </h2>
              <p className="mt-6 leading-relaxed text-night-muted">
                Der Standort am Staffelsee ist kein Zufall: Von hier aus sind München, das
                Oberland, das Chiemgau und Schwaben an einem Tag erreichbar. Wo unsere eigenen
                Fahrzeuge nicht hinkommen, übernimmt der Paketversand – lieferfähig sind wir im
                gesamten Bundesgebiet.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
                <Button href="/leistungen/#logistik" variant="onDark">
                  Lager und Lieferdienst
                  <ArrowRight />
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-white/12 pt-7">
                <img
                  src="/img/iso-9001-320.webp"
                  width={320}
                  height={240}
                  alt="Zertifikat ISO 9001, ausgestellt durch TCert"
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-auto bg-white p-1.5"
                />
                <p className="text-[0.875rem] leading-snug text-night-muted">
                  Unser Qualitätsmanagement ist
                  <br />
                  nach ISO 9001 zertifiziert.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <figure data-reveal>
                <Figure
                  name="sprinter-staffelsee-v4"
                  widths={[1280, 960, 640]}
                  ratio={2.49}
                  alt="Ein HiWo-med-Transporter auf einer Straße am Staffelsee, dahinter die Alpenkette."
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[16/10] w-full"
                />
                <FigureCaption onDark>
                  Zwischen Staffelsee und München: Der eigene Lieferdienst ist täglich unterwegs.
                </FigureCaption>
              </figure>

              <dl className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {keyFigures.map((f, i) => (
                  <div key={f.label}>
                    <Stat
                      value={f.value}
                      unit={f.unit}
                      label={f.label}
                      countUp={f.countUp}
                      numberFormat={"numberFormat" in f ? f.numberFormat : "grouped"}
                      onDark
                      size="md"
                      delay={i * 60}
                    />
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
