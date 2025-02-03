"use client";
const Top = () => {
  return (
    <footer className="container mx-auto footer text-white p-10 flex flex-col md:flex-row justify-between items-center min-h-[145px] gap-6 md:gap-0">
      <aside>
        <img
          src="/site_logo.svg"
          alt="logo"
          className="w-[150px] md:w-[200px] h-auto md:h-[32px]"
        />
      </aside>
      <nav className="flex flex-col md:flex-row items-center gap-4">
        <h6 className="text-[#00e9ea] text-lg font-semibold md:border-r border-white md:pr-4">
          Our Solutions
        </h6>
        <a className="hover:text-blue-500 cursor-pointer">AnyCaaS</a>
        <a className="hover:text-blue-500 cursor-pointer">AnyBaaS</a>
        <a className="hover:text-blue-500 cursor-pointer">AnySaaS</a>
      </nav>
    </footer>
  );
};

export default Top;
