import { CircleCheck } from "lucide-react";
import "./App.css";
import CardSectionArea from "./components/CardSectionArea";
import IntroSection from "./components/IntroSection";
import SectionArea from "./components/SectionArea";
import advogadoImage from "./assets/images/Advogado.png";
import sobrenos from "./assets/images/sobrenos.png";
import TestimonialCarousel from "./components/Carroucel";
import comopodemosajudar from "./assets/images/comopodemosajudar.png";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-100">
      <IntroSection />
      <SectionArea title="Nossas áreas de atuação" isButton id={"areas"}>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full max-w-4xl justify-center items-center gap-4">
          <CardSectionArea
            title="Direito Civil"
            description="Protegemos os direitos e interesses dos nossos clientes em questões relacionadas ao Direito Civil."
            image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardSectionArea
            title="Direito Penal"
            description="Direito Penal é o ramo do direito que regula as relações jurídicas entre as pessoas, sejam elas físicas ou jurídicas."
            image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardSectionArea
            title="Direito Trabalhista"
            description="Foi mandado embora? Não se preocupe, nós podemos te ajudar. Estamos aqui para garantir que seus direitos sejam respeitados."
            image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardSectionArea
            title="Direito Tributário"
            description="Pagar impostos é um dever, mas você não precisa pagar mais do que deve."
            image="https://images.unsplash.com/photo-1524633712235-22da046738b4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardSectionArea
            title="Direito Sucessório"
            description="Herança é um assunto delicado, mas estamos aqui para te ajudar."
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardSectionArea
            title="Direito Empresarial"
            description="Sua empresa está com problemas jurídicos? Nós podemos te ajudar."
            image="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </SectionArea>

      <SectionArea title="Sobre nós" image={sobrenos} id={"sobre"}>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl justify-center items-center gap-4">
          <div>
            <p className="text-base font-semibold text-white">
              Somos os melhores advogados do Brasil, com mais de{" "}
              <strong className="text-[#E2BD5F]">20 anos de experiência</strong>
            </p>
            <p className="text-base font-extralight text-white">
              Com mais de <strong>10.000 casos resolvidos</strong>, somos a
              melhor escolha para você. Nossa equipe é composta por
              profissionais altamente qualificados e dedicados a fornecer o
              melhor serviço possível.
            </p>
            <p className="text-base font-extralight text-white">
              Estamos comprometidos com a justiça e a defesa dos direitos dos
              nossos clientes, sempre buscando as melhores soluções jurídicas.
            </p>
            <ul className="text-base font-extralight grid grid-cols-2 justify-between items-center gap-4 py-2">
              <li className="flex items-center gap-1 text-sm text-white">
                <CircleCheck size={24} />
                Experiência
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <CircleCheck size={24} />
                Qualidade
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <CircleCheck size={24} />
                Comprometimento
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <CircleCheck size={24} />
                Profissionalismo
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <CircleCheck size={24} />
                Atendimento
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <CircleCheck size={24} />
                Resultados
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4 w-full py-4">
            <div className="border-[#E2BD5F] w-96 h-72 border-8 rounded-tr-3xl rounded-bl-3xl relative mt-4">
              <img
                src={advogadoImage}
                alt="Imagem"
                className="absolute -bottom-4 -right-4 w-80 object-cover h-80"
              />
            </div>
          </div>
        </div>
      </SectionArea>
      <div className="px-4 w-full -translate-y-8 md:-translate-y-0 z-30 h-24 md:h-40 md:mt-10 flex flex-col justify-center items-center">
        <div className="bg-[#02192D] rounded-2xl w-full max-w-4xl flex flex-row  items-center justify-center md:h-40 p-5">
          <div className="flex flex-row h-full items-center justify-center gap-2 w-full">
            <h1 className="text-[#E2BD5F] text-xl md:text-6xl font-bold">
              +15
            </h1>
            <div>
              <h3 className="text-sm md:text-xl text-white font-semibold">
                MIL
              </h3>
              <p className="text-xs md:text-sm text-white">
                Clientes atendidos
              </p>
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#E2BD5F]"></div>
          <div className="flex flex-row h-full items-center justify-center md:px-10 gap-2 w-full">
            <h1 className="text-[#E2BD5F] text-xl md:text-6xl font-bold">
              +25
            </h1>
            <div>
              <h3 className="text-sm md:text-xl text-white font-semibold">
                ANOS
              </h3>
              <p className="text-xs md:text-sm text-white">de Experiência</p>
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#E2BD5F]"></div>

          <div className="flex flex-row h-full justify-center items-center gap-2 w-full">
            <h1 className="text-[#E2BD5F] text-xl md:text-6xl font-bold">+5</h1>
            <div>
              <h3 className="text-sm md:text-xl text-white font-semibold">
                MIL
              </h3>
              <p className="text-xs md:text-sm text-white">Casos defendidos</p>
            </div>
          </div>
        </div>
      </div>
      <SectionArea
        title="O que os nossos clientes estão falando"
        id={"depoimentos"}
      >
        <TestimonialCarousel />
      </SectionArea>
      <div className=" w-full h-72 md:h-96 relative flex justify-center items-center">
        <img
          src={comopodemosajudar}
          alt="Imagem"
          className="absolute w-full h-full object-cover object-center z-0"
        />
        <div className="w-full h-full z-20 p-10 flex flex-col items-center justify-center relative overflow-hidden bg-gray-900 bg-opacity-50 gap-5">
          <h2
            className={`
              text-xl font-semibold text-white md:text-4xl
              `}
          >
            Como podemos te ajudar?
          </h2>

          <div className="w-full flex justify-center pt-4">
            <Button title="Fale conosco" variant="secondary" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
