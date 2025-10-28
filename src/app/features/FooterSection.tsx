import React from "react";
import { FaPhone } from "react-icons/fa6";

function FooterSection() {
  return (
    <footer className="bg-[#96c9f4] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 text-center md:text-left">
        <div>
          <div className="uppercase font-semibold text-lg">
            PT Infotek Solusi Global
          </div>
          <div className="uppercase text-sm">
            Woodland Park - Jakarta Selatan
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
          <FaPhone className="text-white text-[16px]" />
          <span className="text-sm md:text-base">021-5010 6783</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
