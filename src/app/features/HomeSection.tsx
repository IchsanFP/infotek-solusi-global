import React from 'react'
import { HERO2 } from "@/utils/constants";
import * as motion from "motion/react-client"
import { FaArrowRight } from "react-icons/fa";


interface HomeSectionProps {
  homeRef?: React.RefObject<HTMLDivElement | null>
  scrollTo: (id: string) => void
  onOpenForm: () => void
}

function HomeSection({homeRef, scrollTo, onOpenForm}: HomeSectionProps) {
  return (
    <div ref={homeRef} className="relative w-full h-[500px] gap-4 lg:gap-16 lg:h-[700px] pb-4 lg:pb-0 mb-16 bg-[#fcd38a] grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 1.3, ease: 'easeOut' }}
         className="h-full flex flex-col justify-center pl-4 lg:pl-16">
         <div className="text-black font-extrabold leading-10 lg:leading-14 text-[30px] lg:text-[60px] mb-8">Transforming Ideas into Digital Solutions</div>
         <div className="text-black text-[14px] lg:text-[18px] mb-8">We help businesses adapt and thrive in the digital era through innovative, scalable, and client-focused technology solutions</div>
         <div className="flex items-center justify-start gap-4">
          <button onClick={() => scrollTo('contact')} className="btn bg-black btn-md text-white">
            Contact Us
            <FaArrowRight size={18} className="text-white"/>
          </button>
          <button
            onClick={() => onOpenForm()}
            className="btn bg-white btn-md border-none text-black">
            Schedule a demo
          </button>
         </div>
        </motion.div>

      </div>
      <div className="col-span-12 lg:col-span-6 p-0 order-1 lg:order-none">
        <div className="w-full h-[250px] lg:h-full object-cover p-0" style={{
          backgroundImage: `url(${HERO2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
      </div>
     </div>
  )
}

export default HomeSection