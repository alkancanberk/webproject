import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Checkout.css'

export default class Checkout extends Component {
  state = {
    Vorname: "",
    Nachname: " ",
    Ort: " ",
    StraßeHausnummer: " ",
    Email: " ",
  };

  //Durch diese Funktion wird der state mit der aktuellen Eingabe des Benutzers für zum Beispiel den Vornamen aktualisiert
  replace = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form className="grid-box">
        <div>
          <div>
            <label className="label">Vorname</label>
            <input
              className="grid-layer"
              name="Vorname"
              placeholder="Vorname"
              value={this.state.Vorname}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <label className="label">Nachname</label>
            <input
              className="grid-layer"
              name="Nachname"
              placeholder="Nachname"
              value={this.state.Nachname}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <label className="label">Ort</label>
            <input
              className="grid-layer"
              name="Ort"
              placeholder="Ort"
              value={this.state.Ort}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <label className="label">Straße und Hausnummer</label>
            <input
              className="grid-layer1"
              name="StraßeHausnummer"
              placeholder="Straße und Hausnummer"
              value={this.state.StraßeHausnummer}
              onChange={(event) => this.replace(event)}
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              className="grid-layer1"
              name="Email"
              placeholder="E-Mail"
              value={this.state.Mail}
              onChange={(event) => this.replace(event)}
            />
            <div>
              <Link to="/home">
                <button>Bestätigen</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
