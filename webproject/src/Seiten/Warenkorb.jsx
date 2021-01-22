import React from 'react'
import './Produkte.css'

export default function Warenkorb(props) {
    const items = props.cartLists
    console.log(items)
    return (
      <>
        <div className="card-grid">
          {items.map((item, key) => (
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
              </div>
            </div>
          ))}
        </div>
      </>
    );
}


