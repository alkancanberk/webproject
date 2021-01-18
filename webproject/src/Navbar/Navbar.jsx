import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";


//Navigationsleiste mit Attributen und einem Button für den Warenkorb
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="logo">
          <i className="fas fa-coffee"></i>
        </Link>
        <h4>Kaffeetastisch</h4>
      </div>
      <ul className="bar">
        <li className="component">
          <Link to="/home" className="links">
            Home
          </Link>
        </li>

        <li className="component">
          <Link to="/produkte" className="links">
            Produkte
          </Link>
        </li>

        <li className="component">
          <Link to="/services" className="links">
            Services
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
};

export default Navbar;
