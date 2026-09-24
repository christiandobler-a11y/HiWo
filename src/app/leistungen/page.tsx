import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Figure, FigureCaption } from "@/components/ui/Figure";
import { SectionHead, SectionMark } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";
import { company, customerGroups, deliveryRegions } from "@/data/company";
import { faq } from "@/data/faq";
import { assortment } from "@/data/site";

/** FAQPage-Schema für Rich Snippets in der Suche. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Leistungen – Versorgung, Lager und Lieferdienst",
  description:
    "Was HiWo-med für medizinische Einrichtungen leistet: über 6.000 Artikel ab eigenem Lager, hauseigener Lieferdienst im Großraum München und Oberbayern, feste Ansprechpartner im Innen- und Außendienst.",
  alternates: { canonical: "/leistungen/" },
};

/** Der Weg einer Bestellung – erklärt den Ablauf statt ihn zu behaupten. */
const orderFlow = [
  {
    title: "Bestellung",
    text: "Telefonisch, per Fax, per E-Mail oder über FastOrder. Wer anruft, landet nicht in einer Warteschleife, sondern bei jemandem aus der Auftragsannahme.",
  },
  {
    title: "Kommissionierung",
    text: "Die Ware liegt in der Regel bereits im Lager in Uffing. Wareneingang und Qualitätskontrolle finden im eigenen Haus statt.",
  },
  {
    title: "Auslieferung",
    text: "Im eigenen Liefergebiet fahren unsere Kolleginnen und Kollegen selbst. Bestellungen bis 17:00 Uhr sind in der Regel schon am nächsten Tag bei Ihnen.",
  },
  {
    title: "Übergabe",
    text: "Die Lieferung kommt bis an den gewünschten Lagerort. Wo möglich liefern wir in wiederverwendbaren Transportkisten, die wir noch am selben Tag direkt wieder mitnehmen.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        label="Leistungen"
        title={
          <>
            Versorgung heißt: Da sein, wenn es darauf ankommt.
          </>
        }
        lead="HiWo-med verbindet medizinischen Fachhandel mit eigenem Lager, eigener Logistik und persönlicher Betreuung. Von der Bestellung über die Kommissionierung bis zur Auslieferung greifen bei uns alle Schritte ineinander – damit medizinische Einrichtungen zuverlässig versorgt sind."
      />

      {/* Hero-Bild: Die Seite bestand vorher nur aus Fließtext und Listen --
          kein einziges großes Bild, bevor man tief scrollt. Genau das fehlte:
          ein Gesicht zum Versprechen "wir kümmern uns um den Rest". Derselbe
          Claim steht auf den Fahrzeugen (siehe Hero der Startseite) und
          bekommt hier sein eigenes Bild -- bislang nur als Social-Share-Vorschau
          verwendet (layout.tsx), auf der Seite selbst aber noch nie gezeigt. */}
      <section className="pb-[clamp(2rem,1rem+2vw,3rem)]">
        <div className="container-site">
          <figure data-reveal>
            <Figure
              name="lieferdienst-sprinter-v4"
              widths={[1280, 960, 640]}
              ratio={2.49}
              alt="Ein HiWo-med-Mitarbeiter winkt aus dem Fenster seines Lieferfahrzeugs, im Hintergrund der Staffelsee mit Alpenkette."
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="h-[clamp(13rem,36vh,19rem)] w-full sm:h-[clamp(14rem,38vh,20rem)] lg:h-[clamp(16rem,40vh,23rem)]"
              priority
            />
            <FigureCaption>
              „Bleiben Sie Mediziner, wir kümmern uns um den Rest.“ Der Satz steht auf unseren
              Fahrzeugen – und ist der Grund für alles, was auf dieser Seite folgt.
            </FigureCaption>
          </figure>
        </div>
      </section>

      {/* Sortiment */}
      <section className="section-y bg-paper-raised" aria-labelledby="sortiment">
        <div className="container-site">
          <SectionHead
            label="Sortiment"
            split
            title={<span id="sortiment">Medizintechnik von A&nbsp;bis&nbsp;Z</span>}
            lead="Wir führen ausschließlich qualifizierte Produkte namhafter Hersteller und beziehen sie von Lieferanten, die wie wir eine Qualitätssicherung eingeführt haben."
          />

          <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <ul className="lg:col-span-7">
              {assortment.map((a) => (
                <li key={a.name} className="border-t border-line py-5 last:border-b" data-reveal>
                  <h3 className="text-[1.0625rem] font-semibold text-ink">{a.name}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">{a.note}</p>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-4 lg:col-start-9">
              <figure data-reveal>
                <Figure
                  name="instrument-detail-v2"
                  widths={[900, 640]}
                  ratio={1.45}
                  alt="Mehrere chirurgische Klemmen mit Ringgriffen, aufeinandergestapelt auf hellem Untergrund."
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="aspect-[1.45/1] w-full"
                />
                <FigureCaption>
                  Was nicht im Katalog steht, beschaffen wir. Ein Anruf genügt – Sie bekommen
                  ein konkretes Angebot.
                </FigureCaption>
              </figure>

              <div className="mt-8 border-t border-line pt-6">
                <h3 className="t-eyebrow text-muted">Gesamtkatalog</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  Der Katalog 2025/26 zeigt einen Auszug des Sortiments. Gerne senden wir Ihnen
                  auch ein gedrucktes Exemplar zu.
                </p>
                <div className="mt-5">
                  <Button href={company.links.catalog} variant="outline" size="sm">
                    Katalog als PDF
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf einer Bestellung */}
      <section className="section-y" aria-labelledby="ablauf">
        <div className="container-site">
          <SectionHead
            label="Ablauf"
            title={<span id="ablauf">Von Ihrer Bestellung bis in Ihre Praxis</span>}
            lead="Vier Schritte, die bei uns komplett im Haus stattfinden. So bleibt die gesamte Versorgung in einer Hand."
          />

          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:divide-x lg:divide-line">
            {orderFlow.map((s, i) => (
              <li
                key={s.title}
                className="lg:px-6 lg:first:pl-0 lg:last:pr-0"
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <span className="t-index block text-magenta-ink" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block h-[2px] w-7 bg-magenta" aria-hidden="true" />
                <h3 className="t-h3 mt-4">{s.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Logistik */}
      <section className="dark-section section-y" aria-labelledby="logistik">
        <div className="container-site">
          <SectionHead
            label="Lager & Lieferdienst"
            onDark
            split
            title={<span id="logistik">Der Lieferdienst ist keine Zusatzleistung.</span>}
            lead={
              <span className="text-night-muted">
                Er gehört zu unserer Versorgung. Unsere eigenen Fahrer bringen die Ware direkt
                in Ihre Praxis – persönlich, zuverlässig und auf kurzen Wegen. Wo möglich
                liefern wir in wiederverwendbaren Transportbehältern und nehmen diese bei
                Anlieferung wieder mit. So entsteht beim Kunden weniger Verpackungsaufwand und
                die Versorgung bleibt persönlich.
              </span>
            }
          />

          <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">Liefergebiete und Laufzeiten</caption>
                <thead>
                  <tr className="border-b border-white/20">
                    <th scope="col" className="py-3 pr-4 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-night-muted">
                      Gebiet
                    </th>
                    <th scope="col" className="py-3 pr-4 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-night-muted">
                      Laufzeit
                    </th>
                    <th scope="col" className="hidden py-3 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-night-muted sm:table-cell">
                      Weg
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryRegions.map((r) => (
                    <tr key={r.region} className="border-b border-white/12 align-top">
                      <th scope="row" className="py-4 pr-4 font-semibold text-night-ink">
                        {r.region}
                        <span className="mt-1 block text-[0.8125rem] font-normal text-night-muted sm:hidden">
                          {r.mode}
                        </span>
                      </th>
                      <td className="py-4 pr-4 text-[0.9375rem] text-night-muted">{r.lead}</td>
                      <td className="hidden py-4 text-[0.9375rem] text-night-muted sm:table-cell">
                        {r.mode}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
                <Stat value={1500} unit="m²" label="Lagerfläche" countUp onDark size="md" />
                <Stat value={6000} unit="+" label="Artikel verfügbar" countUp onDark size="md" />
                <Stat value={8} label="Kolleginnen und Kollegen in der Lieferlogistik" countUp onDark size="md" />
              </div>
            </div>

            <figure className="lg:col-span-5" data-reveal>
              <Figure
                name="lager-regale-v6"
                widths={[960, 640]}
                ratio={2.49}
                alt="Regalgang im Lager von HiWo-med, beidseitig gefüllt mit Verbandmaterial und Kartons."
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] w-full lg:aspect-[1.3/1]"
                position="50% 50%"
              />
              <FigureCaption onDark>
                Wareneingang, Qualitätskontrolle und Kommissionierung laufen an einem Standort.
              </FigureCaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Betreuung + Kundengruppen */}
      <section className="section-y" aria-labelledby="betreuung">
        <div className="container-site">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHead
                label="Betreuung"
                title={<span id="betreuung">Innendienst und Außendienst – ein Team</span>}
                lead="Was Sie mit unserem Innendienst besprechen, kommt auch bei Ihrem Ansprechpartner im Außendienst an. Beide arbeiten mit denselben Informationen, kennen Ihre Praxis und stimmen sich direkt miteinander ab. So müssen Sie Ihr Anliegen nicht mehrfach erklären – egal, ob Sie uns telefonisch in Uffing erreichen oder Ihr Außendienstmitarbeiter bei Ihnen vor Ort ist."
              />
              <ul className="list-tick mt-8 text-muted">
                <li>{company.hours.compact} persönlich erreichbar</li>
                <li>Feste Gebiete im Außendienst – dieselbe Ansprechperson über Jahre</li>
                <li>Individuelle Versorgungslösungen statt Standardpakete</li>
                <li>Jährliche Kundenbefragung zu Umfang und Qualität unserer Leistungen</li>
              </ul>
              <div className="mt-8">
                <Button href="/team/" variant="outline">
                  Ihre Ansprechpartner
                  <ArrowRight />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <SectionMark label="Für wen wir arbeiten" className="mb-6" />
              <ul className="grid gap-0">
                {customerGroups.map((c) => (
                  <li
                    key={c}
                    className="border-t border-line py-4 text-[1.0625rem] text-ink last:border-b"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.9rem] leading-relaxed text-muted">
                Unser Angebot richtet sich ausschließlich an Ärzte, medizinische Fachkreise und
                weitere gewerbliche Kunden. Ein Verkauf an Verbraucher (B2C) findet nicht statt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ContactCta />
    </>
  );
}
