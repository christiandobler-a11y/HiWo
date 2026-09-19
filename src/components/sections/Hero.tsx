import Link from "next/link";

import { ArrowRight, Button } from "@/components/ui/Button";
import { company } from "@/data/company";

/** Drei harte Fakten direkt unter dem Einstieg – ohne Karten, nur Haarlinien. */
const heroFacts = [
  { k: "Gegründet", v: `${company.foundedYear} · familiengeführt in zweiter Generation` },
  { k: "Erreichbar", v: company.hours.compact },
  { k: "Lager", v: "1.500 m² · über 6.000 Artikel sofort verfügbar" },
];

/**
 * Dritte Fassung: echtes Foto statt blassem Hintergrund-Wasserzeichen.
 *
 * Die Vorgängerversion (siehe HeroClassic.tsx) zeigte nur Himmel + Schild
 * bei 0.32 Deckkraft als Textur -- jede Unterseite hat inzwischen aber ein
 * kräftiges, sichtbares Foto von echten Menschen, nur der Hero selbst
 * nicht. Dasselbe Fahrzeug-Foto, das schon als Social-Share-Vorschau diente
 * (siehe layout.tsx) und seit Kurzem den Leistungen-Auftakt bildet, trägt
 * jetzt auch den Hero: der Fahrer winkt, der Claim auf der Fahrzeugflanke
 * ist derselbe wie im Zitat links -- Text und Bild bestätigen sich
 * gegenseitig, statt nur nebeneinander zu stehen.
 *
 * Layout: Text bleibt auf Lesebreite links (max-w im Markup), das Bild
 * bricht rechts bis zum Viewport-Rand aus (.hero-bleed in globals.css) --
 * auf breiten Monitoren wird das Foto dadurch dominanter statt an
 * Aspect-Ratio gebunden zu bleiben. Für "Bild vollständig im ersten
 * Frame" gilt hier bewusst eine andere Regel als auf den Unterseiten: Der
 * Hero ist als randabfallendes Bannerbild gedacht, das Anschneiden ist
 * gewollt (siehe objectPosition unten, gewählt um Fahrer + Anschrift im
 * Bild zu halten).
 */
export function Hero() {
  return (
    <section className="hero-bleed" aria-label="Einstieg">
      <div className="hero-bleed-text relative flex flex-col justify-center pb-8 pt-[clamp(1.75rem,1rem+2vw,3.25rem)] lg:pb-[clamp(1.75rem,1rem+2vw,3.25rem)]">
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-[clamp(8rem,20vw,16rem)] w-[2px] bg-magenta lg:block"
          aria-hidden="true"
        />

        <div className="max-w-[36rem]">
          <p className="t-eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
            <span className="text-ink">Medizinischer Fachhandel</span>
            <span aria-hidden="true" className="h-[2px] w-5 bg-magenta" />
            <span>
              {company.address.city} · seit {company.foundedYear}
            </span>
          </p>

          <h1 className="t-display mt-4 lg:mt-5" data-reveal>
            Alles, was der Praxisalltag braucht.
            <br className="hidden sm:block" />{" "}
            <span className="text-muted">
              Geliefert von Menschen,
              <br className="hidden sm:block" /> die ihn kennen.
            </span>
          </h1>

          {/* Der Markenclaim – steht auf genau dem Fahrzeug im Foto rechts. */}
          <p
            className="t-serif mt-5 text-[clamp(1.2rem,1rem+1vw,1.65rem)] leading-[1.3] text-ink lg:mt-6"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            „{company.claim}“
          </p>
          <p
            className="mt-2 text-[0.875rem] text-muted"
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            Der Satz steht auf genau diesem Fahrzeug – seit {company.foundedYear}.
          </p>

          <div
            className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-6"
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
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

      {/* Fotospalte: bricht auf lg+ bis zum rechten Viewport-Rand aus (siehe
          .hero-bleed), auf Mobil/Tablet eigene, an die Bildschirmhöhe
          gekoppelte Höhe -- volle Farbe statt Wasserzeichen, deshalb kein
          figure-frame-Rahmen und keine Bildunterschrift hier. */}
      <div className="relative h-[46vh] min-h-[300px] overflow-hidden bg-paper-tint lg:h-auto lg:min-h-[440px]">
        <img
          src="/img/lieferdienst-sprinter-1280.webp"
          srcSet="/img/lieferdienst-sprinter-1280.webp 1280w, /img/lieferdienst-sprinter-960.webp 960w, /img/lieferdienst-sprinter-640.webp 640w"
          sizes="(min-width: 1024px) 62vw, 100vw"
          width={1280}
          height={514}
          alt="Ein HiWo-med-Mitarbeiter winkt aus dem Fenster seines Lieferfahrzeugs, im Hintergrund der Staffelsee mit Alpenkette."
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="hero-photo-reveal absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "38% 48%" }}
        />
      </div>

      {/* Fakten-Zeile: eigene Grid-Zeile unter Text- und Bildspalte, auf
          reinem Papier-Weiß, Lesebreite über container-site. */}
      <div className="container-site col-span-full">
        <dl className="mt-10 grid border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line lg:mt-12">
          {heroFacts.map((f, i) => (
            <div
              key={f.k}
              className="border-b border-line py-5 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              data-reveal
              style={{ "--reveal-delay": `${260 + i * 70}ms` } as React.CSSProperties}
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
