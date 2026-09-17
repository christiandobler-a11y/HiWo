import type { CSSProperties } from "react";

type Props = {
  value: number | string;
  unit?: string;
  label: string;
  detail?: string;
  /** Zahl beim Einscrollen hochzählen (nur bei echten Mengen sinnvoll). */
  countUp?: boolean;
  /** "grouped" setzt Tausenderpunkte, "plain" nicht – wichtig für Jahreszahlen. */
  numberFormat?: "grouped" | "plain";
  onDark?: boolean;
  size?: "lg" | "md";
  delay?: number;
};

/**
 * Kennzahl als typografisches Element – bewusst ohne Karte, Schatten oder
 * Icon-Kreis. Getrennt werden Kennzahlen im Layout nur durch Haarlinien.
 */
export function Stat({
  value,
  unit,
  label,
  detail,
  countUp = false,
  numberFormat = "grouped",
  onDark = false,
  size = "lg",
  delay = 0,
}: Props) {
  const numberCls = size === "lg" ? "t-figure" : "t-figure-sm";
  const formatted =
    typeof value === "number" && numberFormat === "grouped"
      ? value.toLocaleString("de-DE")
      : String(value);

  return (
    <div data-reveal style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      <p className={`${numberCls} flex items-baseline gap-1`}>
        {countUp && typeof value === "number" ? (
          <span data-count={value}>{formatted}</span>
        ) : (
          <span>{formatted}</span>
        )}
        {unit ? (
          <span
            className={`text-[0.42em] font-medium tracking-normal ${
              onDark ? "text-magenta-glow" : "text-magenta"
            }`}
          >
            {unit}
          </span>
        ) : null}
      </p>
      <p
        className={`mt-3 text-[0.95rem] font-semibold ${
          onDark ? "text-night-ink" : "text-ink"
        }`}
      >
        {label}
      </p>
      {detail ? (
        <p className={`mt-1.5 text-[0.875rem] leading-relaxed ${onDark ? "text-night-muted" : "text-muted"}`}>
          {detail}
        </p>
      ) : null}
    </div>
  );
}
