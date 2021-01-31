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
      <form className="box">
        <div>
          <div>
            <input
              className="grid-layer"
              name="Vorname"
              placeholder="Vorname"
              value={this.state.Vorname}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <input
              className="grid-layer"
              name="Nachname"
              placeholder="Nachname"
              value={this.state.Nachname}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <input
              className="grid-layer"
              name="Ort"
              placeholder="Ort"
              value={this.state.Ort}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <input
              className="grid-layer"
              name="StraßeHausnummer"
              placeholder="Straße und Hausnummer"
              value={this.state.StraßeHausnummer}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <input
              className="grid-layer"
              name="Email"
              placeholder="E-Mail"
              value={this.state.Mail}
              onChange={(event) => this.replace(event)}
            />
            <div className="position">
              <Link to="/home">
                <button className="submit">
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
