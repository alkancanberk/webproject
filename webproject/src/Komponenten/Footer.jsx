import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";



const Footer = () => {
  let location = useLocation()
  let loc = location.pathname
  return (
    <div>
      {" "}
      {/*Footer soll nur auf der Produktseite angezeigt werden*/}
      {loc === "/produkte" && (
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
