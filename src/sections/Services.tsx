import {useState} from "react";
import {services} from "../constants/data.ts";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="container mt-15 md:mt-25 lg:mt-37.5">
      <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel
      mb-6 md:mb-10 lg:mb-12
      ">services</h2>

      <div className="flex flex-col gap-3 md:gap-7 lg:gap-8 xl:gap-9">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="group/title"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2
                className={`text-2xl tracking-[-1.5px] text-center uppercase cursor-pointer transition-opacity duration-300
                md:text-6xl md:tracking-[-3px]
                lg:text-8xl lg:tracking-tight
                xl:text-[120px] xl:tracking-[6px]
                ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                {service.title}
              </h2>

              <div
                className="relative left-1/2 transform -translate-x-1/2 w-screen overflow-hidden
                  max-h-0 opacity-0 transition-all duration-700 ease-in-out
                  group-hover/title:max-h-40 group-hover/title:opacity-100 group-hover/title:mt-2"
              >
                <div className={`flex ${isEven ? "marquee-track" : "marquee-track-reverse"}`}>
                  {[...Array(4)].map((_, i) => (
                    <ul key={i} className="flex gap-12 xl:gap-24 list-disc px-6 xl:px-12">
                      {service.labels.map((label, index) => (
                        <li key={index} className="text-xs md:text-base lg:text-xl xl:text-3xl uppercase">
                          {label}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}