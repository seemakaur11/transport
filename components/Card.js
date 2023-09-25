import React, { useState } from 'react';
import Image from 'next/image';
import { CARD } from '../utility/Card';

const Card = () => {
  return (
    <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 py-16' >
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 pb-16'>
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


        {/* <div>
          <Image src={card2} className='w-full h-72' alt="card2" width={350} height={350} />
        </div>
        <div>
          <Image src={card3} className='w-full h-72' alt="card3" width={350} height={350} />
        </div> */}
    

    </div>
  )
}

export default Card