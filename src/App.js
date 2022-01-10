import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./container/About";
import CEOentry from "./container/CEOentry";
import Home from "./container/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staffentry" element={<About />} />
        <Route path="/ceoentry" element={<CEOentry />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
