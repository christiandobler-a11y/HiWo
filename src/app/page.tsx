import type { Metadata } from "next";

import { Hero, HeroFacts } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Assortment } from "@/components/sections/Assortment";
import { Logistics } from "@/components/sections/Logistics";
import { PersonalService } from "@/components/sections/PersonalService";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { CompanyTeaser } from "@/components/sections/CompanyTeaser";
import { CareerTeaser } from "@/components/sections/CareerTeaser";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "HiWo-med Medizintechnik – Fachhandel für Arztpraxen",
  description:
    "Medizinischer Fachhandel aus Uffing am Staffelsee: über 6.000 Artikel sofort ab Lager, eigener Lieferdienst und persönliche Betreuung für Arztpraxen.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroFacts />
      <Positioning />
      <Assortment />
      <Logistics />
      <PersonalService />
      <ServicesTeaser />
      <KeyFigures />
      <CompanyTeaser />
      <CareerTeaser />
      <ContactCta />
    </>
  );
}
