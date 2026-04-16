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
import {DesktopTiles, MobileTiles, TabletTiles} from "./components/DesktopTiles.tsx";

export default function App() {
  return (
    <>
      <Header />

      <main className="container mx-auto flex flex-col justify-center items-center
        xl:px-30 lg:px-22.5 md:px-7.5 px-5">

        <Title />

        <MobileTiles className="flex md:hidden" />
        <TabletTiles className="hidden md:flex lg:hidden" />
        <DesktopTiles className="hidden lg:flex" />


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


