"use client";

import { useRef } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ImpactBar } from "@/components/ImpactBar";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionOverview } from "@/components/SolutionOverview";
import { ServiceLineup } from "@/components/ServiceLineup";
import { WhyUsSection } from "@/components/WhyUsSection";
import { StepsSection } from "@/components/StepsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FounderSection } from "@/components/FounderSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <Header />
      <HeroSection heroRef={heroRef} />
      <ImpactBar />
      <ProblemSection />
      <SolutionOverview />
      <ServiceLineup />
      <WhyUsSection />
      <StepsSection />
      <CaseStudySection />
      <PricingSection />
      <FAQSection />
      <FounderSection />
      <FinalCTA />
      <Footer />
      <MobileCTABar heroRef={heroRef} />
    </>
  );
}
