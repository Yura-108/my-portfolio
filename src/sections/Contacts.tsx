export default function Contacts() {
  return (
    <div className="container mt-15 md:mt-25 lg:mt-37.5">
      <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel">contacts</h2>

      <div className="w-full flex flex-col mt-4 md:mt-6 lg:mt-12.5  xl:mt-12">
        <h2 className="text-center
        text-2xl tracking-[-0.5px]
        md:text-[52px]
        lg:text-[86px]
        xl:text-9xl xl:tracking-[-5px]">САЙТ САМ СЕБЯ НЕ СДЕЛАЕТ</h2>

        <div className="grid grid-cols-3 grid-rows-3 gap-y-2 mt-6
        md:gap-3.75 md:mt-10 lg:gap-5 xl:gap-6 lg:mt-12.5 xl:mt-25">
          <div className="bg-[#cab9e6] flex flex-col
          items-start md:items-center justify-center gap-1.5 py-2.25
          md:p-5.75 md:gap-3
          lg:p-9.25 lg:gap-4
          xl:gap-5 xl:py-7
          ">
            <div className="w-full flex items-center justify-between
            md:justify-center gap-x-2.5 md:gap-x-3.75">
              <div className="h-px w-3.5 md:w-5 bg-black" />
              <p className="text-xs md:text-[18px] lg:text-2xl xl:text-3xl">для связи</p>
              <div className="h-px w-3.5 md:w-5 bg-black" />
            </div>
            <div className="w-full flex justify-center">
              <p className="underline text-xs md:text-[18px] lg:text-2xl xl:text-3xl text-center">Telegram</p>
            </div>
          </div>

          <div className="bg-[#cab9e6] block md:hidden" />
          <div className="bg-[#cab9e6] block md:hidden" />
          <div className="bg-[#cab9e6] block md:hidden" />

          <div className="bg-[#cab9e6] flex flex-col
          items-start xl:items-center justify-center gap-1.5 py-2.25 xl:gap-5 xl:py-7
          col-start-2 row-start-2
          md:p-5.75 md:gap-3
          lg:p-9.25 lg:gap-4
          ">
            <div className="w-full flex items-center justify-between
            md:justify-center gap-x-3.75
            ">
              <div className="h-px w-3.5 md:w-5 bg-black" />
              <p className="text-xs md:text-[18px] lg:text-2xl xl:text-3xl">профиль</p>
              <div className="h-px w-3.5 md:w-5 bg-black" />
            </div>
            <div className="w-full flex justify-center">
              <p className="underline text-xs md:text-[18px] lg:text-2xl xl:text-3xl text-center">Instagram</p>
            </div>
          </div>

          <div className="bg-[#cab9e6] block md:hidden" />
          <div className="bg-[#cab9e6] block md:hidden" />
          <div className="bg-[#cab9e6] block md:hidden" />

          <div className="bg-[#cab9e6] flex flex-col
          items-start xl:items-center justify-center gap-1.5 py-2.25 xl:gap-5 xl:py-7
          col-start-3 row-start-3
          md:p-5.75 md:gap-3
          lg:p-9.25 lg:gap-4
          ">
            <div className="w-full flex items-center justify-between
            md:justify-center gap-x-3.75
            ">
              <div className="h-px w-3.5 md:w-5 bg-black" />
              <p className="text-xs md:text-[18px] lg:text-2xl xl:text-3xl">портфолио</p>
              <div className="h-px w-3.5 md:w-5 bg-black" />
            </div>
            <div className="w-full flex justify-center">
              <p className="underline text-xs md:text-[18px] lg:text-2xl xl:text-3xl text-center">Behance</p>
            </div>
          </div>
        </div>

        <div className="w-full h-13.75 flex justify-center items-center mt-10 bg-white">
         <span className="text-base font-medium flex items-center gap-3 uppercase">
            <div className="w-9 h-px bg-black" />
            Обсудить проект
            <div className="w-9 h-px bg-black" />
          </span>
        </div>
      </div>
    </div>
  )
}