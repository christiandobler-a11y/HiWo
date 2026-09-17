import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/layout/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Hinweise zum Datenschutz im Website-Konzept der HiWo-med Medizintechnik GmbH.",
  alternates: { canonical: "/datenschutz/" },
};

/**
 * Bewusst KEIN erfundener Datenschutztext.
 * Eine Datenschutzerklärung ist ein Rechtstext und wird nicht gestaltet,
 * sondern juristisch erstellt. Der Prototyp benennt stattdessen exakt,
 * was er technisch tut – das ist die ehrliche und prüfbare Variante.
 */
export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Datenschutz"
        lead="Dieser Prototyp enthält bewusst keine ausformulierte Datenschutzerklärung. Stattdessen finden Sie hier, was der Entwurf technisch tatsächlich tut."
      />

      <section className="pb-[var(--section-y)]">
        <div className="container-prose">
          <div className="prose-hiwo max-w-[46rem] text-muted">
            <h2 className="t-h3">Was dieser Entwurf technisch tut</h2>
            <ul className="list-tick mt-5">
              <li>
                Es werden <strong>keine Cookies</strong> gesetzt und kein Local Storage
                verwendet.
              </li>
              <li>
                Es ist <strong>kein Analyse- oder Tracking-Werkzeug</strong> eingebunden.
              </li>
              <li>
                Schriften werden <strong>lokal ausgeliefert</strong>. Es gibt keine Verbindung
                zu Google Fonts oder einem anderen Font-Dienst.
              </li>
              <li>
                Es sind <strong>keine Karten, Videos oder Social-Media-Einbettungen</strong>
                &nbsp;enthalten, die Daten an Dritte übertragen würden.
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
              Vor einem Livegang ist eine vollständige Datenschutzerklärung nach DSGVO
              erforderlich. Sie sollte insbesondere Server-Logfiles, die Kontaktaufnahme per
              E-Mail, das Bewerbungsverfahren, die Einbindung externer Dienste sowie ein
              eventuelles Consent-Management abdecken. Die bestehende Website nutzt bereits ein
              Consent-Tool – dessen Konfiguration ist zu übernehmen und zu prüfen.
            </p>
            <p>
              Verantwortlich im Sinne der DSGVO ist {company.legalName},{" "}
              {company.address.street}, {company.address.zip} {company.address.city}. Siehe{" "}
              <Link href="/impressum/">Impressum</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
