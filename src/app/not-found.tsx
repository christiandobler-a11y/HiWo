import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { mainNav } from "@/data/site";

export default function NotFound() {
  return (
    <>
      <PageHeader
        label="Fehler 404"
        title="Diese Seite gibt es nicht (mehr)."
        lead="Vielleicht hat sich die Adresse geändert. Hier sind die wichtigsten Einstiege – oder rufen Sie uns einfach an."
      >
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
          <Button href="/">
            Zur Startseite
            <ArrowRight />
          </Button>
          <Button href={company.phone.href} variant="outline">
            {company.phone.display}
          </Button>
        </div>
      </PageHeader>

      <section className="pb-[var(--section-y)]">
        <div className="container-site">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {mainNav.map((item, i) => (
              <li key={item.href} className="border-t border-line">
                <a
                  href={item.href}
                  className="group flex items-baseline gap-4 py-5 pr-4 transition-colors hover:text-magenta-ink"
                >
                  <span className="t-index text-muted" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="t-h3">{item.label}</span>
                  <ArrowRight className="ml-auto self-center text-magenta transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
