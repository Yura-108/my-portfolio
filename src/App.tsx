import './App.css'
import {Reveal} from "./components/Reveal.tsx";
import Services from "./sections/Services.tsx";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Line from "./components/Line.tsx";
import Skills from "./sections/Skills.tsx";
import Work from "./sections/Work.tsx";
import Title from "./components/Title.tsx";
import {ProjectsDesktop, ProjectsMobile} from "./sections/Projects.tsx";
import Contacts from "./sections/Contacts.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <>
      <Header />

      <main className="container mx-auto flex flex-col justify-center items-center
        xl:px-30 lg:px-24 md:px-7.5 px-5
      ">

        <Title />

        {/*<div className="grid grid-cols-12 grid-rows-6 gap-4 w-full h-125">*/}

        {/*  <Reveal delay={0.2}>*/}
        {/*    <div className="col-start-2 row-start-1 col-span-2 bg-brand p-4 text-black text-3xl text-center">Любой</div>*/}
        {/*  </Reveal>*/}

        {/*  <Reveal delay={0.3}>*/}
        {/*    <div className="col-start-3 row-start-2 col-span-2 bg-brand p-4 text-black text-3xl text-center">*/}
        {/*      сложности*/}
        {/*    </div>*/}
        {/*  </Reveal>*/}

        {/*  <Reveal delay={0.4}>*/}
        {/*    <div className="col-start-6 row-start-3 col-span-4 bg-brand p-4 text-black text-3xl text-center">*/}
        {/*      Комфортная коммуникация*/}
        {/*    </div>*/}

        {/*  </Reveal>*/}

        {/*  <Reveal delay={0.5}>*/}
        {/*    <div className="col-start-10 row-start-3 col-span-2 bg-brand p-4 text-black text-3xl text-center">*/}
        {/*      Качественно*/}
        {/*    </div>*/}
        {/*  </Reveal>*/}

        {/*  <Reveal delay={0.6}>*/}
        {/*    <div className="col-start-11 row-start-4 col-span-2 bg-brand p-4 text-black text-3xl text-center">*/}
        {/*      Быстро*/}
        {/*    </div>*/}
        {/*  </Reveal>*/}

        {/*  <Reveal delay={0.7}>*/}
        {/*    <div className="col-start-6 row-start-5 col-span-4 bg-brand p-4 text-black text-3xl text-center">*/}
        {/*      Альтернативные решения*/}
        {/*    </div>*/}
        {/*  </Reveal>*/}

        {/*  <Reveal delay={0.8}>*/}
        {/*    <div className="col-start-3 row-start-5 col-span-2 bg-brand p-4 text-black text-3xl text-center">*/}
        {/*      Стильно*/}
        {/*    </div>*/}
        {/*  </Reveal>*/}

        {/*  <Reveal delay={0.9}>*/}
        {/*    <div className="col-start-2 row-start-6 col-span-2 bg-brand p-4 text-black text-3xl text-center">*/}
        {/*      Удобно*/}
        {/*    </div>*/}
        {/*  </Reveal>*/}
        {/*</div>*/}

        <Reveal>
          <About />
        </Reveal>

        <Line />

        <ProjectsMobile className="block md:hidden"  />
        <ProjectsDesktop className="hidden md:block" />

        <Skills />

        <Services />

        <Work />

        <Contacts />

        <Footer />
      </main>
    </>
  );
}


