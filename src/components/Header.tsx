import { menu } from "../constants/data";
import { useState } from "react";
import {Menu, X} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-black/10 uppercase">
      <nav className="container mx-auto w-full flex justify-between items-centerpx-5 py-6 xl:px-30 lg:px-24 md:px-7.5 px-5">
        {/* Левая часть */}
        <div className="flex items-center">
          {/* Desktop: Меню */}
          <div className="hidden lg:block relative group">
            <span className="flex items-center gap-3 lg:gap-4 cursor-pointer text-xl lg:text-2xl xl:text-3xl font-semibold">
              <div className="w-8 lg:w-16 h-0.5 bg-black" />
              Меню
              <div className="w-8 lg:w-16 h-0.5 bg-black" />
            </span>

            {/* Dropdown Desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                            translate-y-4 transition-all duration-500 z-50">
              <div className="bg-white shadow-2xl px-12 py-10 flex flex-col items-center gap-7 rounded-2xl border border-black/5">
                {menu.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="relative text-2xl lg:text-3xl font-medium hover:scale-105 transition-all
                               after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0
                               after:bg-black after:transition-all hover:after:w-full hover:after:left-0"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Бургер (всегда видим на мобильных) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden z-50 relative h-7 w-7"
            >
              <Menu
                className={`
                h-6 w-6 absolute inset-0 transition-all duration-300
                ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}
              `}
              />

              <X
                className={`
                h-7 w-7 absolute inset-0 transition-all duration-300
                ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
              `}
              />
            </button>

            <span className="hidden md:block lg:hidden text-2xl lg:text-3xl font-semibold tracking-tight">
              Darya Bogdan
            </span>
          </div>
        </div>

        {/* Центр — Desktop */}
        <span className="hidden lg:block text-2xl lg:text-3xl font-semibold tracking-tight">
          Darya Bogdan
        </span>

        {/* Правая часть */}
        <div className="flex items-center gap-8">
          {/* Desktop: Обсудить проект */}
          <span className="hidden font-medium md:flex items-center gap-3 lg:gap-4 cursor-pointer text-xl lg:text-2xl xl:text-3xl hover:opacity-75 transition-opacity">
            <div className="w-8 lg:w-16 h-0.5 bg-black" />
            Обсудить проект
            <div className="w-8 lg:w-16 h-0.5 bg-black" />
          </span>

          {/* Mobile: Имя */}
          <span className="md:hidden text-base font-medium">Darya Bogdan</span>
        </div>
      </nav>

      {/* ==================== МОБИЛЬНОЕ МЕНЮ ==================== */}
      <div
        className={`fixed top-full pb-8 bg-white z-40 transition-all duration-500 ease-out lg:hidden
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <div className="flex flex-col px-16 gap-4 text-lg font-medium">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="hover:text-brand active:scale-95 transition-all"
            >
              {item.title}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-semibold underline underline-offset-4 hover:text-brand transition-colors"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </header>
  );
}