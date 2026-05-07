import {Reveal} from "../components/Reveal.tsx";
import {skills} from "../constants/data.ts";

export default function Skills() {
  return (
    <section className="container mt-15 md:mt-25 lg:mt-37.5">
      <Reveal>
        <h2 className="text-[40px] md:text-[84px] lg:text-9xl font-caramel">my skills</h2>
      </Reveal>
      <div>
        {skills.map((skill, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="flex flex-col xl:grid  xl:grid-rows-2 xl:grid-cols-[720px_960px]">
              <div className="flex justify-between
                md:justify-start items-end border-b
                md:border-b-2 lg:border-b-2 py-5 md:py-6 lg:py-10 gap-7">
                <span className="text-base md:text-3xl xl:hidden order-2 md:order-1">0{index + 1}</span>
                <span className="text-base md:text-3xl order-1 md:order-2">— {skill.title} —</span>
              </div>
              <div className="hidden items-end border-b-2 py-10 xl:flex">
                  <span className="text-3xl hidden xl:block">
                   0{index + 1}
                 </span>
              </div>
              <div className="hidden xl:block" />
              <div className="flex justify-start flex-wrap py-5 md:py-6 lg:py-10 gap-4 px-0 lg:px-26 xl:px-0">
                {skill.badges.map((badge, i) => (
                  <div key={i} className={`
                  p-2.5 bg-brand text-lg 
                  md:text-[28px] md:px-4 md:py-3
                  lg:text-4xl lg:px-4.5 lg:py-3.5
                  xl:px-6 xl:py-4
                  ${badge.className}
                  `}>
                    {badge.name}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}