import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead, SectionMark } from "@/components/ui/Section";
import { company } from "@/data/company";
import { applicationContact, employerFacts } from "@/data/career";

export const metadata: Metadata = {
  title: "Karriere – Arbeiten bei HiWo-med",
  description:
    "Initiativbewerbungen, Benefits und Unternehmenskultur bei HiWo-med Medizintechnik in Uffing am Staffelsee: inhabergeführtes Familienunternehmen, flache Hierarchien, 30 Tage Urlaub, intensive Einarbeitung.",
  alternates: { canonical: "/karriere/" },
};

export default function KarrierePage() {
  const applyHref = `mailto:${company.email.jobs}?subject=${encodeURIComponent("Initiativbewerbung")}`;

  return (
    <>
      <PageHeader
        label="Karriere"
        title={<>Ein Betrieb, in dem man gesehen wird.</>}
        lead="Bei uns kennt jeder jeden. Entscheidungen werden schnell getroffen, gute Ideen finden Gehör, und wer Verantwortung übernehmen will, bekommt sie. Das ist kein Versprechen für die Stellenanzeige – es ist der Grund, warum viele hier zwanzig Jahre und länger bleiben."
      />

      <section className="pb-[clamp(2rem,1rem+2vw,3rem)]">
        <div className="container-site">
          <figure data-reveal>
            <Figure
              name="fuhrpark-team-breit-v4"
              widths={[1280, 960, 640]}
              ratio={2.49}
              alt="Zwei Mitarbeiter von HiWo-med vor einem Firmenfahrzeug in der oberbayerischen Landschaft."
              sizes="(min-width: 1280px) 1280px, 100vw"
              /* vh-Höhe statt Breiten-Aspect-Ratio, siehe Kontaktseite --
                 hält das Bild unabhängig von der Bildschirmbreite
                 vollständig im ersten sichtbaren Bereich. */
              className="h-[clamp(13rem,36vh,19rem)] w-full sm:h-[clamp(14rem,38vh,20rem)] lg:h-[clamp(16rem,40vh,23rem)]"
              priority
            />
            <FigureCaption>
              Lieferlogistik, Lager, Innendienst, Einkauf, Buchhaltung und Außendienst – bei
              HiWo-med arbeiten alle Bereiche an einem Standort.
            </FigureCaption>
          </figure>
        </div>
      </section>

      {/* Keine offene Stelle derzeit -- die zuletzt ausgeschriebene (Sachbearbeiter
          Innendienst) ist besetzt. Initiativbewerbungen sind der aktive
          Bewerbungsweg, deshalb bekommt diese Einladung hier denselben Platz
          und dieselbe Sichtbarkeit, die zuvor die Stellenanzeige hatte --
          inklusive echtem Ansprechpartner statt anonymer Postfachadresse. */}
      {/* Kein bg-paper-raised hier: das würde eine sichtbare Kante um das
          Ansprechpartner-Foto erzeugen, dessen Hintergrund auf die normale
          --color-paper-Fläche abgestimmt ist (wie bei allen anderen
          Team-Fotos auf Team- und Kontaktseite auch). */}
      <section className="section-y" aria-labelledby="bewerbung">
        <div className="container-site">
          <SectionHead
            label="Bewerbung"
            split
            title={<span id="bewerbung">Aktuell keine offene Stelle – Initiativbewerbungen trotzdem ausdrücklich erwünscht</span>}
            lead="Unsere zuletzt ausgeschriebene Stelle ist besetzt. Weil wir weiter wachsen, entstehen aber laufend neue Aufgaben, bevor dafür eine Anzeige online geht – besonders in Lager, Logistik und Innendienst. Schreiben Sie uns, was Sie können und was Sie suchen."
          />

          <div className="mt-12 flex flex-wrap items-center justify-between gap-8 border-t-2 border-magenta pt-8">
            <div className="flex gap-4">
              <div className="figure-frame aspect-[4/5] w-[68px] shrink-0">
                <img
                  src={`/team/${applicationContact.photo}.webp`}
                  width={480}
                  height={600}
                  alt={`Porträt von ${applicationContact.name}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-[0.875rem] leading-relaxed">
                <p className="font-semibold text-ink">{applicationContact.name}</p>
                <p className="text-muted">{applicationContact.role}</p>
                <a
                  href={`mailto:${company.email.jobs}`}
                  className="mt-0.5 inline-block py-2.5 text-magenta-ink underline-offset-4 hover:underline"
                >
                  {company.email.jobs}
                </a>
              </div>
            </div>

            <Button href={applyHref}>
              Initiativbewerbung senden
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Arbeitgebermerkmale */}
      <section className="section-y" aria-labelledby="arbeitgeber">
        <div className="container-site">
          <SectionHead
            label="Arbeitgeber"
            title={<span id="arbeitgeber">Was uns als Arbeitgeber auszeichnet</span>}
            lead="Elf Punkte, die im Alltag tatsächlich eine Rolle spielen – sortiert nach dem, was neue Kolleginnen und Kollegen zuerst merken."
          />

          <dl className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {employerFacts.map((f, i) => (
              <div
                key={f.title}
                className="border-t border-line pt-5"
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 60}ms` } as React.CSSProperties}
              >
                <span className="mb-3.5 block h-[2px] w-7 bg-magenta" aria-hidden="true" />
                <dt className="font-semibold text-ink">{f.title}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Zweiter, kürzerer Anstoß nach den Benefits -- bewusst andere Formulierung
          als oben, um Initiativbewerbungen am Ende der Seite nochmal zu betonen,
          ohne den Text von oben zu wiederholen. */}
      <section className="dark-section section-y">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionMark label="Initiativbewerbung" onDark className="mb-6" />
              <h2 className="t-h2">Auch ohne Stellenanzeige: melden Sie sich</h2>
              <p className="mt-6 max-w-[42rem] text-night-muted">
                Wir lesen jede Initiativbewerbung persönlich und melden uns zurück –
                unabhängig davon, ob gerade eine Stelle ausgeschrieben ist.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
              <Button href={applyHref} variant="onDark">
                {company.email.jobs}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
