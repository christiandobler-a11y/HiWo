import Link from "next/link";

import { ArrowRight, Button } from "@/components/ui/Button";
import { company } from "@/data/company";

/**
 * ZWISCHENSTAND -- nicht mehr eingebunden.
 *
 * Das war die Hero-Fassung vor dem Redesign mit echtem Foto (siehe Hero.tsx):
 * blasses Himmel-Schild-Hintergrundbild bei 0.32 Deckkraft statt eines
 * sichtbaren Fotos. Bewusst als eigene Datei aufgehoben, um bei Bedarf
 * zurückwechseln zu können, ohne in der Git-Historie suchen zu müssen --
 * einfach den Import in page.tsx von "./Hero" auf "./HeroClassic" ändern
 * (und den Export hier zurück in `Hero` umbenennen).
 */

/** Drei harte Fakten direkt unter dem Einstieg – ohne Karten, nur Haarlinien. */
const heroFacts = [
  { k: "Gegründet", v: `${company.foundedYear} · familiengeführt in zweiter Generation` },
  { k: "Erreichbar", v: company.hours.compact },
  { k: "Lager", v: "1.500 m² · über 6.000 Artikel sofort verfügbar" },
];

export function HeroClassic() {
  return (
    <section className="overflow-hidden pb-[clamp(3.5rem,2rem+4vw,6rem)]">
      <div className="relative pt-[clamp(2.25rem,1.5rem+3vw,6rem)]">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <img
            src="/img/himmel-schild-v2-1280.webp"
            srcSet="/img/himmel-schild-v2-1280.webp 1280w, /img/himmel-schild-v2-960.webp 960w, /img/himmel-schild-v2-640.webp 640w"
            sizes="100vw"
            width={1280}
            height={514}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="hero-bg-reveal h-full w-full object-cover"
            style={{
              objectPosition: "100% 40%",
              transform: "scale(1.28)",
              transformOrigin: "100% 36%",
            }}
          />
          <div className="pattern-rx absolute inset-0 opacity-[0.05]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />
        </div>

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

            <p className="t-serif mt-8 text-[clamp(1.35rem,1.05rem+1.3vw,1.9rem)] leading-[1.35] text-ink lg:mt-10">
              „{company.claim}“
            </p>
            <p className="mt-3 text-[0.875rem] text-muted">
              Der Satz steht seit {company.foundedYear} auf unseren Fahrzeugen.
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
