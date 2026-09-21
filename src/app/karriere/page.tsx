import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead, SectionMark } from "@/components/ui/Section";
import { company } from "@/data/company";
import { applicationContact, employerFacts, openPositions } from "@/data/career";

export const metadata: Metadata = {
  title: "Karriere – Arbeiten bei HiWo-med",
  description:
    "Offene Stellen, Benefits und Unternehmenskultur bei HiWo-med Medizintechnik in Uffing am Staffelsee: inhabergeführtes Familienunternehmen, flache Hierarchien, 30 Tage Urlaub, intensive Einarbeitung.",
  alternates: { canonical: "/karriere/" },
};

export default function KarrierePage() {
  const position = openPositions[0];
  const applyHref = `mailto:${company.email.jobs}?subject=${encodeURIComponent(
    `Bewerbung: ${position.title}`,
  )}`;

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
              name="fuhrpark-team-breit-v3"
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

      {/* Offene Stelle */}
      <section className="section-y bg-paper-raised" aria-labelledby="stellen">
        <div className="container-site">
          <SectionHead
            label="Offene Stellen"
            split
            title={<span id="stellen">Aktuell suchen wir Verstärkung</span>}
            lead="Sie finden keine passende Ausschreibung? Initiativbewerbungen sind ausdrücklich willkommen – gerade in Lager, Logistik und Innendienst."
          />

          <article className="mt-14 border-t-2 border-magenta pt-8">
            <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
              <header className="lg:col-span-4">
                <h3 className="t-h2">{position.title}</h3>
                <dl className="mt-7 border-t border-line">
                  <div className="grid grid-cols-[minmax(0,7rem)_1fr] gap-4 border-b border-line py-3">
                    <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                      Umfang
                    </dt>
                    <dd className="text-[0.9375rem] text-ink">{position.employment}</dd>
                  </div>
                  <div className="grid grid-cols-[minmax(0,7rem)_1fr] gap-4 border-b border-line py-3">
                    <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                      Ort
                    </dt>
                    <dd className="text-[0.9375rem] text-ink">{position.location}</dd>
                  </div>
                  <div className="grid grid-cols-[minmax(0,7rem)_1fr] gap-4 border-b border-line py-3">
                    <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                      Start
                    </dt>
                    <dd className="text-[0.9375rem] text-ink">zum nächstmöglichen Zeitpunkt</dd>
                  </div>
                </dl>

                <div className="mt-8">
                  <Button href={applyHref}>
                    Jetzt bewerben
                    <ArrowRight />
                  </Button>
                </div>

                {/* Echter Ansprechpartner statt anonymer Postfachadresse. */}
                <div className="mt-8 flex gap-4 border-t border-line pt-6">
                  <div className="figure-frame aspect-[4/5] w-[68px] shrink-0">
                    <img
                      src={`/team/${applicationContact.photo}.webp`}
                      width={420}
                      height={525}
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
              </header>

              <div className="lg:col-span-7 lg:col-start-6">
                {position.intro.map((p) => (
                  <p key={p} className="leading-relaxed text-muted [&+p]:mt-4">
                    {p}
                  </p>
                ))}

                <h4 className="t-eyebrow mt-9 text-ink">Ihre Aufgaben</h4>
                <ul className="list-tick mt-4 text-muted">
                  {position.tasks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <h4 className="t-eyebrow mt-9 text-ink">Das bringen Sie mit</h4>
                <ul className="list-tick mt-4 text-muted">
                  {position.profile.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <h4 className="t-eyebrow mt-9 text-ink">Das erwartet Sie</h4>
                <ul className="list-tick mt-4 text-muted">
                  {position.offer.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <p className="mt-9 border-l-2 border-magenta pl-5 leading-relaxed text-ink">
                  Senden Sie Ihre Bewerbung mit Angabe Ihres frühestmöglichen Eintrittstermins
                  und Ihrer Gehaltsvorstellung per E-Mail an {applicationContact.name} unter{" "}
                  <a
                    href={applyHref}
                    className="font-semibold text-magenta-ink underline underline-offset-4"
                  >
                    {company.email.jobs}
                  </a>
                  .
                </p>
              </div>
            </div>
          </article>
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

      {/* Initiativbewerbung */}
      <section className="dark-section section-y">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionMark label="Initiativbewerbung" onDark className="mb-6" />
              <h2 className="t-h2">Nichts Passendes dabei?</h2>
              <p className="mt-6 max-w-[42rem] text-night-muted">
                Wir wachsen weiter – in Lager, Logistik und Innendienst entstehen immer wieder
                Aufgaben, bevor eine Ausschreibung online geht. Schreiben Sie uns, was Sie
                können und was Sie suchen. Wir melden uns zurück.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
              <Button
                href={`mailto:${company.email.jobs}?subject=${encodeURIComponent("Initiativbewerbung")}`}
                variant="onDark"
              >
                {company.email.jobs}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
