import { useState, useEffect } from "react";

const pages = [
  {
    type: "cover",
    content: (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-600">Para Mi Amor 💖</h1>
        <p className="text-red-400 text-lg mt-2">
          Una carta especial en San Valentín
        </p>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <p className="text-gray-700 text-lg text-center px-6">
        Desde el primer día que te vi, supe que había encontrado a alguien
        especial. Eres mi alegría, mi paz y mi más dulce inspiración. 💕
      </p>
    ),
  },
  {
    type: "text",
    content: (
      <p className="text-gray-700 text-lg text-center px-6">
        No hay palabras suficientes para describir cuánto te amo. Cada día a tu
        lado es un regalo que atesoro con todo mi corazón. ❤️
      </p>
    ),
  },
  {
    type: "text",
    content: (
      <p className="text-gray-700 text-lg text-center px-6">
        Feliz San Valentín, mi amor. Que este día sea solo uno de muchos llenos
        de felicidad y amor eterno. 💘
      </p>
    ),
  },
];

const LoveLetter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    if (isFlipping) {
      const timeout = setTimeout(() => {
        setIsFlipping(false);
        if (nextPage !== null) {
          setCurrentPage(nextPage);
          setNextPage(null);
        }
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [isFlipping, nextPage]);

  const handleNextPage = () => {
    if (!isFlipping && currentPage < pages.length - 1) {
      setIsFlipping(true);
      setNextPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (!isFlipping && currentPage > 0) {
      setIsFlipping(true);
      setNextPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="relative w-[900px] h-[600px] perspective-1000">
        {/* Contenedor del libro */}
        <div
          className="relative w-full h-full bg-white shadow-lg rounded-lg overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Páginas */}
          {currentPage < pages.length && (
            <div
              className="absolute left-0 top-0 w-1/2 h-full bg-white flex items-center justify-center cursor-pointer"
              style={{
                backfaceVisibility: "hidden",
                transformOrigin: "right",
                transform: isFlipping ? "rotateY(-180deg)" : "rotateY(0deg)",
                transition: "transform 0.7s ease-in-out",
              }}
              onClick={handleNextPage} // Avanzar al hacer clic en la página izquierda
            >
              {pages[currentPage]?.content}
            </div>
          )}

          {currentPage + 1 < pages.length && (
            <div
              className="absolute right-0 top-0 w-1/2 h-full bg-white flex items-center justify-center cursor-pointer"
              style={{
                backfaceVisibility: "hidden",
                transformOrigin: "left",
                transform: isFlipping ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.7s ease-in-out",
              }}
              onClick={handlePrevPage} // Retroceder al hacer clic en la página derecha
            >
              {pages[currentPage + 1]?.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
