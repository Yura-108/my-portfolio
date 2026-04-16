import {Reveal} from "./Reveal.tsx";

export function MobileTiles({className}: { className?: string }) {
  return (
    <div className={`w-full flex flex-col gap-y-2.5 ${className}`}>
      <div className="w-full flex justify-start">
        <div className="grid w-51">
          <Reveal delay={0.1}>
            <div className="bg-[#cab9e6] place-self-start text-[18px] p-2.5">Быстро</div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-[#cab9e6] place-self-end text-[18px] p-2.5">Качественно</div>
          </Reveal>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div className="grid w-64.75">
          <Reveal delay={0.3}>
            <div className="bg-[#cab9e6] place-self-end-safe text-[18px] p-2.5">Комфортная</div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="bg-[#cab9e6] place-self-start text-[18px] p-2.5">коммуникация</div>
          </Reveal>
        </div>
      </div>

      <div className="w-full flex justify-start">
        <div className="grid w-45.75">
          <Reveal delay={0.5}>
            <div className="bg-[#cab9e6] place-self-start text-[18px] p-2.5">Любой </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="bg-[#cab9e6] place-self-end text-[18px] p-2.5">сложности</div>
          </Reveal>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div className="grid w-60.75">
          <Reveal delay={0.7}>
            <div className="bg-[#cab9e6] place-self-end-safe text-[18px] p-2.5">Альтернативные</div>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="bg-[#cab9e6] place-self-start text-[18px] p-2.5">решения</div>
          </Reveal>
        </div>
      </div>

      <div className="w-full flex justify-start">
        <div className="grid w-42">
          <Reveal delay={0.9}>
            <div className="bg-[#cab9e6]  place-self-start text-[18px] p-2.5">Стильно</div>
          </Reveal>
          <Reveal delay={1}>
            <div className="bg-[#cab9e6] place-self-end text-[18px] p-2.5">Удобно</div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export function TabletTiles({className}: { className?: string }) {
  return (
    <div className={`w-full flex flex-col gap-y-3 ${className}`}>
      <div className="w-full flex justify-between">
        <Reveal delay={0.1}>
          <div className="bg-[#cab9e6] place-self-start text-2xl px-3.75 py-2.5">Комфортная</div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="bg-[#cab9e6] place-self-end text-2xl px-3.75 py-2.5">Альтернативные</div>
        </Reveal>
      </div>
      <div className="w-9/10 flex justify-around">
        <Reveal delay={0.3}>
          <div className="bg-[#cab9e6] place-self-start text-2xl p-2.5">коммуникация</div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="bg-[#cab9e6] place-self-end text-2xl p-2.5">решения</div>
        </Reveal>
      </div>
      <div className={"w-full flex justify-center"}>
        <Reveal delay={0.5}>
          <div className="bg-[#cab9e6] place-self-end text-2xl px-3.75 py-2.5">Любой сложности</div>
        </Reveal>
      </div>
      <div className="w-full flex justify-around pr-6">
        <Reveal delay={0.6}>
          <div className="bg-[#cab9e6] place-self-start text-2xl px-3.75 py-2.5">Качественно</div>
        </Reveal>
        <Reveal delay={0.7}>
          <div className="bg-[#cab9e6] place-self-end text-2xl px-3.75 py-2.5">Эстетично</div>
        </Reveal>
      </div>
      <div className="w-full flex justify-between">
        <Reveal delay={0.8}>
          <div className="bg-[#cab9e6] place-self-start text-2xl px-3.75 py-2.5">Удобно</div>
        </Reveal>
        <Reveal delay={0.9}>
          <div className="bg-[#cab9e6] place-self-end text-2xl px-3.75 py-2.5">Быстро</div>
        </Reveal>
      </div>
    </div>
  )
}

export function DesktopTiles({className}: {className?: string}) {
  return (
    <div className={`w-full flex justify-between items-center h-192 ${className}`}>
      <div className="flex justify-between w-75.25 h-full flex-col">
        <div className="w-full grid">
          <Reveal delay={0.1}>
            <div className="bg-[#cab9e6] place-self-start text-3xl p-4">Любой</div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-[#cab9e6] place-self-end text-3xl p-4">сложности</div>
          </Reveal>
        </div>
        <div className="w-full grid">
          <Reveal delay={0.3}>
            <div className="bg-[#cab9e6] place-self-end-safe text-3xl p-3.75">Удобно</div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="bg-[#cab9e6] place-self-start text-3xl p-3.75">Эстетично</div>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center w-100 h-96">
        <Reveal delay={0.5}>
          <div className="bg-[#cab9e6] text-3xl p-3.75">Комфортная коммуникация</div>
        </Reveal>
        <Reveal delay={0.6}>
          <div className="bg-[#cab9e6] text-3xl p-3.75">Альтернативные решения</div>
        </Reveal>
      </div>

      <div className="grid w-83 h-33">
        <Reveal delay={0.7}>
          <div className="bg-[#cab9e6] place-self-start text-3xl p-3.75">Качественно</div>
        </Reveal>
        <Reveal delay={0.8}>
          <div className="bg-[#cab9e6] place-self-end text-3xl p-3.75">Быстро</div>
        </Reveal>
      </div>
    </div>
  )
}