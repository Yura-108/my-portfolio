import { menu, telegramLink } from "../constants/data";
import { useRef, useState } from "react";
import {Menu, X} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (!link.startsWith("#")) return;

    const target = document.querySelector(link);
    if (!target) return;

    e.preventDefault();
    setIsOpen(false);

    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 100;

    window.scrollTo({ top, behavior: "smooth" });
  };

  // Стекло — те же токены, что у кнопки «Обсудить проект» в contacts
  const glassClass =
    "bg-white/40 backdrop-blur-md border-b border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]";

  // Панель меню: одинаковый фон, размеры и анимация (выезд слева направо) на всех экранах
  const panelClass = `fixed left-0 top-full w-full z-40 transition-all duration-500 ease-out ${glassClass}`;

  const panelContent = (
    <div className="container mx-auto flex flex-col items-start gap-4 text-lg font-medium py-8 xl:px-30 lg:px-24 md:px-7.5 px-5">
      {menu.map((item, index) => (
        <a
          key={index}
          href={item.link}
          onClick={(e) => scrollToSection(e, item.link)}
          className="hover:text-brand active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-sm"
        >
          {item.title}
        </a>
      ))}

      {/* Видна только там, где «Обсудить проект» скрыта в шапке */}
      <a
        href={telegramLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => setIsOpen(false)}
        className="md:hidden font-semibold underline underline-offset-4 hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-sm"
      >
        Обсудить проект
      </a>
    </div>
  );

  return (
    <header ref={headerRef} className={`sticky top-0 z-50 uppercase ${glassClass}`}>
      <nav className="container mx-auto w-full flex justify-between items-center py-6 xl:px-30 lg:px-24 md:px-7.5 px-5">
        {/* Левая часть */}
        <div className="flex items-center">
          {/* Desktop: Меню — зона наведения на всю высоту header, без разрыва до панели */}
          <div className="hidden lg:flex items-center relative group -my-6 py-6">
            <span className="flex items-center gap-3 lg:gap-4 cursor-pointer text-xl lg:text-2xl xl:text-3xl font-semibold">
              <div className="w-8 lg:w-16 h-0.5 bg-black" />
              Меню
              <div className="w-8 lg:w-16 h-0.5 bg-black" />
            </span>

            {/* Dropdown Desktop */}
            <div
              className={`${panelClass} opacity-0 invisible -translate-x-full
                          group-hover:opacity-100 group-hover:visible group-hover:translate-x-0`}
            >
              {panelContent}
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
          <a
            href={telegramLink}
            target="_blank"
            rel="noreferrer"
            className="hidden font-medium md:flex items-center gap-3 lg:gap-4 cursor-pointer text-xl lg:text-2xl xl:text-3xl hover:opacity-75 transition-opacity
                       focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <div className="w-8 lg:w-16 h-0.5 bg-black" />
            Обсудить проект
            <div className="w-8 lg:w-16 h-0.5 bg-black" />
          </a>

          {/* Mobile: Имя */}
          <span className="md:hidden text-base font-medium">Darya Bogdan</span>
        </div>
      </nav>

      {/* ==================== МОБИЛЬНОЕ МЕНЮ ==================== */}
      <div
        className={`${panelClass} lg:hidden
                    ${isOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-full pointer-events-none"}`}
      >
        {panelContent}
      </div>
    </header>
  );
}