'use client'

import BaseLayout from "./components/core/BaseLayout";
import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Product } from "@/types/products.type";

import HomeSection from "./features/HomeSection";
import AboutSection from "./features/AboutSection";
// import ProductSection from "./features/SolutionSection";
import AdvantageSection from "./features/AdvantageSection";
import SolutionSection from "./features/SolutionSection";
import PartnerSection from "./features/PartnerSection";
import ContactSection from "./features/ContactSection";
import FooterSection from "./features/FooterSection";
import DetailProductSection from "./features/DetailProductSection";
import ScheduleForm from "./features/ScheduleForm";

export default function Home() {
  const Maps = useMemo(() => dynamic(() => import('@/app/components/Maps'), {ssr: false}), []);

  const [open, setOpen] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const homeRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const productRef = useRef<HTMLDivElement | null>(null)
  const partnerRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  const [tempData, setTempData] = useState<Product>({
    name: '',
    description: '',
    feature: [],
    thumbnail: '',
    title: ''
  });

  const onOpenForm = () => {
    setOpenForm(true)
  }

  const openModal = (data: Product) => {
    setTempData(data)
    setTimeout(() => {
      setOpen(true)
    }, 1000)
  }

  const closeModal = () => {
    setOpen(false)
    setTempData({
      name: '',
      description: '',
      feature: [],
      thumbnail: '',
      title: ''
    })
  }

  const scrollTo = (id: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      about: aboutRef,
      product: productRef,
      partner: partnerRef,
      contact: contactRef
    }

    sectionMap[id]?.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <BaseLayout scrollTo={scrollTo}>
     <div className="h-24"></div>
     <HomeSection homeRef={homeRef} scrollTo={scrollTo} onOpenForm={onOpenForm}/>
     <AboutSection aboutRef={aboutRef}/>
     {/* <ProductSection productRef={productRef} openModal={openModal}/> */}
     <SolutionSection productRef={productRef} openModal={openModal}/>
     <AdvantageSection />
     <PartnerSection partnerRef={partnerRef} scrollTo={scrollTo}/>
     <ContactSection contactRef={contactRef}/>
     <FooterSection />
     <DetailProductSection open={open} closeModal={closeModal} tempData={tempData}/>
     <ScheduleForm open={openForm} onClose={() => setOpenForm(false)} />
    </BaseLayout>
  );
}
