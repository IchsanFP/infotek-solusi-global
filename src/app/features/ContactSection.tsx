"use client";

import React, { useMemo, useState } from "react";
import * as motion from "motion/react-client";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

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

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // tanggal
    const today = new Date();
    const dateString = today.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Data yang dikirim
    const templateParams = {
      companyName: formData.companyName,
      email: formData.email,
      message: formData.message,
      date: dateString,
    };

    try {
      const result =await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );


      // console.log("Email sent successfully:", result.text);
      toast.success("Message sent successfully!", { duration: 4000 });
      setFormData({ companyName: "", email: "", message: "" });
    } catch (error) {
      // console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again later.", { duration: 4000 });
    } finally {
      setLoading(false);
    }
  };         

  return (
    <div className="pt-8 px-4 mb-8 lg:pt-16 lg:px-16 lg:mb-16 bg-[#F0F8FF]">
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="grid grid-cols-12 lg:gap-16 gap-4"
      >
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
          <Maps />
        </div>

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
            className="p-8 rounded-2xl flex flex-col gap-6 shadow-md border border-[#96C9F4]/50"
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
                disabled={loading}
                className={`w-full px-6 py-2 rounded-lg text-white font-semibold shadow-sm transition-all duration-300
                  bg-[#96C9F4]
                  ${loading ? "cursor-not-allowed opacity-100" : "hover:bg-[#82BDE8] cursor-pointer"}
                `}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
