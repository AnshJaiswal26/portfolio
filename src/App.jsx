import { useState } from "react";
import "./App.css";
import TopPanel from "./components/TopPanel/TopPanel";
import About from "./components/About/About";

function App() {
  return (
    <div className="page-wrapper">
      <div className="space-background"></div>
      <div className="main-content">
        <TopPanel />
        <About />
      </div>
    </div>
  );
}

export default App;
