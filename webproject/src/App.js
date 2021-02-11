import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Komponenten/Navbar";
import Home from "./Seiten/Home";
import Warenkorb from "./Seiten/Warenkorb";
import Produkte from "./Seiten/Produkte";
import productList from './Seiten/Liste'
import React, { useState } from "react";
import Checkout from "./Seiten/Checkout";
import Services from "./Seiten/Services";
import Footer from "./Komponenten/Footer"
import Credits from "./Seiten/Credits"

function App() {
  
  const [cart, setCart] = useState([])
  
  return (
    <BrowserRouter>
      {/*Wird an die Navbar übergeben um die Anzahl der Items im Warenkorb anzeigen zu lassen*/}
      <Navbar cartLists={cart} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        {/*ÜBERGABE VON PROPS
        productLists enthält die Informationen welche in Liste.jsx enthalten sind
        cartLists enthält die Artikel welche in der leeren Liste, welche oben definiert wurde, gespeichert werden => Für den Warenkorb
        */}
        <Route
          path="/warenkorb"
          exact
          component={(props) => (
            <Warenkorb {...props} cartLists={cart} setCarts={setCart} />
          )}
        />
        <Route
          path="/produkte"
          exact
          component={(props) => (
            <Produkte
              {...props}
              productLists={productList}
              cartLists={cart}
              setCarts={setCart}
            />
          )}
        />
        <Route
          path="/checkout"
          exact
          component={(props) => (
            <Checkout {...props} cartLists={cart} setCarts={setCart} />
          )}
        />
        <Route path="/credits" exact component={Credits} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
