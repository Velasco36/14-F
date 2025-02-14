import Lottie from "lottie-react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Efecto de carga (opcional)
import animationData from "./assets/animate/Animation-14F.json";
import foto1 from "./assets/img/06.jpg";
import foto2 from "./assets/img/04.jpg";
import foto3 from "./assets/img/03.jpg";
import foto4 from "./assets/img/05.jpg";

const pages = [
  {
    type: "text",
    text: "Desde el primer día que te vi, supe que había encontrado a alguien especial. Eres mi alegría, mi paz y mi más dulce inspiración. 💕",
    image: foto1,
  },
  {
    type: "text",
    text: "Cada camino que recorremos es una nueva aventura juntos. Estas fotos solo capturan una pequeña parte de todo lo que vivimos, pero el verdadero tesoro está en los momentos que compartimos, en las risas espontáneas, en las miradas cómplices y en cada instante que hace que nuestro viaje valga la pena.",
    image: foto2,
  },
  {
    type: "text",
    text: "Desde el primer día supe que nuestra historia sería especial, una de esas que se escriben con el corazón y se atesoran con el alma. Página a página, seguimos construyendo este hermoso libro, sin prisa, dejando que el tiempo nos regale más recuerdos, más sonrisas y más capítulos por escribir.",
    image: foto3,
  },
  {
    type: "text",
    text: "Porque lo mejor de nuestra historia aún está por venir… 💕",
    image: foto1,
  },
  {
    type: "animation",
    text: "Te amo mucho, feliz día 💘",
    image: foto4,
  },
];

const LoveLetter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flip, setFlip] = useState(false);

  const handleNextPage = () => {
    setFlip(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      setFlip(false);
    }, 600); // tiempo que dura la animación
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-100 p-4">
      <div
        className="relative book w-full max-w-4xl h-[500px] md:h-[600px] bg-white shadow-lg flex cursor-pointer rounded-2xl"
        onClick={handleNextPage}
      >
        {currentPage === 0 ? (
          // Primera página (carta personalizada)
          <div className="w-full h-full flex items-center justify-center p-6 rounded-2xl">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-red-600">
                Para Mi Amor 💖
              </h1>

              <p className="text-red-400 text-lg mt-8">De: Miguel</p>
              <p className="text-red-400 text-lg  text-center mt-2">
                Para: Amhbar Hoyos
              </p>

              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
        ) : (
          // Páginas siguientes (formato de dos columnas)
          <>
            {/* Página izquierda (imagen) */}
            <div className="w-1/2 h-full flex items-center justify-center border-r border-gray-400 p-6 rounded-2xl">
              {pages[currentPage]?.image ? (
                <LazyLoadImage
                  src={pages[currentPage].image}
                  alt="Imagen"
                  className="rounded-3xl floating"
                  effect="blur" // Efecto de carga (opcional)
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                pages[currentPage]?.content
              )}
            </div>

            {/* Página derecha (texto) */}
            <div
              className={`w-1/2 page h-full flex items-center justify-center p-6 transition-transform duration-600  rounded-2xl ${
                flip ? "flip" : "not-flip"
              }`}
            >
              {pages[currentPage]?.text && (
                <p className="text-gray-700 text-[12px] text-center px-6">
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
