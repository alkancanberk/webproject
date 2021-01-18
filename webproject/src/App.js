import { Router } from "react-router";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Seiten/Home";
import Warenkorb from "./Seiten/Warenkorb";
import Produkte from "./Seiten/Produkte";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/warenkorb" component={Warenkorb} />
        <Route path="/produkte" component={Produkte} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
