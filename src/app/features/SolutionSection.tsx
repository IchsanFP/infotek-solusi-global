import React from 'react'
import * as motion from "motion/react-client"
import { dataSolution } from '@/utils/constants'


interface ProductPropsType {
  solutionRef?: React.RefObject<HTMLDivElement | null>
}

function SolutionSection({solutionRef}: ProductPropsType) {
  return (
    <div ref={solutionRef} className="pt-8 px-4 mb-8 pb-8 lg:pt-16 lg:px-16 lg:mb-16 lg:pb-16 bg-[#96c9f4]">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          className="grid grid-cols-12 gap-4 lg:gap-16 mb-16">
           </motion.div>
           <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true}}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            className="w-full overflow-x-auto">
              <div className="text-center mb-16">
                <h2 className="text-[18px] text-white mb-3 tracking-wide">OUR GLOBAL SOLUTIONS</h2>
                <p className="text-[16px] text-white max-w-3xl mx-auto">
                  Below are the officially licensed global technologies represented by 
                  <span className="font-semibold"> PT Infotek Solusi Global </span> in Indonesia.
                </p>
              </div>
              <div className="flex gap-8 min-w-max pb-4">
                 {
                  dataSolution.map((data, index) => (
                    // <div key={index} className="bg-[#F0F8FF] w-[300px] pb-8 rounded-xl shrink-0">
                    //   <div className="w-full h-[300px]  bg-center bg-no-repeat rounded-t-xl mb-8" style={{
                    //     backgroundImage: `url(${data?.thumbnail})`,
                    //     backgroundSize: 'cover',
                    //     backgroundRepeat: 'no-repeat',
                    //   }}></div>
                    //   <div className="px-8 flex flex-col items-center justify-center">
                    //     <div className="text-black text-[18px] font-extrabold mb-4">{data?.name}</div>
                    //     <div className="text-black text-[14px] mb-8">{data?.title}</div>
                    //     <button onClick={() => openModal(data)} className="btn bg-black">Explore Detail <FaArrowRight size={20} className="text-white"/></button>
                    //   </div>
                    // </div>
                    <div key={index} className="bg-[#F0F8FF] w-[350px] pb-8 rounded-xl shrink-0">
                      <div className="w-full h-[300px]  bg-center bg-no-repeat rounded-t-xl mb-8" style={{
                        backgroundImage: `url(${data?.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}></div>
                      <div className="px-8 flex flex-col items-center justify-center text-center">
                        <div>
                          <div className="text-black text-[18px] font-extrabold mb-2">
                            {data?.name}
                          </div>
                          <div className="text-[14px] text-gray-700 font-medium mb-1">
                            Origin: {data?.origin}
                          </div>
                          <div className="text-[14px] text-gray-700 font-medium mb-4">
                            Sector: {data.sector}
                          </div>
                        </div>
                        <div className="text-black text-[14px] mb-8">{data?.description}</div>
                      </div>
                    </div>
                  ))
                 }
             </div>
           </motion.div>
        </div>
  )
}

export default SolutionSection