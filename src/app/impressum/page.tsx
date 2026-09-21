import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der HiWo-med Medizintechnik GmbH.",
  alternates: { canonical: "/impressum/" },
};

/**
 * Pflichtangaben nach § 5 DDG sowie Haftungshinweise und Allgemeine
 * Geschäftsbedingungen, wörtlich von der bestehenden Website
 * (hiwomed.de/de/impressum-agb.html, Stand August 2026) übernommen.
 */
export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Impressum"
        lead="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
      />

      <section className="pb-[var(--section-y)]">
        <div className="container-prose">
          <div className="prose-hiwo max-w-[46rem] text-muted">
            <h2 className="t-h3">Anbieter</h2>
            <p>
              <strong>{company.legalName}</strong>
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              {company.address.country}
            </p>

            <h3 className="t-h3">Vertreten durch</h3>
            <p>Geschäftsführer {company.managingDirector}</p>

            <h3 className="t-h3">Kontakt</h3>
            <p>
              Telefon: {company.phone.display}
              <br />
              Telefax: {company.fax}
              <br />
              E-Mail: <a href={`mailto:${company.email.general}`}>{company.email.general}</a>
            </p>

            <h3 className="t-h3">Registereintrag</h3>
            <p>
              Registergericht: {company.register.court}
              <br />
              Handelsregisternummer: {company.register.number}
            </p>

            <h3 className="t-h3">Umsatzsteuer-Identifikationsnummer</h3>
            <p>Gemäß § 27a UStG: {company.register.vatId}</p>

            <h3 className="t-h3">Verpackungsgesetz (VerpackG) / EU-Verpackungsverordnung (PPWR)</h3>
            <p>
              Die Firma HiWo-med Medizintechnik kommt ihren gesetzlichen Verpflichtungen nach
              dem deutschen Verpackungsgesetz (VerpackG) sowie der seit 12. August 2026
              unmittelbar geltenden EU-Verpackungsverordnung (Verordnung (EU) 2025/40, PPWR)
              und den erweiterten Herstellerpflichten (EPR) vollumfänglich nach. Wir sind bei
              der Stiftung Zentrale Stelle Verpackungsregister (ZSVR) im öffentlichen Register
              LUCID als registrierter Hersteller bzw. Erstinverkehrbringer von verpackten Waren
              gemeldet. Unsere systembeteiligungspflichtigen Verpackungen einschließlich
              Versand- und Transportverpackungen sind an ein genehmigtes duales System
              angeschlossen.
            </p>
            <p>Registrierungsnummer (LUCID): {company.register.lucid}</p>

            <div className="mt-8 flex items-center gap-5">
              <img
                src="/img/iso-9001-320.webp"
                width={320}
                height={240}
                alt="Zertifikat ISO 9001, ausgestellt durch TCert"
                loading="lazy"
                decoding="async"
                className="h-16 w-auto"
              />
            </div>

            <hr className="my-10 border-t border-line" />

            <h2 className="t-h3">Hinweise zu Haftung und externen Links</h2>

            <h3 className="t-h3">1. Haftung für eigene Inhalte</h3>
            <p>
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. HiWo-med
              Medizintechnik GmbH übernimmt jedoch keine Gewähr für die Aktualität, Richtigkeit,
              Vollständigkeit und dauerhafte Verfügbarkeit der bereitgestellten Informationen.
              Die Informationen auf dieser Website dienen ausschließlich allgemeinen
              Informationszwecken und stellen, soweit nicht ausdrücklich anders angegeben, keine
              individuelle medizinische, rechtliche oder sonstige fachliche Beratung dar. Eine
              Haftung von HiWo-med Medizintechnik GmbH für Schäden, die aus der Nutzung der auf
              dieser Website bereitgestellten Informationen entstehen, ist ausgeschlossen, soweit
              gesetzlich zulässig. Dies gilt nicht für Schäden aus der Verletzung des Lebens, des
              Körpers oder der Gesundheit, für Schäden aufgrund vorsätzlichen oder grob
              fahrlässigen Verhaltens sowie für sonstige Fälle zwingender gesetzlicher Haftung.
              HiWo-med Medizintechnik GmbH behält sich vor, Inhalte dieser Website jederzeit ohne
              vorherige Ankündigung zu ändern, zu ergänzen, zu entfernen oder die Website
              vorübergehend oder dauerhaft einzustellen.
            </p>

            <h3 className="t-h3">2. Haftung für externe Links</h3>
            <p>
              Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte
              hat HiWo-med Medizintechnik GmbH keinen Einfluss. Für die Inhalte externer Websites
              ist grundsätzlich der jeweilige Betreiber verantwortlich. Zum Zeitpunkt der
              Verlinkung wurden die verlinkten Inhalte auf offensichtliche Rechtsverstöße
              überprüft, soweit dies im Rahmen des Zumutbaren möglich war. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte für eine
              Rechtsverletzung nicht zumutbar. Sollte HiWo-med Medizintechnik GmbH Kenntnis von
              einer konkreten Rechtsverletzung auf einer verlinkten Website erlangen, wird der
              betreffende Link im Rahmen des Zumutbaren überprüft und erforderlichenfalls
              entfernt.
            </p>

            <h3 className="t-h3">3. Urheberrecht</h3>
            <p>
              Die auf dieser Website veröffentlichten Inhalte, insbesondere Texte, Bilder,
              Grafiken, Logos, Videos und sonstige Werke, sind urheberrechtlich oder durch andere
              Schutzrechte geschützt. Die Rechte an den von HiWo-med Medizintechnik GmbH selbst
              erstellten Inhalten liegen bei HiWo-med Medizintechnik GmbH, soweit nicht anders
              angegeben. Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung
              außerhalb der gesetzlichen Schranken des Urheberrechts bedarf der vorherigen
              Zustimmung des jeweiligen Rechteinhabers. Die auf dieser Website genannten
              Produktnamen, Marken und Warenzeichen können geschützte Kennzeichen ihrer
              jeweiligen Rechteinhaber sein. Ihre Verwendung erfolgt ausschließlich zur
              Beschreibung der jeweiligen Produkte oder Leistungen.
            </p>

            <hr className="my-10 border-t border-line" />

            <h2 className="t-h3">Allgemeine Geschäftsbedingungen</h2>

            <h3 className="t-h3">1. Geltungsbereich</h3>
            <p>
              <strong>1.1 Ausschließliche Geltung</strong>
              <br />
              Für alle Lieferungen, Leistungen, Angebote und sonstigen Verträge der HiWo-med
              Medizintechnik GmbH (nachfolgend „HiWo-med“) gelten ausschließlich diese
              Allgemeinen Geschäftsbedingungen. Entgegenstehende, abweichende oder ergänzende
              Allgemeine Geschäftsbedingungen des Käufers werden nicht Vertragsbestandteil, es
              sei denn, HiWo-med stimmt ihrer Geltung ausdrücklich in Textform zu. Dies gilt auch
              dann, wenn HiWo-med in Kenntnis entgegenstehender oder abweichender Bedingungen des
              Käufers die Lieferung an den Käufer vorbehaltlos ausführt. Im Einzelfall getroffene
              und in Textform bestätigte Vereinbarungen haben Vorrang vor diesen AGB.
            </p>
            <p>
              <strong>1.2 Unternehmergeschäft</strong>
              <br />
              Das Angebot von HiWo-med richtet sich ausschließlich an Unternehmer im Sinne des
              § 14 BGB, insbesondere an Arztpraxen, medizinische Einrichtungen, Krankenhäuser,
              Händler, gewerbliche Unternehmen und sonstige gewerbliche Kunden. Verträge mit
              Verbrauchern im Sinne des § 13 BGB werden nicht geschlossen.
            </p>
            <p>
              <strong>1.3 Textform</strong>
              <br />
              Soweit in diesen AGB die Textform verlangt wird, genügt insbesondere die
              Übermittlung per E-Mail, sofern aus der Erklärung die Person des Erklärenden
              hervorgeht.
            </p>

            <h3 className="t-h3">2. Vertragsschluss</h3>
            <p>
              <strong>2.1 Angebote</strong>
              <br />
              Angebote von HiWo-med sind, sofern nicht ausdrücklich als verbindlich bezeichnet,
              freibleibend und unverbindlich. Dies gilt insbesondere hinsichtlich Preis, Menge,
              Lieferfrist und Liefermöglichkeit.
            </p>
            <p>
              <strong>2.2 Bestellung des Käufers</strong>
              <br />
              Bestellungen des Käufers per Telefon, Telefax, E-Mail, über den Onlineshop oder
              über sonstige Bestellsysteme stellen ein verbindliches Angebot zum Abschluss eines
              Kaufvertrages dar.
            </p>
            <p>
              <strong>2.3 Zustandekommen des Vertrages</strong>
              <br />
              Der Vertrag kommt durch Auftragsbestätigung von HiWo-med in Textform oder durch
              Auslieferung der bestellten Ware zustande. Bei Bestellungen über den Onlineshop
              kommt der Vertrag zustande, sobald HiWo-med die Bestellung durch
              Auftragsbestätigung in Textform bestätigt oder die bestellte Ware ausliefert. Die
              automatisch erzeugte Eingangsbestätigung einer Bestellung stellt noch keine Annahme
              des Vertragsangebots dar, sofern darin nicht ausdrücklich die Annahme der
              Bestellung erklärt wird.
            </p>
            <p>
              <strong>2.4 Verfügbarkeit</strong>
              <br />
              Der Vertragsschluss erfolgt unter dem Vorbehalt der richtigen und rechtzeitigen
              Selbstbelieferung durch die Lieferanten von HiWo-med, sofern HiWo-med ein
              kongruentes Deckungsgeschäft abgeschlossen hat und die Nichtbelieferung nicht von
              HiWo-med zu vertreten ist. HiWo-med informiert den Käufer über eine
              Nichtverfügbarkeit unverzüglich. Bereits erbrachte Gegenleistungen werden in diesem
              Fall unverzüglich erstattet.
            </p>

            <h3 className="t-h3">3. Lieferung und Lieferfristen</h3>
            <p>
              <strong>3.1 Lieferfristen</strong>
              <br />
              Lieferfristen beginnen, soweit nicht anders vereinbart, mit Zustandekommen des
              Vertrages. Liefertermine und Lieferfristen sind, sofern nicht ausdrücklich anders
              vereinbart, unverbindlich.
            </p>
            <p>
              <strong>3.2 Teillieferungen</strong>
              <br />
              HiWo-med ist zu Teillieferungen berechtigt, soweit dies für den Käufer zumutbar
              ist. Teillieferungen werden jeweils gesondert berechnet, soweit dies nicht
              ausdrücklich anders vereinbart wurde. Zusätzliche Versandkosten entstehen dem
              Käufer durch von HiWo-med veranlasste Teillieferungen nicht. Eine teilweise
              Lieferung ist insbesondere dann zulässig, wenn einzelne Artikel einer Bestellung
              aufgrund unterschiedlicher Lieferzeiten nicht gleichzeitig verfügbar sind.
            </p>
            <p>
              <strong>3.3 Mehr- und Minderlieferungen</strong>
              <br />
              Bei Waren, die nach Stückzahl, Gewicht, Volumen oder sonstigen handelsüblichen
              Einheiten geliefert werden, sind produktions-, verpackungs- oder versandbedingte
              Mehr- oder Minderlieferungen in zumutbarem Umfang zulässig, soweit die Abweichung
              für den Käufer zumutbar ist. Abgerechnet wird grundsätzlich die tatsächlich
              gelieferte Menge.
            </p>
            <p>
              <strong>3.4 Lieferverzug</strong>
              <br />
              Bei Überschreitung einer ausdrücklich vereinbarten verbindlichen Lieferfrist hat
              der Käufer HiWo-med zunächst eine angemessene Nachfrist zur Leistung zu setzen,
              soweit dies gesetzlich erforderlich ist. Nach erfolglosem Ablauf der Nachfrist ist
              der Käufer berechtigt, hinsichtlich der noch nicht gelieferten Ware vom Vertrag
              zurückzutreten. Das Recht zum Rücktritt vom gesamten Vertrag besteht nur, wenn die
              teilweise Lieferung für den Käufer objektiv ohne Interesse ist oder ihm die
              teilweise Vertragserfüllung unter Berücksichtigung der Umstände des Einzelfalls
              nicht zugemutet werden kann. Gesetzliche Rechte des Käufers bleiben im Übrigen
              unberührt.
            </p>
            <p>
              <strong>3.5 Höhere Gewalt und sonstige unvorhersehbare Ereignisse</strong>
              <br />
              Ereignisse außerhalb des Einflussbereichs von HiWo-med, die HiWo-med die Lieferung
              wesentlich erschweren oder vorübergehend unmöglich machen, insbesondere
              Naturereignisse, Betriebsstörungen, Energie- oder Rohstoffmangel,
              Verkehrsstörungen, behördliche Maßnahmen, Pandemien, Arbeitskämpfe, Krieg,
              kriegsähnliche Ereignisse oder sonstige Fälle höherer Gewalt, befreien HiWo-med für
              die Dauer und im Umfang ihrer Auswirkungen von den Leistungspflichten. HiWo-med
              wird den Käufer über Beginn und voraussichtliche Dauer einer solchen Behinderung
              unverzüglich informieren. Dauert die Behinderung länger als sechs Wochen an oder
              ist die Leistung aufgrund des Ereignisses dauerhaft oder auf nicht absehbare Zeit
              unmöglich oder unzumutbar, sind beide Parteien berechtigt, hinsichtlich des von der
              Behinderung betroffenen Vertragsteils vom Vertrag zurückzutreten. Weitergehende
              Ansprüche richten sich nach Ziffer 5 dieser AGB.
            </p>

            <h3 className="t-h3">4. Preise und Versandkosten</h3>
            <p>
              <strong>4.1 Preise</strong>
              <br />
              Soweit nicht anders vereinbart, gelten die zum Zeitpunkt des Vertragsschlusses
              vereinbarten Preise ab Versandstätte, zuzüglich der gesetzlichen Umsatzsteuer und,
              soweit vereinbart oder nach diesen AGB geschuldet, zuzüglich Verpackungs- und
              Versandkosten.
            </p>
            <p>
              <strong>4.2 Versandkostenpauschale</strong>
              <br />
              Bei Bestellungen mit einem Nettowarenwert von weniger als 100,00 € wird eine
              Versandkostenpauschale in Höhe von 8,50 € netto berechnet, sofern keine abweichende
              Vereinbarung getroffen wurde. Die Versandkostenpauschale wird auf der Rechnung
              gesondert ausgewiesen.
            </p>
            <p>
              <strong>4.3 Sonderversand</strong>
              <br />
              Mehrkosten, die aufgrund besonderer Versandvorschriften, besonderer
              Lieferanforderungen oder eines vom Käufer gewünschten Express- oder Sonderversands
              entstehen, trägt der Käufer, sofern die entsprechenden Kosten vor Ausführung der
              Leistung mitgeteilt wurden oder für den Käufer erkennbar waren.
            </p>
            <p>
              <strong>4.4 Langfristige Liefer- und Abrufverträge</strong>
              <br />
              Bei Verträgen über wiederkehrende oder sukzessive Lieferungen sowie bei individuell
              vereinbarten Lieferfristen von mehr als vier Monaten können Preisänderungen
              gesondert vereinbart werden. Eine Anpassung an nach Vertragsschluss eingetretene
              tatsächliche Kostensteigerungen (z. B. Material-, Rohstoff- oder
              Transportkostenerhöhungen) bleibt nach einer Ankündigungsfrist von vier Wochen in
              Textform vorbehalten.
            </p>

            <h3 className="t-h3">5. Haftung</h3>
            <p>
              <strong>5.1 Unbeschränkte Haftung</strong>
              <br />
              HiWo-med haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers
              oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit
              von HiWo-med, ihren gesetzlichen Vertretern oder Erfüllungsgehilfen beruhen. Ebenso
              bleibt die Haftung nach dem Produkthaftungsgesetz unberührt.
            </p>
            <p>
              <strong>5.2 Leichte Fahrlässigkeit</strong>
              <br />
              Bei leichter Fahrlässigkeit haftet HiWo-med nur bei Verletzung einer wesentlichen
              Vertragspflicht. Wesentliche Vertragspflichten sind solche Pflichten, deren
              Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht
              und auf deren Einhaltung der Käufer regelmäßig vertrauen darf. In diesem Fall ist
              die Haftung von HiWo-med auf den bei Vertragsschluss vorhersehbaren und
              vertragstypischen Schaden begrenzt.
            </p>
            <p>
              <strong>5.3 Weitere Haftungsausschlüsse</strong>
              <br />
              Soweit gesetzlich zulässig, haftet HiWo-med bei leichter Fahrlässigkeit nicht für
              mittelbare Schäden, Folgeschäden oder entgangenen Gewinn, soweit diese nicht nach
              den vorstehenden Bestimmungen von einer Haftungsbegrenzung ausgenommen sind.
            </p>
            <p>
              <strong>5.4 Zwingende Haftung</strong>
              <br />
              Die vorstehenden Haftungsbeschränkungen gelten nicht, soweit HiWo-med eine
              Garantie für die Beschaffenheit einer Sache übernommen hat, einen Mangel arglistig
              verschwiegen hat oder eine zwingende gesetzliche Haftung entgegensteht.
            </p>

            <h3 className="t-h3">6. Zahlungsbedingungen und Zahlungsverzug</h3>
            <p>
              <strong>6.1 Fälligkeit</strong>
              <br />
              Soweit nicht schriftlich ein anderes Zahlungsziel vereinbart wurde, sind Rechnungen
              innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar. Eine Zahlung gilt
              erst dann als erfolgt, wenn HiWo-med über den Betrag endgültig verfügen kann.
            </p>
            <p>
              <strong>6.2 Lastschrifteinzug</strong>
              <br />
              Bei vereinbartem Lastschrifteinzug wird der Käufer über den bevorstehenden Einzug
              grundsätzlich mit der Rechnung oder in sonstiger geeigneter Weise vorab informiert.
              Schlägt der Lastschrifteinzug aus einem vom Käufer zu vertretenden Grund fehl,
              trägt der Käufer die tatsächlich entstandenen und nachweisbaren Kosten des
              Zahlungsvorgangs.
            </p>
            <p>
              <strong>6.3 Fälligkeit an Wochenenden und Feiertagen</strong>
              <br />
              Fällt der Fälligkeitstag auf einen Samstag, Sonntag oder gesetzlichen Feiertag am
              Sitz von HiWo-med, tritt die Fälligkeit am nächsten Werktag ein.
            </p>
            <p>
              <strong>6.4 Zahlungsverzug</strong>
              <br />
              Im Falle des Zahlungsverzugs gelten die gesetzlichen Bestimmungen. HiWo-med ist
              insbesondere berechtigt, Verzugszinsen in der gesetzlich vorgesehenen Höhe sowie
              die gesetzliche Verzugspauschale gemäß § 288 Abs. 5 BGB zu verlangen. Die
              Geltendmachung eines weitergehenden nachgewiesenen Schadens bleibt vorbehalten.
            </p>
            <p>
              <strong>6.5 Aufrechnung und Zurückbehaltungsrecht</strong>
              <br />
              Der Käufer ist zur Aufrechnung nur berechtigt, wenn seine Gegenforderung
              unbestritten, rechtskräftig festgestellt oder entscheidungsreif ist. Der Käufer
              darf ein Zurückbehaltungsrecht nur ausüben, soweit es auf demselben
              Vertragsverhältnis beruht oder die Gegenforderung unbestritten oder rechtskräftig
              festgestellt ist. Gesetzlich zwingende Rechte des Käufers bleiben unberührt.
            </p>
            <p>
              <strong>6.6 Verschlechterung der Vermögensverhältnisse</strong>
              <br />
              Werden HiWo-med nach Vertragsschluss Umstände bekannt, die die Kreditwürdigkeit
              oder Zahlungsfähigkeit des Käufers wesentlich in Frage stellen und dadurch der
              Anspruch von HiWo-med auf Gegenleistung gefährdet ist, ist HiWo-med berechtigt,
              noch ausstehende Lieferungen nur gegen Vorauszahlung oder gegen Stellung geeigneter
              Sicherheiten auszuführen. Kommt der Käufer der Aufforderung innerhalb einer
              angemessenen Frist nicht nach, ist HiWo-med berechtigt, vom betroffenen Vertrag
              zurückzutreten.
            </p>

            <h3 className="t-h3">7. Versand und Gefahrübergang</h3>
            <p>
              <strong>7.1 Versandart</strong>
              <br />
              Die Wahl des Versandweges und der Versandart erfolgt durch HiWo-med nach billigem
              Ermessen unter angemessener Berücksichtigung berechtigter Wünsche des Käufers.
            </p>
            <p>
              <strong>7.2 Versand durch Dritte</strong>
              <br />
              Wird die Ware auf Verlangen des Käufers oder nach Vereinbarung durch einen
              Frachtführer, Spediteur, Paketdienst oder eine sonstige zur Versendung bestimmte
              Person versendet, geht die Gefahr des zufälligen Untergangs und der zufälligen
              Verschlechterung mit der Übergabe der Ware an diese Person auf den Käufer über,
              soweit die gesetzlichen Voraussetzungen des § 447 BGB vorliegen. Dies gilt auch bei
              frachtfreier Lieferung.
            </p>
            <p>
              <strong>7.3 Lieferung durch HiWo-med</strong>
              <br />
              Bei Lieferung durch einen eigenen Mitarbeiter oder eigenen Lieferdienst von
              HiWo-med geht die Gefahr des zufälligen Untergangs und der zufälligen
              Verschlechterung erst mit der Übergabe der Ware an den Käufer oder dessen
              Empfangsberechtigten über. Dies gilt auch bei Lieferung an den vereinbarten
              Ablieferungsort.
            </p>
            <p>
              <strong>7.4 Annahmeverzug</strong>
              <br />
              Befindet sich der Käufer im Annahmeverzug, gelten die gesetzlichen Bestimmungen
              zum Gefahrübergang und zur Haftung des Käufers.
            </p>

            <h3 className="t-h3">8. Rücksendungen und Warenrücknahme</h3>
            <p>
              <strong>8.1 Keine allgemeine Rückgabe</strong>
              <br />
              Da HiWo-med ausschließlich Verträge mit Unternehmern schließt, besteht kein
              gesetzliches Widerrufs- oder allgemeines Rückgaberecht. Die Rücknahme mangelfreier
              Ware erfolgt ausschließlich aus Kulanz und nur nach vorheriger Zustimmung von
              HiWo-med in Textform.
            </p>
            <p>
              <strong>8.2 Rücknahme von Arzneimitteln</strong>
              <br />
              Arzneimittel im Sinne des Arzneimittelgesetzes (AMG) sowie temperaturgeführte oder
              kühlpflichtige Produkte werden aus Gründen der Arzneimittelsicherheit sowie zur
              Sicherstellung einer ordnungsgemäßen, gesetzlich vorgeschriebenen Lager- und
              Transportkette grundsätzlich nicht aus Kulanz zurückgenommen oder umgetauscht.
              Zwingende gesetzliche Rechte, insbesondere aufgrund von Mängeln, Falschlieferungen,
              Rückrufen oder sonstigen gesetzlich vorgeschriebenen Maßnahmen, bleiben unberührt.
            </p>
            <p>
              <strong>8.3 Rücksendekosten</strong>
              <br />
              Ohne vorherige Zustimmung von HiWo-med zurückgesandte Waren können auf Kosten und
              Gefahr des Käufers zurückgesandt werden. Genehmigte Rücksendungen erfolgen auf
              Gefahr des Käufers, sofern HiWo-med nicht ausdrücklich etwas anderes vereinbart.
            </p>
            <p>
              <strong>8.4 Voraussetzungen für Kulanzretouren</strong>
              <br />
              Eine kulanzweise Rücknahme setzt grundsätzlich voraus, dass die Ware
              originalverpackt und ungeöffnet, unbeschädigt, hygienisch einwandfrei, nicht
              abgelaufen, nicht überaltert und ohne Einschränkung wiederverkaufsfähig ist.
            </p>
            <p>
              <strong>8.5 Wert- und Bearbeitungsabzug</strong>
              <br />
              Bei genehmigten Kulanzretouren ist HiWo-med berechtigt, abhängig von Zustand,
              Wiederverkaufsfähigkeit und Bearbeitungsaufwand einen angemessenen Wert- und
              Bearbeitungsabzug vorzunehmen. Nicht mehr verkehrsfähige, angebrochene,
              beschädigte, abgelaufene oder überalterte Ware wird nicht vergütet.
            </p>

            <h3 className="t-h3">9. Gewährleistung und Mängelrechte</h3>
            <p>
              <strong>9.1 Gesetzliche Mängelrechte</strong>
              <br />
              Für die Rechte des Käufers bei Sach- und Rechtsmängeln gelten grundsätzlich die
              gesetzlichen Vorschriften, soweit nachfolgend nichts Abweichendes zulässig
              vereinbart ist.
            </p>
            <p>
              <strong>9.2 Untersuchungs- und Rügepflicht</strong>
              <br />
              Soweit der Kauf für beide Parteien ein Handelsgeschäft ist, gilt § 377 HGB. Der
              Käufer hat die Ware nach Ablieferung unverzüglich zu untersuchen, soweit dies nach
              ordnungsgemäßem Geschäftsgang tunlich ist. Erkennbare Mängel sind unverzüglich nach
              Entdeckung anzuzeigen. Mängel, die bei ordnungsgemäßer Untersuchung nicht erkennbar
              waren, sind unverzüglich nach ihrer Entdeckung anzuzeigen. Die Anzeige soll in
              Textform erfolgen und eine möglichst genaue Beschreibung des Mangels sowie, soweit
              vorhanden, die betroffene Artikel-, Chargen- oder Seriennummer enthalten.
            </p>
            <p>
              <strong>9.3 Mangelrüge bei medizinischen Produkten</strong>
              <br />
              Bei Medizinprodukten, Arzneimitteln und anderen Produkten, deren Rückverfolgbarkeit
              aufgrund von Charge, Seriennummer, Verfallsdatum oder vergleichbaren Merkmalen
              erforderlich oder sinnvoll ist, hat der Käufer diese Angaben bei einer
              Mängelanzeige mitzuteilen, soweit sie vorhanden und zugänglich sind.
            </p>
            <p>
              <strong>9.4 Verarbeitung und Verwendung</strong>
              <br />
              Die vom Käufer vorgenommene Verarbeitung oder Verwendung der Ware erfolgt
              grundsätzlich in dessen eigenem Verantwortungsbereich. Anwendungstechnische
              Hinweise, Verarbeitungsvorschläge oder sonstige beratende Angaben von HiWo-med
              ersetzen nicht die eigenverantwortliche Prüfung des Käufers auf Eignung,
              bestimmungsgemäße Verwendung und Kompatibilität.
            </p>
            <p>
              <strong>9.5 Nacherfüllung</strong>
              <br />
              Bei einem berechtigten und rechtzeitig angezeigten Sachmangel stehen dem Käufer die
              gesetzlichen Rechte auf Nacherfüllung zu. HiWo-med ist berechtigt, die vom Käufer
              gewählte Art der Nacherfüllung unter den gesetzlichen Voraussetzungen des § 439 BGB
              zu verweigern.
            </p>
            <p>
              <strong>9.6 Rücktritt und Minderung</strong>
              <br />
              Schlägt die Nacherfüllung nach den gesetzlichen Vorschriften fehl, ist der Käufer
              berechtigt, nach Maßgabe der gesetzlichen Bestimmungen vom Vertrag zurückzutreten
              oder den Kaufpreis zu mindern. Schadensersatz- und Aufwendungsersatzansprüche
              richten sich nach Ziffer 5 dieser AGB.
            </p>
            <p>
              <strong>9.7 Verjährung</strong>
              <br />
              Die Verjährungsfrist für Mängelansprüche beträgt, soweit gesetzlich zulässig,
              zwölf Monate ab Ablieferung der Ware. Die Verkürzung gilt nicht für Ansprüche wegen
              Verletzung des Lebens, des Körpers oder der Gesundheit, aufgrund von Vorsatz oder
              grober Fahrlässigkeit, wegen arglistigen Verschweigens eines Mangels, aus einer
              übernommenen Garantie, nach dem Produkthaftungsgesetz, in den Fällen, in denen das
              Gesetz zwingend eine längere Verjährungsfrist vorsieht, sowie in den gesetzlich
              besonders geregelten Fällen des Lieferantenregresses.
            </p>

            <h3 className="t-h3">10. Entsorgung von Elektro- und Elektronikgeräten</h3>
            <p>
              <strong>10.1 Gesetzliche Pflichten</strong>
              <br />
              Für Elektro- und Elektronikgeräte gelten die jeweils einschlägigen gesetzlichen
              Bestimmungen, insbesondere das Elektro- und Elektronikgerätegesetz (ElektroG).
              Gesetzliche Rücknahme-, Informations- und Entsorgungspflichten von HiWo-med oder
              des Käufers bleiben unberührt.
            </p>
            <p>
              <strong>10.2 Gewerbliche Endnutzer</strong>
              <br />
              Bei Geräten, die von gewerblichen Endnutzern genutzt werden, erfolgt die Rücknahme
              und Entsorgung nach den gesetzlichen Vorgaben des ElektroG. Soweit das ElektroG die
              Kosten- oder Organisationsverantwortung zwischen Hersteller, Vertreiber und
              gewerblichen Endnutzer einer vertraglichen Regelung zugänglich macht, übernimmt der
              Käufer die Pflicht, die gelieferten Geräte nach Nutzungsbeendigung auf eigene
              Kosten gemäß den gesetzlichen Bestimmungen ordnungsgemäß zu entsorgen und stellt
              HiWo-med von den Verpflichtungen nach § 19 ElektroG vollständig frei.
            </p>
            <p>
              <strong>10.3 Weitergabe</strong>
              <br />
              Der Käufer hat bei der Weitergabe von Elektro- und Elektronikgeräten an Dritte die
              jeweils geltenden gesetzlichen Anforderungen zu beachten.
            </p>

            <h3 className="t-h3">11. Fachbezogene Schulungen und Seminare</h3>
            <p>
              <strong>11.1 Leistungsumfang</strong>
              <br />
              Bietet HiWo-med fachbezogene Schulungen, Fortbildungen oder Seminare an, richtet
              sich der geschuldete Leistungsumfang nach der jeweiligen Seminarbeschreibung.
              HiWo-med schuldet die ordnungsgemäße Durchführung der Veranstaltung durch geeignete
              Referenten, nicht jedoch einen bestimmten individuellen Lern- oder
              Prüfungserfolg.
            </p>
            <p>
              <strong>11.2 Anmeldung</strong>
              <br />
              Mit der Anmeldung gibt der Käufer ein verbindliches Angebot zur Teilnahme an der
              jeweiligen Veranstaltung ab. Die Teilnahme wird durch Bestätigung von HiWo-med in
              Textform verbindlich.
            </p>
            <p>
              <strong>11.3 Stornierung durch den Käufer</strong>
              <br />
              Absagen und Umbuchungen müssen in Textform erfolgen. Für die Stornierung gelten
              folgende Gebühren: bis 14 Tage vor Veranstaltungsbeginn kostenfrei, 13 bis 3 Tage
              vor Veranstaltungsbeginn 50 % der vereinbarten Teilnahmegebühr, ab 2 Tage vor
              Veranstaltungsbeginn oder bei Nichterscheinen 100 % der vereinbarten
              Teilnahmegebühr. Die Benennung eines Ersatzteilnehmers aus derselben Praxis oder
              demselben Unternehmen ist jederzeit kostenfrei möglich, sofern die Voraussetzungen
              für die Teilnahme erfüllt sind. Dem Käufer bleibt der Nachweis vorbehalten, dass
              kein oder ein wesentlich geringerer Schaden entstanden ist.
            </p>
            <p>
              <strong>11.4 Absage durch HiWo-med</strong>
              <br />
              HiWo-med ist berechtigt, Veranstaltungen aus wichtigem Grund abzusagen oder zu
              verschieben, insbesondere bei Erkrankung oder Ausfall eines Referenten, höherer
              Gewalt oder Nichterreichen einer ausgeschriebenen Mindestteilnehmerzahl. Bereits
              gezahlte Teilnahmegebühren werden bei vollständigem Ausfall der Veranstaltung
              zurückerstattet. Weitergehende Ansprüche des Käufers bestehen nur nach Maßgabe der
              gesetzlichen Bestimmungen und der Haftungsregelungen dieser AGB.
            </p>
            <p>
              <strong>11.5 Schulungsunterlagen und Urheberrecht</strong>
              <br />
              Die im Rahmen einer Schulung oder eines Seminars bereitgestellten Unterlagen,
              Präsentationen und sonstigen Inhalte sind urheberrechtlich geschützt. Sie dürfen
              durch den Käufer ausschließlich für eigene interne Zwecke verwendet werden. Eine
              Vervielfältigung, öffentliche Zugänglichmachung, Weitergabe, Veröffentlichung oder
              gewerbliche Nutzung – auch auszugsweise – ist nur mit vorheriger Zustimmung von
              HiWo-med zulässig, soweit nicht gesetzlich etwas anderes gestattet ist.
            </p>

            <h3 className="t-h3">12. Eigentumsvorbehalt</h3>
            <p>
              <strong>12.1 Einfacher Eigentumsvorbehalt</strong>
              <br />
              HiWo-med behält sich das Eigentum an sämtlichen gelieferten Waren bis zur
              vollständigen Zahlung aller Forderungen aus dem jeweiligen Kaufvertrag vor.
            </p>
            <p>
              <strong>12.2 Kontokorrentvorbehalt</strong>
              <br />
              Der Eigentumsvorbehalt erstreckt sich darüber hinaus auf sämtliche Forderungen, die
              HiWo-med aus der laufenden Geschäftsbeziehung gegen den Käufer hat oder künftig
              haben wird, soweit eine entsprechende Kontokorrentbeziehung besteht.
            </p>
            <p>
              <strong>12.3 Verarbeitung</strong>
              <br />
              Der Käufer ist berechtigt, Vorbehaltsware im ordnungsgemäßen Geschäftsbetrieb zu
              verarbeiten. Die Verarbeitung erfolgt für HiWo-med. Wird die Vorbehaltsware mit
              anderen, HiWo-med nicht gehörenden Gegenständen verarbeitet, erwirbt HiWo-med
              Miteigentum an der neuen Sache im Verhältnis des Rechnungswertes der
              Vorbehaltsware zum Wert der übrigen verarbeiteten Gegenstände.
            </p>
            <p>
              <strong>12.4 Weiterveräußerung</strong>
              <br />
              Der Käufer ist berechtigt, die Vorbehaltsware im ordnungsgemäßen Geschäftsverkehr
              weiterzuveräußern. Die aus der Weiterveräußerung entstehenden Forderungen tritt der
              Käufer bereits jetzt in Höhe des Rechnungswertes der Vorbehaltsware an HiWo-med ab.
              HiWo-med nimmt die Abtretung an. Der Käufer bleibt zur Einziehung der Forderung
              berechtigt, solange er seinen Zahlungsverpflichtungen gegenüber HiWo-med
              ordnungsgemäß nachkommt. HiWo-med ist berechtigt, die Einziehungsermächtigung zu
              widerrufen, wenn der Käufer mit seinen Zahlungsverpflichtungen in Verzug gerät oder
              sich seine Vermögensverhältnisse wesentlich verschlechtern.
            </p>
            <p>
              <strong>12.5 Zugriff Dritter</strong>
              <br />
              Bei Zugriffen Dritter auf Vorbehaltsware, insbesondere bei Pfändungen, hat der
              Käufer HiWo-med unverzüglich in Textform zu informieren und den Dritten auf das
              Eigentum von HiWo-med hinzuweisen.
            </p>
            <p>
              <strong>12.6 Freigabe von Sicherheiten</strong>
              <br />
              Übersteigt der realisierbare Wert der Sicherheiten die gesicherten Forderungen von
              HiWo-med nachhaltig um mehr als 10 %, wird HiWo-med auf Verlangen des Käufers
              Sicherheiten nach eigener Wahl freigeben.
            </p>

            <h3 className="t-h3">13. Datenschutz und elektronische Kommunikation</h3>
            <p>
              Soweit personenbezogene Daten im Rahmen der Geschäftsbeziehung verarbeitet werden,
              erfolgt dies nach Maßgabe der jeweils geltenden datenschutzrechtlichen
              Bestimmungen. Nähere Informationen zur Verarbeitung personenbezogener Daten ergeben
              sich aus den Datenschutzinformationen von HiWo-med. Der Käufer erklärt sich damit
              einverstanden, dass HiWo-med im Rahmen der Geschäftsbeziehung mit ihm elektronisch
              kommuniziert, insbesondere per E-Mail, soweit gesetzlich zulässig.
            </p>

            <h3 className="t-h3">14. Erfüllungsort, Gerichtsstand und anwendbares Recht</h3>
            <p>
              <strong>14.1 Anwendbares Recht</strong>
              <br />
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts
              (CISG).
            </p>
            <p>
              <strong>14.2 Erfüllungsort</strong>
              <br />
              Erfüllungsort für sämtliche Verpflichtungen aus dem Vertragsverhältnis ist, soweit
              gesetzlich zulässig, der Geschäftssitz von HiWo-med.
            </p>
            <p>
              <strong>14.3 Gerichtsstand</strong>
              <br />
              Ist der Käufer Kaufmann, eine juristische Person des öffentlichen Rechts oder ein
              öffentlich-rechtliches Sondervermögen, wird als ausschließlicher Gerichtsstand für
              alle Streitigkeiten aus oder im Zusammenhang mit dem Vertragsverhältnis der
              Geschäftssitz von HiWo-med vereinbart. HiWo-med bleibt berechtigt, den Käufer auch
              an dessen allgemeinem Gerichtsstand zu verklagen. Soweit gesetzlich ein anderer
              ausschließlicher Gerichtsstand besteht, bleibt dieser unberührt.
            </p>
            <p>
              <strong>14.4 Internationale Verträge</strong>
              <br />
              Für den Fall, dass der Käufer seinen Sitz außerhalb der Bundesrepublik Deutschland
              hat, gilt die Gerichtsstandsvereinbarung nur, soweit sie nach den jeweils
              anwendbaren gesetzlichen Vorschriften wirksam vereinbart werden kann.
            </p>

            <h3 className="t-h3">15. Schlussbestimmungen</h3>
            <p>
              <strong>15.1 Nebenabreden und Änderungen</strong>
              <br />
              Änderungen oder Ergänzungen zu diesen AGB sowie abweichende Vereinbarungen bedürfen
              mindestens der Textform, sofern nicht gesetzlich eine strengere Form
              vorgeschrieben ist.
            </p>
            <p>
              <strong>15.2 Teilunwirksamkeit</strong>
              <br />
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam oder
              undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen
              unberührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt die
              gesetzliche Regelung.
            </p>
            <p>
              <strong>15.3 Vorrang individueller Vereinbarungen</strong>
              <br />
              Individuelle Vereinbarungen zwischen HiWo-med und dem Käufer haben Vorrang vor
              diesen AGB.
            </p>
            <p>
              <strong>15.4 Maßgebliche Fassung</strong>
              <br />
              Es gilt die im Zeitpunkt des Vertragsschlusses gültige Fassung dieser AGB, soweit
              nicht ausdrücklich eine andere Fassung vereinbart wurde.
            </p>
            <p className="text-[0.875rem]">Stand: August 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
