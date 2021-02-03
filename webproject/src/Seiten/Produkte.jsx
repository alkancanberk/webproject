import React from "react";
import "../App.css";
import './Produkte.css'



function Produkte(props) {
  const items = props.productLists;
  const cartList = props.cartLists;

  const addToCart = (item) => {
    props.setCarts([...cartList, { ...item }]);
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