# URL-Zuordnung für einen Relaunch

Alle auf `www.hiwomed.de` erreichbaren Seiten und ihr Ziel in der neuen
Struktur. Bei einer echten Umstellung sind das die Weiterleitungen, die
eingerichtet werden müssen, damit Links aus Suchmaschinen, E-Mails,
Katalogen und Drucksachen weiter funktionieren.

Alle Weiterleitungen als **301 (dauerhaft)**, sofern nicht anders vermerkt.

## Inhaltsseiten

| Alte URL | Neue URL | Anmerkung |
|---|---|---|
| `/de/` | `/` | Einstieg |
| `/de/home.html` | `/` | Die alte Startseite lief unter „Über uns“ |
| `/de/unser-anspruch.html` | `/unternehmen/#anspruch` | geht im Abschnitt „Wie wir arbeiten“ auf |
| `/de/team.html` | `/team/` | eigener Hauptnavigationspunkt |
| `/de/unsere-kunden.html` | `/leistungen/#betreuung` | Kundengruppen stehen jetzt bei den Leistungen |
| `/de/leistungen.html` | `/leistungen/` | |
| `/de/sortiment.html` | `/leistungen/#sortiment` | Katalog-Download bleibt dort erreichbar |
| `/de/seminare-services.html` | `/services/` | eigener Hauptnavigationspunkt |
| `/de/karriere.html` | `/karriere/` | |
| `/de/karriere/do/index/page/1.html` | `/karriere/` | Paginierung entfällt |
| `/de/kontakt.html` | `/kontakt/` | |
| `/de/sitemap.html` | `/` | HTML-Sitemap entfällt; `sitemap.xml` ersetzt sie |
| `/de/impressum-agb.html` | `/impressum/` | **AGB-Teil muss mit übertragen werden** |
| `/de/datenschutz.html` | `/datenschutz/` | Inhalt wird juristisch neu erstellt |

## Sprungziele innerhalb der neuen Seiten

Tiefe Links, die sich für Drucksachen und E-Mail-Signaturen anbieten:

| Ziel | URL |
|---|---|
| Sortiment | `/leistungen/#sortiment` |
| Ablauf einer Bestellung | `/leistungen/#ablauf` |
| Lager und Lieferdienst | `/leistungen/#logistik` |
| Hygieneseminar | `/services/#hygiene-seminar` |
| Hygiene-Check | `/services/#hygiene-check` |
| Trinkwasserprobenentnahme | `/services/#trinkwasserprobe` |
| Basis-Notfalltraining | `/services/#notfalltraining` |
| Wundworkshop | `/services/#wundworkshop` |
| Außendienst | `/team/#aussendienst` |
| Geschäftsführung | `/team/#geschaeftsfuehrung` |
| Anfahrt | `/kontakt/#anfahrt` |

## Externe Ziele — nicht weiterleiten

| URL | Status |
|---|---|
| `https://hiwomed.fast-order.cloud/login` | bleibt unverändert, im Header, Footer und auf `/kontakt/` verlinkt |
| `https://hiwomed-shop.de/register` | im Prototyp **nicht** verlinkt, siehe `ANNAHMEN.md` Abschnitt 2.4 |

## Dateien

| Alte URL | Hinweis |
|---|---|
| `/media/files/downloads/HiWo-Katalog_2019-20.pdf` | im Prototyp unverändert verlinkt; aktuelle Katalogdatei nachziehen |
| `/media/images/bilder/Notfallmanagement.jpg` | Flyer, im Prototyp nicht eingebunden |
| `/media/images/bilder/Defibrillation.jpg` | Flyer, im Prototyp nicht eingebunden |
| `/media/images/team/*.jpg` | Porträts; die neue Seite liefert eigene WebP-Fassungen aus |

## Checkliste für die Umstellung

1. Weiterleitungen aus der Tabelle oben einrichten und einzeln prüfen.
2. `robots.ts` und `robots: { index: false }` in `src/app/layout.tsx`
   entfernen — der Prototyp sperrt sich derzeit bewusst für Suchmaschinen.
3. `SITE_URL` in `src/data/site.ts` auf die Livedomain setzen.
4. `sitemap.xml` in der Google Search Console einreichen.
5. Alte URLs mit eingehenden Links (Search Console, Serverlogs) gegen die
   Tabelle abgleichen — insbesondere alles, was in gedruckten Katalogen und
   Terminzetteln steht.
6. Prüfen, ob die alte `/de/`-Pfadstruktur außerhalb der Website zitiert
   wird (Lieferantenverzeichnisse, Branchenportale, Kammern).
