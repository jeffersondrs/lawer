import { useState } from "react";
import { Menu, Scale, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="text-white p-4 flex flex-row justify-evenly items-center h-20 absolute top-0 w-full z-30 bg-neutral-700/40 backdrop-blur-sm border-b border-gray-400">
      <nav className="grid grid-cols-2 justify-between items-center w-full">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
          alt="React logo"
          className="w-16 h-16"
        /> */}

        <div className="flex flex-row items-center space-x-2 w-full justify-center">
          <Scale size={40} className="border rounded-tr-md rounded-bl-md p-1" />
          <div className="flex flex-col items-start">
            <p className="text-xs w-full font-bold">Duarte & Moraes</p>
            <p className="text-[9px] font-extralight">Advocacia</p>
          </div>
        </div>
        <ul className="flex-row justify-evenly items-center hidden md:flex">
          <li className="mx-2 cursor-pointer relative">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="w-full h-full relative py-1 text-base"
            >
              Home
            </Link>
          </li>
          <li className="mx-2 cursor-pointer relative">
            <Link
              to="areas"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="w-full h-full relative py-1 text-base"
            >
              Área de atuação
            </Link>
          </li>
          <li className="mx-2 cursor-pointer relative">
            <Link
              to="sobre"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="w-full h-full relative py-1 text-base"
            >
              Sobre nós
            </Link>
          </li>
          <li
            className="cursor-pointer text-sm px-4 py-2 bg-gray-50 text-black rounded"
            onClick={toggleMenu}
          >
            Solicitar um contato
          </li>
        </ul>
        <div className="md:hidden flex justify-end items-center rounded-lg p-4">
          {!isMenuOpen && (
            <Menu size={35} className="cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </nav>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "100vh" : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-0 left-0 w-full bg-neutral-800/95 text-white overflow-hidden md:hidden`}
      >
        <X
          size={35}
          className="cursor-pointer absolute top-9 right-8"
          onClick={toggleMenu}
        />

        <ul className="flex flex-col items-center justify-center space-y-4 h-full text-lg px-4">
          <li className="cursor-pointer text-sm w-40 p-1">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="w-full h-full relative py-1 text-base"
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer text-sm w-40 p-1">
            <Link
              to="areas"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="w-full h-full relative py-1 text-base"
            >
              Área de atuação
            </Link>
          </li>
          <li className="cursor-pointer text-sm w-40 p-1">
            <Link
              to="sobre"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="w-full h-full relative py-1 text-base"
            >
              Sobre nós
            </Link>
          </li>
          <li
            className="cursor-pointer text-sm px-4 py-2 bg-gray-50 text-black rounded"
            onClick={toggleMenu}
          >
            Solicitar um contato
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
