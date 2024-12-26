import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    text: "Excelente serviço! Recomendo a todos. Muito obrigado pelo atendimento. Achei que não conseguiria resolver meu problema, mas vocês me ajudaram muito.",
    image:
      "https://images.unsplash.com/photo-1637684666451-423047d6bf5e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    text: "Atendimento impecável e muito profissional. Parabéns, equipe!",
    image:
      "https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Carlos Souza",
    text: "Estou extremamente satisfeito com o resultado. Minha empresa está segura graças a vocês.",
    image:
      "https://images.unsplash.com/photo-1559418162-0d309d8d10a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl overflow-hidden py-2">
      <div className="relative h-48 flex md:h-72  justify-center">
        <AnimatePresence>
          {testimonials.map((testimonial, index) =>
            index === currentIndex ? (
              <motion.div
                key={testimonial.id}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center justify-center max-w-xl gap-2 h-full max-h-60"
              >
                <div className="w-full flex justify-center items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i + 1 <= 5 ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <h5 className="text-gray-900 font-semibold text-sm">
                    - {testimonial.name}
                  </h5>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-900" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
