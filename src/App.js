import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import NavAside from "./components/NavAside";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Events from "./pages/Events"
import Projects from "./pages/Projects";
import Speakers from "./pages/Speakers";


function App() {
  return (
    <HashRouter >
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div><NavAside/><About/><rightColum/></div>} />
            <Route path="/team" element={<div><NavAside/><Team/></div>}/>
            <Route path="/events" element={<div><NavAside/><Events/></div>}/>
            <Route path="/projects" element={<div><NavAside/><Projects/></div>}/>
            <Route path="/team" element={<div><NavAside/><Team/></div>}/>
            <Route path="/speakers" element={<div><NavAside/><Speakers/></div>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
