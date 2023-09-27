import React from 'react';
import { GUIDE_INFO } from '../utility/supportCard';
import Image from 'next/image';

export const OurClients = () => {
  return (
    <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 pb-16' >
            <div className='text-center'>
                <h1 className='text-amber-500 text-4xl font-black uppercase'>Meet Our clients</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 py-14' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                {
                    GUIDE_INFO.length && GUIDE_INFO.map((data, index) => {
                        const { img, Icon1, Icon2, Icon3, name, info } = data;
                        return (
                            <div className='shadow-lg shadow-black/40' key={index}>
                            <div className='overflow-hidden relative'>
                                <Image src={img} className="w-full h-auto transition duration-300 ease-in-out hover:scale-110" width={500} height={500} alt="guide" />
                            </div>
                                <div className='flex relative justify-center  mt-[-18px]'>
                                 <span className='group'><Icon1 className='mx-1 bg-white hover:bg-amber-500 rounded-full border-b-2 text-amber-500 border-b-amber-500 text-4xl py-2 px-2.8 group-hover:text-white' /></span>
                                 <span className='group'><Icon2 className='mx-1 bg-white hover:bg-amber-500 text-amber-500 group-hover:text-white rounded-full border-b-2 border-b-amber-500 text-4xl py-2 px-2.8' /></span>
                                 <span className='group'><Icon3 className='mx-1 bg-white hover:bg-amber-500 text-amber-500 group-hover:text-white rounded-full border-b-2 border-b-amber-500 text-4xl py-2 px-2.8' /></span>
                                </div>
                                <div className='text-center py-5'>
                                    <h1 className='text-xl font-[800] text-[#2C3E50]'>{name}</h1>
                                    <p className='text-base text-[#808B8D] font-[500]'>{info}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
  )
}
