import React from 'react'
import './Warenkorb.css'

export default function Warenkorb(props) {
  const items = props.cartLists;

  //deleteItem entfernt mit bei einem onClick den jeweiligen Artikel aus dem Warenkorb
  const deleteItem = (itemToDelete) => {
    props.setCarts(items.filter((item) => item !== itemToDelete));
  };

  return (
    <>
      <div className="back">
        <div className="grid">
          {items.map((item, key) => (
            <div className="grid-box" key={key}>
              <img className="grid-image" src={item.image} />
              <h1 className="grid-name">{item.name}</h1>
              <h1 className="grid-line">|</h1>
              <h1 className="grid-description">{item.description}</h1>
              <button className="grid-button" onClick={() => deleteItem(item)}>
                <div className="fa fa-trash"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}