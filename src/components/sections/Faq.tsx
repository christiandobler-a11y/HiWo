"use client";

import { useState } from "react";

import { PlusToggleIcon } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Section";
import { faq } from "@/data/faq";

function FaqItem({ item, index }: { item: (typeof faq)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const detailId = `faq-detail-${index}`;

  return (
    <li className="border-t border-line py-5 last:border-b" data-reveal>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={detailId}
        className="group flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="t-h3">{item.question}</span>
        <PlusToggleIcon
          open={open}
          className="shrink-0 text-muted transition-colors group-hover:text-magenta-ink"
        />
      </button>
      <div className="accordion-rows" data-open={open || undefined}>
        <div id={detailId} className="overflow-hidden" aria-hidden={!open}>
          <p className="max-w-[42rem] pt-3 leading-relaxed text-muted">{item.answer}</p>
        </div>
      </div>
    </li>
  );
}

/**
 * Kurze, echte Fragen -- keine Lückenfüller. Bewusst vor der ContactCta
 * platziert statt auf der Kontaktseite: schnelle Selbsthilfe hier, direkt
 * gefolgt vom Telefon-CTA -- dem eigentlich gewünschten Kanal. Kein
 * eigener Anruf-Button hier, das wäre doppelt.
 */
export function Faq() {
  return (
    <section className="section-y" aria-labelledby="faq">
      <div className="container-site">
        <SectionHead
          label="Häufige Fragen"
          title={<span id="faq">Kurz beantwortet</span>}
          lead="Was Praxen uns am häufigsten fragen. Für alles andere: am schnellsten geht es per Telefon."
        />

        <ul className="mt-14 max-w-[52rem]">
          {faq.map((item, i) => (
            <FaqItem key={item.question} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
