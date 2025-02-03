"use client";
import { useState, useEffect } from "react";
import Brand from "./brand";

const FunFact = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [brandData, setBrandData] = useState([]);
  //   console.log(brandData);

  useEffect(() => {
    fetch("/brandData.json")
      .then((res) => res.json())
      .then((data) => setBrandData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => (prev < 20 ? prev + 1 : prev));
    }, 100);

    const interval2 = setInterval(() => {
      setCount2((prev) => (prev < 40 ? prev + 1 : prev));
    }, 50);

    const interval3 = setInterval(() => {
      setCount3((prev) => (prev < 200 ? prev + 1 : prev));
    }, 20);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="container mx-auto h-auto py-32 lg:py-64 flex flex-col justify-center items-center gap-4">
      <div className="w-full h-full flex flex-col justify-center items-center gap-8 lg:gap-12">
        <p className="text-xl flex-col lg:text-2xl font-bold sub-heading uppercase text-center px-4">
          TECHNOLOGY BUILT FOR YOU
        </p>
        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-28">
          <div className="flex md:flex-col justify-center items-center gap-4">
            <div className="text-5xl lg:text-7xl font-bold flex justify-center items-center gap-2">
              <span className="bg-gradient-to-b from-blue-400 to-blue-900 bg-clip-text text-transparent">
                &gt;{count1}
              </span>
            </div>
            <div className="text-base lg:text-lg font-semibold text-center">
              Years of Experience
            </div>
          </div>

          <div className="flex md:flex-col justify-center items-center gap-4">
            <div className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-b from-blue-400 to-blue-800 bg-clip-text text-transparent">
                {count2}+
              </span>
            </div>
            <div className="text-base lg:text-lg font-semibold text-center">
              Financial Institutions
            </div>
          </div>

          <div className="flex md:flex-col justify-center items-center gap-4">
            <div className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-b from-blue-400 to-blue-800 bg-clip-text text-transparent">
                &gt;{count3}m
              </span>
            </div>
            <div className="text-base lg:text-lg font-semibold text-center">
              Customers Each
            </div>
          </div>
        </div>
        <Brand brandData={brandData} />
      </div>
    </div>
  );
};

export default FunFact;
