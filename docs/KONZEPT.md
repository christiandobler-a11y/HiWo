# Website-Konzept HiWo-med

Grundlage, Entscheidungen und Gestaltungssystem des Prototyps.

---

## 1. Ausgangslage

Analysiert wurden Startseite und alle Unterseiten von `www.hiwomed.de`
(Stand September 2026): Anspruch, Team, Kunden, Leistungen, Sortiment,
Seminare & Services, Karriere, Kontakt, Sitemap, Impressum.

**Was inhaltlich trägt und übernommen wurde**

- Eine ungewöhnlich konkrete Leistungsbeschreibung: Lagerfläche, Artikelzahl,
  Liefergebiete mit Laufzeiten, Rücknahme von Verpackungen, UPS-Cutoff 13 Uhr.
- Ein vollständiges, fotografiertes Team mit Eintrittsjahren — 31 Personen,
  fünf davon seit mehr als 20 Jahren.
- Ein ausgebauter Schulungsbereich mit eigenen, qualifizierten Referentinnen
  und Referenten.
- Eine sehr gute, ehrliche Stellenanzeige samt vollständiger Benefit-Liste.
- Ein starker, echter Claim: „Bleiben Sie Mediziner, wir kümmern uns um den
  Rest.“ — er steht auf den Fahrzeugen und auf dem Katalog.

**Wo die bestehende Seite Substanz verschenkt**

| Beobachtung | Folge |
|---|---|
| Startseite besteht aus drei zentrierten Textblöcken und drei Icon-Kacheln | Die eigentlichen Stärken (Lager, Fuhrpark, Team) tauchen erst tief in Unterseiten auf |
| Navigation mit vier Ebenen, „Über uns“ als erster Punkt | Nutzerinnen und Nutzer suchen Leistungen, nicht Selbstbeschreibung |
| Kennzahlen (1.500 m², 6.000 Artikel) stehen als Nebensatz im Fließtext | Kein Beleg für Größe, obwohl die Zahlen vorhanden sind |
| Header-Bilder nur 960 × 385 px, als automatische Slideshow | Bilder wirken wie Dekoration statt wie Beleg |
| Zwei Bestellzugänge (FastOrder, Shopware) gleichrangig in der Navigation | Erweckt den Eindruck eines Onlineshops |
| Teamseite als durchlaufende Porträtliste ohne Einordnung | Wirkt wie ein Telefonbuch, obwohl das Team das stärkste Argument ist |
| Fließtext im Schriftgrad `h3`, Überschriften teils rot und zentriert | Keine erkennbare Hierarchie |
| Widersprüchliche Altersangaben: „über 35 Jahre“, „mehr als 40 Jahre Erfahrung“, „seit über 37 Jahren“ | Unklarheit bei einem Kernargument |

## 2. Positionierung des neuen Auftritts

Die Seite erzählt HiWo-med **nicht als Händler, sondern als Versorger**.
Der rote Faden von der Startseite bis zum Kontakt:

> Es gibt ein Lager, einen Fuhrpark und Menschen mit Namen — deshalb können
> wir Zusagen machen und einhalten.

Alles, was diese Aussage belegt, wird groß gezeigt: Liefergebiete mit
Laufzeiten, das Lager, die Außendienstmannschaft, die Referentinnen und
Referenten der Schulungen, die Kennzahlen.

**FastOrder** ist konsequent als Werkzeug für Bestandskunden behandelt:
im Header als sekundär gestalteter Rahmen-Button mit dem Zusatz
„Bestandskunden“, im Footer und am Ende der Kontaktseite. Nie als
Haupt-CTA, nie im Hero. Der Abschnitt „Kein Onlineshop. Ein
Versorgungspartner.“ auf der Startseite sagt das auch ausdrücklich.
Der zweite Zugang (Shopware-Registrierung) ist im Prototyp nicht verlinkt —
siehe `ANNAHMEN.md`.

## 3. Informationsarchitektur

Aus vier Navigationsebenen werden sechs gleichrangige Einstiege:

```
Leistungen   Services   Unternehmen   Team   Karriere   Kontakt      [FastOrder]
```

| Alt | Neu |
|---|---|
| Über uns (Startseite) | `/` als eigenständige Startseite, nicht als „Über uns“ |
| Über uns › Anspruch | `/unternehmen/` (Abschnitt „Wie wir arbeiten“) |
| Über uns › Kunden | `/leistungen/` (Abschnitt „Für wen wir arbeiten“) |
| Leistungen | `/leistungen/` |
| Leistungen › Sortiment | `/leistungen/` (Abschnitt „Sortiment“) |
| Leistungen › Seminare & Services | `/services/` — eigener Hauptpunkt |
| Team | `/team/` — eigener Hauptpunkt |
| Karriere, Kontakt | unverändert |

Vollständige URL-Zuordnung in `REDIRECTS.md`.

**Dramaturgie der Startseite** — zehn nummerierte Abschnitte, jeder mit
einem anderen Layouttyp, damit das Scrollen einen Takt bekommt:

| Nr. | Abschnitt | Layouttyp |
|---|---|---|
| 01 | Hero | Text 8/4, Faktenzeile, Bildband im Originalformat |
| 02 | Positionierung | Serifen-Aussage links, drei Argumente als Haarlinien-Liste rechts |
| 03 | Versorgung | Zweispaltiges Verzeichnis + Katalog als reales Objekt |
| 04 | Logistik | **dunkler Abschnitt**, Lagerbild + Liefertabelle |
| 05 | Betreuung | Bild links, Text rechts, Porträtleiste des Außendiensts |
| 06 | Services | Programmliste mit Nummer, Format und Dauer |
| 07 | Kennzahlen | getöntes Band, vier große Ziffern im Haarlinienraster |
| 08 | Unternehmen | Zitat + Bild + horizontale Porträtleiste |
| 09 | Karriere | Bild/Text, Benefit-Chips, offene Stelle |
| 10 | Kontakt | Magenta-Kante, drei Kanäle in echter Reihenfolge |

## 4. Gestaltungssystem

### Farbe

| Token | Wert | Verwendung |
|---|---|---|
| `--color-paper` | `#F8F6F3` | warmes Off-White, Grundfläche |
| `--color-paper-raised` | `#FFFFFF` | Sektionswechsel |
| `--color-paper-tint` | `#EFEBE5` | getöntes Band (Kennzahlen) |
| `--color-ink` | `#15181E` | Überschriften |
| `--color-ink-body` | `#333944` | Fließtext |
| `--color-muted` | `#5E6572` | Sekundärtext, 5,3 : 1 auf Paper |
| `--color-line` / `-strong` | `#E2DDD5` / `#CFC8BD` | Haarlinien |
| **`--color-magenta`** | **`#E5097F`** | **Markenfarbe, exakt aus dem Logo** |
| `--color-magenta-cta` | `#D50877` | gefüllte Buttons mit weißer Schrift |
| `--color-magenta-deep` | `#B00662` | Hover |
| `--color-magenta-ink` | `#A8085C` | Magenta als Text auf hellem Grund |
| `--color-plum` | `#8E1A52` | zweite Logofarbe |
| `--color-night` | `#14161B` | dunkle Abschnitte |
| `--color-magenta-glow` | `#FF63AE` | Magenta auf dunklem Grund |

Magenta und Pflaume wurden **aus der Original-Logodatei ausgelesen**, nicht
geschätzt. Der abweichende CTA-Ton ist eine reine
Barrierefreiheits-Korrektur: Weiß auf `#E5097F` erreicht 4,49 : 1 und
verfehlt WCAG AA um zwei Hundertstel; `#D50877` erreicht 5,1 : 1 und ist
optisch nicht unterscheidbar.

Magenta erscheint **nur** als: CTA-Fläche, 2-px-Linie vor Labels,
Sektionsnummer, aktiver Navigationszustand, Fokusring, Aufzählungsstrich,
Zitatkante. Keine magentafarbenen Flächen, keine Verläufe.

### Typografie

**Archivo** trägt die ganze Seite — eine sachliche Grotesk mit etwas mehr
Haltung als die üblichen System-Schnitte. **Source Serif 4** setzt punktuell
Wärme: Zitate und die Positionierungsaussage. Beide selbst gehostet.

| Klasse | Größe (fluid) | Einsatz |
|---|---|---|
| `t-display` | 40 → 78 px, 600 | Hero |
| `t-h1` | 33 → 56 px, 600 | Seitenüberschriften |
| `t-h2` | 26 → 42 px, 600 | Abschnitte |
| `t-h3` | 19 → 24 px, 600 | Unterabschnitte |
| `t-lead` | 18 → 22 px, 400 | Einleitungen |
| `t-figure` | 44 → 76 px, **300** | Kennzahlen |
| `t-eyebrow` | 12 px, 600, 0,14 em, Versal | Labels |
| `t-index` | 12 px, 500, Tabellenziffern | Sektionsnummern |

Kennzahlen stehen bewusst im **leichten** Schnitt und sehr groß. Das wirkt
souveräner als fett und klein — und unterscheidet die Seite von der üblichen
„vier Kacheln mit Bold-Zahlen“-Optik.

Auf Geräten unter 768 px werden Überschriften automatisch getrennt
(`hyphens: auto`, `lang="de"`); darüber bleiben sie ungetrennt.

### Raster und Abstände

- Container 1280 px, Rinne `clamp(20px, 4vw, 48px)`
- 12-Spalten-Raster, konsequent **asymmetrisch** genutzt: 8/4, 7/5, 5/6, 5/7
- Sektionsabstand `clamp(72px, 3rem + 5vw, 136px)`
- Radien: 2 – 4 px. Buttons 3 px. **Keine Box wird zur Blase.**

### Wiederkehrende grafische Elemente

1. **Sektionsmarke** — laufende Nummer, 36-px-Magenta-Linie, Versal-Label.
   Sie taucht in jedem Abschnitt und auf jeder Unterseite auf und ist das
   Grundmotiv des Auftritts.
2. **Magenta-Kante** am linken Viewport-Rand unter dem Header.
3. **Haarlinien statt Karten.** Listen, Kennzahlen und Tabellen werden durch
   1-px-Linien gegliedert. Auf der ganzen Seite gibt es kein einziges
   Karten-Grid mit Schatten und Icon-Kreisen.
4. **Bildunterschriften mit Magenta-Strich**, die echte Information tragen.

### Bewegung

Eine einzige Datei (`MotionRuntime.tsx`, rund 60 Zeilen) steuert die gesamte
Bewegung der Seite:

- Ein IntersectionObserver blendet Abschnitte beim Einscrollen ein
  (14 px Versatz, 520 ms). Elemente werden nach dem Einblenden abgemeldet.
- Kennzahlen zählen einmal hoch, 900 ms.
- Header verkleinert sich nach 12 px Scroll und bekommt eine Haarlinie.
- Hover: Farbwechsel 160 ms, Pfeile rücken 2 – 4 px nach, Bilder in Links
  zoomen um 3 %.

Kein Parallax, kein Scrolljacking, keine Intro-Animation, kein Video.
**Ohne JavaScript ist die Seite vollständig sichtbar** — die Startzustände
hängen an einer `js`-Klasse, die erst zur Laufzeit gesetzt wird.
`prefers-reduced-motion: reduce` schaltet alles ab.

## 5. Bildsprache

Verwendet wird ausschließlich echtes HiWo-med-Material aus der bestehenden
Website. Die Header-Bilder liegen dort nur in 960 × 385 px vor. Daraus folgt
eine bewusste Regel: **kein Bild wird über seine Auflösung hinaus
aufgeblasen.**

- Der Sprinter im Hero läuft im Originalformat 2,49 : 1 innerhalb des
  Containers (max. 1,33-fache Skalierung) statt randlos über den Bildschirm.
- Auf Mobilgeräten wird auf 4 : 3 beschnitten statt zum Streifen zu schrumpfen.
- Die zwei Porträts, die nur in 150 × 185 px existieren, sind in `team.ts`
  als `lowRes` markiert und werden nicht prominent eingesetzt.
- Alle Ausschnitte wurden einzeln gewählt und geprüft, nicht automatisch
  zentriert. Das Standortschild ist rechtsbündig beschnitten, das
  Innendienst-Foto auf 1,9 : 1, damit niemandem der Kopf abgeschnitten wird.

Für einen echten Relaunch sind neue Aufnahmen nötig — Richtung:
dokumentarisch (Wareneingang, Kommissionierung, Tour, Übergabe in der Praxis)
plus wenige gesetzte Corporate-Porträts. Kein Stockmaterial.

## 6. Logo

Das bestehende Logo wurde **nicht neu gezeichnet und nicht interpretiert**.

Die Website liefert es nur als 165 × 115 px große JPEG-artige PNG-Datei mit
weißem Hintergrund. Für den Prototyp wurde stattdessen die hochauflösende
Fassung vom Titel des Katalogs 2025/26 (2481 × 3509 px) freigestellt: Der
Druck-Scan hatte durch die CMYK-Umrechnung ein reines `#FF00FF`; dieser Wert
wurde auf das echte Web-Magenta `#E5097F` aus der Original-Logodatei
zurückgeführt und der Hintergrund transparent gemacht. Form, Proportionen
und Wortmarke sind unverändert.

Im dunklen Footer steht das Logo auf einer hellen Fläche — so bleiben die
Originalfarben gültig, ohne eine Negativ-Variante erfinden zu müssen.

## 7. Barrierefreiheit

- Semantisches HTML: `header`, `nav`, `main`, `section`, `article`, `figure`,
  `dl`, `table` mit `caption`, `th scope`.
- Genau ein `<h1>` je Seite, keine Sprünge in der Überschriftenhierarchie.
- Alle Textfarben erfüllen WCAG 2.1 AA (automatisiert geprüft, 0 Befunde).
- Sichtbarer Fokusring in Magenta, auf dunklen Flächen in hellerem Magenta.
- Sprungmarke „Zum Inhalt springen“ als erstes fokussierbares Element.
- Mobiles Menü: `aria-expanded`, `aria-controls`, Escape schließt,
  Hintergrund wird gesperrt.
- Touch-Ziele mindestens 40 px hoch, Buttons mindestens 44 px.
- ARIA nur dort, wo HTML nicht ausreicht. Dekorative Linien und Ziffern sind
  `aria-hidden`.

## 8. Technik und Performance

- Statischer Export, kein Server, keine Datenbank.
- Erstaufruf der Startseite: rund 54 KB Schriften, 37 KB CSS, 47 KB Bilder
  above the fold. Alle Angaben unkomprimiert; mit gzip/brotli auf dem Server
  deutlich weniger.
- Nur **eine** Client-Komponente (Header) plus die Bewegungs-Laufzeit.
  Alles andere ist statisches HTML.
- Bilder als WebP in festen Breiten mit `srcset`/`sizes`, feste `width` und
  `height` gegen Layoutsprünge, `loading="lazy"` unterhalb des Falzes,
  `fetchpriority="high"` für das Hero-Bild.
- Schriften lokal, `display: swap`, nur die tatsächlich benutzten Achsen.
  (Die Breitenachse von Archivo wurde entfernt — sie halbierte die
  Dateigröße von 88 KB auf 34 KB ohne sichtbaren Unterschied.)
- Keine UI-Bibliothek, keine Animationsbibliothek, kein Icon-Paket. Die vier
  benötigten Symbole sind Inline-SVG.

## 9. SEO-Basis

- Sprechende URLs, ein `<h1>` je Seite, saubere Hierarchie.
- Eigene `title` und `description` je Seite, `title.template` im Layout.
- OpenGraph mit Bild, Canonicals je Seite, `sitemap.xml`, `robots.txt`.
- Schema.org `MedicalBusiness` mit Anschrift, Öffnungszeiten, Telefon,
  Gründungsjahr und Liefergebieten — bewusst nur mit belegbaren Angaben.
- Dichte interne Verlinkung zwischen Leistungen, Services, Team und Kontakt.

**Wichtig:** `robots.ts` sperrt den Prototyp derzeit vollständig, und das
Layout setzt `index: false`. Beides ist vor einem Livegang zu entfernen.
