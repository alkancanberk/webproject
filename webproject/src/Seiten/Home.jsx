import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="homeTitle">
        <h1>Kaffeetastisch</h1>
        <h2>Der volle Kaffee Geschmack</h2>
        <p>Probiere nun die Kaffeebohnen mit dem erlesensten Geschmack!</p>
        <div>
          <Link to="/produkte">
            <button className="buttonProducts">PRODUKTE</button>
          </Link>
          <Link to="/services">
            <button className="buttonServices">SERVICES</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
