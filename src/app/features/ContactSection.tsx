import React, {useMemo} from 'react'
import * as motion from "motion/react-client"
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot, FaEarthAsia  } from "react-icons/fa6";
import dynamic from 'next/dynamic';


interface ContactPropsType {
  contactRef?: React.RefObject<HTMLDivElement | null>
}


function ContactSection({contactRef}: ContactPropsType) {
  const Maps = useMemo(() => dynamic(() => import('@/app/components/Maps'), {ssr: false}), []);
  return (
    <div className="pt-8 px-4 mb-8 lg:pt-16 lg:px-16 lg:mb-16">
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true}}
        transition={{ duration: 1.3, ease: 'easeOut' }}
       className="grid grid-cols-12 lg:gap-16 gap-4">
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
          <Maps />
        </div>
        <div ref={contactRef} className="col-span-12 lg:col-span-6 order-1 lg:order-none">
          <div className="text-[18px] text-black mb-8">Get In Touch</div>
          <div className="text-[32px] text-black font-semibold mb-4">Contact Us</div>
          <div className="text-[14px] text-black text-justify mb-4">Let’s build the future of intelligent systems together.</div>
          <div className="border border-gray-300 p-8 flex flex-col items-center rounded-xl justify-center mb-8">
             <MdOutlineEmail className="text-black" size={50}/>
             <div className="text-black text-[14px] mb-2">Email Us</div>
             <div className="text-black text-[12px] mb-8">Send us a message anytime</div>
             <a href="mailto:info@infotekglobal.id" className="text-[18px] cursor-pointer text-blue-500">info@infotekglobal.id</a>
          </div>
          
          <div className="border border-gray-300 p-8 flex flex-col items-center rounded-xl justify-center mb-8">
             <FaEarthAsia className="text-black" size={50}/>
             <div className="text-black text-[14px] mb-2">Website</div>
             <a href="/" className="text-[18px] cursor-pointer text-blue-500">www.infotekglobal.id</a>
          </div>

          <div className="border border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center">
              <FaLocationDot className="text-black" size={50}/>
              <div className="text-black text-[14px] mb-2">Visi Our Office</div>
              <div className="text-black text-[12px] mb-8">Jakarta, Indeonesia</div>
              <a href="#" className="text-[18px] text-blue-500">Jakarta, Indonesia</a>
            </div>
        </div>
        
      </motion.div>
    </div>
  )
}

export default ContactSection