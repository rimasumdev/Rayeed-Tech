"use client";
const Copywrite = () => {
  return (
    <div className="container mx-auto text-center text-sm text-blue-500 min-h-[67px] p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <p>
          <span className="text-blue-500">©2023 All rights reserved. </span>
          Any Technology Pte Ltd.
        </p>
        <p className="flex gap-4">
          <span className="text-base">Privacy Policy</span>
          <span className="text-base">
            <a href="https://www.rimasum.com">Developed by Rimasum</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Copywrite;
