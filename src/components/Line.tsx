export default function Line() {
  const items = ["web design", "ux/ui design", "web design", "ux/ui design"];
  const repeat = 4; // сколько раз повторить блок

  return (
    <div className="bg-brand h-11.5 w-screen overflow-hidden mt-15 md:mt-25 xl:mt-37.5
     md:h-25">
      <div className="flex -mt-5 md:-mt-10 w-max marquee-track">

        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex px-10 gap-13 pr-13 lg:gap-25 lg:pr-25 xl:gap-50 xl:pr-50 whitespace-nowrap">
            {items.map((text, idx) => (
              <h4
                key={idx}
                className="text-[50px] font-caramel flex items-center text-center md:text-[100px] "
              >
                {text}
              </h4>
            ))}
          </div>
        ))}

      </div>
    </div>

  )
}