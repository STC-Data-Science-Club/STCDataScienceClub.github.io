import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import NavAside from "./components/NavAside";
import Home from "./pages/Home";
import About from "./pages/About";
import styled from "styled-components";



function App() {
  return (
    <HashRouter >
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div><NavAside/><About/><rightColum/></div>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
