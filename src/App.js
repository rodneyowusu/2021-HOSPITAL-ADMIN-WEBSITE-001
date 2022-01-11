import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./container/About";
import BoardEntry from "./container/BoardEntry";
import CEOentry from "./container/CEOentry";
import ExecutiveEntry from "./container/ExecutiveEntry";
import Home from "./container/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staffentry" element={<About />} />
        <Route path="/ceoentry" element={<CEOentry />} />
        <Route path="/boardentry" element={<BoardEntry />} />
        <Route path="/executiveentry" element={<ExecutiveEntry />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
