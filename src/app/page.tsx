'use client'

import BaseLayout from "./components/core/BaseLayout";
import { HERO2 } from "@/utils/constants";
import { FaArrowRight } from "react-icons/fa";
import { AGGREEMENT, AI, dataProduct, dataPartner, dataAdvantage } from "@/utils/constants";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import * as motion from "motion/react-client"
import Modal from "./components/Modal";
import { Product } from "@/types/products.type";
import { AiFillProduct } from "react-icons/ai";
import Carousel from "./components/Carousel";

export default function Home() {
  const Maps = useMemo(() => dynamic(() => import('@/app/components/Maps'), {ssr: false}), []);

  const [open, setOpen] = useState<boolean>(false);
  const homeRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const productRef = useRef<HTMLDivElement | null>(null)
  const partnerRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  const [tempData, setTempData] = useState<Product>({
    name: '',
    description: '',
    feature: [],
    thumbnail: '',
    title: ''
  });

  const openModal = (data: Product) => {
    setTempData(data)
    setTimeout(() => {
      setOpen(true)
    }, 1000)
  }

  const closeModal = () => {
    setOpen(false)
    setTempData({
      name: '',
      description: '',
      feature: [],
      thumbnail: '',
      title: ''
    })
  }

  const scrollTo = (id: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      about: aboutRef,
      product: productRef,
      partner: partnerRef,
      contact: contactRef
    }

    sectionMap[id]?.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <BaseLayout scrollTo={scrollTo}>
    <div className="h-24"></div>
     <div ref={homeRef} className="relative w-full h-[500px] gap-4 lg:gap-16 lg:h-[700px] pb-4 lg:pb-0 mb-16 bg-[#fcd38a] grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 1.3, ease: 'easeOut' }}
         className="h-full flex flex-col justify-center pl-4 lg:pl-16">
         <div className="text-black font-extrabold leading-10 lg:leading-14 text-[30px] lg:text-[60px] mb-8">Transforming Ideas into Digital Solutions</div>
         <div className="text-black text-[14px] lg:text-[18px] mb-8">We help businesses adapt and thrive in the digital era through innovative, scalable, and client-focused technology solutions</div>
         <div className="flex items-center justify-start gap-4">
          <button onClick={() => scrollTo('contact')} className="btn bg-black btn-md text-white">
            Contact Us
            <FaArrowRight size={18} className="text-white"/>
          </button>
          <a
            href="https://airtable.com/apphFNm0mo0wmzNAU/pagOTFh39uowa4acf/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white btn-md border-none text-black">
            Schedule a demo
          </a>
         </div>
        </motion.div>

      </div>
      <div className="col-span-12 lg:col-span-6 p-0 order-1 lg:order-none">
        <div className="w-full h-[250px] lg:h-full object-cover p-0" style={{
          backgroundImage: `url(${HERO2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
      </div>
     </div>
     <div ref={aboutRef} className="pt-8 px-4 mb-8 lg:pt-16 lg:px-16 lg:mb-16">
      <motion.div
       initial={{ y: 300, opacity: 0 }}
       animate={{ y: 300, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       viewport={{ once: true}}
       transition={{ duration: 1.3, ease: 'easeOut' }}
       className="grid grid-cols-12 order-1 lg:order-none gap-4 lg:gap-16">
        <div className="col-span-12 lg:col-span-6">
          <div className="w-full bg-center h-[300px] lg:h-[400px] rounded-xl shadow-xl p-0" style={{
          backgroundImage: `url(${AGGREEMENT})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}></div>
        </div>
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
          <div className="text-[18px] text-black mb-8">Who we are?</div>
          <div className="text-[32px] text-black font-extrabold mb-4">Digital transformation partners you can trust</div>
          <div className="text-[16px] text-black text-justify">Founded with the vision to bridge business challenges with the right technology, Heliogic
            serves as a strategic partner for companies looking to accelerate digital transformation. We believe every idea holds potential —
            our mission is to bring it to life through tailored, fast, and efficient IT solutions.</div>
        </div>
      </motion.div>
     </div>
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
        <div ref={partnerRef} className="pt-8 mb-8 pb-8 lg:pt-16 bg-[#fcd38a] lg:mb-8 lg:pb-16">
          <motion.div
           initial={{ y: 300, opacity: 0 }}
           animate={{ y: 300, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true}}
           transition={{ duration: 1.3, ease: 'easeOut' }}
           className="w-full flex flex-col items-center justify-center text-center">
            <div className="text-[18px] text-black mb-8">Our Partners</div>
            <div className="text-[32px] font-extrabold text-black max-w-[400px] w-full mb-8">
              Trusted partnerships that drive success
            </div>
            <div className="text-[18px] text-black font-semibold max-w-[700px]">
              We collaborate with innovative companies across industries to deliver exceptional digital solutions.
            </div>
          </motion.div>
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              className="
                w-full
                grid grid-cols-2 sm:grid-cols-3 gap-2 place-items-center
                lg:flex lg:flex-wrap lg:justify-center lg:gap-6 my-8
              "
            >
              {dataPartner.map((data, index) => (
                <div
                  key={index}
                  className="w-full max-w-[120px] border border-gray-200 rounded-xl bg-[#fdf9e6]
                  shadow-sm sm:max-w-[160px] md:max-w-[200px] aspect-square flex items-center justify-center"
                >
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-contain rounded-lg"
                    style={{
                      backgroundImage: `url(${data?.image})`,
                    }}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
             initial={{ y: 300, opacity: 0 }}
             animate={{ y: 300, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true}}
             transition={{ duration: 1.3, ease: 'easeOut' }}
             className="flex flex-col items-center justify-center text-center">
              <div className="bg-[#fdf9e6] rounded-xl p-8 w-full lg:w-1/2 ">
                <div className="text-[18px] font-extrabold mb-4 text-black">Join Our Growing Partner Network</div>
                <div className="text-[16px] text-black mb-8">We're proud to collaborate with industry leaders across AI, technology infrastructure, digital transformation, and engineering solutions.</div>
                <button onClick={() => scrollTo('contact')} className="btn bg-[#fcd38a] border-none">Become a Partner <FaArrowRight size={20} className="text-white"/></button>
              </div>
            </motion.div>
        </div>
        <div className="pt-8 px-4 mb-8 lg:pt-16 lg:px-16 lg:mb-16">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true}}
            transition={{ duration: 1.3, ease: 'easeOut' }}
           className="grid grid-cols-12 lg:gap-16 gap-4">
            <div ref={contactRef} className="col-span-12 lg:col-span-6 order-1 lg:order-none">
              <div className="text-[18px] text-black mb-8">Get In Touch</div>
              <div className="text-[32px] text-black font-semibold mb-4">Contact Us</div>
              <div className="text-[14px] text-black text-justify mb-4">Ready to discuss your project? We'd love to hear from you.</div>
              <div className="border border-gray-300 p-8 flex flex-col items-center rounded-xl justify-center mb-8">
                 <MdOutlineEmail className="text-black" size={50}/>
                 <div className="text-black text-[14px] mb-2">Email Us</div>
                 <div className="text-black text-[12px] mb-8">Send us a message anytime</div>
                 <a href="mailto:halo@heliogic.sg" className="text-[18px] cursor-pointer text-blue-500">halo@heliogic.sg</a>
              </div>
              <div className="border border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center">
                  <FaLocationDot className="text-black" size={50}/>
                  <div className="text-black text-[14px] mb-2">Visi Our Office</div>
                  <div className="text-black text-[12px] mb-8">Located in Singapore's CBD</div>
                  <a href="#" className="text-[18px] text-blue-500">68 Circular Road, #02-01Singapore 049422</a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-none">
              <Maps />
            </div>
          </motion.div>
        </div>
        <div className="">
      <div className="w-full bg-[#fcd38a] py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 gap:gap-8 lg:gap-32 mx-auto px-6 text-black">
          <div className="col-span-12 md:col-span-3 xl:col-span-4 mb-4 lg:mb-0 xl:pl-32">
            <div className="text-[14px] font-extrabold mb-4">Contact US</div>
            <div>Email: halo@heliogic.sg</div>
            <div>Address: 68 Circular Road, #02-01Singapore 049422</div>
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
              <a href="#">Products</a>
              <a href="#">Partners</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
     open={open}
     onClose={closeModal}
    >
      <div className="flex items-center justify-start gap-6 mb-8">
        <div className="rounded-md bg-[#fcd38a] p-4 flex items-center justify-center">
          <AiFillProduct className="text-white" size={30}/>
        </div>
        <div className="text-[24px] text-black font-bold">{tempData.name}</div>
      </div>
      <div className="px-4 xl:px-8 grid grid-cols-12 gap-6 mb-4">
        <div className="col-span-12 xl:col-span-6">
          <div className="flex flex-col gap-4">
            {
              tempData.feature.map((item, index) => (
                <div className="flex items-center justify-start gap-2" key={index}>
                  <div className={`bg-[#fcd38a] rounded-xl p-4 items-center`}>
                    <item.icon size={20} className="text-white"/>
                  </div>
                  <div className="flex flex-col">
                    <div className={`font-semibold text-[14px] text-[${item.color}]`}>{item.title}</div>
                    <div className="text-black text-[12px]">{item.desc}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6">
          <div className="text-[30px] text-black font-semibold mb-8">{tempData.title}</div>
          <div className="text-[14px] text-black text-justify">{tempData.description}</div>
        </div>
      </div>
    </Modal>
    </BaseLayout>
  );
}
