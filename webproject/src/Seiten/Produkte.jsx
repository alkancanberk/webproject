import React from "react";
import "../App.css";
import './Produkte.css'



function Produkte(props) {
  const items = props.productLists;
  const cartList = props.cartLists;

  const addToCart = (itemToCheck) => {

    //Kopie der Liste wird erstellt um im Folgenden bearbeitet werden zu können
    let newCartItems = [...cartList];

    let newItemIndex = newCartItems.findIndex(
      (item) => item.name === itemToCheck.name //Abgleich mit dem Namen
    );

    if (newItemIndex < 0) {
      newCartItems.push({ ...itemToCheck, count: 1 }); 
      //Sollte der Index kleiner 0 für dieses bestimmte Item sein, so wird es hinzugefügt
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
                <p className="cardDescription">{item.description}</p>
                <div class="cardStars">
                  <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="cardRating">Bewertungen</div>
                </div>
                <button className="cardButton" onClick={() => addToCart(item)}>
                  <div className="fas fa-shopping-cart"></div>
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