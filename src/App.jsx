import { useState } from "react";
import Pages from "./components/Pages";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  Aos.init({
    delay: 400,
    duration: 500,

    once: true,
  });

  return (
    <div className="  text-[#C7C7C7]  bg-[#0A0A0A]">
      <nav className="bg-[#0A0A0A] fixed left-0 w-full top-0 z-20">
        <Navbar />
      </nav>
      <Pages />
    </div>
  );
}

export default App;
