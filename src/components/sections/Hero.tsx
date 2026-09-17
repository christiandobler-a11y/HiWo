import Link from "next/link";

import { ArrowRight, Button } from "@/components/ui/Button";
import { company, yearsInBusiness } from "@/data/company";

/** Drei harte Fakten direkt unter dem Einstieg – ohne Karten, nur Haarlinien. */
const heroFacts = [
  { k: "Gegründet", v: `${company.foundedYear} · familiengeführt in zweiter Generation` },
  { k: "Erreichbar", v: `${company.hours.days}, ${company.hours.time}` },
  { k: "Lager", v: "1.500 m² · über 6.000 Artikel sofort verfügbar" },
];

/**
 * Der obere Teil des Hero (Eyebrow, Headline, Einleitung, Zitat) trägt
 * zwei Hintergrundebenen statt einer flachen Fläche:
 *
 * 1. Der Standort-Himmel mit dem Firmenschild (Lagerhausstraße), reduziert
 *    in der Deckkraft. Offener, ruhiger Untergrund mit dem echten Logo als
 *    kleinem Wiedererkennungsmoment -- weniger unruhig als ein Foto mit
 *    viel Beschriftung, und passt zum "nach vorn gerichtet"-Ton der Marke.
 * 2. Ein sehr feines, selbst gezeichnetes Kreuz-Raster (.pattern-rx) als
 *    kaum wahrnehmbare Textur darüber.
 *
 * Die Fakten-Zeile am Ende steht bewusst AUSSERHALB dieses Bereichs, auf
 * reinem Papier-Weiß: Eine Pixel-Kontrastmessung (contrast-check.mjs) hat
 * gezeigt, dass die kleinen Eyebrow-Labels dort sonst unter 4,5:1 fallen,
 * weil Foto und Muster den Hintergrund im unteren Bereich sichtbar
 * abdunkeln. Getrennt sind beide Zonen durch einen weichen Verlauf statt
 * eines harten Schnitts.
 */
export function Hero() {
  return (
    <section className="overflow-hidden pb-[clamp(3.5rem,2rem+4vw,6rem)]">
      <div className="relative pt-[clamp(2.25rem,1.5rem+3vw,6rem)]">
        {/* Hintergrundebenen – rein dekorativ, daher aria-hidden und ohne Alt-Text. */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src="/img/himmel-schild-1280.webp"
            srcSet="/img/himmel-schild-1280.webp 1280w, /img/himmel-schild-960.webp 960w, /img/himmel-schild-640.webp 640w"
            sizes="100vw"
            width={1280}
            height={514}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover opacity-[0.32]"
            style={{ objectPosition: "70% 40%" }}
          />
          <div className="pattern-rx absolute inset-0 opacity-[0.05]" />
          {/* Weicher Übergang zur Fakten-Zeile, kein harter Bildschnitt. */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />
        </div>

        {/* Sehr dezente Markenkante am linken Rand – das Motiv wiederholt sich
            auf allen Unterseiten und ersetzt jede Art von Verlaufsfläche. */}
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-[clamp(8rem,20vw,16rem)] w-[2px] bg-magenta lg:block"
          aria-hidden="true"
        />

        <div className="container-site relative">
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
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

            <div className="lg:col-span-4 lg:pt-4">
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
          </div>

          {/* Claim-Zeile: vorher Bildunterschrift, jetzt eigenständiger
              Absatz, da das Foto in den Hintergrund gewandert ist. */}
          <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3 border-t border-line pt-6 lg:mt-12">
            <p className="max-w-[42rem] text-[0.9375rem] leading-relaxed text-ink">
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
            <Link
              href="/leistungen/#logistik"
              className="inline-flex shrink-0 items-center gap-2 py-1.5 font-semibold text-ink underline-offset-4 transition-colors hover:text-magenta-ink hover:underline"
            >
              Wie wir ausliefern
              <ArrowRight className="text-magenta" />
            </Link>
          </div>
        </div>
      </div>

      {/* Fakten-Zeile: bewusst außerhalb der Bildebene, auf reinem Papier-Weiß. */}
      <div className="container-site">
        <dl className="mt-8 grid border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line lg:mt-10">
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
    </section>
  );
}
