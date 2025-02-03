"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Brand = ({ brandData }) => {
  return (
    <div className="w-full">
      {/* Desktop Grid View - Hidden on Mobile */}
      <div className="hidden md:grid grid-cols-5 gap-8 mt-12">
        {brandData.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="w-44 h-32 object-contain"
            />
          </div>
        ))}
      </div>
      {/* Mobile Swiper - Visible only on Mobile */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {brandData.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center p-4">
              <img
                src={brand.image}
                alt={brand.name}
                className="block md:hidden w-auto h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 mt-8"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
