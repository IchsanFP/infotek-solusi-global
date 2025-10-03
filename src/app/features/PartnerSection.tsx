import React from 'react'
import * as motion from "motion/react-client"
import { dataPartner } from '@/utils/constants'
import { FaArrowRight } from "react-icons/fa";

interface PartnerPropsType {
  partnerRef?: React.RefObject<HTMLDivElement | null>
  scrollTo: (id: string) => void
}

function PartnerSection({partnerRef, scrollTo}: PartnerPropsType) {
  return (
    <div ref={partnerRef} className="pt-8 mb-8 pb-8 lg:pt-16 bg-[#fcd38a] lg:mb-8 lg:pb-16">
        <motion.div
         initial={{ y: 300, opacity: 0 }}
         animate={{ y: 300, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true}}
         transition={{ duration: 1.3, ease: 'easeOut' }}
         className="w-full flex flex-col items-center justify-center text-center">
          <div className="text-[18px] text-black mb-8">Our Partners</div>
          <div className="text-[32px] font-extrabold text-black max-w-[400px] w-full mb-8">
            Trusted partnerships that drive success
          </div>
          <div className="text-[18px] text-black font-semibold max-w-[700px]">
            We collaborate with innovative companies across industries to deliver exceptional digital solutions.
          </div>
        </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            className="
              w-full
              grid grid-cols-2 sm:grid-cols-3 gap-2 place-items-center
              lg:flex lg:flex-wrap lg:justify-center lg:gap-6 my-8
            "
          >
            {dataPartner.map((data, index) => (
              <div
                key={index}
                className="w-full max-w-[120px] border border-gray-200 rounded-xl bg-[#fdf9e6]
                shadow-sm sm:max-w-[160px] md:max-w-[200px] aspect-square flex items-center justify-center"
              >
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-contain rounded-lg"
                  style={{
                    backgroundImage: `url(${data?.image})`,
                  }}
                />
              </div>
            ))}
          </motion.div>
          <motion.div
           initial={{ y: 300, opacity: 0 }}
           animate={{ y: 300, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true}}
           transition={{ duration: 1.3, ease: 'easeOut' }}
           className="flex flex-col items-center justify-center text-center">
            <div className="bg-[#fdf9e6] rounded-xl p-8 w-full lg:w-1/2 ">
              <div className="text-[18px] font-extrabold mb-4 text-black">Join Our Growing Partner Network</div>
              <div className="text-[16px] text-black mb-8">We're proud to collaborate with industry leaders across AI, technology infrastructure, digital transformation, and engineering solutions.</div>
              <button onClick={() => scrollTo('contact')} className="btn bg-[#fcd38a] border-none">Become a Partner <FaArrowRight size={20} className="text-white"/></button>
            </div>
          </motion.div>
      </div>
  )
}

export default PartnerSection