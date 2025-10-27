'use client'

import BaseLayout from "./components/core/BaseLayout";
import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";

import HomeSection from "./features/HomeSection";
import AboutSection from "./features/AboutSection";
import AdvantageSection from "./features/AdvantageSection";
import SolutionSection from "./features/SolutionSection";
import VisionSection from "./features/VisionSection";
import ContactSection from "./features/ContactSection";
import FooterSection from "./features/FooterSection";

export default function Home() {
  const Maps = useMemo(() => dynamic(() => import('@/app/components/Maps'), {ssr: false}), []);

  const homeRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const solutionRef = useRef<HTMLDivElement | null>(null)
  const visionRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  const scrollTo = (id: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      about: aboutRef,
      solution: solutionRef,
      vision: visionRef,
      contact: contactRef
    }

    sectionMap[id]?.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <BaseLayout scrollTo={scrollTo}>
     <div className="h-24"></div>
     <HomeSection homeRef={homeRef} scrollTo={scrollTo} />
     <AboutSection aboutRef={aboutRef}/>
     <SolutionSection solutionRef={solutionRef}/>
     <AdvantageSection />
     <VisionSection visionRef={visionRef} scrollTo={scrollTo}/>
     <ContactSection contactRef={contactRef}/>
     <FooterSection />
    </BaseLayout>
  );
}
