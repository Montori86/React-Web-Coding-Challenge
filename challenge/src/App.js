import { Route } from "react-router-dom";
import './App.css';
import React from "react";
import Navbar from "./Compenent/Navbar"
import Home from "./Compenent/Home"


function App() {
  return (
   <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route path="/" component={Home} />
     
  </React.Fragment>
  );
}

export default App;
