import React, { useState } from "react";
import "./Navbar.css";
import NavImg2 from './NavImg2.svg' 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <a href="/"><img src={NavImg2} style={{ width: 250, height: 350, margin: 25 }} alt="NavImg2" /></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/charginglocations">Charging Stations</a>
        <a href="/">Data</a>
        <a href="/">AI Models</a>
        <a href="/">FAQs</a>
        <a href="/">Log In</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;