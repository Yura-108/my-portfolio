// import {Reveal} from "./Reveal.tsx";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center border-t-2 mt-15 md:mt-25 lg:mt-37.5 xl:mt-50 ">

     <div className="container flex flex-col gap-y-5 py-7.5 px-5
    md:flex-row md:justify-between
    .5 lg:py-12.5">
       <div>
         <p className="text-base md:text-2xl lg:text-3xl">© 2026 Darya Bogdan</p>
         <p className="text-base md:text-2xl lg:text-3xl block xl:hidden">
           Дизайн сайтов, интерфейсов и
         </p>
         <p className="text-base md:text-2xl lg:text-3xl block xl:hidden">digital-решений для бизнеса.</p>
         <p className="text-3xl hidden xl:block">Дизайн сайтов, интерфейсов и digital-решений для бизнеса.</p>
       </div>


       <div>
         <p className="underline underline-offset-3 text-base md:text-2xl lg:text-3xl">
           Политика конфиденциальности
         </p>
       </div>

     </div>
    </footer>
  )
}