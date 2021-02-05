import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Seiten/Home";
import Warenkorb from "./Seiten/Warenkorb";
import Produkte from "./Seiten/Produkte";
import productList from './Seiten/Liste'
import React, { useState } from "react";
import Checkout from "./Seiten/Checkout";
import Services from "./Seiten/Services";

function App() {
  
  const [cart, setCart] = useState([])
  
  return (
    <BrowserRouter>
      <Navbar  cartLists={cart} /> {/*Wird an die Navbar übergeben um die Anzahl der Items im Warenkorb anzeigen zu lassen*/}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services} />
        <Route path="/warenkorb" exact component={(props) => <Warenkorb {...props} cartLists={cart} setCarts={setCart} />} />
        <Route path="/produkte" exact component={(props) => <Produkte {...props} productLists={productList} cartLists={cart} setCarts={setCart} />} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
