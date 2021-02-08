import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";



const Footer = () => {
  let location = useLocation()
  let a = location.pathname
  return (
    <div>
      {" "}
      {/*Footer soll nur auf der Produktseite angezeigt werden*/}
      {a === "/produkte" && (
        <footer className="footer">
          <ul className="footerUL">
            <li className="footerComponent">
              <Link to="/credits" className="footerLinks">
                <h3>Credits</h3>
              </Link>
            </li>
          </ul>
        </footer>
      )}
    </div>
  ); 
   
};

export default Footer;