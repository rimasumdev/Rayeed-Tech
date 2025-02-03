"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Heading from "./heading";

const Cta = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      gsap.to(".parallax-bg", {
        x: -mouseX * 50,
        y: -mouseY * 50,
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
    <div className="relative w-full h-full flex justify-between">
      <div
        className=" w-full lg:h-[max(620px,_calc(92vh-49px))] pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] lg:overflow-hidden text-white flex flex-col justify-between cta-section"
        style={{
          background: "rgb(0,91,196)",
          background:
            "radial-gradient(59.82% 121.73% at -9.66% 130.31%,#00e9ea 0%,#1f80f0 52.08%,#005bc4 100%)",
        }}
      >
        <div className="z-10 w-full h-full container mx-auto flex flex-col justify-center px-8">
          <Heading />
        </div>

        {/* Light Background */}
        <div className="hidden lg:block absolute top-0 left-0 h-full object-contain parallax-bg">
          <img
            src="/light-patterns.png"
            alt="SVG Background"
            className="h-full object-contain"
          />
        </div>

        {/* Dark Background */}
        <div className="absolute inset-0 h-full lg:mix-blend-multiply parallax-bg">
          <img
            src="/dark-patterns.png"
            alt="SVG Background"
            className="h-full w-full object-contain lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
