import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { LOGO } from '@/utils/constants';

function Navbar({scrollTo}: {scrollTo: (id: string) => void}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
     <div className={`fixed top-0 left-0 z-50 ${!open ? 'border border-b-gray-200' : ''}  w-full p-4 lg:px-16 lg:py-8 flex items-center justify-between lg:justify-start bg-white/20
    backdrop-blur-md h-24`}>
      <div className="w-[50px] h-[65px] object-contain p-0" style={{
        backgroundImage: `url(${LOGO})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></div>
      <div className='hidden lg:block absolute top-10 left-1/2 -translate-x-1/2'>
        <div className=' flex items-center justify-end gap-20'>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('home')
        }} className='text-[14px] font-semibold text-black cursor-pointer transition-transform duration-300 hover:scale-150 hover:text-[#f59b00]'>Home</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('about')
        }} className='text-[14px] font-semibold text-black cursor-pointer transition-transform duration-300 hover:scale-150 hover:text-[#f59b00]'>About</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('product')
        }} className='text-[14px] font-semibold text-black cursor-pointer transition-transform duration-300 hover:scale-150 hover:text-[#f59b00]'>Products</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('partner')
        }} className='text-[14px] font-semibold text-black cursor-pointer transition-transform duration-300 hover:scale-150 hover:text-[#f59b00]'>Partners</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('contact')
        }} className='text-[14px] font-semibold text-black cursor-pointer transition-transform duration-300 hover:scale-150 hover:text-[#f59b00]'>Contact</a>
      </div>
    </div>
    <div className='block lg:hidden'>
        <button className='btn btn-circle border border-gray-400 bg-transparent' onClick={() => setOpen(!open)}>
          {
          !open && (
            <GiHamburgerMenu size={20} className='text-gray-400 cursor-pointer' />
          )
        }
        {
          open && (
            <IoMdClose size={20} className='text-gray-400 cursor-pointer'/>
          )
        }
        </button>
      </div>
    </div>
    <div className={`${open ? 'block' : 'hidden'} rounded-bl-md rounded-br-md py-8 fixed top-20 left-0 w-full z-50 lg:hidden xl:hidden 2xl:hidden bg-white/30 backdrop-blur-md mt-4 flex flex-col items-center justify-center gap-4 transition-all duration-500 ease-in-out`}>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('home')
        }} className='text-[14px] font-semibold text-black cursor-pointer'>Home</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('about')
        }} className='text-[14px] font-semibold text-black cursor-pointer'>About</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('product')
        }} className='text-[14px] font-semibold text-black cursor-pointer'>Products</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('partner')
        }} className='text-[14px] font-semibold text-black cursor-pointer'>Partners</a>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          scrollTo('contact')
        }} className='text-[14px] font-semibold text-black cursor-pointer'>Contact</a>
      </div>
    </>
  )
}

export default Navbar