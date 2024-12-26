import React from "react";

interface CardSectionAreaProps {
  title: string;
  description: string;
  image: string;
}

const CardSectionArea: React.FC<CardSectionAreaProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col items-center max-w-72 cursor-pointer mb-4 overflow-hidden">
      <div className="relative rounded-lg overflow-hidden h-32 md:h-72 w-full group">
        <img
          src={image}
          alt={title}
          className="rounded-lg h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <h2 className="font-bold text-sm w-full text-start my-1 md:text-base">
        {title}
      </h2>
      <p className="font-normal text-xs w-full text-start text-gray-500 md:text-sm">
        {description}
      </p>
    </div>
  );
};

export default CardSectionArea;
