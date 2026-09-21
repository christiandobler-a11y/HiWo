import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead, SectionMark } from "@/components/ui/Section";
import { company } from "@/data/company";
import { fastOrder } from "@/data/site";
import { fieldServiceMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Kontakt – HiWo-med in Uffing am Staffelsee",
  description: `HiWo-med Medizintechnik GmbH, Lagerhausstraße 4, 82449 Uffing am Staffelsee. ${company.hours.compact} persönlich erreichbar: +49 8846 920 40.`,
  alternates: { canonical: "/kontakt/" },
};

const mapsQuery = encodeURIComponent(
  `${company.legalName}, ${company.address.street}, ${company.address.zip} ${company.address.city}`,
);

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        label="Kontakt"
        title={<>Ein Anruf reicht.</>}
        lead="Montag bis Donnerstag 8 bis 17 Uhr, freitags bis 15 Uhr geht bei uns direkt jemand ans Telefon – ohne Auswahlmenü, ohne Rückrufversprechen."
      >
        {/* Steht in der freien rechten Spalte direkt neben der Einleitung,
            statt erst weiter unten -- auf breiten Bildschirmen blieb dieser
            Bereich sonst bis zur Anschrift komplett leer. */}
        <figure className="mt-8" data-reveal>
          <Figure
            name="standort-schild"
            widths={[1248, 900, 640]}
            ratio={1.3}
            alt="Das Firmenschild von HiWo-med mit Logo und dem Hinweis „Lagerhausstr. 4“ vor blauem Himmel."
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-[clamp(13rem,32vh,17rem)] w-full"
            position="50% 42%"
            priority
          />
          <FigureCaption>
            Lager, Verwaltung und Fuhrpark liegen an einem Standort in der Lagerhausstraße.
            Kostenfreie Parkplätze sind vorhanden, der Bahnhof Uffing liegt in unmittelbarer
            Nähe.
          </FigureCaption>
        </figure>
      </PageHeader>

      <section className="pb-[var(--section-y)] pt-4">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
            {/* Kontaktdaten */}
            <div className="lg:col-span-5 lg:col-start-1">
              <SectionMark label="Anschrift" className="mb-6" />
              <address className="not-italic">
                <p className="t-h3">{company.legalName}</p>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                  <br />
                  {company.address.country}
                </p>
              </address>

              <dl className="mt-9 border-t border-line">
                <div className="grid grid-cols-[minmax(0,5.5rem)_1fr] gap-5 border-b border-line py-4">
                  <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                    Telefon
                  </dt>
                  <dd>
                    <a
                      href={company.phone.href}
                      className="inline-block py-2 text-[1.0625rem] font-semibold text-ink underline-offset-4 hover:text-magenta-ink hover:underline"
                    >
                      {company.phone.display}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,5.5rem)_1fr] gap-5 border-b border-line py-4">
                  <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                    Fax
                  </dt>
                  <dd className="text-[1.0625rem] text-ink">{company.fax}</dd>
                </div>
                <div className="grid grid-cols-[minmax(0,5.5rem)_1fr] gap-5 border-b border-line py-4">
                  <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                    E-Mail
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${company.email.general}`}
                      className="inline-block py-2 text-[1.0625rem] font-semibold text-ink underline-offset-4 hover:text-magenta-ink hover:underline"
                    >
                      {company.email.general}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[minmax(0,5.5rem)_1fr] gap-5 border-b border-line py-4">
                  <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                    Zeiten
                  </dt>
                  <dd className="text-[1.0625rem] text-ink">
                    {company.hours.weekdays}
                    <span className="block text-[0.9375rem] text-muted">
                      {company.hours.weekdaysTime}
                    </span>
                    <span className="mt-2 block">{company.hours.friday}</span>
                    <span className="block text-[0.9375rem] text-muted">
                      {company.hours.fridayTime} – {company.hours.note}
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
                <Button href={company.phone.href}>{company.phone.display}</Button>
                <Button href={`mailto:${company.email.general}`} variant="outline">
                  E-Mail schreiben
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7">
              <SectionMark label="Direkt zum richtigen Postfach" className="mb-6" />
              <ul>
                {[
                  {
                    label: "Allgemeine Anfragen und Bestellungen",
                    mail: company.email.general,
                  },
                  { label: "Seminare, Schulungen und Hygiene-Check", mail: company.email.training },
                  { label: "Bewerbungen", mail: company.email.jobs },
                ].map((c) => (
                  <li key={c.mail} className="border-t border-line py-4 last:border-b">
                    <p className="text-[0.875rem] text-muted">{c.label}</p>
                    <a
                      href={`mailto:${c.mail}`}
                      className="mt-1 inline-block py-2 font-semibold text-ink underline-offset-4 hover:text-magenta-ink hover:underline"
                    >
                      {c.mail}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anfahrt */}
      <section className="section-y bg-paper-raised" aria-labelledby="anfahrt">
        <div className="container-site">
          {/* Bild zuerst im Markup, aus demselben Grund wie im Abschnitt
              darüber -- Text und Bild stapeln sich sonst auf
              Schmalbildschirmen in Markup-Reihenfolge. */}
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
            <figure className="lg:col-span-6 lg:col-start-7 lg:row-start-1" data-reveal>
              <Figure
                name="sprinter-staffelsee-v4"
                widths={[1280, 960, 640]}
                ratio={2.49}
                alt="Ein HiWo-med-Transporter auf einer Straße am Staffelsee, dahinter die Alpenkette."
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-[clamp(12rem,36vh,18rem)] w-full lg:h-[clamp(14rem,38vh,21rem)]"
              />
              <FigureCaption>
                Uffing liegt am Nordufer des Staffelsees – von hier aus starten die Touren
                Richtung München, Oberland, Chiemgau und Schwaben.
              </FigureCaption>
            </figure>

            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <SectionHead
                label="Anfahrt"
                title={<span id="anfahrt">So finden Sie uns</span>}
                lead="Uffing am Staffelsee liegt zwischen Murnau und Weilheim, rund eine Stunde südlich von München."
              />
              <ul className="list-tick mt-8 text-muted">
                <li>Mit dem Auto über die B2, Abfahrt Uffing</li>
                <li>Mit der Bahn bis Uffing (Staffelsee), von dort wenige Gehminuten</li>
                <li>Kostenfreie Parkplätze direkt am Haus, Elektroladestation vorhanden</li>
              </ul>
              <div className="mt-8">
                <Button
                  href={`https://www.openstreetmap.org/search?query=${mapsQuery}`}
                  variant="outline"
                >
                  Route planen
                  <ArrowRight />
                </Button>
              </div>
              {/* Prototyp-Hinweis: Eine eingebettete Karte wird beim echten
                  Relaunch erst nach Einwilligung geladen (Consent). */}
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-muted">
                Hinweis zum Konzept: Eine eingebettete Karte fehlt hier bewusst. Beim echten
                Relaunch wird sie erst nach ausdrücklicher Einwilligung nachgeladen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Außendienst */}
      <section className="section-y" aria-labelledby="aussendienst">
        <div className="container-site">
          <SectionHead
            label="Außendienst"
            split
            title={<span id="aussendienst">Lieber ein Termin in der Praxis?</span>}
            lead="Unser Außendienst betreut feste Gebiete in Oberbayern, dem Oberland, Schwaben, dem Chiemgau und Niederbayern. Sagen Sie uns, wo Sie sind – wir verbinden Sie mit der zuständigen Person."
          />

          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
            {fieldServiceMembers.map((m, i) => (
              <li
                key={m.name}
                className="text-center"
                data-reveal
                style={{ "--reveal-delay": `${i * 55}ms` } as React.CSSProperties}
              >
                <div className="figure-frame aspect-[4/5] w-full">
                  <img
                    src={`/team/${m.photo}.webp`}
                    width={420}
                    height={525}
                    alt={`Porträt von ${m.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-3 font-semibold leading-snug text-ink">{m.name}</p>
                <p className="mt-1 text-[0.8125rem] leading-snug text-muted">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FastOrder – korrekt eingeordnet, am Ende der Kontaktseite */}
      <section className="dark-section section-y">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionMark label="Für Bestandskunden" onDark className="mb-6" />
              <h2 className="t-h2">FastOrder</h2>
              <p className="mt-6 max-w-[42rem] text-night-muted">
                Bestandskunden können Nachbestellungen rund um die Uhr über unser Portal
                FastOrder auslösen. Zugangsdaten erhalten Sie über Ihren Außendienst oder über
                die Auftragsannahme. Für alles andere gilt weiterhin: Anrufen ist schneller.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
              <Button href={fastOrder.href} variant="onDark">
                Zu FastOrder
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
