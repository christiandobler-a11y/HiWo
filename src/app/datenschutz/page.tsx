import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der HiWo-med Medizintechnik GmbH für dieses Website-Konzept.",
  alternates: { canonical: "/datenschutz/" },
};

/**
 * Verantwortlicher, Datenschutzbeauftragter und Betroffenenrechte sind von
 * der bestehenden Website (hiwomed.de/de/datenschutz.html, Stand August
 * 2026) übernommen -- das sind Angaben zum Unternehmen, keine Aussagen über
 * die technische Umsetzung, und gelten deshalb unverändert.
 *
 * Bewusst NICHT übernommen: die dortigen Abschnitte zu Session-Cookies,
 * Adobe-/Google-Web-Fonts und Google Maps. Dieser Prototyp nutzt keine
 * dieser Dienste (Schriften sind lokal eingebettet, siehe Hero.tsx u. a.;
 * keine Karte, kein Tracking) -- sie hier zu behaupten wäre falsch. Der
 * technische Abschnitt unten bleibt deshalb ehrlich bei dem, was diese
 * Seite tatsächlich tut, statt die alte Erklärung unverändert zu duplizieren.
 */
export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Datenschutz"
        lead="Wer für die Datenverarbeitung verantwortlich ist, welche Rechte Sie haben – und was dieser Entwurf technisch tatsächlich tut."
      />

      <section className="pb-[var(--section-y)]">
        <div className="container-prose">
          <div className="prose-hiwo max-w-[46rem] text-muted">
            <h2 className="t-h3">Verantwortlicher</h2>
            <p>
              Wir respektieren Ihre Privat- und Persönlichkeitssphäre und nehmen den Schutz
              personenbezogener Daten sehr ernst. Wir haben technische und organisatorische
              Maßnahmen getroffen, die sicherstellen, dass die Vorschriften über den Datenschutz
              von uns und von externen Dienstleistern beachtet werden.
            </p>
            <p>
              Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              <br />
              <strong>{company.legalName}</strong>
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              Telefon: {company.phone.display}
              <br />
              E-Mail: <a href={`mailto:${company.email.general}`}>{company.email.general}</a>
            </p>

            <h3 className="t-h3">Datenschutzbeauftragter</h3>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten,
              bei Auskünften, Berichtigung, Löschung von Daten sowie Widerruf erteilter
              Einwilligungen wenden Sie sich bitte an unseren externen Datenschutzbeauftragten:
              <br />
              <strong>{company.dataProtectionOfficer.company}</strong>
              <br />
              {company.dataProtectionOfficer.contact}
              <br />
              {company.dataProtectionOfficer.street}
              <br />
              {company.dataProtectionOfficer.zip} {company.dataProtectionOfficer.city}
              <br />
              E-Mail:{" "}
              <a href={`mailto:${company.dataProtectionOfficer.email}`}>
                {company.dataProtectionOfficer.email}
              </a>
            </p>

            <h3 className="t-h3">Server-Logfiles</h3>
            <p>
              In Verbindung mit Ihrem Zugriff werden auf unseren Servern bzw. denen unseres
              Hosting-Anbieters Daten für Sicherungszwecke gespeichert, die möglicherweise eine
              Identifizierung zulassen (IP-Adresse, Datum, Uhrzeit und aufgerufene Seiten). Die
              IP-Adresse wird nicht zur Identifizierung des Nutzers verwendet, es werden weder
              personenbezogene noch zu identifizierende Nutzerprofile erstellt. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO – unser berechtigtes Interesse an einem sicheren
              und störungsfreien Betrieb der Website. Diese Daten werden nach spätestens 30
              Tagen automatisch gelöscht, soweit sie nicht zur Aufklärung eines konkreten
              Sicherheitsvorfalls weiter benötigt werden. Eine Weitergabe an Dritte erfolgt
              nicht ohne Ihre ausdrückliche Einwilligung. Die statistische Auswertung
              anonymisierter Datensätze bleibt vorbehalten.
            </p>

            <h3 className="t-h3">Ihre Rechte als betroffene Person</h3>
            <p>
              Nach der DSGVO haben Sie – soweit die jeweiligen gesetzlichen Voraussetzungen
              vorliegen – das Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO),
              auf Berichtigung unrichtiger Daten (Art. 16 DSGVO), auf Löschung (Art. 17 DSGVO),
              auf Einschränkung der Verarbeitung (Art. 18 DSGVO), auf Datenübertragbarkeit
              (Art. 20 DSGVO) sowie auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).
              Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren
              (Art. 77 DSGVO) – für HiWo-med als bayerisches Unternehmen zuständig ist das
              Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522
              Ansbach.
            </p>

            <hr className="my-10 border-t border-line" />

            <h2 className="t-h3">Was dieser Entwurf technisch tut</h2>
            <p>
              Der Abschnitt oben betrifft das Unternehmen und gilt unabhängig von der jeweiligen
              Website-Technik. Technisch unterscheidet sich dieser Entwurf deutlich von der
              aktuellen Website – er kommt bewusst mit weniger externen Diensten aus:
            </p>
            <ul className="list-tick mt-5">
              <li>
                Es werden <strong>keine Cookies</strong> gesetzt und kein Local Storage
                verwendet.
              </li>
              <li>
                Es ist <strong>kein Analyse- oder Tracking-Werkzeug</strong> eingebunden.
              </li>
              <li>
                Schriften werden <strong>lokal ausgeliefert</strong>. Anders als auf der
                aktuellen Website gibt es keine Verbindung zu Adobe-, Google- oder einem anderen
                Font-Dienst.
              </li>
              <li>
                Es sind <strong>keine Karten, Videos oder Social-Media-Einbettungen</strong>
                &nbsp;enthalten – insbesondere kein Google Maps. Anfahrtsangaben stehen als
                reiner Text auf der Kontaktseite.
              </li>
              <li>
                Es gibt <strong>kein Kontaktformular</strong>. Kontaktaufnahme erfolgt über
                Telefon oder E-Mail direkt an {company.legalName}.
              </li>
              <li>
                Der Link zu <strong>FastOrder</strong> führt auf ein externes Portal mit eigener
                Datenschutzerklärung.
              </li>
            </ul>

            <h2 className="t-h3">Für die Umsetzung</h2>
            <p>
              Vor einem Livegang ist eine vollständige, juristisch geprüfte
              Datenschutzerklärung erforderlich. Sie sollte insbesondere Server-Logfiles des
              dann tatsächlich genutzten Hosting-Anbieters, die Kontaktaufnahme per E-Mail, das
              Bewerbungsverfahren sowie jeden zu diesem Zeitpunkt neu hinzugekommenen externen
              Dienst (z. B. Karte, Analyse-Tool, Consent-Management) abdecken. Sollten Funktionen
              der aktuellen Website wie das Online-Portal, Web Fonts oder Google Maps in der
              neuen Seite doch wieder eingebunden werden, ist der entsprechende Abschnitt der
              bisherigen Erklärung dafür zu übernehmen und zu prüfen.
            </p>
            <p>
              Siehe auch das <Link href="/impressum/">Impressum</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
