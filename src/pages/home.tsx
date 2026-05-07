import {DesktopTiles, MobileTiles, TabletTiles} from "../components/DesktopTiles.tsx";
import About from "../components/About.tsx";
import Line from "../components/Line.tsx";
import Skills from "../sections/Skills.tsx";
import Work from "../sections/Work.tsx";
import Title from "../components/Title.tsx";
import {ProjectsDesktop, ProjectsMobile} from "../sections/Projects.tsx";
import {Reveal} from "../components/Reveal.tsx";
import Services from "../sections/Services.tsx";
import Contacts from "../sections/Contacts.tsx";

export default function Home() {
  return (
    <>
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
    </>
  )
}