import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead } from "@/components/ui/Section";
import { fieldServiceMembers } from "@/data/team";

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
              name="aussendienst-nah-v3"
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
            Blenden beim Scrollen mit einer sanften Drehung ein (reveal-flip)
            statt nur hochzuschieben wie der Rest der Seite. */}
        <div className="mt-16 border-t border-line pt-8">
          <h3 className="t-eyebrow text-muted">Ihr Außendienst</h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {fieldServiceMembers.map((m, i) => (
              <li
                key={m.name}
                className="reveal-flip [perspective:1000px]"
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <div className="figure-frame aspect-[4/5] w-full bg-paper-tint">
                  <img
                    src={`/team/${m.photo}.webp`}
                    width={420}
                    height={525}
                    alt={`Porträt von ${m.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink">
                  {m.name}
                </p>
                <p className="mt-1 text-[0.8125rem] leading-snug text-muted">
                  {m.role?.split(" · ")[0]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
