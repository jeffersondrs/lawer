import { motion } from "framer-motion";
import { useState } from "react";
import reactLogo from "../assets/images/imageinitial.png";
import Header from "./Header";
import { MouseIcon, MoveRight, Scale } from "lucide-react";

const IntroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const calcTransform = (value: number, max: number, scale: number) =>
    ((value / max) * 2 - 1) * scale;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden max-w-screen-2xl home"
    >
      <Header />
      <motion.img
        src={reactLogo}
        alt="Imagem de fundo"
        className="absolute w-full h-full object-cover md:object-center object-right z-0"
        style={{
          x: calcTransform(mousePosition.x, window.innerWidth, 20),
          y: calcTransform(mousePosition.y, window.innerHeight, 10),
          scale: 1.2,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 180,
        }}
      />

      <div className="flex items-center justify-center text-white flex-col z-20 w-full h-full bg-gray-900 bg-opacity-60 relative overflow-hidden gap-4">
        <div className="ml-4 flex flex-row items-center justify-center space-x-2 w-full">
          <Scale
            size={50}
            className="border-4 rounded-tr-md rounded-bl-md p-1"
          />
          <div className="flex flex-col items-start">
            <p className="text-sm w-full font-semibold">Duarte & Moraes</p>
            <p className="text-xs font-extralight text-center w-full">
              Advocacia
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-medium w-96 md:w-full text-center md:max-w-5xl md:text-6xl">
          Seu direito e a sua tranquilidade Jurídica é a nossa Missão
        </h2>
        <div className="flex flex-row items-center justify-center gap-2">
          <p className="md:text-2xl w-full text-center text-sm">
            Fale com um dos nossos advogados
          </p>
          <MoveRight className="hover:translate-x-2 transform ease-in-out duration-300 cursor-pointer" />
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <MouseIcon />
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
