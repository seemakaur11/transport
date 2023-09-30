import React from 'react';
import Image from 'next/image';
import Map from './Map';

const slides = [
    {
        id: 1,
        img: '/Images/pm1.jpeg'
    },
    {
        id: 2,
        img: '/Images/pm3.jpeg'
    },
    {
        id: 3,
        img: '/Images/pm6.jpeg'
    },
    {
        id: 4,
        img: '/Images/pm4.jpeg'
    },
    {
        id: 5,
        img: '/Images/pm5.jpeg'
    },

    {
        id: 6,
        img: '/Images/pm22.png'
    }
]

export const OurClients = () => {

    return (
            <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 pb-16' >
            <div className='text-center pb-7'>
                <h1 className='text-amber-500 text-4xl font-black'>OUR CLIENTS</h1>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-7 text-center justify-center'>
                    {slides.map((slide, index) => {
                        return (
                            <div key={index}>
                                <Image src={slide.img} className='lg:w-[70%] md:w-[80%] sm:w-[100%] xxs:w-[100%] h-[140px]' alt='slide' width={250} height={250} />
                            </div>

                        );
                    })}
                </div>

            </div>
    )
}
