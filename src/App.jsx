import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/works/Works";

import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=> {
    const handleClickOutside = (event)=> {
      if (menuOpen && !event.target.closest(".menu")){
        setMenuOpen(false);
      }

    };
    document.addEventListener("mousedown", handleClickOutside);
  })
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen = {setMenuOpen}  />
      <div className="sections">
        
        <Intro />
        <Portfolio />
        
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
