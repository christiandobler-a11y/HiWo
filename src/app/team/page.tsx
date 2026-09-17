import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionMark } from "@/components/ui/Section";
import { company } from "@/data/company";
import {
  earliestYear,
  longTenureCount,
  teamGroups,
  teamHeadcount,
  type TeamMember,
} from "@/data/team";

export const metadata: Metadata = {
  title: "Team – die Menschen hinter HiWo-med",
  description: `Geschäftsführung, Außendienst, Auftragsannahme, Einkauf, Lager, Lieferlogistik und Buchhaltung: ${teamHeadcount} Kolleginnen und Kollegen bei HiWo-med in Uffing am Staffelsee.`,
  alternates: { canonical: "/team/" },
};

/** Dienstjahre als Einordnung – zeigt die Beständigkeit ohne Pathos. */
function tenureLabel(member: TeamMember) {
  if (member.status) return member.status;
  if (!member.since) return null;
  const years = new Date().getFullYear() - member.since;
  if (years >= 15) return `seit ${member.since} · ${years} Jahre dabei`;
  return `seit ${member.since}`;
}

function MemberCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <li data-reveal style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
      <div className="figure-frame aspect-[4/5] w-full">
        <img
          src={`/team/${member.photo}.webp`}
          width={420}
          height={525}
          alt={`Porträt von ${member.name}`}
          loading="lazy"
          decoding="async"
          /* Zwei Porträts liegen nur klein vor; sie werden nicht hochgerechnet
             beworben, sondern lediglich weicher dargestellt. */
          className={member.lowRes ? "blur-[0.2px]" : undefined}
        />
      </div>
      <p className="mt-3.5 text-[1rem] font-semibold leading-snug text-ink">{member.name}</p>
      {member.role ? (
        <p className="mt-1 text-[0.8125rem] leading-snug text-magenta-ink">{member.role}</p>
      ) : null}
      {tenureLabel(member) ? (
        <p className="mt-1 text-[0.8125rem] leading-snug text-muted">{tenureLabel(member)}</p>
      ) : null}
    </li>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHeader
        label="Team"
        title={
          <>
            {teamHeadcount} Menschen, {teamGroups.length} Bereiche, ein Haus
          </>
        }
        lead={`Wer bei HiWo-med anruft, spricht mit jemandem aus diesem Verzeichnis. ${longTenureCount} Kolleginnen und Kollegen sind seit mehr als zwanzig Jahren dabei – das ist der Grund, warum wir Abläufe in Praxen oft besser kennen als deren Lieferantenliste.`}
        meta={[
          { k: "Standort", v: `Alle an einem Ort: ${company.address.city}` },
          { k: "Längste Zugehörigkeit", v: `seit ${earliestYear}` },
          { k: "Erreichbarkeit", v: company.hours.compact },
        ]}
      />

      <section className="pb-[var(--section-y)] pt-4">
        <div className="container-site">
          <div className="grid gap-16 lg:gap-20">
            {teamGroups.map((group) => (
              <section key={group.id} id={group.id} className="scroll-mt-28">
                <div className="grid gap-x-12 gap-y-6 border-t-2 border-magenta pt-7 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <h2 className="t-h3">{group.name}</h2>
                    <p className="mt-2 text-[0.875rem] text-muted">
                      {group.members.length}{" "}
                      {group.members.length === 1 ? "Person" : "Personen"}
                    </p>
                  </div>
                  <p className="leading-relaxed text-muted lg:col-span-7 lg:col-start-6">
                    {group.summary}
                  </p>
                </div>

                <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {group.members.map((m, i) => (
                    <MemberCard key={m.name} member={m} delay={(i % 5) * 50} />
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Haltung zum Team – ersetzt den alten Fließtext auf der Mitarbeiterseite. */}
          <div className="mt-20 border-t border-line pt-10">
            <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionMark label="Haltung" />
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="t-serif text-[clamp(1.15rem,1rem+0.7vw,1.45rem)] leading-[1.5] text-ink">
                  „Hohe Fachkenntnis, persönlicher Einsatz und Leistungswille zeichnen jeden
                  Mitarbeiter der HiWo-med aus – somit wird aus jedem Mitarbeiter ein
                  Mitgestalter.“
                </p>
                <p className="mt-6 leading-relaxed text-muted">
                  Wer möglichst viel Einfluss auf die Gestaltung seiner eigenen
                  Arbeitsbedingungen hat, arbeitet dauerhaft besser. Deshalb investieren wir
                  jedes Jahr konsequent in Schulungs- und Weiterbildungsmaßnahmen – von der
                  Qualifizierung zum Medizinprodukteberater bis zur Desinfektorenausbildung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
