import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionMark } from "@/components/ui/Section";
import { company } from "@/data/company";
import { services, type Service } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Schulungen – Hygiene, Wundversorgung, Notfall",
  description:
    "Hygieneseminar nach § 4 DGUV Vorschrift 1, Hygiene-Check vor Ort, Trinkwasserprobenentnahme nach TrinkwV, Basis-Notfalltraining und Wundworkshop – durchgeführt von qualifizierten HiWo-med-Mitarbeitenden.",
  alternates: { canonical: "/services/" },
};

function mailtoFor(service: Service) {
  const subject = encodeURIComponent(`Anfrage: ${service.title}`);
  return `mailto:${company.email.training}?subject=${subject}`;
}

/**
 * Jedes Angebot bekommt denselben Aufbau: Eckdaten links, Inhalte rechts,
 * Referentinnen und Referenten am Fuß. Das macht die Angebote vergleichbar –
 * so, wie es ein Fortbildungsprogramm tun sollte.
 */
function ServiceEntry({ service, index }: { service: Service; index: number }) {
  return (
    <article
      id={service.id}
      className="scroll-mt-28 border-t border-line pt-10 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
        <header className="lg:col-span-4">
          <div className="flex items-center gap-3.5">
            <span className="t-index text-muted" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-[2px] w-9 bg-magenta" aria-hidden="true" />
            <span className="t-eyebrow text-muted">{service.format}</span>
          </div>
          <h2 className="t-h2 mt-5">{service.title}</h2>
          <p className="mt-4 leading-relaxed text-muted">{service.claim}</p>

          <dl className="mt-7 border-t border-line">
            {service.facts.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[minmax(0,9rem)_1fr] gap-4 border-b border-line py-3"
              >
                <dt className="text-[0.8125rem] uppercase leading-snug tracking-[0.08em] text-muted">
                  {f.label}
                </dt>
                <dd className="text-[0.9375rem] text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7">
            <Button href={mailtoFor(service)} size="sm">
              Anfragen
              <ArrowRight />
            </Button>
          </div>
        </header>

        <div className="lg:col-span-7 lg:col-start-6">
          {service.description.map((p) => (
            <p key={p} className="leading-relaxed text-muted [&+p]:mt-4">
              {p}
            </p>
          ))}

          <h3 className="t-eyebrow mt-8 text-ink">Inhalte</h3>
          <ul className="list-tick mt-4 text-muted">
            {service.contents.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          {service.audience?.length ? (
            <>
              <h3 className="t-eyebrow mt-8 text-ink">Zielgruppe</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.audience.map((a) => (
                  <li
                    key={a}
                    className="border border-line-strong px-3 py-1.5 text-[0.8125rem] text-ink"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {service.legalBasis?.length ? (
            <>
              <h3 className="t-eyebrow mt-8 text-ink">Rechtliche Grundlagen</h3>
              <ul className="list-tick mt-4 text-muted">
                {service.legalBasis.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </>
          ) : null}

          {service.note ? (
            <p className="mt-8 border-l-2 border-line-strong pl-5 text-[0.9rem] leading-relaxed text-muted">
              {service.note}
            </p>
          ) : null}

          {/* Referentinnen und Referenten mit echtem Porträt und Qualifikation. */}
          <h3 className="t-eyebrow mt-10 text-ink">
            {service.trainers.length > 1 ? "Referentinnen und Referenten" : "Referentin"}
          </h3>
          <ul className="mt-5 grid gap-6 sm:grid-cols-2">
            {service.trainers.map((t) => (
              <li key={t.name} className="flex gap-4">
                <div className="figure-frame aspect-[4/5] w-[72px] shrink-0">
                  <img
                    src={`/team/${t.photo}.webp`}
                    width={420}
                    height={525}
                    alt={`Porträt von ${t.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <ul className="mt-1.5 space-y-0.5 text-[0.8125rem] leading-snug text-muted">
                    {t.qualifications.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services & Schulungen"
        title="Fortbildung und Prüfleistungen aus dem eigenen Haus"
        lead="Fünf Angebote rund um Hygiene, Wundversorgung und Notfall – gehalten von Mitarbeitenden, die im Alltag bei unseren Kunden unterwegs sind. Vier davon finden bei Ihnen vor Ort statt."
      />

      <section className="pb-[clamp(2rem,1rem+2vw,3rem)]">
        <div className="container-site">
          <figure data-reveal>
            <Figure
              name="seminar-vor-ort-v5"
              widths={[1600, 1280, 960, 640]}
              ratio={2.49}
              alt="Schulungssituation bei HiWo-med mit Erste-Hilfe-Material auf dem Tisch, daneben der Hinweis „individuell und vor Ort“."
              sizes="(min-width: 1280px) 1280px, 100vw"
              /* vh-Höhe statt Breiten-Aspect-Ratio, siehe Kontaktseite --
                 hält das Bild unabhängig von der Bildschirmbreite
                 vollständig im ersten sichtbaren Bereich. */
              className="h-[clamp(13rem,36vh,19rem)] w-full sm:h-[clamp(14rem,38vh,20rem)] lg:h-[clamp(16rem,40vh,23rem)]"
              position="100% 55%"
              priority
            />
            <FigureCaption>
              Hygiene-Check, Notfalltraining und Wundworkshop finden in Ihren Räumen statt – mit
              Ihrem Team und Ihrem Equipment.
            </FigureCaption>
          </figure>
        </div>
      </section>

      {/* Übersicht als Sprungmarken-Leiste */}
      <section className="pb-[clamp(2.5rem,1.5rem+3vw,4rem)]">
        <div className="container-site">
          <SectionMark label="Übersicht" className="mb-5" />
          <ul className="flex flex-wrap gap-2">
            {services.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-baseline gap-2.5 border border-line-strong px-3.5 py-2 text-[0.875rem] text-ink transition-colors hover:border-magenta hover:text-magenta-ink"
                >
                  <span className="t-index text-muted" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-site pb-[var(--section-y)]">
        <div className="grid gap-14">
          {services.map((s, i) => (
            <ServiceEntry key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>

      {/* Abschluss: Anmeldung */}
      <section className="dark-section section-y">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionMark label="Anmeldung" onDark className="mb-6" />
              <h2 className="t-h2">Termin abstimmen statt Formular ausfüllen</h2>
              <p className="mt-6 max-w-[42rem] text-night-muted">
                Schreiben Sie uns, welches Angebot Sie interessiert und wie viele Personen
                teilnehmen. Wir melden uns mit Terminvorschlägen zurück. Neue Seminartermine
                für „Hygiene in der Arztpraxis“ geben wir in Kürze bekannt.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end">
              <Button href={`mailto:${company.email.training}`} variant="onDark">
                {company.email.training}
              </Button>
              <Button href={company.phone.href} variant="onDark">
                {company.phone.display}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
