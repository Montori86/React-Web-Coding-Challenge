import { Route } from "react-router-dom";
import './App.css';
import React from "react";
import Navbar from "./Compenent/Navbar"
import Home from "./Compenent/Home"
import Details from "./Compenent/Details"

function App() {
  return (
   <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:id" component={Details} />
  </React.Fragment>
  );
}

export default App;
