import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Comp/Home.jsx";
import About from "./Comp/About.jsx";
import Contact from "./Comp/Contact.jsx";
import Menu from "./Comp/Menu";

function Seven() {
  return (
    <BrowserRouter>
      <Link to="/"> HOME</Link>
      <Link to="/About"> ABOUT</Link>
      <Link to="/Menu"> MENU</Link>
      <Link to="/Contact"> CONTACT</Link>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Seven;
