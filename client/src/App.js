import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//View imports
import Nav from "./components/Nav.js";
import Home from "./views/Home.js";
import Invoices from "./views/Invoices.js";
import Judicial from "./views/Judicial.js";
import NonJudicial from "./views/NonJudicial.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/invoices" element={<Invoices />}></Route>
        <Route path="/judicial" element={<Judicial />}></Route>
        <Route path="/nonjudicial" element={<NonJudicial />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
