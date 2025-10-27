import { useEffect, useRef, useState } from "react";
import "./App.css";
import TopPanel from "./components/TopPanel/TopPanel";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

function App() {
  const starsRef = useRef(null);
  const count = 200;

  const [activePage, setActivePage] = useState("About");

  useEffect(() => {
    const container = starsRef.current;

    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 2;
      star.classList.add("star");
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, [count]);

  return (
    <div className="page-wrapper">
      <div className="stars" ref={starsRef}></div>
      <div className="main-content" id="main-content">
        <TopPanel activePage={activePage} setActivePage={setActivePage} />

        {activePage === "About" ? (
          <About />
        ) : activePage === "Skills" ? (
          <Skills />
        ) : activePage === "Experience & Projects" ? (
          <Experience />
        ) : null}
      </div>
    </div>
  );
}

export default App;
