import React from 'react'

function FooterSection() {
  return (
    <div className="">
      <div className="w-full bg-[#96c9f4] py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 gap:gap-8 lg:gap-32 mx-auto px-6 text-white">
          <div className="col-span-12 md:col-span-3 xl:col-span-4 mb-4 lg:mb-0 xl:pl-32">
            <div className="text-[14px] font-extrabold mb-4">Contact US</div>
            <div>Jakarta, Indonesia</div>
            <div>info@infotekglobal.id</div>
            <div>www.infotekglobal.id</div>
          </div>

          <div className="col-span-12 md:col-span-3 xl:col-span-4 mb-4 lg:mb-0 xl:pl-32">
            <div className="text-[14px] font-bold mb-4">Others</div>
            <div className="flex flex-col">
              <a href="#">Privacy & Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 xl:col-span-4 mb-4 lg:mb-0 xl:pl-32">
            <div className="text-[14px] font-bold mb-4">Features</div>
            <div className="flex flex-col">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Solution</a>
              <a href="#">Vision</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection