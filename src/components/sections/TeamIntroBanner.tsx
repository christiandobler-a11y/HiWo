import { teamGroups } from "@/data/team";

const TAGLINE = "Bei uns kennt jeder jeden.";

/**
 * Erster Eindruck der Team-Seite: ein ruhig durchlaufender Porträt-Streifen
 * statt direkt in acht Text-Blöcke zu starten. Der Track liegt doppelt
 * hintereinander -- eine Verschiebung um -50% ergibt so eine nahtlose
 * Dauerschleife, die nicht pausiert (auch nicht bei Hover -- soll durchweg
 * laufen). Die Tagline baut sich wortweise auf und wackelt danach ganz
 * leicht, mehr Lebendigkeit als Spielerei.
 */
export function TeamIntroBanner() {
  const allMembers = teamGroups.flatMap((g) => g.members);
  const track = [...allMembers, ...allMembers];
  const words = TAGLINE.split(" ");

  let letterIndex = 0;

  return (
    <section className="overflow-hidden border-y border-line bg-paper">
      {/* Kein Hintergrundbild mehr hier -- selbst nur hinter der Tagline
          platziert wirkte der Fotoschleier noch wie ein unerwünschter
          Farbverlauf. Reines bg-paper stattdessen -- deckungsgleich mit dem
          Ton, auf den die Porträts unten (siehe TeamMember-Fotos) freigestellt
          sind. Vorher bg-paper-tint: der etwas dunklere Band-Ton passte nicht
          zu den freigestellten Fotos und machte genau die Kacheln wieder
          sichtbar, die eigentlich unsichtbar verschmelzen sollen. */}
      <div className="pt-9 sm:pt-11">
        <div className="container-site">
          <p className="text-build t-serif text-[clamp(1.4rem,1.15rem+1.1vw,2.1rem)] leading-tight text-ink">
            {words.map((word, wi) => (
              <span key={wi} style={{ "--word-index": wi } as React.CSSProperties}>
                {[...word].map((ch, ci) => {
                  const li = letterIndex++;
                  return (
                    <span
                      key={ci}
                      className="wobble-letter"
                      style={
                        {
                          "--wobble-delay": `${1000 + li * 70}ms`,
                          "--wobble-deg": `${li % 2 === 0 ? "1deg" : "-1deg"}`,
                        } as React.CSSProperties
                      }
                    >
                      {ch}
                    </span>
                  );
                })}
                {wi < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="marquee-viewport relative mt-7 overflow-hidden pb-9 sm:pb-11">
        <div className="marquee-track flex w-max gap-3.5">
          {track.map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="h-20 w-16 shrink-0 overflow-hidden rounded-[3px] bg-paper-raised sm:h-24 sm:w-[4.75rem]"
            >
              <img
                src={`/team/${m.photo}.webp`}
                width={420}
                height={525}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
