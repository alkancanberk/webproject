import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>Kaffeetastisch</h1>
        <h2>Der volle Kaffee Geschmack</h2>
        <p>Probiere nun die Kaffeebohnen mit dem erlesensten Geschmack!</p>
        <div className="title_buttons">
          <Link to="/produkte">
            <button className="button_produkte">PRODUKTE</button>
          </Link>
          <button className="button_überuns">ÜBER UNS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
