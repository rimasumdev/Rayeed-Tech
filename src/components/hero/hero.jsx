"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Heading from "./heading";

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      gsap.to(".parallax-bg", {
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".parallax-bg-reverse", {
        x: mouseX * 50,
        y: mouseY * 50,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative top-0 left-0 w-full h-full flex justify-between">
      <div
        className="absolute top-0 left-0 w-full lg:h-[max(620px,_calc(92vh-49px))] h-[620px] pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] lg:overflow-hidden text-white flex flex-col justify-between hero-section"
        style={{
          background: "rgb(0,91,196)",
          background:
            "radial-gradient(59.82% 121.73% at -9.66% 130.31%,#00e9ea 0%,#1f80f0 52.08%,#005bc4 100%)",
        }}
      >
        <div className="z-10 w-full h-full container mx-auto flex flex-col justify-center px-8">
          <Heading />
        </div>

        {/* Main Background Image */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-900">
          <div
            className="pt-64 absolute bottom-0 right-0 lg:inset-0 bg-cover bg-right bg-no-repeat w-full h-full"
            style={{
              backgroundImage: "url(/hero-bg.jpeg)",
              backgroundPosition: "bottom right",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Mobile Hero Background Image */}
        <div
          className="lg:hidden mt-16"
          style={{
            clipPath: "polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)",
          }}
        >
          <img
            src="/hero-bg.jpeg"
            alt="Hero background"
            className="object-contain "
            style={{
              objectPosition: "center center",
            }}
          />
        </div>
        {/* Background Gradient */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 75% 0, 33% 100%, 0% 100%)",
            background: "rgb(0,91,196)",
            background:
              "radial-gradient(59.82% 121.73% at -9.66% 130.31%,#00e9ea 0%,#1f80f0 52.08%,#005bc4 100%)",
          }}
        />

        {/* Top-right SVG Background */}
        <div className="absolute top-0 right-0">
          <img
            src="/Top-Right.svg"
            alt="SVG Background"
            className="w-full h-full "
          />
        </div>

        {/* Bottom-right SVG Background */}
        <div className="hidden lg:block absolute bottom-0 right-0">
          <img src="/Bottom-Right.svg" alt="SVG Background" className="w-96" />
        </div>

        {/* Top-right Background */}
        <div className="hidden lg:block absolute -top-10 -right-10 parallax-bg-reverse">
          <img
            src="/Top-Right-Background.svg"
            alt="SVG Background"
            className="w-full object-cover"
          />
        </div>

        {/* Light Background */}
        <div className="hidden lg:block absolute top-0 left-0 h-full object-contain parallax-bg">
          <img
            src="/background-light.svg"
            alt="SVG Background"
            className="h-full object-contain"
          />
        </div>

        {/* Dark Background */}
        <div className="absolute inset-0 h-full lg:mix-blend-multiply parallax-bg">
          <img
            src="/background-dark.svg"
            alt="SVG Background"
            className="h-full w-full object-contain lg:object-cover"
          />
        </div>
        {/* Mobile Dark Background */}
        <div className="lg:hidden absolute inset-0 h-full lg:mix-blend-multiply parallax-bg">
          <img
            src="/background-dark.svg"
            alt="SVG Background"
            className="h-full w-full object-contain lg:object-cover"
          />
        </div>
        {/* Mobile Light Background */}
        <div className="lg:hidden absolute inset-0 h-full lg:mix-blend-multiply parallax-bg">
          <img
            src="/background-light.svg"
            alt="SVG Background"
            className="h-full w-full object-contain lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
