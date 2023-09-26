import React from 'react';
import Link from 'next/link';
import cnt_img from "../public/Images/contact.jpg";
import Image from 'next/image';

const Contact = () => {
    return (
        <div>
            <div className='bg-[#FAC952] w-full h-60'>
                <h1 className='text-center pt-20 text-black text-4xl' >Contact</h1>
                <div className='flex text-center justify-center pt-3'>
                    <Link href="/" className='text-lg text-green font-semibold'>Home / </Link>
                    <p className='text-white text-lg font-semibold'> Contact</p>
                </div>
            </div>
            <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 py-20' >
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                    <div>
                        <h1 className='text-2xl text-[#333333] font-medium'>Contact Us Form</h1>
                        <p className='py-8'>Please fill in the below details, Our marketing team will get in touch with you as soon as possible.</p>
                        <input type="text" className="mb-4 bg-transparent border-[1.5px] border-gray-300 text-black text-sm block w-full p-2.5 focus:outline-none focus:ring-green focus:border-green " placeholder="Your Name" required />
                        <input type="email" className="mb-4 bg-transparent border-[1.5px] border-gray-300 text-black text-sm block w-full p-2.5 focus:outline-none focus:ring-green focus:border-green " placeholder="Your Email" required />
                        <input type="text" className="mb-4 bg-transparent border-[1.5px] border-gray-300 text-black text-sm block w-full p-2.5 focus:outline-none focus:ring-green focus:border-green " placeholder="Your Phone" required />
                        <textarea type="text" className="bg-transparent border-[1.5px] border-gray-300 text-white text-sm block w-full h-[100px] p-2.5 focus:outline-none focus:ring-green focus:border-green " placeholder="Short Case Description" required />
                        <div>
                        <button className='mt-4 bg-amber-500 text-white font-normal py-3 px-3 text-sm'>SEND REQUEST</button>
                        </div>
                    </div>
                    <div >
                        <Image src={cnt_img} className='w-full h-full' alt="contact" width={550} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact