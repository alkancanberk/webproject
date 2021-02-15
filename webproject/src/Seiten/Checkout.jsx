import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Checkout.css'



//Klasse welche ein Kontaktformular und eine Warenkorb Zusammenfassung zurückgibt
export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.items = props.cartLists;
    this.addTotal = props.addTotal;
    this.clickContent = this.clickContent.bind(this);
    this.state = {
      displayContent: false,
    };
  }
  state = {
    Vorname: "",
    Nachname: "",
    Ort: "",
    StraßeHausnummer: "",
    Postleitzahl: "",
    Email: "",
  };

  //Durch diese Funktion wird der state mit der aktuellen Eingabe des Benutzers für zum Beispiel den Vornamen aktualisiert
  replace = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //Durch diese Funktion kann man so oft wie möglich auf den Button drücken und der Inhalt wird immer gedisplayed
  clickContent() {
    this.setState({
      displayContent: !this.state.displayContent, //entspricht dem Gegenteil von this.state.displayContent => also "true"
    });
  }
  render() {
    //Funktion zum Anzeigen des Gesamtpreises
    var addTotal = this.items.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price * currentValue.count;
    }, 0);

    const { displayContent } = this.state;
    return (
      <div>
        <div>
          {/*Sollte der Warenkorb bzw. hier Checkout leer sein also this.items.length === 0, so wird der nachfolgende Text angezeigt*/}
          {this.items.length === 0 && (
            <div className="cartEmpty">
              <div className="cartEmptyTag">Der Warenkorb ist leer!😜</div>
              <div className="cartEmptyTag">
                Drück mich!
                <div className="fas fa-angle-double-down emptyArrow"></div>
              </div>
              <Link to="/produkte" className="cartEmptyImage">
                <img
                  className="cartEmptyImage"
                  src="https://thumbs.dreamstime.com/b/traurige-tasse-kaffee-karikatur-43151368.jpg"
                />
              </Link>
            </div>
          )}
        </div>
        {/*Ansonsten wird der normale Checkout angezeigt*/}
        {this.items.length !== 0 && (
          <>
            <div className="checkoutContainer">
              <div className="checkoutInfo">
                <div>
                  <div className="buttonLayout">
                    <button
                      className="moreDetailsButton"
                      onClick={this.clickContent}
                    >
                      <div>
                        <div>Bestelldetails</div>
                        <div className="fas fa-angle-double-down check"></div>
                      </div>
                    </button>
                  </div>
                  {displayContent === true ? (
                    <div className="checkoutButtonBox">
                      <div className="checkoutArticle">Artikel:</div>
                      {this.items.map((item, key) => (
                        <div className="checkoutContent" key={key}>
                          <div className="checkoutName">{item.name}</div>
                          <div className="checkoutPrice">{item.price} €</div>
                          <div className="checkoutCount">x {item.count}</div>
                        </div>
                      ))}
                      <div className="checkoutHeader">
                        <div className="checkoutSum">
                          Summe: {addTotal.toFixed(2)} €
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/*Kontaktformular*/}
                <form className="formLayout">
                  <h4>Bitte Kontaktformular ausfüllen:</h4>
                  <div className="checkoutFormOne">
                    <div>
                      <input
                        className="checkoutLayer"
                        name="Vorname"
                        type="text"
                        required
                        placeholder="Vorname"
                        value={this.state.Vorname}
                        onChange={(event) => this.replace(event)}
                      />
                    </div>
                    <div>
                      <input
                        className="checkoutLayer"
                        name="Nachname"
                        type="text"
                        required
                        placeholder="Nachname"
                        value={this.state.Nachname}
                        onChange={(event) => this.replace(event)}
                      />
                    </div>
                  </div>

                  <div className="checkoutFormTwo">
                    <div>
                      <input
                        className="checkoutLayer"
                        name="Ort"
                        type="text"
                        required
                        placeholder="Ort"
                        value={this.state.Ort}
                        onChange={(event) => this.replace(event)}
                      />
                    </div>
                    <div>
                      <input
                        className="checkoutLayer"
                        name="StraßeHausnummer"
                        type="text"
                        required
                        placeholder="Straße und Hausnummer"
                        value={this.state.StraßeHausnummer}
                        onChange={(event) => this.replace(event)}
                      />
                    </div>
                  </div>

                  <div className="checkoutFormThree">
                    <div>
                      <input
                        className="checkoutLayer"
                        type="text"
                        name="Postleitzahl"
                        required
                        placeholder="Postleitzahl"
                        value={this.state.Postleitzahl}
                        onChange={(event) => this.replace(event)}
                      />
                    </div>
                    <div>
                      <input
                        className="checkoutLayer"
                        type="email"
                        x-moz-errormessage="Bitte gebe eine gültige E-Mail-Adresse ein."
                        name="Email"
                        required
                        placeholder="E-Mail"
                        value={this.state.Email}
                        onChange={(event) => this.replace(event)}
                      />
                    </div>
                  </div>
                  <div className="checkoutSubmitLayout">
                    <button className="checkoutSubmitButton">
                      <input
                        type="submit"
                        value="Bestätigen"
                        className="checkoutSubmitButton"
                        required
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
