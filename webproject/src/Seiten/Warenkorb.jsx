import React from 'react'
import './Warenkorb.css'
import { Link } from "react-router-dom";


export default function Warenkorb(props) {
  const items = props.cartLists;

  //deleteItem entfernt mit bei einem onClick den jeweiligen Artikel aus dem Warenkorb
  const deleteItem = (itemToDelete) => {
    props.setCarts(items.filter((item) => item !== itemToDelete));
  };

  //addTotal enthält die Summe der in dem Warenkorb befindlichen Produkte, indem mittels reduce-Funktion "accumulator" mit dem aktuellen Wert addiert wird
  var addTotal = items.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.description;
  }, 0);

  return (
    <>
      <div>
        <div className="cartGrid">
          <header className="cartHeader">
            <div className="cartArticle">Artikel:</div>
            <Link to="/checkout" className="cartCheckout">
              <button className="cartCheckout">
                <div>
                  <i class="fas fa-door-open"></i>
                </div>
                Checkout
              </button>
            </Link>
          </header>
          {items.map((item, key) => (
            <div className="cartLayout">
              <div className="cartBox" key={key}>
                <img className="cartImage" src={item.image} />
                <h1 className="cartName">{item.name}</h1>
                <h1 className="cartLine">|</h1>
                <h1 className="cartDescription">{item.description}</h1>
                <button className="cartButton" onClick={() => deleteItem(item)}>
                  <div className="fa fa-trash"></div>
                </button>
              </div>
            </div>
          ))}
          <div>Summe: {addTotal}</div>
        </div>
      </div>
    </>
  );
}