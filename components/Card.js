import React from 'react';
import Image from 'next/image';
import CARD from '../utility/cards';
import { AiFillStar } from "react-icons/ai"
import SupportCard from './SupportCard';

const Card = () => {
  return (
    <div>
    <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2' >
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 pb-16' data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">
        {CARD.map((data, index) => {
          return (
            <div key={index} className='group w-full h-72 [perspective:1000px]'>
              <div className='relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className='absolute inset-0'>
                  <Image src={data.img} className='w-full h-72 object-cover shadow-xl shadow-black/40' alt="card1" width={350} height={350} />
                </div>
                <div className='absolute inset-0 h-full w-full bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <div className='text-start py-5 font-semibold'>
                    <h1 className='text-2xl'>{data.title}</h1>
                    <p className='font-[400] text-base mt-2'>{data.text}</p>
                    <button className='mt-4 bg-amber-500 font-normal py-2 px-3 text-sm hover:bg-neutral-900'>VIEW DETAILS</button>
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6' data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">
        <div className=''>
          <h1 className='text-2xl text-[#333333] font-semibold'>JK LOGISTICS</h1>
          <h1 className='pt-7 text-lg text-[#333333] font-medium'>Fast & safe shipping. Every time. Everywhere.</h1>
        </div>
        <div className='w-full'>
          <div className='flex pb-3'>
            <span className='bg-[#fac952] text-white rounded-sm p-1 h-[30px] text-lg'><AiFillStar className='' /></span>
            <div>
              <h1 className='ml-3 text-[#333333] text-[18px] font-medium'>Careful handling of valuable goods</h1>
            </div>
          </div>
          <div className='flex pb-3'>
            <span className='bg-[#fac952] text-white rounded-sm p-1 text-lg'><AiFillStar className='' /></span>
            <div>
              <h1 className='ml-3 text-[#333333] text-[18px] font-medium'>Competitive Pricing</h1>
            </div>
          </div>
          <div className='flex'>
            <span className='bg-[#fac952] text-white rounded-sm p-1 text-lg'><AiFillStar className='' /></span>
            <div>
              <h1 className='ml-3 text-[#333333] text-[18px] font-medium'>24/7 Technical support</h1>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex pb-3'>
            <span className='bg-[#fac952] text-white rounded-sm p-1 text-lg'><AiFillStar className='' /></span>
            <div>
              <h1 className='ml-3 text-[#333333] text-[18px] font-medium'>GPS tracking solutions</h1>
            </div>
          </div>
          <div className='flex pb-3'>
            <span className='bg-[#fac952] text-white rounded-sm p-1 text-lg'><AiFillStar className='' /></span>
            <div>
              <h1 className='ml-3 text-[#333333] text-[18px] font-medium'>Hassle free management</h1>
            </div>
          </div>
          <div className='flex'>
            <span className='bg-[#fac952] text-white rounded-sm p-1 text-lg'><AiFillStar className='' /></span>
            <div>
              <h1 className='ml-3 text-[#333333] text-[18px] font-medium'>Minimal processing times</h1>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <SupportCard/> 
    </div>
  )
}

export default Card