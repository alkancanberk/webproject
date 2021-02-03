import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Checkout.css'

export default class Checkout extends Component {
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

  render() {
    return (
      <form className="checkoutBox">
        <div>
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
          <div>
            <input
              className="checkoutLayer"
              name="Email"
              placeholder="E-Mail"
              value={this.state.Mail}
              onChange={(event) => this.replace(event)}
            />
            <div className="checkoutPosition">
              <Link to="/">
                <button className="checkoutSubmit">
                  <div class="fas fa-check"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
