import { useState } from "react"; // 1. Добавляем useState
import { cards } from "../constants/data.ts";
import { Reveal } from "../components/Reveal.tsx";

export default function Work() {
  const [activeCard, setActiveCard] = useState<number | null>(null); // Состояние для мобилок

  const handleCardClick = (index: number) => {
    // Если кликаем по уже открытой — закрываем, иначе открываем новую
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="container mt-15 md:mt-25 lg:mt-37.5">
      <Reveal>
        <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel mb-6 md:mb-10 lg:mb-12">
          stages of work
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 grid-rows-4 gap-2 md:grid-cols-3 md:grid-rows-3 md:gap-4 xl:grid-cols-4 xl:grid-rows-2 xl:gap-5 lg:gap-8">
        <Reveal>
          <div>
            <span className="text-base md:text-xl lg:text-3xl">— организация —</span>
          </div>
        </Reveal>

        {cards.map((card, index) => (
          <Reveal key={index} delay={(index + 1) * 0.1}>
            <div
              className="group perspective cursor-pointer"
              onClick={() => handleCardClick(index)} // Обработка клика
            >
              <div className={`relative preserve-3d duration-1000 w-39 md:w-56.5 lg:w-96.75 xl:w-101.25 h-36.25 md:h-54 lg:h-92.5 xl:h-100
                ${activeCard === index ? "rotate-y-180" : ""} 
                md:group-hover:rotate-y-180`}
                /* На мобилках крутим через стейт (activeCard),
                   на десктопе оставляем классический group-hover
                */
              >
                {/* Front side */}
                <div className="absolute backface-hidden bg-[#cab9e6] p-5 md:p-7.5 lg:p-10 xl:p-12.5 text-start flex flex-col justify-center h-full w-full gap-2 md:gap-3 lg:gap-5">
                  <span className="text-base md:text-xl lg:text-3xl xl:text-4xl">— {index + 1} —</span>
                  <h4 className="text-base/4 md:uppercase md:text-xl lg:text-3xl xl:text-4xl whitespace-pre-line">
                    {card.title}
                  </h4>
                </div>

                {/* Back side */}
                <div className="absolute rotate-y-180 backface-hidden bg-brand-light p-4 py-3.5 md:p-7.5 md:py-9.5 lg:p-15 lg:py-30 xl:py-35 flex items-center justify-center h-full w-full">
                  <p className="text-sm/3.5 md:text-lg/5 lg:text-[22px]/6.5 xl:text-[25px]/7.5">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.9}>
          <div className="bg-[#cab9e6] justify-center items-center hidden md:flex xl:hidden w-39 md:w-56.5 lg:w-96.75 xl:w-101.25 h-36.25 md:h-54 lg:h-92.5 xl:h-100">
            <div className="relative text-xl uppercase w-33.5 h-24.5 lg:h-35.5 lg:w-46.75 border-b-2 border-t-2">
              <div className="absolute inset-0 flex flex-col justify-center">
                <p className="text-center text-xl font-medium lg:text-3xl">обсудить</p>
                <p className="text-center text-xl font-medium lg:text-3xl">проект</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}