import {cards} from "../constants/data.ts";
import {Reveal} from "../components/Reveal.tsx";

export default function Work() {
  return (
    <section className="container mt-15 md:mt-25 lg:mt-37.5">
      <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel
      mb-6 md:mb-10 lg:mb-12">stages of work</h2>
      <div className="grid grid-cols-2 grid-rows-4 gap-2
        md:grid-cols-3 md:grid-rows-3 md:gap-4
        xl:grid-cols-4 xl:grid-rows-2 xl:gap-5 lg:gap-8">
        <div className="">
          <span className="text-base md:text-xl lg:text-3xl">— организация —</span>
        </div>
        {cards.map((card, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="group perspective">
              <div className="relative preserve-3d group-hover:rotate-y-180 duration-1000
              w-39 md:w-56.5 lg:w-96.75 xl:w-101.25
              h-36.25 md:h-54   lg:h-92.5 xl:h-100"
              >
                {/* Front side */}
                <div
                  className="absolute backface-hidden bg-brand p-5 xl:p-12.5
                  text-start flex flex-col justify-center h-full w-full gap-2 md:gap-3 lg:gap-5">
                  <span className="text-base md:text-xl lg:text-3xl xl:text-4xl">— {index + 1} —</span>
                  <h4 className="text-base md:text-xl lg:text-3xl xl:text-4xl whitespace-pre-line">{card.title}</h4>
                </div>
                {/* Back side */}
                <div
                  className="absolute rotate-y-180 backface-hidden bg-brand-light p-4 xl:p-12.5 flex items-center justify-center h-full w-full">
                  <p className="text-xs text-center md:text-xl xl:text-2xl">{card.description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="bg-[#cab9e6] justify-center items-center hidden md:flex xl:hidden">
          <div className="relative text-xl uppercase w-33.5 h-24.5 lg:h-35.5 lg:w-46.75 border-b-2 border-t-2">
            {/*<div className="w-28 lg:w-full  bg-black" />*/}

            <div className="absolute inset-0 flex flex-col justify-center">
              <p className="text-center text-xl font-medium lg:text-3xl">обсудить</p>
              <p className="text-center text-xl font-medium lg:text-3xl">проект</p>
            </div>

            {/*<div className="w-28  lg:w-full bg-black absolute bottom-0 right-0" />*/}
          </div>
        </div>
      </div>
    </section>
  )
}