"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Heading = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const icon = iconRef.current;

    button.addEventListener("mouseenter", () => {
      gsap.to(text, {
        x: -2,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(icon, {
        x: 2,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to([text, icon], {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="lg:text-[80px] text-[30px] font-bold leading-tight">
        Legacy no longer
      </h1>
      <p className="font-base text-semibold leading-7">
        Talk to us to find out how we can transform your organisation for the
        future Contact Us
      </p>
      <button
        ref={buttonRef}
        className="flex justify-center items-center gap-2 self-center lg:self-start px-8 py-4 lg:w-fit w-full bg-[#FE8B53] text-white rounded-md font-semibold"
      >
        <span ref={textRef}>Contact Us</span>
        <ChevronRightIcon ref={iconRef} className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Heading;
