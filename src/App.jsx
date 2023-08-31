import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className="app">
      <Nav/>
      {/* Routes wraps around all the other individual Routes (Route) */}
      <Routes>
        {/* since we're using Route, we have to tell it what component/page we're going to */}
        <Route path="/" element={<Home />} />
        {/* ^^ Main/Home page has just a slash */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* add a variable in your Stock route path  */}
        <Route path="/stock/:symbol" element={<Stock />} />

      </Routes>
    </div>
  );
}

export default App;

        {/* use :symbol in the route path to match the parameter name you want to use for dynamic routing. Then, in the Stock component, you can use useParams hook to access the symbol parameter and fetch/display the specific stock's information. */}