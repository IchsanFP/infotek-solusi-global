import React from 'react'
import * as motion from "motion/react-client"
import { AGGREEMENT2 } from '@/utils/constants'

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
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
         <div className="text-[18px] text-black mb-8">Who we are?</div>
         <div className="text-[32px] text-black font-extrabold mb-4">Integrating Global Technologies for Indonesia’s Digital Future</div>
         <div className="text-[16px] text-black text-justify">PT Infotek Solusi Global is an Indonesian technology integrator and licensed distributor of advanced international systems in intelligence, education, finance, and governance. Our partnerships with global innovators from Dubai, France, and Russia enable us to bring trusted, field-proven technologies that align with Indonesia’s national priorities. We specialize in secure localization, system integration, and end-to-end implementation that ensures every solution is safe, compliant, and ready for the future.</div>
       </div>
       <div className="col-span-12 lg:col-span-6">
         <div className="w-full bg-center h-[300px] lg:h-[400px] rounded-xl shadow-xl p-0" style={{
         backgroundImage: `url(${AGGREEMENT2})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
       }}></div>
       </div>
     </motion.div>
    </div>
  )
}

export default AboutSection