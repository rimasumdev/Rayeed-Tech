"use client";
import Top from "./top";
import Copyright from "./copyright";
const Footer = () => {
  return (
    <div className="w-full h-full">
      {/* Top Section */}
      <div className="w-full h-full bg-[#002045] text-white">
        <Top />
      </div>
      <div className="w-full h-full bg-[#00152D] text-white">
        <Copyright />
      </div>
      {/* Footer Section */}
    </div>
  );
};

export default Footer;
