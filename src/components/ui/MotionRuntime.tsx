"use client";

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
 */
export function MotionRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) return;
    root.classList.add("js");

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
      root.classList.remove("js");
    };
  }, []);

  return null;
}
