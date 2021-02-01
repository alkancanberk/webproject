import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";


//Navigationsleiste mit Attributen und einem Button für den Warenkorb
const Navbar = (props) => {
  const itemCount = props.cartLists; 
  {/*Da der Button in der Navbar eine einzelne Komponente ist, muss dieser an Button.jsx weitergegeben werden.*/}


  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/home" className="logo">
          <i className="fas fa-coffee"></i>
        </Link>
        <h4>Kaffeetastisch</h4>
      </div>
      <ul className="bar">
        <li className="component">
          <Link to="/home" className="links">
            <h3>Home</h3>
          </Link>
        </li>

        <li className="component">
          <Link to="/produkte" className="links">
            <h3>Produkte</h3>
          </Link>
        </li>

        <li className="component">
          <Link to="/services" className="links">
            <h3>Services</h3>
          </Link>
        </li>
      </ul>
      <Button itemCounts={itemCount} />
    </nav>
  );
};

export default Navbar;
