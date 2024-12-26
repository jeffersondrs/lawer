import { Mail, Phone, Scale } from "lucide-react";
import { PiNavigationArrow } from "react-icons/pi";
import Button from "./Button";

const Footer = () => {
  return (
    <footer
      className="grid 
    grid-cols-1 md:grid-cols-2 grid-rows-1 md:py-10
    bg-[#02192D] text-white w-full px-8"
    >
      <div className="flex flex-col w-full items-start md:items-end justify-center md:justify-start gap-6">
        <div className="flex flex-row items-end md gap-2 w-full py-8 max-w-80">
          <div className="border-[#E2BD5F]  border-4 rounded-tr-xl rounded-bl-xl p-1">
            <Scale size={48} color={"#E2BD5F"} />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[#E2BD5F] text-sm w-16 font-bold">
              Duarte & Moraes
            </p>
            <p className="text-[#E2BD5F] text-xs font-extralight">Advocacia</p>
          </div>
        </div>
        <ul className="flex gap-6 md:gap-10 flex-col w-full items-start max-w-80 md:justify-start">
          <li className="text-white text-sm grid grid-flow-col gap-6">
            <div className="flex items-center gap-2 justify-center">
              <Phone size={28} />
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-white text-sm tracking-wider">Contato</p>
              <p className="text-white text-xs font-extralight tracking-widest">
                (11) 99999-9999
              </p>
            </div>
          </li>
          <li className="text-white text-sm grid grid-flow-col gap-6">
            <div className="flex items-center gap-2 justify-center">
              <Mail size={28} />
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-white text-sm tracking-wider">Email</p>
              <p className="text-white text-xs font-extralight tracking-widest">
                contato@duarteemoraes.com
              </p>
            </div>
          </li>
          <li className="text-white text-sm grid grid-flow-col gap-6">
            <div className="flex items-center gap-2 justify-center">
              <PiNavigationArrow size={28} />
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-white text-sm tracking-wider">Endereço</p>
              <p className="text-white text-xs font-extralight tracking-widest">
                Rua dos Contatos, 123
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-gray-400 my-4 md:hidden"></div>
      <div className="flex flex-col w-full items-center justify-center max-w-96">
        <div className="grid grid-cols-2 py-4 items-start justify-between w-full gap-4">
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <h2 className="font-bold mb-2">Navegação</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-extralight">Home</p>
              </li>
              <li>
                <p className="font-extralight">Área de Atuação</p>
              </li>
              <li>
                <p className="font-extralight">Sobre</p>
              </li>
              <li>
                <p className="font-extralight">Contato</p>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <h2 className="font-bold mb-2">Ajuda</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-extralight">Suporte ao Cliente</p>
              </li>
              <li>
                <p className="font-extralight">Termos & Condições</p>
              </li>
              <li>
                <p className="font-extralight">Política de Privacidade</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-400 my-4 md:hidden"></div>
        <div className="w-full flex flex-col items-center justify-center gap-6 h-full">
          <h2 className="text-md font-bold w-full pl-2 my-2 md:p-0">
            Inscreva-se na nossa Newsletter
          </h2>
          <p>
            Ultimas notícias, artigos e informações sobre a Duarte & Moraes
            Advocacia
          </p>
          <form className="flex w-full py-2 mt-2 h-16">
            <input
              type="email"
              placeholder="Digite seu email"
              className="p-2 rounded-l-md w-full text-gray-900"
            />
            <Button title='Inscrever' />
          </form>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400 my-4 col-span-2"></div>
      <div className="w-full flex items-center justify-center gap-4 py-4 flex-col col-span-2">
        <p className="text-xs font-extralight">
          © 2024 Duarte & Moraes Advocacia. Todos os direitos reservados.
        </p>
        <p
          className="text-xs font-extralight cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          Desenvolvido por{" "}
          <a
            href="https://www.jeffersondrs.dev"
            target="_blank"
            rel="noopener"
            className="text-[#E2BD5F]"
          >
            Jefferson Santos
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
