import React, { Component } from "react";
import "../App.css";
import "./Produkte.css";

export default class Produkte extends Component {
  constructor() {
    super();
    this.state = {
      box: [
        {
          image:
            "",
          name: "Kaffee Orginal",
          description: "test",
        },
        {
          image:
            "",
          name: "Espresso",
          description: "test",
        },
        {
          image:
            "",
          name: "Cappucino",
          description: "test",
        },
        {
          image:
            "",
          name: "test",
          description: "test",
        },
        {
          image:
            "",
          name: "test",
          description: "test",
        },
        {
          image:
            "",
          name: "test",
          description: "test",
        },
        {
          image:
            "",
          name: "test",
          description: "test",
        },
        {
          image:
            "",
          name: "test",
          description: "test",
        },
        {
          image:
            "",
          name: "test",
          description: "test",
        },
        {
          image:
            "",
          name: "test",
          description: "test",
        },
      ],
    };
  }
  render() {

    return (
      <div className="card-grid">
        {this.state.box.map((item) => {
          return (
            <div className="card-box">
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
                <button className="card-button">
                  <div className="fas fa-shopping-cart"></div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}