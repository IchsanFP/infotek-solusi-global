'use client'

import React, {useRef, useState, useEffect} from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import { dataPartner } from '@/utils/constants';

const LogoMarquee = () => {
  const baseX = useMotionValue(0);

  // ukuran item = lebar logo (150) + padding horizontal (64)
  const itemWidth = 150 + 64;
  const contentWidth = itemWidth * dataPartner.length;

  useAnimationFrame((t, delta) => {
    const moveBy = (delta / 1000) * 100; // speed px/s
    let nextX = baseX.get() - moveBy;

    // looping pakai modulo biar tidak pernah berhenti
    if (Math.abs(nextX) >= contentWidth) {
      nextX = 0;
    }

    baseX.set(nextX);
  });

  return (
    <div className="relative max-w-full w-screen overflow-x-hidden h-[200px]">
      <motion.div
        className="absolute whitespace-nowrap flex flex-nowrap"
        style={{ x: baseX }}
      >
        {[...dataPartner, ...dataPartner].map((data, index) => (
          <div key={index} className="flex items-center justify-center px-8">
            <div
              className={`${index === 3 || index === 8 ? 'w-[50px] h-[50px]' : 'w-[150px] h-[150px]'} bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${data?.image})`,
                backgroundSize: "contain",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;