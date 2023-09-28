import React from 'react';
import { SUPPORT } from '../utility/supportCard';

const SupportCard = () => {
  return (
    <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 pt-10 pb-16'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 text-center justify-center' data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000"  data-aos-once="true">
            {
                SUPPORT.map((data,index) =>{
                    const {Icon,head, text} = data
                    return (
                        <div key={index} className='group py-7 px-7 hover:bg-[#fac952] bg-[#f5f5f5] shadow-xl shadow-black/40'>
                           <div className='flex justify-center'>
                           <Icon className='text-[#fac952] text-5xl group-hover:text-white'/>
                           </div>
                            <h1 className='py-2 text-[#333333] text-xl font-semibold group-hover:text-white'>{head}</h1>
                            <p className='text-[#808B8D] group-hover:text-white text-base font-[400]'>{text}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SupportCard