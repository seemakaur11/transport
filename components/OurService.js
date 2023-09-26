import React from 'react';
import Link from 'next/link';
import OurSolution from './OurSolution';
import Service from './Service';

const OurService = () => {
    return (
        <div>
            <div className='bg-[#FAC952] w-full h-60'>
                <h1 className='text-center pt-20 text-black text-4xl' >Our Service</h1>
                <div className='flex text-center justify-center pt-3'>
                    <Link href="/" className='text-lg text-green font-semibold'>Home / </Link>
                    <p className='text-white text-lg font-semibold'>Service</p>
                </div>
            </div>
            <div className='pt-16'>
            <OurSolution/>
            </div>
            <Service/>
        </div>
    )
}

export default OurService