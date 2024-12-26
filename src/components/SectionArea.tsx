import React from "react";
import Button from "./Button";

interface SectionAreaProps {
  title: string;
  children: React.ReactNode;
  image?: string;
  isButton?: boolean;
  id?: string;
}

const SectionArea: React.FC<SectionAreaProps> = ({
  title,
  children,
  image,
  isButton,
  id,
}) => {
  return (
    <section className="w-full h-full relative" id={id}>
      {image && (
        <img
          src={image}
          alt="Imagem"
          className="absolute w-full h-full object-cover object-right z-0"
        />
      )}
      <div
        className={`w-full h-full z-20 p-10 flex flex-col items-center gap-4 relative overflow-hidden md:px-40
        ${image ? "bg-gray-900 bg-opacity-50" : ""}
        `}
      >
        <div className="w-full max-w-4xl">
          <div className="w-20 h-1 bg-[#E2BD5F]"></div>
        </div>
        <h2
          className={`
            text-2xl md:text-3xl font-bold text-gray-900 w-full text-start max-w-4xl ${
              image ? "text-white" : ""
            }
            `}
        >
          {title}
        </h2>
        <div className="w-full h-[1px] bg-gray-400 mb-4 max-w-4xl"></div>
        {children}
        {isButton && (
          <div className="w-full flex justify-center pt-4">
            <Button title="Entre em contato" />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionArea;
