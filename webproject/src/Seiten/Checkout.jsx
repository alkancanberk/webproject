import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Checkout.css'



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
      return accumulator + currentValue.description * currentValue.count;
    }, 0);

    const { displayContent } = this.state;
    return (
      <div>
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
                    <div className="fas fa-angle-double-down"></div>
                  </div>
                </button>
              </div>
              {displayContent === true ? (
                <div>
                  <div className="checkoutArticle">Artikel:</div>
                  {this.items.map((item, key) => (
                    <div className="checkoutContent" key={key}>
                      <div className="checkoutName">{item.name}</div>
                      <div className="checkoutDescription">
                        {item.description} €
                      </div>
                      <div className="checkoutCount">x {item.count}</div>
                    </div>
                  ))}
                  <div className="checkoutHeader">
                    <div className="checkoutSum">Summe: {addTotal} €</div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <form className="formLayout">
              <h4>Bitte Formular ausfüllen:</h4>
              <div className="checkoutFormOne">
                <div>
                  <input
                    className="checkoutLayer"
                    name="Vorname"
                    placeholder="Vorname"
                    value={this.state.Vorname}
                    onChange={(event) => this.replace(event)}
                  />
                </div>
                <div>
                  <input
                    className="checkoutLayer"
                    name="Nachname"
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
                    placeholder="Ort"
                    value={this.state.Ort}
                    onChange={(event) => this.replace(event)}
                  />
                </div>
                <div>
                  <input
                    className="checkoutLayer"
                    name="StraßeHausnummer"
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
                    name="Email"
                    placeholder="E-Mail"
                    value={this.state.Mail}
                    onChange={(event) => this.replace(event)}
                  />
                </div>
                <div className="checkoutButton">
                  <Link to="/">
                    <button className="checkoutSubmit">
                      <div class="fas fa-check"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
