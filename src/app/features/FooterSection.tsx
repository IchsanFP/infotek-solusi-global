import React from 'react'
import { FaPhone } from "react-icons/fa6";

function FooterSection() {
  return (
    <div className="">
      <div className="w-full bg-[#96c9f4] py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 gap:gap-8 lg:gap-32 mx-auto px-6 text-white">
          <div className="col-span-12 md:col-span-3 xl:col-span-4 mb-4 lg:mb-0 xl:pl-32">
            {/* <div className="text-[14px] font-extrabold mb-4">Contact US</div> */}
            <div>PT INFOTEK SOLUSI GLOBAL</div>
            <div>Woodland Park - jakarta Selatan</div>
             <div className="flex items-center gap-2 ">
              <FaPhone className="text-white text-[16px]" />
              <span>021-5010 6783</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection