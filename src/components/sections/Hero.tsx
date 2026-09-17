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
 * Zweite Fassung, schlanker: Die Erklärung ("HiWo-med versorgt Arztpraxen,
 * MVZ …") stand vorher als Fließtext neben der Headline – zu viel Text auf
 * einmal, und der freien Bildfläche rechts wurde damit auch der Platz zum
 * Atmen genommen. Der Absatz ist jetzt kurz gefasst in die Positionierung
 * (Sektion 02) gewandert. Der Hero trägt stattdessen nur noch Headline,
 * Markenclaim und die Buttons – der Claim bekommt dabei deutlich mehr
 * Gewicht als vorher, wo er nur eine kleine Bildunterschrift war.
 *
 * Hintergrund: Himmel + Firmenschild (siehe Kontaktseite), reduzierte
 * Deckkraft, plus ein sehr feines, selbst gezeichnetes Kreuz-Raster.
 * Die Fakten-Zeile am Ende steht bewusst außerhalb dieser Bildebene, auf
 * reinem Papier-Weiß (Pixel-Kontrastmessung, siehe contrast-check.mjs).
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
            /* objectPosition "100% ..." zeigt den rechten Bildrand vollständig,
               sonst wird das "d" in "med" abgeschnitten. Der zusätzliche
               scale()-Zoom ist am rechten Rand verankert (transformOrigin),
               damit das Schild dabei nicht weiter nach rechts aus dem
               Bild wandert, sondern größer/dichter wirkt und weniger
               Himmel sichtbar bleibt. */
            style={{
              objectPosition: "100% 40%",
              transform: "scale(1.28)",
              transformOrigin: "100% 36%",
            }}
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
          <div className="max-w-[52rem]">
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

            {/* Der Markenclaim – steht seit Jahren auf den Fahrzeugen und
                trägt hier bewusst mehr Gewicht als eine kleine Bildunterschrift. */}
            <p className="t-serif mt-8 text-[clamp(1.35rem,1.05rem+1.3vw,1.9rem)] leading-[1.35] text-ink lg:mt-10">
              „{company.claim}“
            </p>
            <p className="mt-3 text-[0.875rem] text-muted">
              Der Satz steht seit {yearsInBusiness} Jahren auf unseren Fahrzeugen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-10">
              <Button href="/kontakt/">
                Beratung anfragen
                <ArrowRight />
              </Button>
              <Button href="/leistungen/" variant="outline">
                Was wir leisten
              </Button>
              <Link
                href="/leistungen/#logistik"
                className="inline-flex items-center gap-2 py-2.5 font-semibold text-ink underline-offset-4 transition-colors hover:text-magenta-ink hover:underline"
              >
                Wie wir ausliefern
                <ArrowRight className="text-magenta" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fakten-Zeile: bewusst außerhalb der Bildebene, auf reinem Papier-Weiß. */}
      <div className="container-site">
        <dl className="mt-10 grid border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line lg:mt-12">
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
