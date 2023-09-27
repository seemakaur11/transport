import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import about from '../public/Images/about.jpg';
import mission from '../public/Images/mission.jpg';
import { OurClients } from './OurClients';

const About = () => {
    return (
        <div>
            <div className='bg-[#FAC952] w-full h-60'>
                <h1 className='text-center pt-20 text-black text-4xl' >About</h1>
                <div className='flex text-center justify-center pt-3'>
                    <Link href="/" className='text-lg text-green font-semibold'>Home / </Link>
                    <p className='text-white text-lg font-semibold'> About</p>
                </div>
            </div>
            <div className='lg:px-28 md:px-24 sm:px-16 xs:px-12 xxs:px-2 py-20' >
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <h1 className='text-3xl text-[#333333] font-medium'>Next Level of Logistic Services</h1>
                        <p className='text-base font-medium text-[#808B8D] py-2'>We are a supply chain solution provider offering services in Road Transportation, Warehousing, C and F. Its a family-owned business and was established by Sobhan Prakash Puvvada in 1984.</p>
                        <p className='text-base font-medium text-[#808B8D]'>M/s. Jayakumari Logistics Pvt. Ltd. started in the name of Jayakumari Enterprises, a Partnership Firm during the year 1985 was registered under the Register of Firms and later the firm converted into Pvt. Ltd.
                            Company in the name of M/s. Jayakumari Logistics Pvt. Ltd. During the year 2013 January,
                            the company is registered under the Companies Act., The company exclusively engaged in the
                            activity of the transport business and are the transport contractors for Hindustan Coca-Cola
                            products with a turnover of Rs.24 Crs per annum. The company having 120 fleet Trucks of its
                            own and leased 100 Trucks for transportation. The company business is flourishing day by day
                            by providing service to Hindustan Coca-Cola for their all units in Vijayawada, Vishakhapatnam,
                            Srikalahasti branches in Andra Pradesh and Hyderabad & Secunderabad in Telangana.</p>

                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                        <Image src={about} className='w-full h-full' alt="contact" width={550} height={500} />
                    </div>
                </div>
                {/* our mission */}
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-16 gap-7'>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                        <Image src={mission} className='w-full' alt="contact" width={350} height={350} />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <h1 className='text-2xl text-amber-500 font-medium'>Our Mission</h1>
                        <p className='text-base text-[#808B8D] py-2'>To expand the network of branches by opening new offices, appointing new franchisees, appointing business associates and striking strategic alliances.</p>
                        <p className='text-base text-[#808B8D]'>To build necessary infrastructure across the network.</p>
                        <p className='text-base text-[#808B8D]'>To improve the flow of information across the network with the help of information technology.</p>
                        <p className='text-base text-[#808B8D]'>To redefine systems and processes for continual improvement and eliminate all unproductive processes to achieve overall efficiency.</p>
                        <div>
                            <button className='mt-6 bg-amber-500 text-white font-normal py-3 px-3 text-base'><Link href='/contact'>Contact Us</Link></button>
                        </div>
                    </div>

                </div>
            </div>
            <OurClients />
        </div>
    )
}

export default About;