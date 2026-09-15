import { Reveal } from "../components/Reveal";
import {contactItems, gridCells} from "../constants/data.ts";

export default function Contacts() {
  return (
    <div id="contacts" className="container mt-15 md:mt-25 lg:mt-37.5">
      <Reveal>
        <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel">contacts</h2>
      </Reveal>

      <div className="w-full flex flex-col mt-4 md:mt-6 lg:mt-12.5 xl:mt-12">
        <Reveal delay={0.2}>
          <h2 className="text-center text-2xl tracking-[-0.5px] md:text-[52px] lg:text-[86px] xl:text-9xl xl:tracking-[-5px]">
            САЙТ САМ СЕБЯ НЕ СДЕЛАЕТ
          </h2>
        </Reveal>

        <GridContactsContainer />
      </div>
    </div>
  )
}

export function GridContactsContainer({className}: { className?: string }) {
  return (
    <>
      <div className={`grid grid-cols-3 grid-rows-3 gap-y-2 mt-6 
      md:gap-3.75 md:mt-10 
      lg:gap-5 lg:mt-12.5
      xl:gap-6 xl:mt-25
      ${className}
      `}>
        {gridCells.map((cell, idx) => {

          if (cell.type === 'main') {
            const item = contactItems[cell.itemIdx!];

            return (
              <div key={`main-${idx}`} className={cell.classes}>
                <Reveal delay={cell.delay}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#cab9e6] flex flex-col items-start md:items-center justify-center gap-1.5 py-2.25 md:p-5.75 md:gap-3 lg:p-9.25 lg:gap-4 xl:gap-5 xl:py-7 h-13 md:h-25 lg:h-37
                               transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
                               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <div className="w-full flex items-center justify-center gap-2 md:gap-x-3.75">
                      <div className="h-px lg:h-0.5 w-3.5 md:w-5 lg:w-7.5 bg-black" />
                      <p className="text-xs md:text-[18px] lg:text-2xl xl:text-3xl">{item.label}</p>
                      <div className="h-px lg:h-0.5 w-3.5 md:w-5 lg:w-7.5 bg-black" />
                    </div>
                    <div className="w-full flex items-center justify-center gap-1.5 md:gap-2">

                          <p className="underline  text-sm md:text-xl lg:text-3xl xl:text-4xl text-center group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              </div>
            );
          }

          // Если это блок-заглушка (filler)
          return (
            <div key={`filler-${idx}`} className={`block md:hidden ${cell.classes}`}>
              <Reveal delay={cell.delay} direction={cell.direction}>
                <div className="bg-[#cab9e6] h-13 w-full" />
              </Reveal>
            </div>
          );
        })}
      </div>

      {/* Задержку финальной кнопки увеличил до 1.2, чтобы она появилась ровно после того, как соберется сетка */}
      <Reveal delay={1.2}>
        <div className="relative w-full h-13.75 flex justify-center items-center mt-10 bg-white overflow-hidden">
            {/* декоративные цветные пятна для эффекта стекла */}
            <div className="pointer-events-none absolute w-40 h-40 rounded-full bg-[#cab9e6] blur-3xl opacity-60 -translate-x-24" />
            <div className="pointer-events-none absolute w-40 h-40 rounded-full bg-[#b9d6e6] blur-3xl opacity-50 translate-x-28 translate-y-4" />

            <a
              href={contactItems[0].link}
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden w-full h-full text-base font-medium flex items-center justify-center gap-3 uppercase cursor-pointer group
                         px-7 py-2.5
                         bg-white/40 backdrop-blur-md border border-white/60
                         shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]
                         transition-all duration-300
                         hover:bg-[#cab9e6]/30 hover:border-white/80 hover:shadow-[0_8px_32px_rgba(202,185,230,0.5),inset_0_1px_0_rgba(255,255,255,0.8)] hover:scale-105
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {/* блик, пробегающий при наведении */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-linear-to-r from-transparent via-white/70 to-transparent skew-x-[-20deg]" />

              <div className="w-9 h-px bg-black transition-transform duration-300 group-hover:w-12 relative" />
              <span className="relative">Обсудить проект</span>
              <div className="w-9 h-px bg-black transition-transform duration-300 group-hover:w-12 relative" />
            </a>
        </div>
      </Reveal>
    </>
  )
}