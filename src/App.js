import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import NavAside from "./components/NavAside";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/Resume";
import School from "./pages/School";
import CS_504_report from "./pages/cs_504_report";
import styled from "styled-components";

const ReactightColum = styled.div`
    padding: 16px;
    margin: 16px;
    width: 100%;
    position: fixed;
    height: 100%;
`;

function App() {
  return (
    <HashRouter >
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div><NavAside/><About/><rightColum/></div>} />
          <Route path="/profile/:name" element={<Profile/>} />
          <Route path="/resume" element={<div><NavAside/><Resume/><rightColum/></div>}/>
          <Route path="/portfolio" element={<div><NavAside/><Portfolio/><rightColum/></div>} />
          <Route path="/cs_504_report" element={<CS_504_report/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
