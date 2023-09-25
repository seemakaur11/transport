import React from 'react';
import Image from "next/image";
import truck1 from "../public/Images/truck1.jpg";
import truck2 from "../public/Images/truck2.jpg";
import truck3 from "../public/Images/truck3.jpg";
import truck4 from "../public/Images/truck4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

const Hero = () => {
    const slides = [
        {
            id: 1,
            img: "url('/Images/truck2.jpg')",
            head: "jk Logistics",
            text: "We don't just carry your load,we carry your faith"
        },
        {
            id: 2,
            img: "url('/Images/truck1.jpg')",
            head: "Custom transport solutions",
            text: "To suit your specific business needs"
        },
        {
            id: 3,
            img: "url('/Images/truck3.jpg')",
            head: "ROBUST MOBILE APP",
            text: "Own Delivery Management & Package Tracker App"
        },
        {
            id: 4,
            img: "url('/Images/truck4.jpg')",
            head: "Affordable road freight",
            text: "Get 10% off for all road transport services!"
        }
    ]
    return (
        <section className="relative h-screen">
            <Swiper
                //spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-full"
                
            >
                {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                        <div
                            className={`h-full w-full bg-cover bg-center  flex items-center justify-center`}
                            style={{ backgroundImage: slide.img }}
                        >
                            <div className="text-white text-center">
                                <h1 className="text-7xl font-bold text-white">{slide.head}</h1>
                                <p className="text-3xl text-amber-500 font-semibold mt-3">{slide.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                }
                    
    
                )}
            </Swiper>
        </section>
    )
}

export default Hero