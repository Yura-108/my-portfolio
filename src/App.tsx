import './App.css'
import Header from "./components/Header.tsx";

import Footer from "./components/Footer.tsx";
import Home from "./pages/home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalData from "./pages/PersonalData.tsx";

export default function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <Header />

      <main className="container mx-auto flex flex-col justify-center items-center
        xl:px-30 lg:px-22.5 md:px-7.5 px-5">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-data" element={<PersonalData />} />
        </Routes>


      </main>

      <Footer />
    </BrowserRouter>
  );
}


