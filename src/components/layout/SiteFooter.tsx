import Link from "next/link";

import { company } from "@/data/company";
import { fastOrder, legalNav, mainNav } from "@/data/site";
import { ArrowRight } from "@/components/ui/Button";

export function SiteFooter() {
  return (
    <footer className="dark-section">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          {/* Marke + Anschrift */}
          <div className="lg:col-span-5">
            {/* Eigene Dark-Variante: die dunklen Sekundärfarben des Logos
                (Fließtext, "$med") sind hier auf night-muted/magenta-glow
                umgefärbt, damit es direkt auf dem dunklen Footer lesbar
                ist -- keine weiße Box mehr nötig, die auf Dunkel unruhig
                wirkte. */}
            <img
              src="/brand/logo-hiwomed-dark-280.png"
              srcSet="/brand/logo-hiwomed-dark-280.png 280w, /brand/logo-hiwomed-dark-560.png 560w"
              width={280}
              height={204}
              alt="HiWo-med Medizintechnik"
              className="h-12 w-auto"
            />

            <address className="mt-8 not-italic leading-relaxed text-night-muted">
              <span className="block font-semibold text-night-ink">{company.legalName}</span>
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </address>

            <dl className="mt-6 grid gap-2 text-[0.95rem]">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-night-muted">Telefon</dt>
                <dd>
                  <a
                    href={company.phone.href}
                    className="inline-block py-2 font-semibold text-night-ink underline-offset-4 hover:text-magenta-glow hover:underline"
                  >
                    {company.phone.display}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-night-muted">E-Mail</dt>
                <dd>
                  <a
                    href={`mailto:${company.email.general}`}
                    className="inline-block py-2 font-semibold text-night-ink underline-offset-4 hover:text-magenta-glow hover:underline"
                  >
                    {company.email.general}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-night-muted">Fax</dt>
                <dd className="text-night-ink">{company.fax}</dd>
              </div>
            </dl>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation" className="lg:col-span-3">
            <h2 className="t-eyebrow text-night-ink">Seiten</h2>
            <ul className="mt-5 grid gap-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1.5 text-night-muted underline-offset-4 transition-colors hover:text-night-ink hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Erreichbarkeit + Bestandskundenzugang */}
          <div className="lg:col-span-4">
            <h2 className="t-eyebrow text-night-ink">Erreichbarkeit</h2>
            <p className="mt-5 leading-relaxed">
              <span className="font-semibold text-night-ink">{company.hours.weekdays}</span>
              <br />
              {company.hours.weekdaysTime}
              <br />
              <span className="font-semibold text-night-ink">{company.hours.friday}</span>
              <br />
              {company.hours.fridayTime}.
            </p>

            <a
              href={fastOrder.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-7 flex items-center justify-between gap-4 border border-white/20 px-5 py-4 transition-colors hover:border-magenta-glow"
            >
              <span>
                <span className="block font-semibold text-night-ink">{fastOrder.label}</span>
                <span className="block text-[0.8125rem] text-night-muted">
                  Bestellportal für {fastOrder.qualifier}
                </span>
              </span>
              <ArrowRight className="shrink-0 text-magenta-glow transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <div className="mt-7 flex items-center gap-4">
              <img
                src="/img/iso-9001-320.webp"
                width={320}
                height={240}
                alt="Zertifiziert nach ISO 9001, ausgestellt durch TCert"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto bg-white p-1"
              />
              <p className="text-[0.8125rem] leading-snug text-night-muted">
                Qualitätsmanagement
                <br />
                zertifiziert nach ISO 9001
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/12 pt-7 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-night-muted">
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-1.5 text-night-muted underline-offset-4 transition-colors hover:text-night-ink hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* B2B-Hinweis: gehört an eine Stelle, die auf jeder Seite steht,
            nicht nur auf der Leistungen-Seite -- Fachkreise-Beschränkung
            ist eine durchgehende Geschäftsbedingung, kein Detail einer
            einzelnen Unterseite. */}
        <p className="mt-6 text-[0.75rem] leading-relaxed text-night-muted">
          Unser Angebot richtet sich ausschließlich an Ärzte, medizinische Fachkreise und
          weitere gewerbliche Kunden. Ein Verkauf an Verbraucher (B2C) findet nicht statt.
        </p>
      </div>
    </footer>
  );
}
