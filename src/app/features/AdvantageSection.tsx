import React from 'react'
import * as motion from "motion/react-client"
import { dataAdvantage } from '@/utils/constants'
import Carousel from '../components/Carousel'

function AdvantageSection() {
  return (
    <div className="pt-8 px-4 mb-8 pb-8 lg:pt-16 lg:px-16 lg:mb-16 lg:pb-16">
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true}}
        transition={{ duration: 1.3, ease: 'easeOut' }}
       className="grid grid-cols-12 gap-4 lg:gap-16">
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-none">
          <div className="text-[18px] text-black mb-8">Why Choose Us?</div>
          <div className="text-[32px] text-black font-extrabold mb-4">The Heliogic advantage</div>
          <div className="text-[16px] text-black text-justify">The Heliogic Advantage represents the unique blend of innovation, reliability,
            and forward-thinking strategies that set Heliogic apart. It highlights our commitment to delivering smarter solutions, maximizing
            value, and ensuring lasting impact for every client we serve.</div>
        </div>
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
          <div className="w-full">
            <Carousel>
              <div className="flex gap-4">
                {
                dataAdvantage.map((data, index) => (
                  <div key={index} className="embla__slide relative w-full h-[400px] rounded-xl"
                  >
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl"
                     style={{
                       backgroundImage: `url(${data.thumbnail})`
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-full pb-10">
                      <div className="text-[30px] text-[#fcd38a] font-extrabold">{data.title}</div>
                      <div className="text-[16px] lg:text-[20px] text-white font-semibold">{data.desc}</div>
                    </div>
                  </div>
                ))
              }
              </div>
            </Carousel>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AdvantageSection