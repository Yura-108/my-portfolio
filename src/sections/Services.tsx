import { useState } from "react";
import { services } from "../constants/data.ts";
import { Reveal } from "../components/Reveal.tsx";

export default function Services() {
  // Используем одно состояние и для десктопного ховера, и для мобильного клика
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Для мобильных: переключаем открытие по клику
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <section className="container mt-15 md:mt-25 lg:mt-37.5">
      <Reveal>
        <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel mb-6 md:mb-10 lg:mb-12">
          services
        </h2>
      </Reveal>

      <div className="flex flex-col gap-3 md:gap-7 lg:gap-8 xl:gap-9">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const isActive = selectedIndex === index;

          return (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <div
                className="group/title"
                // Десктопный ховер
                onMouseEnter={() => setSelectedIndex(index)}
                onMouseLeave={() => setSelectedIndex(null)}
                // Мобильный клик
                onClick={() => handleToggle(index)}
              >
                <h2
                  className={`text-2xl tracking-[-1.5px] text-center uppercase cursor-pointer transition-all duration-300
                md:text-6xl md:tracking-[-3px]
                lg:text-8xl lg:tracking-tight
                xl:text-[120px] xl:tracking-[6px]
                ${
                    selectedIndex !== null && !isActive
                      ? "opacity-30 scale-95" // Слегка уменьшаем неактивные для акцента
                      : "opacity-100 scale-100"
                  }`}
                >
                  {service.title}
                </h2>

                <div
                  className={`relative left-1/2 transform -translate-x-1/2 w-screen overflow-hidden
                  transition-all duration-700 ease-in-out
                  ${
                    isActive
                      ? "max-h-40 opacity-100 mt-2 lg:mt-4"
                      : "max-h-0 opacity-0"
                  }
                  md:group-hover/title:max-h-40 md:group-hover/title:opacity-100 md:group-hover/title:mt-2`}
                >
                  <div className={`flex items-center ${isEven ? "marquee-track" : "marquee-track-reverse"}`}>
                    {[...Array(6)].map((_, i) => (
                      <ul key={i} className="flex gap-12 xl:gap-24 list-disc px-6 xl:px-12 items-center shrink-0">
                        {service.labels.map((label, lIndex) => (
                          <li key={lIndex} className="text-xs md:text-base lg:text-xl xl:text-3xl uppercase whitespace-nowrap">
                            {label}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}