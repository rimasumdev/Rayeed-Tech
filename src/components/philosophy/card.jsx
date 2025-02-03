"use client";

const Card = ({ data, className }) => {
  const { title, description, icon } = data;
  return (
    <div
      className={`h-full p-6 bg-[#F8FCFF] rounded-lg shadow-md flex flex-col ${className}`}
    >
      <div className="card-body flex flex-col gap-7">
        <img src={icon} alt={title} className="w-10 h-10" />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
