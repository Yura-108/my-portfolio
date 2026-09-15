import {Reveal} from "./Reveal.tsx";

export default function Title() {
  return (
    <>
      <h1 className="text-center">
        <Reveal>
            <span className="uppercase font-inter text-[70px] tracking-[-7px]
              md:text-[140px] md:tracking-[-15px]
              lg:text-[200px] lg:tracking-[-20px]
              xl:text-[250px]"
            >
              port
            </span>
        </Reveal>

        <Reveal delay={0.15}>
          <span
            className="font-caramel text-brand text-[140px]
                  sm:text-[140px]
                  md:text-[280px]
                  lg:text-[410px]
                  xl:text-[470px]"
          >folio</span>
        </Reveal>
      </h1>

      <Reveal delay={0.35}>
        <span className="flex items-center justify-center gap-3 lg:gap-4 uppercase font-inter text-sm md:text-lg lg:text-xl tracking-wide">
          <span className="w-8 lg:w-16 h-0.5 bg-black inline-block" />
          Darya Bogdan — UX/UI &amp; Web Designer
          <span className="w-8 lg:w-16 h-0.5 bg-black inline-block" />
        </span>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="mx-auto mt-10 md:mt-14 w-px h-10 md:h-14 bg-black/30 animate-bounce" />
      </Reveal>
    </>
  )
}