import React from 'react'
import * as motion from "motion/react-client"
import { AGGREEMENT } from '@/utils/constants'

interface AboutType {
  aboutRef?: React.RefObject<HTMLDivElement | null>
}

function AboutSection({aboutRef}: AboutType) {
  return (
    <div ref={aboutRef} className="pt-8 px-4 mb-8 lg:pt-16 lg:px-16 lg:mb-16">
     <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true}}
      transition={{ duration: 1.3, ease: 'easeOut' }}
      className="grid grid-cols-12 order-1 lg:order-none gap-4 lg:gap-16">
       <div className="col-span-12 lg:col-span-6">
         <div className="w-full bg-center h-[300px] lg:h-[400px] rounded-xl shadow-xl p-0" style={{
         backgroundImage: `url(${AGGREEMENT})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
       }}></div>
       </div>
       <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
         <div className="text-[18px] text-black mb-8">Who we are?</div>
         <div className="text-[32px] text-black font-extrabold mb-4">Digital transformation partners you can trust</div>
         <div className="text-[16px] text-black text-justify">Founded with the vision to bridge business challenges with the right technology, Heliogic
           serves as a strategic partner for companies looking to accelerate digital transformation. We believe every idea holds potential —
           our mission is to bring it to life through tailored, fast, and efficient IT solutions.</div>
       </div>
     </motion.div>
    </div>
  )
}

export default AboutSection