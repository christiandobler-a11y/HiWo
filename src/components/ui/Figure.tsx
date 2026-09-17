import type { CSSProperties } from "react";

type Props = {
  /** Basisname in /public/img, z. B. "lager-regale". */
  name: string;
  /** Vorhandene Breiten der WebP-Varianten, absteigend. */
  widths: number[];
  /** Seitenverhältnis (Breite/Höhe) der erzeugten Dateien. */
  ratio: number;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  priority?: boolean;
  /** Bildausschnitt, falls das Bild im Layout stärker beschnitten wird. */
  position?: string;
};

/**
 * Bild-Ausgabe für vorab optimierte Assets.
 *
 * Alle Bilder liegen als WebP in festen Breiten unter /public/img. Damit
 * braucht der Prototyp keinen Bild-Server und bleibt statisch exportierbar.
 * width/height verhindern Layout-Sprünge, `sizes` steuert die Auswahl.
 */
export function Figure({
  name,
  widths,
  ratio,
  alt,
  sizes,
  className = "",
  imgClassName = "",
  style,
  priority = false,
  position,
}: Props) {
  const sorted = [...widths].sort((a, b) => b - a);
  const largest = sorted[0];
  const srcSet = sorted.map((w) => `/img/${name}-${w}.webp ${w}w`).join(", ");

  return (
    <div className={`figure-frame ${className}`} style={style}>
      <img
        src={`/img/${name}-${largest}.webp`}
        srcSet={srcSet}
        sizes={sizes}
        width={largest}
        height={Math.round(largest / ratio)}
        alt={alt}
        className={imgClassName}
        style={position ? { objectPosition: position } : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </div>
  );
}

/**
 * Bildunterschrift im Stil der Seite: Magenta-Strich, kleine Schrift.
 * Bildunterschriften tragen hier echte Information – sie sind kein Dekor.
 */
export function FigureCaption({
  children,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <figcaption
      className={`mt-3.5 flex items-start gap-3 text-[0.8125rem] leading-relaxed ${
        onDark ? "text-night-muted" : "text-muted"
      } ${className}`}
    >
      <span
        className={`mt-[0.55em] h-[2px] w-5 shrink-0 ${onDark ? "bg-magenta-glow" : "bg-magenta"}`}
        aria-hidden="true"
      />
      <span>{children}</span>
    </figcaption>
  );
}
