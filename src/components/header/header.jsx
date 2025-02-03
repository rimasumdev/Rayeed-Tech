"use client";

import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <div className="w-full lg:container mx-auto bg-[#1F80F0] lg:bg-transparent text-white px-0 lg:pt-4 lg:pb-8 sticky top-0 z-50">
      <Nav />
      <Hero />
    </div>
  );
};

export default Header;
