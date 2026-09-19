"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { company } from "@/data/company";
import { fastOrder, mainNav } from "@/data/site";
import { ArrowRight } from "@/components/ui/Button";

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/logo-hiwomed-280.png"
      srcSet="/brand/logo-hiwomed-280.png 280w, /brand/logo-hiwomed-560.png 560w"
      sizes="(min-width: 768px) 80px, 66px"
      width={280}
      height={204}
      alt="HiWo-med Medizintechnik"
      className={className}
    />
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Schlanker Scroll-Zustand: nur eine Haarlinie und etwas weniger Höhe.
  //
  // Bug: Ein einzelner Schwellenwert (vorher: scrollY > 12) lässt den
  // Header bei genau diesem Wert unkontrolliert zwischen groß und klein
  // hin- und herspringen. Ursache ist ein Feedback-Loop: Der Header steht
  // "sticky" ganz oben und zählt weiterhin mit seiner vollen Höhe zum
  // Dokumentfluss -- schrumpft er (96px -> 72px), wird das Dokument
  // insgesamt kürzer und der Browser (Scroll Anchoring) korrigiert
  // scrollY, damit der sichtbare Inhalt stabil bleibt. Liegt scrollY nahe
  // am Schwellenwert, kann genau diese Korrektur ihn wieder unter- bzw.
  // überschreiten -- der Header schrumpft, wächst, schrumpft, ... in
  // Dauerschleife.
  //
  // Fix: zwei unterschiedliche Schwellenwerte (Hysterese/Schmitt-Trigger)
  // mit größerem Abstand, als die Höhenänderung selbst verursachen kann
  // (max. 24px). Ein einmal erreichter Zustand hält damit, bis scrollY
  // klar auf die andere Seite wechselt -- an der Grenze kann er sich
  // nicht mehr selbst zurückschalten.
  useEffect(() => {
    let isScrolled = false;
    const ENTER = 48;
    const EXIT = 16;

    const onScroll = () => {
      const y = window.scrollY;
      if (!isScrolled && y > ENTER) {
        isScrolled = true;
        setScrolled(true);
      } else if (isScrolled && y < EXIT) {
        isScrolled = false;
        setScrolled(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü bei Navigation schließen.
  useEffect(() => setOpen(false), [pathname]);

  // Hintergrund sperren, solange das mobile Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-[border-color,padding] duration-200 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="container-site">
        <div
          className={`flex items-center justify-between gap-6 transition-[height] duration-200 ${
            scrolled ? "h-[72px]" : "h-[84px] md:h-[96px]"
          }`}
        >
          {/* Logo + dezente Prototyp-Kennzeichnung */}
          <div className="flex items-end gap-3">
            <Link
              href="/"
              className="block shrink-0 transition-opacity hover:opacity-80"
              aria-label="HiWo-med Medizintechnik – zur Startseite"
            >
              <Logo
                className={`w-auto transition-[height] duration-200 ${
                  scrolled ? "h-[44px]" : "h-[48px] md:h-[58px]"
                }`}
              />
            </Link>
            <span
              className="mb-1.5 hidden select-none border border-line-strong px-1.5 py-[3px] text-[0.5625rem] font-medium uppercase leading-none tracking-[0.14em] text-muted lg:inline-block"
              title="Dies ist ein Gestaltungskonzept, nicht die veröffentlichte Website."
            >
              Konzept
            </span>
          </div>

          {/* Hauptnavigation ab Large */}
          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative py-2 text-[0.95rem] font-medium transition-colors hover:text-ink ${
                      isActive(item.href) ? "text-ink" : "text-muted"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-magenta transition-[width] duration-200 ${
                        isActive(item.href) ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Telefonnummer ist der eigentliche Hauptkanal des Unternehmens. */}
            <a
              href={company.phone.href}
              className="hidden items-center gap-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-magenta-ink xl:flex"
            >
              <PhoneIcon />
              {company.phone.display}
            </a>

            {/* FastOrder: sichtbar, aber bewusst sekundär gestaltet. */}
            <a
              href={fastOrder.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group hidden min-h-11 items-center gap-2.5 rounded-[3px] border border-line-strong px-4 py-2.5 transition-colors hover:border-magenta sm:inline-flex"
            >
              <span className="text-[0.9rem] font-semibold text-ink transition-colors group-hover:text-magenta-ink">
                {fastOrder.label}
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-muted">
                {fastOrder.qualifier}
              </span>
              <ArrowRight className="text-magenta transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            >
              <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
              <BurgerIcon open={open} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobiles Menü: eigenständiges Layout, keine geschrumpfte Desktop-Leiste. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto overscroll-contain border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Hauptnavigation (mobil)" className="container-site pb-10 pt-4">
          <ul className="divide-y divide-line border-b border-line">
            {mainNav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="t-index w-6 shrink-0 text-muted" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[1.65rem] font-semibold tracking-[-0.02em] ${
                      isActive(item.href) ? "text-magenta-ink" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3">
            <a
              href={fastOrder.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex min-h-14 items-center justify-between gap-3 rounded-[3px] border border-line-strong px-5"
            >
              <span>
                <span className="block font-semibold text-ink">{fastOrder.label}</span>
                <span className="block text-[0.8rem] text-muted">
                  Bestellportal für {fastOrder.qualifier}
                </span>
              </span>
              <ArrowRight className="text-magenta" />
            </a>

            <a
              href={company.phone.href}
              className="flex min-h-14 items-center gap-3 rounded-[3px] bg-magenta-cta px-5 font-semibold text-white"
            >
              <PhoneIcon />
              {company.phone.display}
            </a>
            <p className="text-[0.8125rem] text-muted">
              {company.hours.compact} – {company.hours.note}.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
      <path
        d="M5.2 2.2 6.6 5 5.3 6.4c.6 1.4 1.9 2.7 3.3 3.3L10 8.4l2.8 1.4v2.6c0 .6-.5 1.1-1.1 1-5-.5-8.6-4.1-9.1-9.1 0-.6.4-1.1 1-1.1h1.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d={open ? "M5 5l14 14" : "M3 7h18"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        className="transition-all duration-200"
      />
      <path
        d={open ? "M19 5L5 19" : "M3 15h18"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        className="transition-all duration-200"
      />
    </svg>
  );
}
