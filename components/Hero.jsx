import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    img: "url('/Images/truck2.jpg')",
    head: "Dhrisha Logistics",
    text: "We don't just carry your load,we carry your faith",
  },
  {
    id: 2,
    img: "url('/Images/truck1.jpg')",
    head: "Custom transport solutions",
    text: "To suit your specific business needs",
  },
  {
    id: 3,
    img: "url('/Images/truck3.jpg')",
    head: "ROBUST MOBILE APP",
    text: "Own Delivery Management & Package Tracker App",
  },
  {
    id: 4,
    img: "url('/Images/truck4.jpg')",
    head: "Affordable road freight",
    text: "Get 10% off for all road transport services!",
  },
];

import { EffectFade, Navigation, Pagination } from "swiper/modules";

function Hero() {
  return (
    <div style={{ height: "100vh",width:"100%" }}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="h-[75%] md:h-[70%] lg:h-[80%]"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center`}
                style={{ backgroundImage: slide.img }}
              >
                <div className="text-white text-center">
                  <h1 className="text-base sm:text-6xl xxs:text-4xl  lg:text-7xl font-bold text-white">
                    {slide.head}
                  </h1>
                  <p className="text-base sm:text-2xl lg:text-3xl text-amber-500 font-semibold mt-3">
                    {slide.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero