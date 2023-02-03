import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Component imports
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Invoices from "./components/Invoices.js";


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/invoices" element={<Invoices />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
