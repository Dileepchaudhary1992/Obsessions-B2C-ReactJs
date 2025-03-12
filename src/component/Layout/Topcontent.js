import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Topcontent = () => {
  const textSlides = [
    "Slide 1: Welcome to our website!",
    "Slide 2: Discover amazing features.",
    "Slide 3: Stay connected with us!",
    "Slide 4: Join our community today.",
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="bg-gray-100 p-6 rounded-lg shadow-lg" >
        {textSlides.map((text, index) => (
          <SwiperSlide key={index} className="text-center text-lg font-semibold text-center01">
            {text}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Topcontent;