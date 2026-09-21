import { ArrowRight, Button } from "@/components/ui/Button";
import { company } from "@/data/company";

/** Drei harte Fakten direkt unter dem Einstieg – ohne Karten, nur Haarlinien. */
const heroFacts = [
  { k: "Gegründet", v: `${company.foundedYear} · heute in zweiter Generation geführt` },
  { k: "Erreichbar", v: company.hours.compact },
  { k: "Lager", v: "1.500 m² · über 6.000 Artikel sofort verfügbar" },
];

/**
 * Fünfte Fassung: Text direkt auf dem Foto statt in einer schwebenden
 * Karte.
 *
 * Die Karten-Fassung (halbtransparentes Papier-Feld über dem Bild) las
 * sich wie ein 2016er-Baukasten-Hero -- ausgerechnet die Seite, die sonst
 * komplett auf Haarlinien statt Karten/Schatten setzt (siehe
 * .figure-frame, Buttons, SectionHead), bekam hier die einzige "Box" der
 * ganzen Seite. Jetzt liegt der Text ohne Fläche direkt auf dem Foto,
 * die Lesbarkeit übernimmt ein Verlauf (dunkel links, wo der Text steht,
 * klar zum Bild hin nach rechts) statt eines Kastens -- der Fahrer
 * schimmert dadurch gedämpft durch den Verlauf statt komplett verdeckt zu
 * sein oder unangetastet danebenzustehen.
 *
 * Der Header liegt bei jeder Breite transparent über diesem Hero (siehe
 * SiteHeader.tsx); sein eigenes helles Glas verträgt sich mit dem
 * dunklen Verlauf hier genauso wie mit dem hellen Himmel weiter rechts.
 */
export function Hero() {
  return (
    /* -mt-[Header-Höhe] zieht den Hero unter den Header (der dort
       transparent bleibt, solange ungescrollt) -- das Foto reicht dadurch
       bis an die echte obere Kante statt darunter zu beginnen. */
    <section
      className="relative -mt-[84px] flex min-h-[620px] items-end overflow-hidden md:-mt-[96px] md:min-h-[700px] lg:h-[82vh] lg:min-h-[740px] lg:max-h-[820px]"
      aria-label="Einstieg"
    >
      {/* Per KI-Superauflösung (EDSR, 2x) aus dem Originalfoto (2000px)
          hochskaliert auf 4000px -- bei diesem Vollbild-Hero plus dem
          zusätzlichen scale(1.45)-Zuschnitt (siehe unten) reicht die
          Ausgangsauflösung auf breiten/hochauflösenden Bildschirmen sonst
          nicht aus, das Bild wirkte weich. */}
      <img
        src="/img/hero-sprinter-4000.webp"
        srcSet="/img/hero-sprinter-4000.webp 4000w, /img/hero-sprinter-3200.webp 3200w, /img/hero-sprinter-2400.webp 2400w, /img/hero-sprinter-1800.webp 1800w, /img/hero-sprinter-1200.webp 1200w"
        sizes="100vw"
        width={4000}
        height={2666}
        alt="Ein HiWo-med-Mitarbeiter winkt aus dem Fenster seines Lieferfahrzeugs, im Hintergrund der Staffelsee mit Alpenkette."
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="hero-photo-reveal absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 55%", transformOrigin: "15% 55%" }}
      />

      {/* Verlauf statt Karte: dunkel dort, wo der Text steht (links),
          klar zum Bild hin -- funktioniert unabhängig davon, ob an der
          jeweiligen Stelle gerade heller Himmel oder dunkler Wagen im
          Foto liegt. Zusätzlich ein flacherer Verlauf von unten für die
          Fakten-Zeile direkt darunter. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-site relative w-full pb-10 pt-8 md:pb-14 lg:pb-16">
        <div className="hero-on-photo max-w-[38rem]">
          <p className="t-eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-night-muted">
            <span className="text-night-ink">Medizinischer Fachhandel</span>
            <span aria-hidden="true" className="h-[2px] w-5 bg-magenta-glow" />
            <span>
              {company.address.city} · seit {company.foundedYear}
            </span>
          </p>

          <h1 className="t-display mt-4 lg:mt-5" data-reveal>
            Alles, was der Praxisalltag braucht.
            <br className="hidden sm:block" />{" "}
            <span className="text-night-muted">
              Geliefert von Menschen,
              <br className="hidden sm:block" /> die ihn kennen.
            </span>
          </h1>

          {/* Der Markenclaim – steht auf genau dem Fahrzeug im Foto dahinter. */}
          <p
            className="t-serif mt-5 text-[clamp(1.2rem,1rem+1vw,1.65rem)] leading-[1.3] text-night-ink lg:mt-6"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            „{company.claim}“
          </p>
          <p
            className="mt-2 text-[0.875rem] text-night-muted"
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
