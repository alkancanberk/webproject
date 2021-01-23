import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";


//Funktion die einen Button für einen Warenkorb generiert (mit Icon)


export function Button(props) {

const counter = props.itemCounts; {/*counter enthält nun die "Länge" bzw. die Anzahl der im Warenkorb befindlichen Items.*/}


  return (
    <Link to="warenkorb">
      <button className="button">
        <div className="fas fa-shopping-cart"></div>
        Warenkorb {counter}
      </button>
    </Link>
  );
}
