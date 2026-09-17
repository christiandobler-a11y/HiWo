import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der HiWo-med Medizintechnik GmbH.",
  alternates: { canonical: "/impressum/" },
};

/**
 * Pflichtangaben nach § 5 DDG, wörtlich von der bestehenden Website
 * übernommen. Die ausführlichen Haftungs- und AGB-Texte der aktuellen
 * Seite sind hier nicht enthalten – sie werden beim echten Relaunch
 * unverändert und rechtlich geprüft übertragen (siehe docs/ANNAHMEN.md).
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

            <h3 className="t-h3">Verpackungsgesetz (VerpackG) / EU-Verpackungsverordnung</h3>
            <p>
              Die Firma HiWo-med Medizintechnik kommt ihren gesetzlichen Verpflichtungen nach
              dem deutschen Verpackungsgesetz (VerpackG) sowie den erweiterten Herstellerpflichten
              (EPR) vollumfänglich nach. Wir sind bei der Stiftung Zentrale Stelle
              Verpackungsregister (ZSVR) im öffentlichen Register LUCID als registrierter
              Hersteller bzw. Erstinverkehrbringer von verpackten Waren gemeldet. Unsere
              systembeteiligungspflichtigen Verpackungen einschließlich Versand- und
              Transportverpackungen sind an ein genehmigtes duales System angeschlossen.
            </p>
            <p>Registrierungsnummer (LUCID): {company.register.lucid}</p>

            <div className="mt-8 flex items-center gap-5">
              <img
                src="/img/verpackungslizenz.webp"
                width={220}
                height={220}
                alt="Siegel „Verpackungslizenzierung activate DE 2026“"
                loading="lazy"
                decoding="async"
                className="h-24 w-24"
              />
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

            <p className="text-[0.875rem]">
              <strong>Hinweis zu diesem Entwurf:</strong> Diese Seite ist Teil eines
              Website-Konzepts. Die ausführlichen Haftungshinweise, die Regelungen zu externen
              Links sowie die Allgemeinen Geschäftsbedingungen der bestehenden Website sind
              hier nicht abgebildet. Sie werden bei einer Umsetzung unverändert und nach
              rechtlicher Prüfung übernommen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
