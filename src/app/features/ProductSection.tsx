import React from 'react'
import * as motion from "motion/react-client"
import { dataProduct, AI } from '@/utils/constants'
import { FaArrowRight } from "react-icons/fa";
import { Product } from '@/types/products.type';

interface ProductPropsType {
  productRef?: React.RefObject<HTMLDivElement | null>
  openModal: (data: Product) => void
}

function ProductSection({productRef, openModal}: ProductPropsType) {
  return (
    <div ref={productRef} className="pt-8 px-4 mb-8 pb-8 lg:pt-16 lg:px-16 lg:mb-16 lg:pb-16 bg-[#fcd38a]">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 1.3, ease: 'easeOut' }}
         className="grid grid-cols-12 gap-4 lg:gap-16 mb-16">
          <div className="col-span-12 order-1 lg:order-none lg:col-span-6">
            <div className="text-[18px] text-black mb-8">What Is Our Products?</div>
            <div className="text-[32px] text-black font-extrabold mb-4">Innovative solutions for modern challenges</div>
            <div className="text-[16px] text-black text-justify">In a rapidly changing world, businesses face challenges that require more
              than traditional approaches. We deliver innovative solutions that combine technology, creativity, and deep expertise to help
              organizations adapt, grow, and stay competitive. By transforming obstacles into opportunities, we empower our partners with
              sustainable, future-ready strategies..</div>
          </div>
          <div className="col-span-12 order-2 lg:order-none lg:col-span-6">
            <div className="w-full h-[300px] lg:h-[400px] bg-center rounded-xl shadow-xl object-cover p-0" style={{
              backgroundImage: `url(${AI})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
           }}></div>
            </div>
           </motion.div>
           <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true}}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            className="w-full overflow-x-auto">
              <div className="flex gap-8 min-w-max pb-4">
                 {
                  dataProduct.map((data, index) => (
                    <div key={index} className="bg-[#fdf9e6] w-[300px] pb-8 rounded-xl shrink-0">
                      <div className="w-full h-[300px]  bg-center bg-no-repeat rounded-t-xl mb-8" style={{
                        backgroundImage: `url(${data?.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}></div>
                      <div className="px-8 flex flex-col items-center justify-center">
                        <div className="text-black text-[18px] font-extrabold mb-4">{data?.name}</div>
                        <div className="text-black text-[14px] mb-8">{data?.title}</div>
                        <button onClick={() => openModal(data)} className="btn bg-black">Explore Detail <FaArrowRight size={20} className="text-white"/></button>
                      </div>
                    </div>
                  ))
                 }
             </div>
           </motion.div>
        </div>
  )
}

export default ProductSection