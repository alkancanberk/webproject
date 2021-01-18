import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";


//Funktion die einen Button für einen Warenkorb generiert (mit Icon)
export function Button() {
  return (
    <Link to="warenkorb">
      <button className="button">
        <div className="fas fa-shopping-cart"></div>
        Warenkorb
      </button>
    </Link>
  );
}
