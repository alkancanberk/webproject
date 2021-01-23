import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Seiten/Home";
import Warenkorb from "./Seiten/Warenkorb";
import Produkte from "./Seiten/Produkte";
import productList from './Seiten/Liste'
import React, { useState } from "react";

function App() {
  
  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <Navbar  cartLists={cart.length} /> {/*Wird an die Navbar übergeben um die Anzahl der Items im Warenkorb anzeigen zu lassen*/}
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/warenkorb" component={(props) => <Warenkorb {...props} cartLists={cart} setCarts={setCart} />} />
        <Route path="/produkte" component={(props) => <Produkte {...props} productLists={productList} cartLists={cart} setCarts={setCart} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
