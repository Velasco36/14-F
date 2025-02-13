import Lottie from "lottie-react";
import { useState } from "react";
import animationData from "./assets/animate/Animation-14F.json";

const pages = [
  {
    type: "text",
    text: "Desde el primer día que te vi, supe que había encontrado a alguien especial. Eres mi alegría, mi paz y mi más dulce inspiración. 💕",
    image: "https://source.unsplash.com/400x400/?love,couple",
  },
  {
    type: "text",
    text: "No hay palabras suficientes para describir cuánto te amo. Cada día a tu lado es un regalo que atesoro con todo mi corazón. ❤️",
    image: "https://source.unsplash.com/400x400/?heart,romance",
  },
  {
    type: "text",
    text: "Feliz San Valentín, mi amor. Que este día sea solo uno de muchos llenos de felicidad y amor eterno. 💘",
    image: "https://source.unsplash.com/400x400/?valentine,roses",
  },
  {
    type: "animation",
    text: "te amo mucho feliz dia  💘",
    content: <Lottie animationData={animationData} loop={true} />,
  },
];

const LoveLetter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flip, setFlip] = useState(false);

const handleNextPage = () => {
  setFlip(true);
  setTimeout(() => {
    // Cambiar a la siguiente página, reiniciando cuando se llega al final
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    setFlip(false);
  }, 600); // tiempo que dura la animación
};
  return (
    <div className="flex justify-center items-center h-screen bg-red-100 p-4">
      <div
        className="relative book w-full max-w-4xl h-[500px] md:h-[600px] bg-white shadow-lg rounded-lg flex cursor-pointer"
        onClick={handleNextPage}
      >
        {currentPage === 0 ? (
          // Primera página (carta personalizada)
          <div className="w-full h-full flex items-center justify-center p-6">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-red-600">
                Para Mi Amor 💖
              </h1>
              <p className="text-red-400 text-lg mt-2">
                Una carta especial en San Valentín
              </p>
            </div>
          </div>
        ) : (
          // Páginas siguientes (formato de dos columnas)
          <>
            {/* Página izquierda (imagen) */}
            <div className="w-1/2 h-full flex items-center justify-center border-r border-gray-400 p-6">
              {pages[currentPage]?.image ? (
                <img
                  src={pages[currentPage].image}
                  alt="Imagen de amor"
                  className="w-64 h-64 rounded-lg shadow-md"
                />
              ) : (
                pages[currentPage]?.content
              )}
            </div>

            {/* Página derecha (texto) */}
            <div
              className={`w-1/2 page h-full flex items-center justify-center p-6 transition-transform duration-600 ${
                flip ? "flip" : "not-flip"
              }`}
            >
              {pages[currentPage]?.text && (
                <p className="text-gray-700 text-lg text-center px-6">
                  {pages[currentPage].text}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;
