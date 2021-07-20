import React from "react";
import './Navbar.css'
import { useDispatch } from "react-redux";
import { getStolenBikes } from "../Redux/actions.js";

export default function NavBar() {
  const dispatch = useDispatch();
  var aux = "";



  function handleChange(e) {
      aux = e.target.value;
    }
    function handleClick() {
      dispatch(getStolenBikes (aux));
    }
    return (
    <nav className="box">              
          <div>
          <img      width={150}                   
                    src="https://images.vexels.com/media/users/3/162884/isolated/preview/24e7b433b499dd2c9823d02ee72d939c-cresta-de-berlin-by-vexels.png"
                    alt="Cresta de berlin Transparent PNG"
                    title="Cresta de berlin Transparent PNG"
                  />       
          
          </div> 
          <div>
          <h1 >Berlin Police Department</h1>
          <div>
               
          <input className="btn3"onChange={handleChange}type="text"placeholder="Title..." />
          <button className="btn" onClick={handleClick}>Search</button>      
          </div> 
          <div className="btn">
          
          </div> 
          </div>
            
    </nav>
    )
}

