"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Features = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations for floating effect
    const icons = [".report-icon", ".home-icon", ".chart-icon"];

    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: "-=10",
        duration: 2,
        delay: index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // Parallax effect for background and overlay images
    gsap.to(".background-image", {
      scrollTrigger: {
        trigger: ".features-container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: 10,
      ease: "none",
    });

    gsap.to(".overlay-image", {
      scrollTrigger: {
        trigger: ".features-container",
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
      },
      y: -100,
      ease: "none",
    });
  }, []);

  return (
    <div
      className="w-full h-auto pt-[50px] md:pt-[100px] lg:pt-0 pb-[80px] lg:pb-[200px] features-section"
      style={{
        background: "rgb(0,91,196)",
        background:
          "linear-gradient(186deg, rgba(0,91,196,0) 52%, rgba(239,246,254,1) 100%)",
        // clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
      }}
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center container mx-auto px-4 md:px-8">
        {/* Text Section */}
        <div className="w-full h-full flex justify-start md:justify-center gap-6 md:gap-8 md:pt-20 lg:pt-28">
          <div className="flex flex-col justify-start items-start gap-3 md:gap-6 lg:gap-8">
            <h4 className="text-[12px] md:text-[12px] lg:text-lg font-bold text-[#1F80F0] tracking-wider">
              POWERING THE FUTURE OF FINANCE
            </h4>
            <h2 className="text-3xl lg:text-[56px] leading-tight font-bold text-[#164377]">
              Uncovering new
              <br className="hidden lg:inline" /> ways to delight customers
            </h2>
            {/* Image Section */}
            <div className="md:hidden relative w-full h-full flex  mt-8 md:mt-0">
              <div className="relative w-full h-full p-12 md:p-8 lg:p-28 rounded-3xl">
                {/* Background Image Container */}
                <div className="absolute top-[5%] right-[5%] w-[90%] h-[90%] background-image">
                  <img
                    src="/features/bg.svg"
                    alt="background"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay Image Container */}
                <div className="absolute bottom-[-30%] right-[5%] w-[80%] h-[80%] z-10 overlay-image">
                  <img
                    src="/features/overlay.png"
                    alt="overlay"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Main Image */}
                <img
                  src="/features/img.png"
                  alt="features"
                  className="relative w-full h-full object-contain drop-shadow-2xl md:drop-shadow-2xl"
                />
                {/* Icons */}
                <img
                  src="/features/report.svg"
                  alt="features"
                  className="absolute w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] lg:w-[73px] lg:h-[73px] report-icon"
                  style={{
                    top: "clamp(25%, 32%, 35%)",
                    left: "clamp(8%, 10%, 12%)",
                  }}
                />
                <img
                  src="/features/home.svg"
                  alt="features"
                  className="absolute w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] lg:w-[115px] lg:h-[115px] home-icon"
                  style={{
                    top: "clamp(18%, 22%, 25%)",
                    right: "clamp(6%, 8%, 10%)",
                  }}
                />
                <img
                  src="/features/chart.svg"
                  alt="features"
                  className="absolute w-[9vw] h-[9vw] md:w-[7vw] md:h-[7vw] lg:w-[86px] lg:h-[86px] chart-icon"
                  style={{
                    top: "clamp(40%, 45%, 48%)",
                    left: "clamp(18%, 22%, 25%)",
                  }}
                />
              </div>
            </div>
            <p className="font-bold text-[#164377] text-base max-w-xl">
              AnyTech is revolutionising financial technology by introducing
              <br className="hidden lg:inline" />
              innovative and real-time transaction account processing innovative
              and real-time transaction account processing capabilities,
              specifically designed for retail financial services.
            </p>
            <p className="text-[#164377] text-base md:text-lg max-w-xl">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="hidden relative w-full h-full md:flex  mt-8 md:mt-0">
          <div className="relative w-full h-full p-12 md:p-8 lg:p-28 rounded-3xl">
            {/* Background Image Container */}
            <div className="absolute top-[5%] right-[5%] w-[90%] h-[90%] background-image">
              <img
                src="/features/bg.svg"
                alt="background"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay Image Container */}
            <div className="absolute bottom-[-30%] right-[5%] w-[80%] h-[80%] z-10 overlay-image">
              <img
                src="/features/overlay.png"
                alt="overlay"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Main Image */}
            <img
              src="/features/img.png"
              alt="features"
              className="relative w-full h-full object-contain drop-shadow-2xl md:drop-shadow-2xl"
            />
            {/* Icons */}
            <img
              src="/features/report.svg"
              alt="features"
              className="absolute w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] lg:w-[73px] lg:h-[73px] report-icon"
              style={{
                top: "clamp(25%, 32%, 35%)",
                left: "clamp(8%, 10%, 12%)",
              }}
            />
            <img
              src="/features/home.svg"
              alt="features"
              className="absolute w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] lg:w-[115px] lg:h-[115px] home-icon"
              style={{
                top: "clamp(18%, 22%, 25%)",
                right: "clamp(6%, 8%, 10%)",
              }}
            />
            <img
              src="/features/chart.svg"
              alt="features"
              className="absolute w-[9vw] h-[9vw] md:w-[7vw] md:h-[7vw] lg:w-[86px] lg:h-[86px] chart-icon"
              style={{
                top: "clamp(40%, 45%, 48%)",
                left: "clamp(18%, 22%, 25%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
