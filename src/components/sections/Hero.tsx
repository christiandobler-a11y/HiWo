import { ArrowRight, Button } from "@/components/ui/Button";
import { company } from "@/data/company";

/** Drei harte Fakten direkt unter dem Einstieg – ohne Karten, nur Haarlinien. */
const heroFacts = [
  { k: "Gegründet", v: `${company.foundedYear} · familiengeführt in zweiter Generation` },
  { k: "Erreichbar", v: company.hours.compact },
  { k: "Lager", v: "1.500 m² · über 6.000 Artikel sofort verfügbar" },
];

/**
 * Vierte Fassung: Foto über die volle Fläche statt einer Zweispalten-
 * Teilung (Text links, Bild rechts).
 *
 * Der Split war solide, aber am Ende zu sehr "Baustein neben Baustein" --
 * das Foto wirkte trotz Split gedeckelt statt wirklich dominant. Jetzt
 * füllt es die komplette Hero-Fläche (randabfallend in alle vier
 * Richtungen), der Text schwebt stattdessen als eigene, unten verankerte
 * Fläche darüber -- ein durchgehendes Bild-Statement statt zweier
 * nebeneinander stehender Blöcke.
 *
 * Textlesbarkeit: keine Schriftfarben-Klimmzüge (siehe SiteHeader.tsx für
 * die Geschichte dazu) -- der Textblock bekommt einen eigenen, dezent
 * durchscheinenden Papier-Untergrund (bg-paper/90 + Blur), unabhängig
 * davon, was gerade im Foto dahinter zu sehen ist.
 *
 * Der Header liegt jetzt bei jeder Breite transparent über diesem Hero
 * (siehe SiteHeader.tsx) -- vorher nur ab lg, weil dort erst das Bild
 * neben dem Text lag; jetzt ist das Foto immer die komplette Fläche.
 */
export function Hero() {
  return (
    /* -mt-[Header-Höhe] zieht den Hero unter den Header (der dort
       transparent bleibt, solange ungescrollt) -- das Foto reicht dadurch
       bis an die echte obere Kante statt darunter zu beginnen. */
    <section
      className="relative -mt-[84px] flex min-h-[680px] items-end overflow-hidden md:-mt-[96px] md:min-h-[760px] lg:h-[88vh] lg:min-h-[780px] lg:max-h-[880px]"
      aria-label="Einstieg"
    >
      <img
        src="/img/hero-sprinter-2000.webp"
        srcSet="/img/hero-sprinter-2000.webp 2000w, /img/hero-sprinter-1500.webp 1500w, /img/hero-sprinter-1100.webp 1100w, /img/hero-sprinter-750.webp 750w"
        sizes="100vw"
        width={2000}
        height={1333}
        alt="Ein HiWo-med-Mitarbeiter winkt aus dem Fenster seines Lieferfahrzeugs, im Hintergrund der Staffelsee mit Alpenkette."
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="hero-photo-reveal absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 55%", transformOrigin: "15% 55%" }}
      />

      {/* Sehr leichte Abdunkelung am unteren Rand -- rein als zusätzlicher
          Puffer für den Übergang zur Textfläche, die selbst schon einen
          eigenen Untergrund hat und deshalb keine starke Verdunkelung
          braucht. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"
        aria-hidden="true"
      />

      <div className="container-site relative w-full pb-10 pt-8 md:pb-14 lg:pb-16">
        <div className="max-w-[42rem] bg-paper/90 p-6 backdrop-blur-md sm:p-7 lg:p-8">
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

          {/* Der Markenclaim – steht auf genau dem Fahrzeug im Foto dahinter. */}
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
            className="mt-6 lg:mt-7"
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <Button href="/kontakt/">
              Beratung anfragen
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Fakten-Zeile: eigene Sektion unter dem Hero, auf reinem Papier-Weiß. */
export function HeroFacts() {
  return (
    <section className="pb-[clamp(2rem,1rem+2vw,3rem)] pt-10 lg:pt-12">
      <div className="container-site">
        <dl className="grid border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
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
