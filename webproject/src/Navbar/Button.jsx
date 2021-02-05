import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";


//Funktion die einen Button für einen Warenkorb generiert (mit Icon)


export function Button(props) {
  const ItemInCartCounter = props.ItemInCart;
  {
    /*counter enthält nun die "Länge" bzw. die Anzahl der im Warenkorb befindlichen Items.*/
  }

  //Diese Funktion zählt jedes Element und und speichert es in totalCount
  //Um die Anzahl der Artikel im Warenkorb zu zählen, wird die Liste für den Warenkorb (hier:ItemInCartCounter) als Parameter für die Funktion angegeben
  function Counter(counter) {
    let totalCount = 0;
    counter.forEach((element) => {
      totalCount += element.count;
    });
    return totalCount;
  }

  return (
    <Link to="/warenkorb">
      <button className="counterbutton">
        <div className="fas fa-shopping-cart">
          <div class="cartCounter">{Counter(ItemInCartCounter)}</div>
        </div>
        Warenkorb
      </button>
    </Link>
  );
}
