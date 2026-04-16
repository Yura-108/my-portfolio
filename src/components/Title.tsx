import {Reveal} from "./Reveal.tsx";

export default function Title() {
  return (
    <Reveal>
      <h1 className="text-center">
            <span className="uppercase font-inter text-[70px] tracking-[-7px]
              md:text-[140px] md:tracking-[-15px]
              lg:text-[200px] lg:tracking-[-20px]
              xl:text-[250px]"
            >
              port
            </span>
        <span
          className="font-caramel text-[140px]
                sm:text-[140px]
                md:text-[280px]
                lg:text-[410px]
                xl:text-[470px]"
        >folio</span>
      </h1>
    </Reveal>
  )
}