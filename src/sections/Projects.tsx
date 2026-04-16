import {Reveal} from "../components/Reveal.tsx";

export function ProjectsMobile({className}: {className?: string}) {
  return (
    <section className={`w-full container mx-auto ${className} mt-15 md:mt-25 lg:mt-37.5`}>
      <Reveal>
        <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel mb-6 md:mb-10 lg:mb-12">
          my projects
        </h2>
      </Reveal>

      <div className="relative w-80 h-75.5 grid grid-rows-2 grid-cols-2">
        <div className="absolute w-full h-px left-1/2 top-1/2 -translate-1/2 bg-black" />
        <div className="absolute h-75.5 w-px left-1/2 top-1/2 -translate-1/2 bg-black" />
        <div className="">
          <img width="155" height="146" src={`${import.meta.env.BASE_URL}img1.jpg`} alt=""/>
        </div>
        <div className="flex items-center p-1.25">
          <h2 className="text-start text-base">Сайт для спа салона</h2>
        </div>
        <div className="flex items-center p-1.25">
          <h2 className='text-end text-base'>Приложение  для
            онлайн-кинотеатра</h2>
        </div>
        <div className="flex justify-end items-end">
          <img width="155" height="146" src={`${import.meta.env.BASE_URL}img2.jpg`} alt=""/>
        </div>
      </div>
      <div className="w-full h-13.75 flex justify-center items-center mt-10 bg-white">
         <span className="text-base font-medium flex items-center gap-3 uppercase">
            <div className="w-9 h-px bg-black" />
            Обсудить проект
            <div className="w-9 h-px bg-black" />
          </span>
      </div>
    </section>
  );
}

export function ProjectsDesktop({className}: {className?: string}) {
  return (
    <section className={`w-full container mt-25 ${className}`}>
      <Reveal>
        <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel mb-6 md:mb-10 lg:mb-12">
          my projects
        </h2>
      </Reveal>

      <div className="grid w-full h-164.25 lg:h-277.5 xl:h-396 grid-rows-3 grid-cols-3">

        {/* Проект 1 */}
        <Reveal>
          {/* Добавлен overflow-hidden для зума */}
          <div className="relative w-full h-full group ">
            <img
              src={`${import.meta.env.BASE_URL}img_1_xl.jpg`}
              alt="project"
              className="w-56.5 h-52.25 lg:w-96.75 lg:h-89.25 xl:w-136 xl:h-129
              object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Вертикальная SVG линия */}
            <svg
              className="absolute h-107.25 w-0.5 right-0 top-0 lg:h-182 xl:h-261"
              preserveAspectRatio="none"
            >
              <rect width="100%" height="100%" fill="black" shapeRendering="crispEdges" />
            </svg>

            {/* Горизонтальная SVG линия */}
            <svg
              className="absolute w-116 h-0.5 bottom-0 left-0 lg:w-196 xl:w-277"
              preserveAspectRatio="none"
            >
              <rect width="100%" height="100%" fill="black" shapeRendering="crispEdges" />
            </svg>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex items-center pl-1.5 lg:pl-2.5 w-full h-full">
            <h4 className="text-xl lg:text-3xl xl:text-[40px] uppercase">сайт для спа салона</h4>
          </div>
        </Reveal>

        <div></div>

        <Reveal>
          <div className="flex items-center text-end w-full h-full px-1.75 lg:px-2.5">
            <h4 className="text-xl lg:text-3xl xl:text-[40px] text-end uppercase ">
              приложение для онлайн-кинотеатра
            </h4>
          </div>
        </Reveal>

        {/* Проект 2 */}
        {/* Добавлен overflow-hidden для зума */}
        <Reveal>
          <div className="relative w-full h-full flex justify-center items-center group ">
            <img
              src={`${import.meta.env.BASE_URL}img_2_xl.jpg`}
              alt="project"
              className="w-54.25 h-50 lg:w-94.25 lg:h-86.75 xl:w-134 xl:h-126
            object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Вертикальная SVG линия */}
            <svg
              className="absolute h-107.25 w-0.5 right-0 top-2.25 lg:top-2.5 xl:top-3 lg:h-182 xl:h-261"
              preserveAspectRatio="none"
            >
              <rect width="100%" height="100%" fill="black" shapeRendering="crispEdges" />
            </svg>

            {/* Горизонтальная SVG линия */}
            <svg
              className="absolute w-116 h-0.5 bottom-0 left-2.25 lg:left-4 xl:left-3 lg:w-196 xl:w-277"
              preserveAspectRatio="none"
            >
              <rect width="100%" height="100%" fill="black" shapeRendering="crispEdges" />
            </svg>
          </div>
        </Reveal>

        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>

       <Reveal>
         <div className="w-full h-full flex justify-end items-end group">
           <div className="w-56.5 h-52.25 lg:w-96.75 lg:h-89.25 xl:w-136 xl:h-129
          bg-[#cab9e6] flex justify-center items-center
            transition-transform duration-500 ease-out group-hover:scale-105
          ">
             <div className="relative text-xl uppercase w-36 h-24 lg:w-72 lg:h-44 xl:w-76 border-b-2 border-t-2">
               <div className="absolute inset-0 flex flex-col justify-center">
                 <p className="block lg:hidden text-start">обсудить</p>
                 <p className="block lg:hidden text-end">проект</p>
                 <p className="hidden lg:block text-center font-medium xl:font-semibold text-3xl">обсудить проект </p>
               </div>
             </div>
           </div>
         </div>
       </Reveal>
      </div>
    </section>
  )
}