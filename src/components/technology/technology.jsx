"use client";
import { useEffect, useState, useRef } from "react";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./technology.module.css";

// Add this CSS right after the imports
const paginationStyle = {
  ".swiper-pagination-bullet": {
    backgroundColor: "#164377",
    opacity: "0.5",
    width: "10px",
    height: "10px",
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: "#164377",
    opacity: "1",
  },
};

const Technology = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const swiperRef = useRef(null);
  const data = [
    {
      title: "Purpose-built financial services",
      subtitle: "Customer focused",
      description:
        "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      paragraph:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
      image: "/Future/fucus.jpg",
    },
    {
      title: "Agile and adaptable for growth",
      subtitle: "Agile and adaptable",
      description:
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      paragraph:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      image: "/Future/agile.jpg",
    },
    {
      title: "Manage compliance with ease",
      subtitle: "Compliance ready",
      description:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      paragraph:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
      image: "/Future/compliance.png",
    },
    {
      title: "Highly secure and safe",
      subtitle: "Secure and safe",
      description:
        "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      paragraph:
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
      image: "/Future/secure.jpg",
    },
  ];
  const btnData = [
    {
      title: "Customer focused",
    },
    {
      title: "Agile and adaptable",
    },
    {
      title: "Compliance ready",
    },
    {
      title: "Secure and safe",
    },
  ];
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Add autoplay sync with buttons
    const interval = setInterval(() => {
      const nextIndex = (selectedButton + 1) % data.length;
      setSelectedButton(nextIndex);
      swiperRef.current.swiper.slideTo(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedButton]);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div
      className="w-full h-auto features-section"
      style={{
        background: "rgb(0,91,196)",
        background:
          "linear-gradient(186deg, rgba(0,91,196,0) 0%, rgba(239,246,254,1) 59%)",
      }}
    >
      <div className="md:container mx-auto w-full h-auto pb-[80px] lg:pb-[200px] lg:space-y-10 drop-shadow-2xl">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-12">
          <p className="text-[12px] lg:text-lg font-bold sub-heading uppercase text-center">
            TECHNOLOGY BUILT FOR YOU
          </p>
          <h2 className="text-3xl lg:text-[56px] font-bold text-[#164377] text-center">
            The future of finance
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {btnData.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`flex justify-center items-center text-lg font-bold rounded-full lg:px-16 py-4 
              ${
                selectedButton === index
                  ? "bg-[#B9D9FF] text-[#2E88F1]"
                  : "hover:bg-[#B9D9FF]/20 hover:text-[#2E88F1]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Slider for all screen sizes */}

        <Swiper
          ref={swiperRef}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          className="h-full"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-auto lg:h-[550px] p-4">
                <Card data={item} className="h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
              ${
                selectedButton === index
                  ? "bg-[#164377] scale-125"
                  : "bg-[#164377]/50 hover:bg-[#164377]/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
