import React from 'react';
import Image from 'next/image';
import locofy from "../public/Images/logo.png"
import { BiChevronRight } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 py-14'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          <div className='text-white'>
            <Image src={locofy} className="w-[200px] h-[80px] mt-[-8px]" width={200} height={90} alt="Logo" />
            <h1 className='text-lg font-bold my-3 '>Fast & safe shipping.Everywhere in India</h1>
            <p className='text-sm font-medium text-[#808B8D]'>We are the best supply chain solution provider in south India, offering services in Road Transportation, Warehousing, C and F.</p>
          </div>

          <div className='text-white'>
            <h1 className='text-xl font-bold mb-4'>Company</h1>
            <div className='flex mb-2.5'><BiChevronRight className='text-xl ml-[-4px] text-amber-500' /><p className='text-sm font-semibold ml-1'>Home</p></div>
            <div className='flex mb-2.5'><BiChevronRight className='text-xl ml-[-4px] text-amber-500' /><p className='text-sm font-semibold ml-1'>About</p></div>
            <div className='flex mb-2.5'><BiChevronRight className='text-xl ml-[-4px] text-amber-500' /><p className='text-sm font-semibold ml-1'>Service</p></div>
            <div className='flex mb-2.5'><BiChevronRight className='text-xl ml-[-4px] text-amber-500' /><p className='text-sm font-semibold ml-1'>Contact</p></div>
          </div>
          <div className='text-white'>
            <h1 className='text-xl font-bold mb-4'>Contact</h1>
            <div className='flex mb-2.5'><div><MdLocationOn className='text-xl mt-1 text-amber-500 ' /></div><p className='text-sm font-semibold ml-1'>426/C, steel Chamber Tower Steel Market, Near BSNL Exchange Kalamboli, Navi Mumbai 410218.MH</p></div>
            <div className='flex mb-2.5'><BsTelephoneFill className='text-lg text-amber-500' /><p className='text-sm font-semibold ml-2'>Office# 083699 12320</p></div>
            <div className='flex mb-2.5'><MdMail className='text-lg mt-1 text-amber-500' /><p className='text-sm font-semibold ml-2'>info@dhrishalogistics.com</p></div>
            <div className='flex mb-2.5'><MdMail className='text-lg mt-1 text-amber-500' /><p className='text-sm font-semibold ml-2'>www.dhrishalogistics.com</p></div>
            <div className='flex pt-2 relative'>
              <FaFacebookF className='mr-5  rounded-full border border-2-white text-4xl py-2 px-2.8 text-amber-500 cursor-pointer' />
              <FaTwitter className='mr-5 rounded-full border border-2-white text-4xl py-2 px-2.8 text-amber-500 cursor-pointer' />
              <FaInstagram className='mr-5 rounded-full border border-2-white text-4xl py-2 px-2.8 text-amber-500 cursor-pointer' />
              <FaLinkedinIn className='mr-5 rounded-full border border-2-white text-4xl py-2 px-2.8 text-amber-500 cursor-pointer' />
            </div>
          </div>
          <div className='text-white'>
            <h1 className='text-xl font-bold mb-3'>Newsletter</h1>
            <p className='text-sm font-medium text-[#808B8D]'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className='pt-3'>
              <input type='text' placeholder='Your email' className='w-full h-14 pl-4 outline-none border-2  border-green bg-white text-black' />
              <button className='bg-amber-500 text-white font-bold text-sm py-2.5 px-5  absolute lg:right-[9%] md:right-[12%] sm:right-[10%] xxs:right-[4%] mt-[6px]'>SignUp</button>
            </div>
          </div>
        </div>
        <div className='border-b-[1px] pt-3'>
        </div>
        <p className='text-[#808B8D] text-center my-2' >© Logistics & Fleet Owner</p>
        <p className='text-[#808B8D] text-center'>Email: arunjangra@dhrishalogistics.com</p>
      </div>
    </div>
  )
}

export default Footer