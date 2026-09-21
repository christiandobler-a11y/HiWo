import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { SectionHead } from "@/components/ui/Section";
import { openPositions, cultureHighlights } from "@/data/career";

export function CareerTeaser() {
  const position = openPositions[0];

  return (
    <section className="section-y bg-paper-raised" aria-labelledby="karriere">
      <div className="container-site">
        <div className="grid items-center gap-x-12 gap-y-12 lg:grid-cols-12">
          <figure className="order-2 lg:order-1 lg:col-span-5" data-reveal>
            <Figure
              name="fuhrpark-team-v4"
              widths={[900, 640]}
              ratio={1.45}
              alt="Zwei Mitarbeiter von HiWo-med stehen vor einem Firmenfahrzeug in der oberbayerischen Landschaft."
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[1.45/1] w-full"
            />
          </figure>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <SectionHead
              index="09"
              label="Karriere"
              title={<span id="karriere">Bei uns kennt jeder jeden.</span>}
              lead="Entscheidungen werden schnell getroffen, gute Ideen finden Gehör. Wer bei HiWo-med anfängt, bleibt meistens lange – nicht ohne Grund gratulieren wir regelmäßig zu langjährigen Jubiläen."
            />

            <ul className="mt-8 flex flex-wrap gap-2">
              {cultureHighlights.map((h) => (
                <li
                  key={h}
                  className="border border-line-strong px-3 py-1.5 text-[0.8125rem] text-ink"
                >
                  {h}
                </li>
              ))}
            </ul>

            {position ? (
              <div className="mt-9 border-t border-line pt-6">
                <p className="t-eyebrow text-muted">Aktuell offen</p>
                <h3 className="t-h3 mt-3">{position.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted">
                  {position.employment} · {position.location}
                </p>
                <div className="mt-6">
                  <Button href="/karriere/">
                    Stelle und Benefits ansehen
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
