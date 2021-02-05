import React from 'react'
import './Warenkorb.css'
import { Link } from "react-router-dom";


export default function Warenkorb(props) {
  const items = props.cartLists;

  //deleteItem entfernt mit bei einem onClick die komplette Anzahl des Artikel das im Warenkorb befindlich ist
  const deleteItem = (itemToDelete) => {
    props.setCarts(items.filter((item) => item !== itemToDelete));
  };

  //increment erhöht die Anzahl des Artikels um 1 und ist in einem Button integriert
  const increment = (index) => {
    const newItems = [...items];
    let incrementItemIndex = newItems.findIndex(
      (item) => item.name === index.name
    );
    newItems[incrementItemIndex].count += 1;
    props.setCarts(newItems);
  };

  //decrement senkt die Anzahl des Artikels um 1 und ist in einem Button integriert
  const decrement = (index) => {
    const newItems = [...items];
    let decrementItemIndex = newItems.findIndex(
      (item) => item.name === index.name
    );
    newItems[decrementItemIndex].count -= 1;
    props.setCarts(newItems);
  };

  //addTotal enthält die Summe der in dem Warenkorb befindlichen Produkte, indem mittels reduce-Funktion "accumulator" mit dem aktuellen Wert addiert wird
  var addTotal = items.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.description * currentValue.count;
  }, 0);

  return (
    <>
      <div>
        <header className="cartHeader">
          <div className="cartArticle">Artikel:</div>
          <div className="cartSumTop">Summe: {addTotal} €</div>
          <Link to="/checkout">
            <button className="cartCheckout">Checkout</button>
          </Link>
        </header>
        <hr className="cartLine"></hr>
        <div className="cartGrid">
          {items.map((item, key) => (
            <div className="cartLayout">
              <div className="cartBox" key={key}>
                <img className="cartImage" src={item.image} />
                <h1 className="cartName">{item.name}</h1>

                <h1 className="cartDescription">{item.description} €</h1>
                <div className="cartButtons">
                  <button
                    className="cartIncrement"
                    onClick={() => increment(item)}
                  >
                    +
                  </button>
                  <p className="cartCount">x {item.count}</p>
                  <button
                    className="cartDecrement"
                    onClick={() => decrement(item)}
                  >
                    -
                  </button>
                  <button
                    className="cartButton"
                    onClick={() => deleteItem(item)}
                    title="Artikel entfernen"
                  >
                    <div className="fa fa-trash"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="cartLine"></hr>
        <div className="cartFooter">
          <div className="cartSum">Summe: {addTotal} €</div>
          <Link to="/checkout">
            <button className="cartCheckout">Checkout</button>
          </Link>
        </div>
        <hr className="cartLine"></hr>
      </div>
    </>
  );
}