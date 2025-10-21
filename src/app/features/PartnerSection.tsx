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
    <div ref={partnerRef} className="pt-8 mb-8 pb-8 lg:pt-16 bg-[#96c9f4] lg:mb-8 lg:pb-16">
        <motion.div
         initial={{ y: 300, opacity: 0 }}
         animate={{ y: 300, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true}}
         transition={{ duration: 1.3, ease: 'easeOut' }}
         className="w-full flex flex-col items-center justify-center text-center">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16">
            {/* Bagian teks di kiri */}
            <div className="w-full lg:w-1/2 text-left">
              <div className="text-[32px] text-white mb-4 font-semibold tracking-wide">
                VISION FOR INDONESIA
              </div>
              <div className="text-[16px] text-white font-normal leading-relaxed">
                To empower Indonesia through globally integrated, locally secured technologies — transforming data into national intelligence, learning into empowerment, and systems into trust.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  )
}

export default PartnerSection