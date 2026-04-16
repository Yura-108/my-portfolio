import { Reveal } from "../components/Reveal";

export default function Contacts() {
  const contactItems = [
    { label: "для связи", value: "Telegram" },
    { label: "профиль", value: "Instagram" },
    { label: "портфолио", value: "Behance" }
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

        <div className="grid grid-cols-3 grid-rows-3 gap-y-2 mt-6 md:gap-3.75 md:mt-10 lg:gap-5 xl:gap-6 lg:mt-12.5 xl:mt-25">
          {contactItems.map((item, idx) => (
            <div
              key={idx}
              className={idx === 1 ? "col-start-2 row-start-2" : idx === 2 ? "col-start-3 row-start-3" : ""}
            >
              <Reveal delay={0.4 + idx * 0.15}>
                <div className="bg-[#cab9e6] flex flex-col items-start md:items-center justify-center
                gap-1.5 py-2.25
                md:p-5.75 md:gap-3 lg:p-9.25 lg:gap-4 xl:gap-5 xl:py-7 h-13 md:h-25 lg:h-37">
                  <div className="w-full flex items-center justify-center gap-2 md:gap-x-3.75">
                    <div className="h-px w-3.5 md:w-5 bg-black" />
                    <p className="text-xs md:text-[18px] lg:text-2xl xl:text-3xl">{item.label}</p>
                    <div className="h-px w-3.5 md:w-5 bg-black" />
                  </div>
                  <div className="w-full flex justify-center">
                    <p className="underline text-xs md:text-[18px] lg:text-2xl xl:text-3xl text-center">{item.value}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="block md:hidden">
              <Reveal delay={0.5 + (i + 1) * 0.1}>
                <div className="bg-[#cab9e6] h-13 w-full" />
              </Reveal>
            </div>
          ))}

        </div>

        <Reveal delay={0.9}>
          <div className="w-full h-13.75 flex justify-center items-center mt-10 bg-white">
            <span className="text-base font-medium flex items-center gap-3 uppercase">
              <div className="w-9 h-px bg-black" />
              Обсудить проект
              <div className="w-9 h-px bg-black" />
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  )
}