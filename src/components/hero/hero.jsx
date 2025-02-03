"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Heading from "./heading";
import SVGComponent from "./bg-svg";
const Hero = () => {
  useEffect(() => {
    // Initial animation on page load
    gsap.fromTo(
      ".parallax-bg",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      ".dark-bg",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".parallax-bg-reverse",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Mouse move animation
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
        <div className="z-20 w-full h-full container mx-auto flex flex-col justify-center px-8">
          <Heading />
        </div>

        {/* Main Background Image */}
        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full">
          <img
            src="/hero-bg.jpeg"
            alt="Hero background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center right",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              background: "url(/hero-bg.jpeg)",
              clipPath:
                "polygon(67% 0px, 100% 0px, 100% 68%, 80% 100%, 0px 100%, 32% 51%)",
            }}
          />
          {/* Overlay Gradient For Image Top Right */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(200deg, rgba(25,120,229,1) 8%, rgba(1,69,145,0) 27%)",
            }}
          ></div>
        </div>

        {/* Mobile Hero Background Image */}
        <div
          className="lg:hidden mt-16 z-10"
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
        <div className="hidden lg:block absolute -top-32 -right-16 parallax-bg-reverse">
          <img
            src="/Top-Right-Background.svg"
            alt="SVG Background"
            className="w-full object-contain"
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
        <div className="absolute inset-0 h-full lg:mix-blend-multiply dark-bg parallax-bg">
          <img
            src="/background-dark.svg"
            alt="SVG Background"
            className="h-full w-full object-contain lg:object-cover"
          />
        </div>
        {/* Mobile Dark Background */}
        <div className="lg:hidden absolute inset-0 h-full lg:mix-blend-multiply parallax-bg">
          <img
            src="/mobilebg.svg"
            alt="SVG Background"
            className="object-contain w-full h-full"
          />
        </div>
        {/* Mobile Light Background */}
        {/* <div className="lg:hidden absolute inset-0 h-full lg:mix-blend-multiply parallax-bg">
          <img
            src="/m1.svg"
            alt="SVG Background"
            className="object-contain w-[50%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
