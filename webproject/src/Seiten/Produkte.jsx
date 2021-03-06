import React from "react";
import "../App.css";
import './Produkte.css'



function Produkte(props) {
  const items = props.productLists;
  const cartList = props.cartLists;

  //Funktion um Artikel in den Warenkorb zu speichern
  const addToCart = (itemToCheck) => {
    //Kopie der Liste wird erstellt um im Folgenden bearbeitet werden zu können
    let newCartItems = [...cartList];

    let newItemIndex = newCartItems.findIndex(
      (item) => item.name === itemToCheck.name //Herausfinden vom Index durch den Abgleich mit dem Namen
    );

    if (newItemIndex < 0) {
      newCartItems.push({ ...itemToCheck, count: 1 });
      //Sollte der Index kleiner 0 für dieses bestimmte Item sein (also nicht gefunden), so wird es hinzugefügt
    } else {
      const newItem = {
        ...newCartItems[newItemIndex],
      };
      newItem.count += 1;
      newCartItems[newItemIndex] = newItem;
      //Sollte dieses Item bereits im Warenkorb vorhanden sein, wird nur noch die Anzahl erhöht
      //Bei vorhandenen Items erhöht sich somit die Anzahl um 1 pro Klick
    }
    props.setCarts([...newCartItems]); //Bearbeitete Kopie wird ausgegeben
  };

  return (
    <>
      <div className="cardGrid">
        {/*Die Daten aus productList bzw. Liste.jsx werden mit der map-Funktion über dieses Card-Layout gemappt und ausgegeben.*/}
        {items.map((item, key) => {
          return (
            <div className="cardBox" key={key}>
              <img className="cardImage" src={item.image} />
              <div className="cardContent">
                <h3 className="cardName">{item.name}</h3>
                <p className="cardPrice">{item.price} €</p>
                <div class="cardStars">
                  <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="cardRating">Premium Kaffee</div>
                </div>
                <button className="cardButton" onClick={() => addToCart(item)}>
                  <div className="fas fa-shopping-cart cartBrown"></div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Produkte