import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Main from "./pages/Main";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="content">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
