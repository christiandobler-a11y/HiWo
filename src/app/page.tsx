import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
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
  title: "HiWo-med Medizintechnik – Versorgungspartner für medizinische Einrichtungen",
  description:
    "Medizinischer Fachhandel aus Uffing am Staffelsee: über 6.000 Artikel sofort ab Lager, eigener Lieferdienst im Großraum München und Oberbayern, persönlicher Außendienst und Schulungen für Praxen, MVZ und Kliniken.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
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
