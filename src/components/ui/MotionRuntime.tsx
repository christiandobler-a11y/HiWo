"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Die gesamte Bewegung der Seite in einer einzigen, kleinen Laufzeit.
 *
 * Grundsätze:
 * - Ohne JavaScript ist alles sofort sichtbar (die `js`-Klasse wird erst
 *   hier gesetzt, die CSS-Startzustände greifen nur mit ihr).
 * - `prefers-reduced-motion: reduce` schaltet jede Bewegung ab.
 * - Ein einziger IntersectionObserver für die ganze Seite, Elemente werden
 *   nach dem Einblenden abgemeldet. Kein Scroll-Listener, kein Parallax.
 *
 * Läuft an `pathname` gebunden neu: Der App-Router hält dieses Layout bei
 * einer client-seitigen Navigation am Leben, ohne die Komponente neu zu
 * mounten. Ohne diese Abhängigkeit würde der Observer nur einmal beim
 * allerersten Laden über die vorhandenen `[data-reveal]`-Elemente laufen –
 * alle Elemente einer per Link nachgeladenen Seite blieben dann dauerhaft
 * bei opacity:0 hängen (unsichtbar, aber weiterhin im Layout vorhanden).
 */
export function MotionRuntime() {
  const pathname = usePathname();

  // Die "js"-Klasse einmal für die Lebensdauer der Seite setzen – nicht an
  // `pathname` gebunden, damit sie bei einer Navigation nicht kurz entfernt
  // und wieder gesetzt wird (das würde alle data-reveal-Elemente für einen
  // Frame auf opacity:1 zurückspringen lassen).
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) document.documentElement.classList.add("js");
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const el of document.querySelectorAll("[data-reveal]")) revealObserver.observe(el);

    // Kennzahlen zählen einmal hoch – kurz, ohne Easing-Spielerei.
    const countObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          countObserver.unobserve(el);

          const target = Number(el.dataset.count);
          if (!Number.isFinite(target)) continue;
          const format = new Intl.NumberFormat("de-DE");
          const duration = 900;
          const start = performance.now();

          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = format.format(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );

    for (const el of document.querySelectorAll("[data-count]")) countObserver.observe(el);

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
