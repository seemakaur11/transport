import React,{ useState } from 'react';
import card1 from "../public/Images/card1.jpg";
import card2 from "../public/Images/card2.jpg";
import card3 from "../public/Images/card3.jpg";
import Image from 'next/image';

const Card = () => {
  return (
    // <div className={`relative w-64 h-80 bg-white shadow-lg rounded-lg transition-transform duration-500 ease-in-out transform ${flipped ? 'rotate-y-180' : ''}`} onClick={toggleFlip}>
    //   <div className="absolute inset-0 w-full h-full bg-gray-200 p-4 front">
    //     <div className="flex items-center justify-center h-full">
    //       <div className="text-center">
    //         <img src={card1} alt="fgfgh" className="w-32 h-32 mx-auto mb-4 rounded-full" />
    //         <p className="text-lg font-semibold">seema dft vcbfdg</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute inset-0 w-full h-full bg-blue-500 text-white p-4 back">
    //     <div className="flex items-center justify-center h-full">
    //       <div className="text-center">
    //         <p className="text-lg font-semibold">seemayfs dfdiufer</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-28 px-28' >
        <div>
            <Image src={card1} className='w-30 h-80' alt="card1" width={350} height={300} />
        </div>
        <div>
            <Image src={card2} className='w-30 h-80' alt="card2" width={350} height={300} />
        </div>
        <div>
            <Image src={card3} className='w-30 h-80' alt="card3" width={350} height={300} />
        </div>
    </div>
  )
}

export default Card