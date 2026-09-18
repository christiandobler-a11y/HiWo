import { Stat } from "@/components/ui/Stat";
import { SectionMark } from "@/components/ui/Section";
import { keyFigures } from "@/data/company";

/**
 * Kennzahlen als typografisches Band. Getrennt wird durch Haarlinien,
 * nicht durch Karten – und die Zahlen stehen im leichten Schnitt groß,
 * statt fett und klein in vier gleichen Kacheln.
 */
export function KeyFigures() {
  return (
    <section className="bg-paper-tint section-y" aria-labelledby="kennzahlen">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionMark index="07" label="Substanz" className="mb-5" />
            <h2 id="kennzahlen" className="t-h2 max-w-[20ch]">
              Gewachsen, nicht aufgeblasen.
            </h2>
          </div>
          <p className="max-w-[34rem] text-[0.9375rem] leading-relaxed text-muted">
            Alle Angaben stammen aus dem laufenden Betrieb in Uffing am Staffelsee.
          </p>
        </div>

        <dl className="mt-12 grid gap-x-8 gap-y-10 border-t border-line-strong pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:divide-x lg:divide-line-strong">
          {keyFigures.map((f, i) => (
            <div key={f.label} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <Stat
                value={f.value}
                unit={f.unit}
                label={f.label}
                detail={f.detail}
                countUp={f.countUp}
                numberFormat={"numberFormat" in f ? f.numberFormat : "grouped"}
                delay={i * 70}
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
