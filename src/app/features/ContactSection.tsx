import React, { useMemo, useState } from "react";
import * as motion from "motion/react-client";
import dynamic from "next/dynamic";

interface ContactPropsType {
  contactRef?: React.RefObject<HTMLDivElement | null>;
}

function ContactSection({ contactRef }: ContactPropsType) {
  const Maps = useMemo(
    () => dynamic(() => import("@/app/components/Maps"), { ssr: false }),
    []
  );

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ companyName: "", email: "", message: "" });
  };

  return (
    <div className="pt-8 px-4 mb-8 lg:pt-16 lg:px-16 lg:mb-16 bg-[#F0F8FF]">
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="grid grid-cols-12 lg:gap-16 gap-4"
      >
        {/* Map Section */}
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
          <Maps />
        </div>

        {/* Contact Form Section */}
        <div
          ref={contactRef}
          className="col-span-12 lg:col-span-6 order-1 lg:order-none"
        >
          <div className="text-[18px] text-gray-800 mb-2">Get In Touch</div>
          <div className="text-[32px] text-gray-900 font-semibold mb-4">
            Contact Us
          </div>
          <div className="text-[14px] text-gray-700 text-justify mb-8">
            Let’s build the future of intelligent systems together.
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl flex flex-col gap-6 shadow-md  border border-[#96C9F4]/50"
          >
            <div>
              <label className="block text-[14px] text-gray-700 mb-2 font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="Enter your company name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#96C9F4]"
              />
            </div>

            <div>
              <label className="block text-[14px] text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#96C9F4]"
              />
            </div>

            <div>
              <label className="block text-[14px] text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#96C9F4] resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn btn-md border-none bg-[#96C9F4] hover:bg-[#82BDE8] text-white transition-all duration-300 font-semibold shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
