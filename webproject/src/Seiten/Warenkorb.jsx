import React from 'react'
import './Warenkorb.css'
import { Link } from "react-router-dom";


export default function Warenkorb(props) {
  const items = props.cartLists;

  //deleteItem entfernt mit bei einem onClick den jeweiligen Artikel aus dem Warenkorb
  const deleteItem = (itemToDelete) => {
    props.setCarts(items.filter((item) => item !== itemToDelete));
  };

  return (
    <>
      <div className="flex">
        <div className="grid">
          <header className="header">
            <div className="article">Artikel:</div>
            <Link to="/checkout" className="checkout">
            <button className="checkout">
              <div>
                <i class="fas fa-door-open"></i>
              </div>
              Checkout
            </button>
            </Link>
          </header>
          {items.map((item, key) => (
            <div className="flex-layout">
              <div className="grid-box" key={key}>
                <img className="grid-image" src={item.image} />
                <h1 className="grid-name">{item.name}</h1>
                <h1 className="grid-line">|</h1>
                <h1 className="grid-description">{item.description}</h1>
                <button
                  className="grid-button"
                  onClick={() => deleteItem(item)}
                >
                  <div className="fa fa-trash"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}