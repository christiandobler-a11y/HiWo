import Link from "next/link";

import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { company, yearsInBusiness } from "@/data/company";

/** Drei harte Fakten direkt unter dem Einstieg – ohne Karten, nur Haarlinien. */
const heroFacts = [
  { k: "Gegründet", v: `${company.foundedYear} · familiengeführt in zweiter Generation` },
  { k: "Erreichbar", v: `${company.hours.days}, ${company.hours.time}` },
  { k: "Lager", v: "1.500 m² · über 6.000 Artikel sofort verfügbar" },
];

/**
 * Die Reihenfolge unterscheidet sich bewusst nach Bildschirmgröße:
 *
 * Auf dem Desktop stehen Headline und Einleitung nebeneinander, das Foto
 * bindet als breiter Abschluss darunter ein – dort ist es innerhalb des
 * ersten Bildschirms ohnehin sichtbar.
 *
 * Auf dem Handy läuft alles untereinander. Würde das Foto erst nach
 * Headline, Fließtext, Buttons und Faktenzeile kommen, bestünde der erste
 * Bildschirm nur aus Text – kein Bild, kein Gefühl für das Unternehmen.
 * Deshalb rückt das Foto mobil direkt hinter die Headline: randlos, groß,
 * unmittelbar. Technisch über CSS-Reihenfolge (flex `order` mobil,
 * explizite Grid-Platzierung ab `lg`) – im DOM bleibt eine einzige
 * Bildinstanz, es wird nichts doppelt geladen.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pb-[clamp(3.5rem,2rem+4vw,6rem)] pt-[clamp(2.25rem,1.5rem+3vw,6rem)]">
      {/* Sehr dezente Markenkante am linken Rand – das Motiv wiederholt sich
          auf allen Unterseiten und ersetzt jede Art von Verlaufsfläche. */}
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-[clamp(8rem,20vw,16rem)] w-[2px] bg-magenta lg:block"
        aria-hidden="true"
      />

      <div className="container-site">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-10">
          {/* 1 · Eyebrow + Headline */}
          <div className="order-1 lg:order-none lg:col-span-8 lg:row-start-1">
            <p className="t-eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
              <span className="text-ink">Medizinischer Fachhandel</span>
              <span aria-hidden="true" className="h-[2px] w-5 bg-magenta" />
              <span>
                {company.address.city} · seit {company.foundedYear}
              </span>
            </p>

            <h1 className="t-display mt-5 lg:mt-7">
              Alles, was der Praxisalltag braucht.
              <br className="hidden sm:block" />{" "}
              <span className="text-muted">
                Geliefert von Menschen,
                <br className="hidden sm:block" /> die ihn kennen.
              </span>
            </h1>
          </div>

          {/* 2 · Foto – mobil randlos bis an den Bildschirmrand, direkt nach
              der Headline; ab lg als breiter Abschluss unterhalb von
              Headline und Faktenzeile. Nur das Bild selbst bricht aus dem
              Seitenrand aus, die Unterschrift bleibt eingerückt. */}
          <figure
            className="order-2 mt-6 lg:order-none lg:col-span-12 lg:row-start-3 lg:mt-[clamp(2.5rem,1.5rem+3vw,4rem)]"
            data-reveal
          >
            <div className="-mx-[var(--gutter)] lg:mx-0">
              <Figure
                name="lieferdienst-sprinter"
                widths={[1280, 960, 640]}
                ratio={2.49}
                priority
                alt="Ein Fahrer des HiWo-med-Lieferdienstes winkt aus dem Fenster eines dunklen Transporters mit Magenta-Beschriftung; im Hintergrund der Staffelsee und die Alpenkette."
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="aspect-[5/4] w-full sm:aspect-[16/9] lg:aspect-[2.49/1]"
                position="62% 50%"
              />
            </div>

            {/* Bildunterschrift: links versetzt, rechts der Anschluss zur Logistik. */}
            <figcaption className="mt-5 grid gap-x-10 gap-y-4 border-t border-line pt-5 lg:grid-cols-12">
              <p className="text-[0.9375rem] leading-relaxed text-ink lg:col-span-7">
                <span
                  className="mr-3 inline-block h-[2px] w-9 -translate-y-[0.3em] bg-magenta align-middle"
                  aria-hidden="true"
                />
                <strong className="font-semibold">„{company.claim}“</strong>{" "}
                <span className="text-muted">
                  Der Satz steht seit Jahren auf unseren Fahrzeugen – und beschreibt ziemlich
                  genau, worum es geht. Seit {yearsInBusiness} Jahren.
                </span>
              </p>
              <p className="text-[0.9375rem] lg:col-span-4 lg:col-start-9 lg:text-right">
                <Link
                  href="/leistungen/#logistik"
                  className="inline-flex items-center gap-2 py-1.5 font-semibold text-ink underline-offset-4 transition-colors hover:text-magenta-ink hover:underline"
                >
                  Wie wir ausliefern
                  <ArrowRight className="text-magenta" />
                </Link>
              </p>
            </figcaption>
          </figure>

          {/* 3 · Einleitung + CTAs */}
          <div className="order-3 mt-8 lg:order-none lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:mt-0 lg:pt-4">
            <p className="t-lead max-w-[38rem]">
              HiWo-med versorgt Arztpraxen, MVZ, ambulante OP-Zentren, Kliniken und
              Pflegeeinrichtungen mit medizinischen Verbrauchsartikeln und Praxiseinrichtung.
              Über 6.000 Artikel liegen bei uns am Staffelsee im Lager – im Großraum München
              in der Regel am Folgetag bei Ihnen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <Button href="/kontakt/">
                Beratung anfragen
                <ArrowRight />
              </Button>
              <Button href="/leistungen/" variant="outline">
                Was wir leisten
              </Button>
            </div>
          </div>

          {/* 4 · Fakten-Zeile: typografisch, durch Haarlinien getrennt. */}
          <dl className="order-4 mt-10 grid border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line lg:order-none lg:col-span-12 lg:row-start-2 lg:mt-2">
            {heroFacts.map((f, i) => (
              <div
                key={f.k}
                className="border-b border-line py-5 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <dt className="t-eyebrow text-muted">{f.k}</dt>
                <dd className="mt-2 text-[0.95rem] leading-snug text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
