import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../Redux/actions.js";
import { NavLink } from "react-router-dom";
import "./Details.css"

export default function Datail(props) {
  const dispatch = useDispatch();
 const [count, setCount] = useState()
  let id = props.match.params.id;

  const arrayDetails = useSelector((state) => state.detail);

  useEffect( () => {
  
 dispatch(getDetails(id)) ; 
 setCount(arrayDetails);
   
  },[id, dispatch ]); 
 


console.log(count)

  if (!count) {
    return (
      <div>
    <p>Loading...</p>
    <NavLink to={`/`}>
    <button className="still">Back to Home...</button>
  </NavLink>
  </div>
  )
  }else{
    
  return (
    
    <div>
      
    <h1>{!arrayDetails ? <p>No title</p> : arrayDetails.bike?.title}</h1>
  
      <div>
        
        <h3>
          Date of the theft -
          {new Date(
            arrayDetails.bike?.stolen_record.date_stolen * 1000
          ).toDateString()}
        </h3>
        <img src={arrayDetails.bike?.thumb} />
        <h3>Location: {arrayDetails.bike?.stolen_record.location}</h3>
        <h3>
          Date reported
          {new Date(
            arrayDetails.bike?.stolen_record.created_at * 1000
          ).toDateString()}
        </h3>
        <p className="">
          {arrayDetails.bike?.description === null || arrayDetails.bike?.description === "" ? <p>Description not available..</p> : arrayDetails.bike?.description.replace(/(<([^>]+)>)/gi, "")}
        </p>
      </div>
      <NavLink to={`/`}>
        <button className="still">Back to Home...</button>
      </NavLink>
    </div>
  );
}
}
