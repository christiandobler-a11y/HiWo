# HiWo-med — Website-Konzept

Mehrseitiger, lauffähiger Prototyp für einen möglichen Relaunch der Website
der **HiWo-med Medizintechnik GmbH**, Uffing am Staffelsee.

Es handelt sich ausdrücklich um ein **Gestaltungskonzept**, nicht um die
fertige Website. Inhalte und Bilder stammen aus öffentlich zugänglichen
Quellen der bestehenden Seite <https://www.hiwomed.de/de/> und dienen dazu,
eine Richtung zeigen und intern diskutieren zu können.

---

## Starten

```bash
npm install
npm run dev          # http://localhost:3000
```

Statischen Export für eine Präsentation bauen:

```bash
npm run build        # erzeugt ./out – reine HTML/CSS/JS-Dateien
npx http-server out  # oder auf beliebigen Webspace kopieren
```

Weitere Skripte:

```bash
npm run typecheck    # TypeScript
npm run lint         # ESLint
node qa.mjs          # automatischer QA-Durchlauf (siehe unten)
```

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), statischer Export |
| Sprache | TypeScript |
| Styling | Tailwind CSS v4, Design-Tokens in `src/app/globals.css` |
| Schriften | Archivo + Source Serif 4, selbst gehostet über `next/font` |
| Bilder | vorab optimiertes WebP in festen Breiten, `srcset` + `sizes` |
| Abhängigkeiten | keine UI-Bibliothek, keine Animations-Bibliothek, kein Icon-Paket |

Kein Backend, keine Datenbank, kein Shop-System. FastOrder bleibt ein
externer Zugang.

## Seiten

| Route | Inhalt |
|---|---|
| `/` | Startseite, zehn Abschnitte vom Einstieg bis zum Kontakt |
| `/leistungen/` | Versorgung, Sortiment, Ablauf einer Bestellung, Lager und Lieferdienst |
| `/services/` | Seminare, Hygiene-Check, Trinkwasserprobe, Notfalltraining, Wundworkshop |
| `/unternehmen/` | Geschichte, Arbeitsweise, Kennzahlen, Region |
| `/team/` | 31 Mitarbeitende in sieben Bereichen |
| `/karriere/` | Offene Stelle, Benefits, Arbeitgebermerkmale |
| `/kontakt/` | Anschrift, Erreichbarkeit, Anfahrt, Außendienst, FastOrder |
| `/impressum/`, `/datenschutz/` | Rechtliches (siehe `docs/ANNAHMEN.md`) |

## Projektstruktur

```
public/
  brand/      Original-HiWo-med-Logo (freigestellt, Markenfarbe korrigiert)
  img/        Redaktionelle Bilder als WebP in mehreren Breiten
  team/       31 Mitarbeiterporträts als WebP
src/
  app/        Routen, globales Stylesheet, sitemap.ts, robots.ts
  components/
    layout/   Header, Footer, Seitenkopf
    sections/ Abschnitte der Startseite (auch auf Unterseiten wiederverwendet)
    ui/       Button, Figure, Section, Stat, MotionRuntime
  data/       Alle Inhalte und Zahlen an einem Ort, mit Quellenangabe
docs/
  KONZEPT.md    Gestaltungs- und Strukturkonzept
  ANNAHMEN.md   Unsicherheiten, offene Punkte, TODOs
  REDIRECTS.md  Alte URLs → neue URLs für einen echten Relaunch
qa.mjs          Automatischer Prüflauf gegen den statischen Export
shot.mjs        Screenshot-Helfer für visuelle Reviews
```

Inhalte stehen **ausschließlich** in `src/data/`. Wer Texte oder Zahlen
ändern will, muss keine Komponente anfassen.

## Qualitätssicherung

`node qa.mjs` prüft den gebauten Export (`npm run build`, dann ein
Static-Server auf Port 3211) über neun Seiten und sechs Viewport-Breiten von
320 px bis 1920 px auf:

- horizontales Überlaufen
- Überschriftenhierarchie und genau ein `<h1>` je Seite
- fehlende Alt-Texte und fehlende `width`/`height` an Bildern
- Kontrastverhältnisse nach WCAG 2.1 AA für jede sichtbare Textfarbe
- Touch-Ziele unter 40 px Höhe
- Links ohne Beschriftung, `target="_blank"` ohne `rel="noopener"`
- alle internen Links auf HTTP-Status
- JavaScript-Fehler

Stand der letzten Prüfung: **0 Befunde**.

## Hinweise für den Livegang

- `robots.ts` sperrt aktuell die gesamte Seite für Suchmaschinen, und
  `layout.tsx` setzt `robots: { index: false }`. Beides muss vor einer
  Veröffentlichung entfernt werden.
- Die Datenschutzerklärung ist bewusst nicht ausformuliert, siehe
  `docs/ANNAHMEN.md`.
- Die Bilder sind Prototyp-Material aus der bestehenden Website und für
  einen echten Relaunch durch neue Aufnahmen zu ersetzen.
