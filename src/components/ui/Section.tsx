import type { ReactNode } from "react";

/**
 * Wiederkehrendes Sektionslabel: laufende Nummer, Magenta-Hairline, Thema.
 * Das ist das grafische Grundmotiv der Seite – es taucht in jeder Sektion
 * auf und gibt dem Scrollen einen Takt.
 */
export function SectionMark({
  index,
  label,
  onDark = false,
  className = "",
}: {
  index?: string;
  label: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {index ? (
        <span
          className={`t-index tabular-nums ${onDark ? "text-night-muted" : "text-muted"}`}
          aria-hidden="true"
        >
          {index}
        </span>
      ) : null}
      <span
        className={`h-[2px] w-9 shrink-0 ${onDark ? "bg-magenta-glow" : "bg-magenta"}`}
        aria-hidden="true"
      />
      <span className={`t-eyebrow ${onDark ? "text-night-ink" : "text-ink"}`}>{label}</span>
    </div>
  );
}

/**
 * Sektionskopf in zwei Varianten:
 * - gestapelt (default)
 * - asymmetrisch geteilt: Überschrift links, Einleitung rechts versetzt
 */
export function SectionHead({
  index,
  label,
  title,
  lead,
  split = false,
  onDark = false,
  as: As = "h2",
  children,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  split?: boolean;
  onDark?: boolean;
  as?: "h1" | "h2";
  children?: ReactNode;
}) {
  const heading = (
    <As className={As === "h1" ? "t-h1" : "t-h2"} data-reveal>
      {title}
    </As>
  );

  if (split) {
    return (
      <div className="grid gap-x-10 gap-y-7 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionMark index={index} label={label} onDark={onDark} className="mb-6" />
          {heading}
        </div>
        {(lead || children) && (
          <div className="lg:col-span-5 lg:pt-14" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {lead ? <p className="t-lead">{lead}</p> : null}
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-[46rem]">
      <SectionMark index={index} label={label} onDark={onDark} className="mb-6" />
      {heading}
      {lead ? (
        <p className="t-lead mt-6" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}
