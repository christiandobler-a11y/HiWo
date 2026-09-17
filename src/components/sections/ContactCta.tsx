import { ArrowRight, Button } from "@/components/ui/Button";
import { SectionMark } from "@/components/ui/Section";
import { company } from "@/data/company";

/**
 * Abschluss der Startseite: ein klarer Weg zum Gespräch.
 * Kein Formular-Trichter, keine Kachelwand – die drei realen Kanäle
 * des Unternehmens, in der Reihenfolge ihrer tatsächlichen Bedeutung.
 */
const channels = [
  {
    label: "Anrufen",
    value: company.phone.display,
    href: company.phone.href,
    note: `${company.hours.days}, ${company.hours.time}`,
  },
  {
    label: "Schreiben",
    value: company.email.general,
    href: `mailto:${company.email.general}`,
    note: "Antwort in der Regel am selben Arbeitstag",
  },
  {
    label: "Besuchen",
    value: `${company.address.street}, ${company.address.zip} ${company.address.city}`,
    href: "/kontakt/",
    note: "Lager und Verwaltung an einem Standort",
  },
];

export function ContactCta() {
  return (
    <section
      className="pb-[var(--section-y)] pt-[clamp(2.5rem,1.5rem+2.5vw,4.5rem)]"
      aria-labelledby="kontakt-cta"
    >
      <div className="container-site">
        <div className="border-t-2 border-magenta pt-10">
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionMark index="10" label="Kontakt" className="mb-6" />
              <h2 id="kontakt-cta" className="t-h2 max-w-[18ch]">
                Sprechen wir über Ihre Versorgung.
              </h2>
              <p className="t-lead mt-6 max-w-[38rem]">
                Ob Erstgespräch, Sortimentsvergleich oder ein Termin mit dem Außendienst in
                Ihrer Praxis: Am schnellsten geht es per Telefon. Es meldet sich jemand, der
                Ihnen direkt weiterhelfen kann.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
                <Button href={company.phone.href}>
                  {company.phone.display}
                </Button>
                <Button href="/kontakt/" variant="outline">
                  Kontaktseite
                  <ArrowRight />
                </Button>
              </div>
            </div>

            <dl className="lg:col-span-5 lg:col-start-8">
              {channels.map((c, i) => (
                <div
                  key={c.label}
                  className="border-b border-line py-5 first:border-t"
                  data-reveal
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  <dt className="t-eyebrow text-muted">{c.label}</dt>
                  <dd className="mt-2">
                    <a
                      href={c.href}
                      className="inline-block py-2 font-semibold text-ink underline-offset-4 transition-colors hover:text-magenta-ink hover:underline"
                    >
                      {c.value}
                    </a>
                    <span className="mt-1 block text-[0.875rem] text-muted">{c.note}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
