"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./philosophy.module.css";

import Card from "./card";

const Philosophy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ImageComponent = ({ src, className }) => (
    <img
      src={src}
      alt="philosophy"
      className={`w-full h-full object-contain rounded-lg ${className}`}
    />
  );
  const data = [
    {
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
      icon: "/Card/network.svg",
    },
    {
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
      icon: "/Card/idea.png",
    },
    {
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
      icon: "/Card/chip.svg",
    },
  ];
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <div className="container mx-auto w-full h-auto pt-12 px-8 md:px-8 pb-24 space-y-16">
      <div className="w-full h-full flex flex-col justify-center items-center gap-8">
        <p className="text-[12px] lg:text-lg font-bold sub-heading uppercase text-center">
          Our Philosophy
        </p>
        <h2 className="text-3xl lg:text-[56px] font-bold text-[#164377] text-center">
          Human-centred <br className="inline lg:hidden" /> innovation
        </h2>
      </div>
      <div className="flex gap-6">
        <ImageComponent
          src="/Philosophy/img.jpeg"
          className="hidden md:block"
        />
        <ImageComponent
          src="/Philosophy/img-mobile.jpeg"
          className="block md:hidden"
        />
      </div>
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch h-full">
        {data.map((item, index) => (
          <Card key={index} data={item} className="h-full" />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Philosophy;
