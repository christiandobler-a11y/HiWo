"use client";

import { useState } from "react";

import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead } from "@/components/ui/Section";
import { fieldServiceMembers, type TeamMember } from "@/data/team";

/**
 * Persönliche Betreuung. Hier stehen echte Gesichter mit echten Gebieten –
 * das ist der Unterschied zum anonymen Versandhandel und deshalb keine
 * abstrakte Illustration, sondern die Außendienstmannschaft selbst.
 */
export function PersonalService() {
  return (
    <section className="section-y" aria-labelledby="betreuung">
      <div className="container-site">
        <div className="grid items-start gap-x-12 gap-y-12 lg:grid-cols-12">
          <figure className="lg:col-span-5" data-reveal>
            <Figure
              name="aussendienst-nah"
              widths={[960, 640]}
              ratio={2.49}
              alt="Ein Außendienstmitarbeiter winkt lächelnd aus dem Fenster seines HiWo-med-Transporters."
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full"
              position="30% 45%"
            />
            <FigureCaption>
              Ihr Außendienst kommt persönlich vorbei – nicht nur am Telefon, sondern vor Ort
              in der Praxis.
            </FigureCaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHead
              index="05"
              label="Betreuung"
              title={<span id="betreuung">Wir wissen, wie Ihre Praxis arbeitet.</span>}
              lead="Unser Außendienst betreut feste Gebiete. Das heißt: dieselbe Person, die vor zwei Jahren die Hygienebegehung begleitet hat, kennt heute noch Ihre Abläufe, Ihr Lager und Ihre Vorlieben beim Verbandmaterial."
            />
            <p className="mt-6 leading-relaxed text-muted">
              Wir verstehen uns dabei nicht als Verkäufer, sondern als Partner: mit
              Qualitätsprodukten, kompetenter Beratung und zuverlässiger Betreuung im Innen-
              wie im Außendienst. Einmal im Jahr fragen wir nach, ob das auch tatsächlich so
              ankommt.
            </p>
            <div className="mt-8">
              <Button href="/team/" variant="outline">
                Das ganze Team ansehen
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Außendienst-Leiste: fünf Porträts mit Gebiet, durch Haarlinien getrennt.
            Zum Umdrehen antippen/anklicken -- auf der Rückseite ein paar Zeilen
            mehr Nähe, statt nur Name und Foto. */}
        <div className="mt-16 border-t border-line pt-8">
          <h3 className="t-eyebrow text-muted">Ihr Außendienst</h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {fieldServiceMembers.map((m, i) => (
              <li
                key={m.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <FieldServiceCard member={m} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FieldServiceCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);
  const area = member.role?.split(" · ")[0];

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group block w-full text-left [perspective:1200px]"
    >
      <div
        className="relative aspect-[4/5] w-full transition-transform duration-[550ms] [transform-style:preserve-3d]"
        style={{
          transform: flipped ? "rotateY(180deg)" : "none",
          transitionTimingFunction: "cubic-bezier(.22,.61,.36,1)",
        }}
      >
        {/* Vorderseite */}
        <div className="figure-frame absolute inset-0 [backface-visibility:hidden]">
          <img
            src={`/team/${member.photo}.webp`}
            width={420}
            height={525}
            alt={`Porträt von ${member.name}`}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Rückseite */}
        <div
          className="absolute inset-0 flex flex-col justify-end bg-magenta-cta p-4 text-white [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-[0.9375rem] font-semibold leading-snug">{member.name}</p>
          {area ? <p className="mt-1 text-[0.8125rem] leading-snug text-white/85">{area}</p> : null}
          {member.since ? (
            <p className="mt-2 text-[0.8125rem] leading-snug text-white/85">
              Seit {member.since} Ihr fester Ansprechpartner vor Ort.
            </p>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink">{member.name}</p>
      <p className="mt-1 text-[0.8125rem] leading-snug text-muted">{area}</p>
    </button>
  );
}
