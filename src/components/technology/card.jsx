"use client";

const Card = ({ data, className }) => {
  const { title, subtitle, description, paragraph, image } = data;

  // Common image component to reduce code duplication
  const ImageComponent = () => (
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover rounded-lg"
    />
  );

  return (
    <div
      className={`flex md:flex-col lg:flex-row h-auto lg:h-[550px] w-full p-8 bg-white gap-8 z-10 rounded-3xl relative ${className}`}
    >
      <div className="lg:w-1/2 md:w-full h-full flex justify-start md:justify-center">
        <div className="flex flex-col justify-start items-start gap-3 md:gap-6">
          <h4 className="text-[12px] md:text-[12px] lg:text-lg font-bold text-[#1F80F0] uppercase">
            {subtitle}
          </h4>
          <h2 className="text-3xl lg:text-[56px] leading-tight font-bold text-[#164377]">
            {title}
          </h2>
          <div className="block md:hidden">
            <ImageComponent />
          </div>
          <p className="font-bold text-[#164377] text-base max-w-xl">
            {description}
          </p>
          <p className="text-[#164377] text-base md:text-lg max-w-xl">
            {paragraph}
          </p>
        </div>
      </div>
      <div className="hidden md:block lg:w-1/2 h-full">
        <ImageComponent />
      </div>
    </div>
  );
};

export default Card;
