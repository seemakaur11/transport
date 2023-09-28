import React from 'react'
import { SERVICE } from '../utility/supportCard';
import Image from 'next/image';

const Service = () => {
    return (
        <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 py-16' >
            <div className='text-center' data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">
                <h1 className='text-amber-500 text-4xl font-black'>BEST LOGISTIC SERVICES</h1>
                <p className='text-[#808B8D] text-lg font-[400] pt-2'>A full range of quality logistic services:
                    Combine your business expertise and quality products with Dhrisha Logistics.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-7 pb-16' data-aos="fade-left" data-aos-duration="1000"  data-aos-once="true">
                {SERVICE.map((data, index) => {
                    return (
                        <div key={index} className='pt-7'>
                            <div className='relative'>
                                <Image src={data.img} className='w-full h-72 object-cover' alt="card1" width={350} height={350} />
                                <div className='absolute bottom-0 text-center bg-black/50 w-full h-10'>
                                    <h1 className='text-white text-xl font-medium py-1'>{data.text}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service