import type { ReactNode } from "react";

import { SectionMark } from "@/components/ui/Section";

/**
 * Einheitlicher Seitenkopf für alle Unterseiten.
 * Die Magenta-Kante am linken Rand ist dasselbe Motiv wie auf der Startseite
 * und hält die Seiten optisch zusammen.
 */
export function PageHeader({
  label,
  title,
  lead,
  leadBelow = false,
  meta,
  children,
}: {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Lead unter den Titel stellen statt daneben -- lässt die rechte Spalte
   *  frei, z. B. wenn direkt darunter ein Bild ohne Text davor stehen soll
   *  (siehe Kontaktseite). */
  leadBelow?: boolean;
  /** Kurze Faktenzeile unter der Einleitung, z. B. Öffnungszeiten. */
  meta?: { k: string; v: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-[clamp(2.5rem,1.5rem+3vw,4rem)] pt-[clamp(2.5rem,1.5rem+4vw,5rem)]">
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-[clamp(6rem,14vw,11rem)] w-[2px] bg-magenta lg:block"
        aria-hidden="true"
      />
      <div className="container-site">
        <SectionMark label={label} className="mb-7" />
        {leadBelow ? (
          <div className="max-w-[38rem]">
            <h1 className="t-h1">{title}</h1>
            {lead ? <p className="t-lead mt-5">{lead}</p> : null}
            {children}
          </div>
        ) : (
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <h1 className="t-h1 lg:col-span-7">{title}</h1>
            {lead ? (
              <div className="lg:col-span-5 lg:pt-2">
                <p className="t-lead">{lead}</p>
                {children}
              </div>
            ) : null}
          </div>
        )}

        {meta?.length ? (
          <dl className="mt-11 grid border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
            {meta.map((m) => (
              <div
                key={m.k}
                className="border-b border-line py-5 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="t-eyebrow text-muted">{m.k}</dt>
                <dd className="mt-2 text-[0.95rem] leading-snug text-ink">{m.v}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
