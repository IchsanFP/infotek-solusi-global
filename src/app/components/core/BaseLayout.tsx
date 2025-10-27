'use client'
import React, {ReactNode} from 'react'
import Navbar from './Navbar'
import { motion, useScroll } from "motion/react"
import { LOGO } from '@/utils/constants';

interface BaseLayoutProps {
 children: ReactNode
 scrollTo: (id: string) => void
}

function BaseLayout({
  children,
  scrollTo
}: BaseLayoutProps) {
  const { scrollYProgress } = useScroll()
  return (
    <>
    <motion.div
      id="scroll-indicator"
      style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          height: 5,
          originX: 0,
          backgroundColor: "#4a91e7",
      }}
  />
    <div className='background-base w-full h-screen p-0 m-0'>
      <Navbar scrollTo={scrollTo}/>
      <div className='background-base w-full scroll-auto bg-[#F0F8FF]'>
        {children}
      </div>
      <footer>
        <div className='flex items-center justify-center bg-[#F0F8FF] w-full py-4 text-black'>© PT Infotek Solusi Global</div>
      </footer>
    </div>
    </>
  )
}

export default BaseLayout