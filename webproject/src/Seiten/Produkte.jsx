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
      <div className="card-grid">
        {/*Die Daten aus productList bzw. Liste.jsx werden mit der map-Funktion über dieses Card-Layout gemappt und ausgegeben.*/}
        {items.map((item, key) => {
          return (
            <div className="card-box" key={key}>
              <img className="card-image" src={item.image} />
              <div className="card-content">
                <h3 className="card-name">{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <div class="card-stars">
                  <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="card-rating">Bewertungen</div>
                </div>
                <button className="card-button" onClick={() => addToCart(item)}>
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