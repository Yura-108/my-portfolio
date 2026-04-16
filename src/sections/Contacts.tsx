import { Reveal } from "../components/Reveal";

export default function Contacts() {
  const contactItems = [
    { label: "для связи", value: "Telegram", link: "https://t.me/Dazzz_px" },
    { label: "профиль", value: "Instagram", link: "https://www.instagram.com/pixel__warden" },
    { label: "портфолио", value: "Behance", link: "https://www.behance.net/29edf15a" }
  ];

  // Матрица 3x3, которая решает сразу 2 задачи:
  // 1. Задает порядок и задержку анимации для эффекта "волны/выезжания"
  // 2. Ставит классы позиционирования для десктопа (md:col-start-...)
  const gridCells = [
    // --- 1 РЯД ---
    { type: 'main', itemIdx: 0, delay: 0.4, classes: "md:col-start-1 md:row-start-1" },

    // справа от "для связи" → летит вправо
    { type: 'filler', delay: 0.5, direction: "left", classes: "" },
    { type: 'filler', delay: 0.6, direction: "left", classes: "" },

    // --- 2 РЯД ---
    // ниже → летит вниз
    { type: 'filler', delay: 0.7, direction: "right", classes: "" },

    { type: 'main', itemIdx: 1, delay: 0.6, classes: "md:col-start-2 md:row-start-2" },

    // вправо от центра
    { type: 'filler', delay: 0.7, direction: "left", classes: "" },

    // --- 3 РЯД ---
    { type: 'filler', delay: 1.0, direction: "right", classes: "" },
    { type: 'filler', delay: 0.9, direction: "right", classes: "" },

    { type: 'main', itemIdx: 2, delay: 0.8, classes: "md:col-start-3 md:row-start-3" },
  ];

  return (
    <div className="container mt-15 md:mt-25 lg:mt-37.5">
      <Reveal>
        <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel">contacts</h2>
      </Reveal>

      <div className="w-full flex flex-col mt-4 md:mt-6 lg:mt-12.5 xl:mt-12">
        <Reveal delay={0.2}>
          <h2 className="text-center text-2xl tracking-[-0.5px] md:text-[52px] lg:text-[86px] xl:text-9xl xl:tracking-[-5px]">
            САЙТ САМ СЕБЯ НЕ СДЕЛАЕТ
          </h2>
        </Reveal>

        {/* Заменил gap-y-2 на gap-2, чтобы между блоками были равные отступы со всех сторон */}
        <div className="grid grid-cols-3 grid-rows-3 gap-y-2 mt-6 md:gap-3.75 md:mt-10 lg:gap-5 xl:gap-6 lg:mt-12.5 xl:mt-25">
          {gridCells.map((cell, idx) => {

            // Если это блок с контактом
            if (cell.type === 'main') {
              const item = contactItems[cell.itemIdx!];
              return (
                <div key={`main-${idx}`} className={cell.classes}>
                  <Reveal delay={cell.delay}>
                    <div className="bg-[#cab9e6] flex flex-col items-start md:items-center justify-center gap-1.5 py-2.25 md:p-5.75 md:gap-3 lg:p-9.25 lg:gap-4 xl:gap-5 xl:py-7 h-13 md:h-25 lg:h-37">
                      <div className="w-full flex items-center justify-center gap-2 md:gap-x-3.75">
                        <div className="h-px w-3.5 md:w-5 bg-black" />
                        <p className="text-xs md:text-[18px] lg:text-2xl xl:text-3xl">{item.label}</p>
                        <div className="h-px w-3.5 md:w-5 bg-black" />
                      </div>
                      <div className="w-full flex justify-center">
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <p className="underline text-xs md:text-[18px] lg:text-2xl xl:text-3xl text-center hover:text-white transition-colors duration-300">
                            {item.value}
                          </p>
                        </a>
                      </div>
                    </div>
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
          <div className="w-full h-13.75 flex justify-center items-center mt-10 bg-white">
            <span className="text-base font-medium flex items-center gap-3 uppercase cursor-pointer group">
              <div className="w-9 h-px bg-black transition-transform duration-300 group-hover:w-12" />
              Обсудить проект
              <div className="w-9 h-px bg-black transition-transform duration-300 group-hover:w-12" />
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  )
}