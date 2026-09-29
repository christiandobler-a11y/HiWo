import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der HiWo-med Medizintechnik GmbH: Verantwortlicher, Datenverarbeitung und Ihre Rechte nach der DSGVO.",
  alternates: { canonical: "/datenschutz/" },
};

/**
 * Vollständig von der bestehenden Website (hiwomed.de/de/datenschutz.html)
 * übernommen und für die Struktur dieser Seite in Abschnitte gegliedert --
 * keine inhaltliche Änderung an der eigentlichen Erklärung, nur Format.
 */
export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Datenschutz"
        lead="Welche personenbezogenen Daten wir beim Besuch dieser Website und bei der Kontaktaufnahme verarbeiten, zu welchen Zwecken – und welche Rechte Ihnen zustehen."
      />

      <section className="pb-[var(--section-y)]">
        <div className="container-prose">
          <div className="prose-hiwo max-w-[46rem] text-muted">
            <h3 className="t-h3">1. Verantwortlicher</h3>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
              <br />
              <strong>{company.legalName}</strong>
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              {company.address.country}
            </p>
            <p>
              Telefon: {company.phone.display}
              <br />
              E-Mail: <a href={`mailto:${company.email.general}`}>{company.email.general}</a>
            </p>

            <h3 className="t-h3">2. Datenschutzbeauftragter</h3>
            <p>
              Wir haben einen externen Datenschutzbeauftragten bestellt. Bei Fragen zur
              Verarbeitung Ihrer personenbezogenen Daten sowie zur Ausübung Ihrer
              Datenschutzrechte können Sie sich an diesen wenden:
              <br />
              <strong>{company.dataProtectionOfficer.company}</strong>
              <br />
              {company.dataProtectionOfficer.contact}
              <br />
              {company.dataProtectionOfficer.street}
              <br />
              {company.dataProtectionOfficer.zip} {company.dataProtectionOfficer.city}
              <br />
              {company.address.country}
            </p>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${company.dataProtectionOfficer.email}`}>
                {company.dataProtectionOfficer.email}
              </a>
            </p>

            <h3 className="t-h3">3. Besuch unserer Website und Server-Logfiles</h3>
            <p>
              <strong>Hosting durch Netlify</strong>
              <br />
              Unsere Website wird über den Hostinganbieter Netlify bereitgestellt.
              <br />
              Dienstleister: Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107,
              USA.
            </p>
            <p>
              Beim Aufruf unserer Website werden durch den Browser Ihres Endgeräts automatisch
              Informationen an die Server unseres Hostinganbieters übermittelt. Diese
              Informationen werden in sogenannten Server-Logfiles verarbeitet. Dabei können
              insbesondere folgende Daten erfasst werden:
            </p>
            <ul className="list-tick mt-5">
              <li>IP-Adresse des zugreifenden Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seite bzw. angeforderte Datei</li>
              <li>Referrer-URL, sofern diese übermittelt wird</li>
              <li>Verwendeter Browser und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>HTTP-Statuscode und übertragene Datenmenge</li>
            </ul>
            <p>
              <strong>Zweck der Verarbeitung</strong>
              <br />
              Die Verarbeitung dieser Daten erfolgt, um die Website technisch bereitzustellen,
              deren Stabilität und Sicherheit zu gewährleisten, Fehler zu erkennen und
              gegebenenfalls Sicherheitsvorfälle aufzuklären.
            </p>
            <p>
              <strong>Rechtsgrundlage</strong>
              <br />
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser
              berechtigtes Interesse liegt in der sicheren, zuverlässigen und störungsfreien
              Bereitstellung unseres Internetauftritts.
            </p>
            <p>
              <strong>Empfänger und Auftragsverarbeitung</strong>
              <br />
              Netlify verarbeitet die im Rahmen des Hostings anfallenden Daten, soweit dies für
              die Bereitstellung und den sicheren Betrieb unserer Website erforderlich ist.
              Soweit Netlify dabei personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt
              dies auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
              Weitere Informationen finden Sie in den{" "}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer noopener">
                Datenschutzhinweisen von Netlify
              </a>{" "}
              und im{" "}
              <a
                href="https://www.netlify.com/pdf/netlify-dpa.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Netlify Data Processing Agreement
              </a>
              .
            </p>
            <p>
              <strong>Datenübermittlung in Drittländer</strong>
              <br />
              Im Rahmen des Hostings kann eine Verarbeitung personenbezogener Daten auch
              außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums,
              insbesondere in den USA, erfolgen. Netlify sieht für entsprechende
              Datenübermittlungen in die USA nach seinem aktuellen Data Processing Agreement das
              EU-US Data Privacy Framework vor, soweit dessen Voraussetzungen erfüllt sind.
              Soweit dieses nicht anwendbar ist, sind die EU-Standardvertragsklauseln gemäß Art.
              46 DSGVO als geeignete Garantien vorgesehen.
            </p>
            <p>
              <strong>Speicherdauer</strong>
              <br />
              Die Server-Logfiles werden nur so lange gespeichert, wie dies für die genannten
              Zwecke erforderlich ist. Anschließend werden die Daten gelöscht oder anonymisiert,
              sofern sie nicht ausnahmsweise zur Aufklärung eines Sicherheitsvorfalls oder
              aufgrund gesetzlicher Verpflichtungen länger aufbewahrt werden müssen.
            </p>

            <h3 className="t-h3">4. Cookies und vergleichbare Technologien</h3>
            <p>
              Unsere Website ist so gestaltet, dass sie ohne den Einsatz von Cookies und ohne die
              Verwendung von Local Storage auskommt. Wir setzen auf unserer Website keine
              Analyse- oder Tracking-Werkzeuge ein. Eine Auswertung des individuellen
              Surfverhaltens findet nicht statt. Da keine Cookies oder vergleichbaren
              Technologien für Analyse- oder Marketingzwecke eingesetzt werden, erfolgt insoweit
              auch keine Speicherung entsprechender Informationen auf Ihrem Endgerät.
            </p>

            <h3 className="t-h3">5. Lokale Schrifteinbindung</h3>
            <p>
              Auf unserer Website werden Schriftarten lokal eingebunden und direkt über unseren
              Hostinganbieter ausgeliefert. Es erfolgt daher keine Verbindung zu externen
              Schriftanbietern wie Google Fonts oder Adobe Fonts, um die auf unserer Website
              verwendeten Schriftarten abzurufen.
            </p>

            <h3 className="t-h3">6. Externe Inhalte und Verlinkungen</h3>
            <p>
              Unsere Website enthält keine eingebetteten Karten, Videos oder
              Social-Media-Inhalte. Insbesondere wird kein Google Maps eingebunden. Die
              Anfahrtsbeschreibung zu unserem Standort stellen wir ausschließlich in Textform zur
              Verfügung.
            </p>
            <p>
              Auf unserer Website befinden sich gegebenenfalls Verlinkungen zu externen
              Internetseiten. Beim bloßen Aufruf unserer Website werden durch solche reinen
              Verlinkungen keine personenbezogenen Daten an die jeweiligen externen Anbieter
              übertragen. Erst wenn Sie einen solchen Link anklicken, wird eine Verbindung zur
              jeweiligen externen Website hergestellt. Für die dortige Verarbeitung
              personenbezogener Daten sind die jeweiligen Betreiber verantwortlich.
            </p>

            <h3 className="t-h3">7. Kontaktaufnahme per Telefon oder E-Mail</h3>
            <p>
              Sie können uns telefonisch oder per E-Mail kontaktieren. Ein Kontaktformular
              stellen wir auf unserer Website nicht zur Verfügung. Wenn Sie uns kontaktieren,
              verarbeiten wir die von Ihnen übermittelten personenbezogenen Daten, um Ihre
              Anfrage zu bearbeiten und gegebenenfalls Rückfragen zu klären. Dabei können
              insbesondere folgende Daten verarbeitet werden:
            </p>
            <ul className="list-tick mt-5">
              <li>Name und gegebenenfalls Titel</li>
              <li>Telefonnummer und E-Mail-Adresse</li>
              <li>Praxis- oder Unternehmenszugehörigkeit</li>
              <li>Inhalt Ihrer Anfrage</li>
              <li>Sonstige Informationen, die Sie uns freiwillig mitteilen</li>
            </ul>
            <p>
              <strong>Zweck und Rechtsgrundlage</strong>
              <br />
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und gegebenenfalls zur
              Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung eines Vertrags.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem
              Vertrag oder vorvertraglichen Maßnahmen zusammenhängt. Bei sonstigen Anfragen
              erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an einer
              sachgerechten Kommunikation und der Bearbeitung von Anfragen gemäß Art. 6 Abs. 1
              lit. f DSGVO.
            </p>
            <p>
              <strong>Speicherdauer</strong>
              <br />
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Bearbeitung
              Ihrer Anfrage erforderlich ist. Anschließend werden die Daten gelöscht, sofern
              keine gesetzlichen Aufbewahrungspflichten oder sonstigen rechtlichen Gründe einer
              längeren Speicherung entgegenstehen. Geschäftsbezogene Unterlagen können
              gesetzlichen handels- und steuerrechtlichen Aufbewahrungspflichten unterliegen.
            </p>
            <p>
              <strong>Hinweis zur E-Mail-Kommunikation</strong>
              <br />
              Bitte beachten Sie, dass die Kommunikation per gewöhnlicher E-Mail
              Sicherheitsrisiken aufweisen kann. Insbesondere bei der Übermittlung vertraulicher
              oder sensibler Informationen empfehlen wir Ihnen, einen geeigneten sicheren
              Übermittlungsweg zu verwenden.
            </p>

            <h3 className="t-h3">8. Bewerbungen</h3>
            <p>
              Wenn Sie sich bei uns per E-Mail bewerben, verarbeiten wir die von Ihnen
              übermittelten personenbezogenen Daten zum Zweck der Durchführung des
              Bewerbungsverfahrens und zur Entscheidung über die Begründung eines
              Beschäftigungsverhältnisses. Hierzu können insbesondere folgende Daten gehören:
            </p>
            <ul className="list-tick mt-5">
              <li>Name und Kontaktdaten</li>
              <li>Lebenslauf und beruflicher Werdegang</li>
              <li>Zeugnisse und Qualifikationsnachweise</li>
              <li>Anschreiben und sonstige Bewerbungsunterlagen</li>
              <li>
                Weitere Angaben, die Sie uns im Rahmen Ihrer Bewerbung freiwillig übermitteln
              </li>
            </ul>
            <p>
              <strong>Rechtsgrundlage</strong>
              <br />
              Die Verarbeitung erfolgt zur Entscheidung über die Begründung eines
              Beschäftigungsverhältnisses auf Grundlage von § 26 Abs. 1 BDSG sowie gegebenenfalls
              Art. 6 Abs. 1 lit. b DSGVO. Soweit besondere Kategorien personenbezogener Daten
              verarbeitet werden, erfolgt dies nur, sofern hierfür eine entsprechende
              gesetzliche Grundlage besteht.
            </p>
            <p>
              <strong>Speicherdauer</strong>
              <br />
              Wenn es nicht zu einer Einstellung kommt, werden Ihre Bewerbungsunterlagen
              grundsätzlich spätestens sechs Monate nach Abschluss des Bewerbungsverfahrens
              gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen oder eine
              längere Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen erforderlich ist. Eine darüber hinausgehende Speicherung,
              beispielsweise für eine spätere Berücksichtigung bei weiteren Stellenbesetzungen,
              erfolgt nur, wenn hierfür eine gesonderte Rechtsgrundlage besteht. Wird ein
              Beschäftigungsverhältnis begründet, werden die für die Durchführung des
              Beschäftigungsverhältnisses erforderlichen Daten in die Personalverwaltung
              übernommen.
            </p>

            <h3 className="t-h3">9. Externes Online-Bestellportal FastOrder</h3>
            <p>
              Für unsere gewerblichen Kunden stellen wir ein externes Online-Bestellportal unter
              folgender Adresse zur Verfügung:{" "}
              <a href={company.links.fastOrder} target="_blank" rel="noreferrer noopener">
                {company.links.fastOrder}
              </a>
              . Das Portal basiert auf der Software fastOrder medical der adsystemhaus GmbH.
              <br />
              Dienstleister: adsystemhaus GmbH, Rheinstr. 2b, 41836 Hückelhoven, Deutschland.
            </p>
            <p>
              Wenn Sie den Link zum Bestellportal aufrufen, wird eine Verbindung zu dessen
              Servern hergestellt. Dabei können insbesondere Ihre IP-Adresse, der Zeitpunkt des
              Zugriffs sowie technische Informationen über Ihren Browser und Ihr Betriebssystem
              verarbeitet werden. Bei der Anmeldung und Nutzung des Bestellportals können darüber
              hinaus personenbezogene Daten verarbeitet werden. Dazu gehören insbesondere
              Benutzerkennungen, Namen, Kontaktdaten, Praxis- bzw. Unternehmensdaten,
              Lieferadressen und Bestellinformationen.
            </p>
            <p>
              <strong>Zweck und Rechtsgrundlage</strong>
              <br />
              Die Verarbeitung erfolgt zur Bereitstellung und Verwaltung des Kundenkontos sowie
              zur Bearbeitung und Abwicklung von Bestellungen einschließlich der damit
              verbundenen Liefer- und Abrechnungsprozesse. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
              b DSGVO, soweit die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen oder
              zur Erfüllung eines Vertrags erforderlich ist. Soweit personenbezogene Daten zur
              technischen Bereitstellung und Sicherheit des Portals verarbeitet werden, erfolgt
              die Verarbeitung gegebenenfalls auf Grundlage unseres berechtigten Interesses gemäß
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              <strong>Empfänger und Auftragsverarbeitung</strong>
              <br />
              Für die technische Bereitstellung des Bestellportals setzen wir die adsystemhaus
              GmbH ein. Soweit diese personenbezogene Daten in unserem Auftrag verarbeitet,
              erfolgt dies auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28
              DSGVO.
            </p>
            <p>
              <strong>Speicherdauer</strong>
              <br />
              Personenbezogene Daten im Bestellportal werden nur so lange gespeichert, wie sie
              für die Bereitstellung des Kundenkontos und die Abwicklung der Geschäftsbeziehung
              erforderlich sind. Gesetzliche handels- und steuerrechtliche
              Aufbewahrungspflichten bleiben unberührt.
            </p>
            <p>
              <strong>Weitere Datenschutzhinweise</strong>
              <br />
              Ergänzende Informationen zum Datenschutz bei der adsystemhaus GmbH finden Sie in
              der{" "}
              <a
                href="https://www.adsystemhaus.de/datenschutzerklaerung/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Datenschutzerklärung der adsystemhaus GmbH
              </a>
              . Bitte beachten Sie, dass bei der Nutzung des externen Bestellportals zusätzliche
              Datenverarbeitungen stattfinden können, die über den Besuch unserer Website
              hinausgehen.
            </p>

            <h3 className="t-h3">10. Verarbeitung im Rahmen der Sprechstundenbedarfs- und Hilfsmittelversorgung</h3>
            <p>
              Führen wir für eine Praxis Sprechstundenbedarf oder sonstige Hilfsmittel ab, die
              über die gesetzlichen Krankenkassen abgerechnet werden, verarbeiten wir zusätzlich
              zu den oben genannten Kontaktdaten auch die für die Abrechnung erforderlichen
              Angaben. Dazu können insbesondere Verordnungen, Hilfsmittelpositionsnummern,
              Angaben zur Krankenkasse sowie – soweit für die konkrete Versorgung notwendig –
              Gesundheitsdaten im Sinne von Art. 9 DSGVO gehören.
            </p>
            <p>
              <strong>Zweck und Rechtsgrundlage</strong>
              <br />
              Die Verarbeitung erfolgt zur Erfüllung unserer vertraglichen Verpflichtungen
              gegenüber den gesetzlichen Krankenkassen (§ 127 SGB V), zur Abrechnung (§§ 300, 302
              SGB V), zur Qualitätssicherung (§ 299 SGB V) sowie zur Dokumentation und Mitteilung
              (§ 294 SGB V) im Rahmen der jeweiligen Versorgung. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b und lit. c DSGVO in Verbindung mit den genannten Vorschriften des SGB V.
            </p>
            <p>
              <strong>Empfänger</strong>
              <br />
              Im Rahmen dieser Abrechnung übermitteln wir die erforderlichen Daten an die
              zuständige Krankenkasse bzw. den Kostenträger sowie gegebenenfalls an ein von uns
              beauftragtes Abrechnungszentrum, mit dem ein Vertrag zur Auftragsverarbeitung gemäß
              Art. 28 DSGVO besteht. Bei Sonderanfertigungen geben wir an beteiligte Lieferanten
              ausschließlich die für die Fertigung erforderlichen technischen Daten weiter, soweit
              möglich ohne unmittelbaren Personenbezug.
            </p>
            <p>
              <strong>Speicherdauer</strong>
              <br />
              Abrechnungs- und Versorgungsunterlagen bewahren wir entsprechend den Vorgaben des
              Handelsgesetzbuchs und der Abgabenordnung höchstens sechs bzw. zehn Jahre auf. Eine
              automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO findet dabei nicht
              statt; jeder Versorgungsfall wird nach den Vorgaben des jeweiligen Kostenträgers
              individuell geprüft.
            </p>

            <h3 className="t-h3">11. Empfänger personenbezogener Daten</h3>
            <p>
              Wir übermitteln personenbezogene Daten grundsätzlich nur dann an Dritte, wenn dies
              für die jeweiligen Verarbeitungszwecke erforderlich ist, eine gesetzliche
              Verpflichtung besteht oder eine andere datenschutzrechtliche Rechtsgrundlage dies
              erlaubt. Zu den möglichen Empfängern zählen insbesondere:
            </p>
            <ul className="list-tick mt-5">
              <li>
                Technische Dienstleister, die wir für den Betrieb und die Bereitstellung unserer
                digitalen Dienste einsetzen
              </li>
              <li>
                Dienstleister, die uns bei der Abwicklung unserer Geschäftsprozesse unterstützen
              </li>
              <li>
                Behörden und sonstige öffentliche Stellen, soweit wir gesetzlich zur Übermittlung
                verpflichtet sind
              </li>
            </ul>
            <p>
              Eine Weitergabe zu Werbezwecken oder ein Verkauf personenbezogener Daten findet
              nicht statt.
            </p>

            <h3 className="t-h3">12. Ihre Rechte als betroffene Person</h3>
            <p>
              Sie haben nach Maßgabe der gesetzlichen Voraussetzungen folgende Rechte hinsichtlich
              Ihrer personenbezogenen Daten:
            </p>
            <p>
              <strong>Recht auf Auskunft (Art. 15 DSGVO)</strong>
              <br />
              Sie haben das Recht, Auskunft darüber zu erhalten, ob und welche personenbezogenen
              Daten wir über Sie verarbeiten. Außerdem können Sie weitere Informationen über die
              Verarbeitung Ihrer Daten verlangen.
            </p>
            <p>
              <strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong>
              <br />
              Sie haben das Recht, die Berichtigung unrichtiger personenbezogener Daten sowie die
              Vervollständigung unvollständiger Daten zu verlangen.
            </p>
            <p>
              <strong>Recht auf Löschung (Art. 17 DSGVO)</strong>
              <br />
              Sie können unter den gesetzlichen Voraussetzungen die Löschung Ihrer
              personenbezogenen Daten verlangen.
            </p>
            <p>
              <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong>
              <br />
              Unter bestimmten gesetzlichen Voraussetzungen können Sie die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten verlangen.
            </p>
            <p>
              <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong>
              <br />
              Sie haben das Recht, personenbezogene Daten, die Sie uns bereitgestellt haben und
              die wir auf Grundlage einer Einwilligung oder eines Vertrags automatisiert
              verarbeiten, in einem strukturierten, gängigen und maschinenlesbaren Format zu
              erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu verlangen,
              soweit dies technisch machbar ist.
            </p>
            <p>
              <strong>Recht auf Widerspruch (Art. 21 DSGVO)</strong>
              <br />
              Soweit wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen. Wir
              verarbeiten die betreffenden personenbezogenen Daten anschließend nicht mehr, es
              sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen.
            </p>
            <p>
              <strong>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</strong>
              <br />
              Sofern Sie uns eine Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten
              erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
              Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon
              unberührt.
            </p>
            <p>
              Zur Ausübung Ihrer Rechte können Sie sich an uns oder unmittelbar an unseren
              Datenschutzbeauftragten wenden.
            </p>

            <h3 className="t-h3">13. Beschwerderecht bei einer Aufsichtsbehörde</h3>
            <p>
              Unbeschadet anderer verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe haben
              Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten zu beschweren, wenn Sie der Ansicht sind, dass die
              Verarbeitung gegen datenschutzrechtliche Vorschriften verstößt.
            </p>
            <p>
              Für unser Unternehmen ist insbesondere folgende Aufsichtsbehörde zuständig:
              <br />
              <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong>
              <br />
              Promenade 18
              <br />
              91522 Ansbach
              <br />
              Deutschland
            </p>
            <p>
              Telefon: +49 981 180093-0
              <br />
              Website:{" "}
              <a href="https://www.lda.bayern.de/" target="_blank" rel="noreferrer noopener">
                www.lda.bayern.de
              </a>
            </p>

            <h3 className="t-h3">14. Bereitstellung personenbezogener Daten</h3>
            <p>
              Der Besuch unserer Website ist grundsätzlich ohne die aktive Angabe
              personenbezogener Daten möglich. Die bei einem Websiteaufruf technisch
              erforderlichen Daten werden automatisch durch den Browser übermittelt.
            </p>
            <p>
              Bei einer Kontaktaufnahme per Telefon oder E-Mail entscheiden Sie selbst, welche
              personenbezogenen Daten Sie uns mitteilen. Ohne die für die Bearbeitung
              notwendigen Angaben kann es gegebenenfalls nicht möglich sein, Ihre Anfrage zu
              beantworten.
            </p>
            <p>
              Bei einer Bestellung über unser externes Bestellportal sind bestimmte Angaben
              erforderlich, um ein Kundenkonto zu verwalten und Bestellungen abzuwickeln.
            </p>

            <h3 className="t-h3">15. Automatisierte Entscheidungsfindung</h3>
            <p>
              Eine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Art. 22
              DSGVO findet im Rahmen des Besuchs unserer Website nicht statt.
            </p>

            <h3 className="t-h3">16. Datensicherheit und Verschlüsselung</h3>
            <p>
              Wir setzen geeignete technische und organisatorische Maßnahmen ein, um
              personenbezogene Daten vor Verlust, unbefugtem Zugriff, unzulässiger Verarbeitung
              und sonstigen Beeinträchtigungen zu schützen. Unsere Website ist über eine
              verschlüsselte HTTPS-Verbindung erreichbar. Dadurch wird die Übertragung der Daten
              zwischen Ihrem Browser und der Website geschützt. Bitte beachten Sie, dass eine
              vollständige Sicherheit der Datenübertragung im Internet nicht in jedem Fall
              gewährleistet werden kann.
            </p>

            <h3 className="t-h3">17. Aktualität und Änderungen dieser Datenschutzerklärung</h3>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich unsere
              Website, die eingesetzten technischen Dienste oder die rechtlichen Anforderungen
              ändern. Es gilt jeweils die auf unserer Website veröffentlichte aktuelle Fassung.
            </p>
            <p>Stand September 2026</p>

            <hr className="my-10 border-t border-line" />

            <p>
              Siehe auch das <Link href="/impressum/">Impressum</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
