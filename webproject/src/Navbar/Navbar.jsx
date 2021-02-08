import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";


//Navigationsleiste mit Attributen und einem Button für den Warenkorb
const Navbar = (props) => {
  const ItemInCart = props.cartLists; 
  {/*Da der Button in der Navbar eine einzelne Komponente ist, muss dieser an Button.jsx weitergegeben werden.*/}


  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="fas fa-coffee logoBrown"></Link>
        <h4>Kaffeetastisch</h4>
      </div>
      <ul className="navbarUL">
        <li className="navComponent">
          <Link to="/" className="navLinks">
            <h3>Home</h3>
          </Link>
        </li>

        <li className="navComponent">
          <Link to="/produkte" className="navLinks">
            <h3>Produkte</h3>
          </Link>
        </li>

        <li className="navComponent">
          <Link to="/services" className="navLinks">
            <h3>Services</h3>
          </Link>
        </li>
      </ul>
      <Button ItemInCart={ItemInCart} />
    </nav>
  );
};

export default Navbar;
