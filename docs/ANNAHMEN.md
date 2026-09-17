# Annahmen, Unsicherheiten und offene Punkte

Was im Prototyp belegt ist, was abgeleitet wurde und was vor einer
Veröffentlichung geklärt werden muss.

---

## 1. Belegte Fakten

Alle folgenden Angaben stammen wörtlich oder sinngleich aus öffentlich
zugänglichen Inhalten von `www.hiwomed.de` (Stand September 2026) bzw. aus
dem dort verlinkten Katalog. Sie stehen zentral in `src/data/` mit
Quellenangabe.

| Angabe | Quelle |
|---|---|
| HiWo-med Medizintechnik GmbH, Lagerhausstraße 4, 82449 Uffing am Staffelsee | Kontakt, Impressum |
| Geschäftsführer Simon Hirschvogel · AG München HRB 268150 · USt-IdNr. DE345016059 · LUCID DE5177025654191 | Impressum |
| Telefon, Fax, `info@`, `schulungen@`, `bewerbung@` | Kontakt, Seminare, Karriere |
| Gegründet 1989 | Logo („seit 1989“), Katalogtitel 2025/26 |
| Familiengeführt in zweiter Generation, Wolfgang Hirschvogel als Firmengründer | Startseite, Team |
| Mo – Fr 8:00 – 17:00 Uhr durchgehend persönlich erreichbar | Startseite |
| Über 1.500 m² Lagerfläche, mehr als 6.000 Artikel sofort verfügbar | Unser Anspruch |
| Eigener Lieferdienst: Großraum München am Folgetag; Traunstein, Rosenheim, Bad Tölz, Augsburg in 1 – 3 Arbeitstagen | Leistungen |
| Bestellung bis 13:00 Uhr → Versand am selben Tag per UPS | Leistungen |
| Lieferung an den gewünschten Lagerort, kostenfreie Rücknahme der Verpackungen | Leistungen |
| Ausschließlich CE-gekennzeichnete Produkte, Lieferanten mit Qualitätssicherung | Leistungen |
| ISO 9001 zertifiziert (TCert) | Footer-Siegel |
| Jährliche Kundenzufriedenheitsbefragung | Unsere Kunden |
| Kundengruppen: niedergelassene Praxen, ambulante OP-Zentren, Tageskliniken, MVZ, Seniorenheime | Unsere Kunden, Karriere |
| 31 Mitarbeitende mit Namen, Bereich und Eintrittsjahr | Team |
| Fünf Schulungs- und Prüfangebote samt Inhalten, Dauern, Rechtsgrundlagen und Referentinnen | Seminare & Services |
| Offene Stelle Sachbearbeiter Innendienst, vollständige Benefit-Liste | Karriere |
| Claim „Bleiben Sie Mediziner, wir kümmern uns um den Rest.“ | Fahrzeugbeschriftung, Katalogtitel |

**Abgeleitete, aber überprüfbare Zahlen.** Zwei Werte werden im Code aus den
Teamdaten berechnet statt behauptet — sie bleiben damit auch in Zukunft
korrekt:

- „31 Kolleginnen und Kollegen“ = Summe der auf der Teamseite gezeigten Personen.
- „5 davon seit mehr als 20 Jahren“ = aus den Eintrittsjahren berechnet.
- „8 in der Lieferlogistik“ = Größe des Bereichs „Lieferlogistik & Fuhrpark“.
- „37 Jahre“ = aktuelles Jahr minus 1989, zur Build-Zeit berechnet.

---

## 2. Zu klären vor einer Veröffentlichung

### 2.1 Widersprüchliches Unternehmensalter — **wichtig**

Die bestehende Website nennt drei verschiedene Angaben:

| Ort | Angabe |
|---|---|
| Startseite | „über 35-jährige Geschichte“ **und** „mehr als 40 Jahren Erfahrung“ |
| Karriere | „Seit über 37 Jahren“ |
| Logo / Katalog | „seit 1989“ |

Der Prototyp verwendet durchgehend **1989** und rechnet daraus. Das ist
konsistent mit der Karriereseite und mit Logo und Katalog. Die Angabe
„mehr als 40 Jahre Erfahrung“ meint vermutlich Branchenerfahrung der
handelnden Personen, nicht das Unternehmensalter — das ist zu bestätigen.
Falls das Gründungsdatum abweicht, genügt eine Änderung in
`src/data/company.ts`; alle Stellen ziehen nach.

### 2.2 Sortimentsbereiche — **abgeleitet, nicht belegt**

Die bestehende Website nennt **keine** Warengruppen, sie verweist nur auf
den Gesamtkatalog. Die sieben Bereiche in `src/data/site.ts` sind aus
belegbaren Hinweisen abgeleitet:

| Bereich | Herleitung |
|---|---|
| Verbandstoffe & Wundversorgung | Wundworkshop, Produkte auf dem Lagerfoto |
| Hygiene, Desinfektion & Flächenschutz | Hygieneseminar, Hygiene-Check, Desinfektionsplan |
| Instrumente & Aufbereitung | Trinkwasserprobe für die Instrumentenaufbereitung, Instrumentenfoto |
| Injektion & Infusion | „von der Akupunkturnadel bis zur Zylinderampulle“ |
| Einmalartikel & Praxisbedarf | „medizinische Verbrauchsartikel“ |
| Notfallausstattung | Flyer Notfallmanagement und Defibrillation |
| Praxiseinrichtung | „Praxiseinrichtung“ auf der Startseite |

→ **TODO:** Liste anhand des Katalogs 2025/26 und der tatsächlichen
Warengruppen ersetzen. Die Beschreibungstexte sind als Platzhalter zu lesen.

### 2.3 Katalog-Link

Die Sortimentsseite verlinkt eine Datei namens `HiWo-Katalog_2019-20.pdf`,
während das gezeigte Titelbild „Katalog 2025/26“ heißt. Der Prototyp
verlinkt den vorhandenen Pfad unverändert.
→ **TODO:** aktuelle Katalogdatei hinterlegen.

### 2.4 Zweiter Bestellzugang (Shopware)

Die bestehende Navigation führt unter „FastOrder“ zwei Zugänge: FastOrder
und eine Shopware-Registrierung (`hiwomed-shop.de/register`). Da die Website
laut Aufgabenstellung **kein** Onlineshop sein soll, ist im Prototyp nur
FastOrder eingebunden.
→ **Zu entscheiden:** Wird der Shopware-Zugang weiter betrieben? Wenn ja,
gehört er als eigener Punkt auf die Kontaktseite, nicht in die
Hauptnavigation.

### 2.5 Seminartermine

Die bestehende Seite sagt zum Hygieneseminar „neue Veranstaltungstermine in
Kürze“. Der Prototyp übernimmt diesen Hinweis wörtlich und erfindet keine
Termine. Die Datenstruktur in `src/data/services.ts` ist auf eine
Terminliste vorbereitet.

### 2.6 Standortgeschichte

Ob HiWo-med seit 1989 durchgehend in der Lagerhausstraße sitzt, ist nicht
belegt. Formulierungen, die das behaupten würden, wurden bewusst vermieden:
Der Prototyp sagt „gegründet 1989“ und „heute in Uffing am Staffelsee“,
nicht „seit 1989 in Uffing“.

Ebenso ungeprüft und deshalb nicht behauptet:

- Kundenzahl (die Website sagt nur „eine große Anzahl“)
- Zahl der Fahrzeuge (im Prototyp steht nur die Zahl der Personen in der
  Lieferlogistik, die aus der Teamseite zählbar ist)
- Anzahl der Praxen je Gebiet, Umsatz, Sendungsvolumen

### 2.7 Wachstumspläne

Die Zeitleiste auf `/unternehmen/` endet mit „Ausblick — Mehr Kapazität:
Größere und modernere Infrastruktur ist in Planung“. Das stammt aus der
Projektvorgabe, **nicht** von der bestehenden Website.
→ **Zu bestätigen:** Soll das öffentlich kommuniziert werden, und in welcher
Konkretheit? Falls nicht, ersatzlos streichen — der Abschnitt funktioniert
auch ohne.

### 2.8 Datenschutz und Impressum — **rechtlich**

- **Datenschutz:** Der Prototyp enthält **bewusst keine ausformulierte
  Datenschutzerklärung.** Eine solche ist ein Rechtstext und wird nicht
  gestaltet, sondern juristisch erstellt. Stattdessen listet
  `/datenschutz/` auf, was der Entwurf technisch tut (keine Cookies, kein
  Tracking, lokale Schriften, keine Einbettungen, kein Formular).
- **Impressum:** Die Pflichtangaben nach § 5 DDG sind übernommen. Die
  ausführlichen Haftungshinweise, die Regelungen zu externen Links und die
  AGB der bestehenden Seite sind **nicht** abgebildet und beim Relaunch
  unverändert und nach rechtlicher Prüfung zu übertragen.
- Die bestehende Seite nutzt bereits ein Consent-Tool (CCM19). Dessen
  Konfiguration ist zu übernehmen, sobald externe Dienste eingebunden werden.

### 2.9 Karte auf der Kontaktseite

Eine eingebettete Karte fehlt bewusst, weil sie ohne Einwilligung Daten an
Dritte überträgt. Stattdessen führt ein „Route planen“-Link zu einer
externen Kartensuche. Beim Relaunch: Karte erst nach Consent nachladen.

---

## 3. Bildmaterial — Prototyp-Status

| Motiv | Auflösung | Bewertung |
|---|---|---|
| Sprinter mit Fahrer (Hero) | 960 × 385 | inhaltlich stark, Auflösung knapp |
| Sprinter am Staffelsee | 960 × 385 | gut, nur bis Containerbreite verwendbar |
| Lagerregale | 960 × 385 | inhaltlich sehr gut, leicht unscharf |
| Geschäftsführung vor Bande | 960 × 385 | inhaltlich stark |
| Innendienst-Büro | 960 × 384 | brauchbar, nur im Ausschnitt 1,9 : 1 |
| Standortschild | 2440 × 960 | einziges hochauflösendes Motiv |
| Schulungssituation | 960 × 385 | wirkt eher wie Werbedruck als Reportage |
| Instrument, Stift | 960 × 385 | brauchbare Detailaufnahmen |
| 29 Mitarbeiterporträts | 661 × 784 | einheitlich, professionell, gut brauchbar |
| Porträts Sarah Stahr, James Fuchs | 150 × 185 | **zu klein**, im Code als `lowRes` markiert |

Das Porträt von Sarah Stahr stammt zudem aus einer anderen Aufnahme
(grauer statt weißer Hintergrund) und fällt in der Rasteransicht auf.

→ **Für den Relaunch:** neue Aufnahmen in dokumentarischer Richtung
(Wareneingang, Kommissionierung, Beladung, Tour, Übergabe in der Praxis,
Schulung) plus zwei bis drei gesetzte Corporate-Motive und Nachschüsse der
fehlenden Porträts. Kein Stockmaterial.

---

## 4. Bewusst nicht umgesetzt

Der Prototyp zeigt eine Gestaltungs- und Strukturrichtung. Nicht enthalten
und für eine echte Umsetzung zu ergänzen:

- Redaktionelles System (CMS) zur Pflege von Team, Stellen und Terminen
- Kontakt- und Bewerbungsformular inklusive Serverteil und DSGVO-Prozess
- Terminliste und Anmeldestrecke für Seminare
- Consent-Management und eingebettete Karte
- Echte Kundenstimmen und Referenzen
- Vollständige Sortiments- oder Katalogsuche
- Barrierefreiheitserklärung (BFSG), falls einschlägig
- Mehrsprachigkeit (die alte Seite hat einen `/de/`-Pfad ohne zweite Sprache)
