import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../Redux/actions.js";
import { NavLink } from "react-router-dom";
import "./Details.css"

export default function Datail(props) {
  const dispatch = useDispatch();
  const arrayDetails = useSelector((state) => state.detail);
  let id = props.match.params.id;
   console.log(arrayDetails)

  useEffect( () => {
     
 dispatch(getDetails(id)) ;    
 
  },[]); 



  return (
    <div>

      <div>
        {/* <h1>{arrayDetails.bike.title}</h1> */}
        {/* <h3>
          Date of the theft -
          {new Date(
            arrayDetails.bike.stolen_record?.date_stolen * 1000
          ).toDateString()}
        </h3>
        <img src={arrayDetails.bike.thumb} />
        <h3>Location: {arrayDetails.bike.stolen_record.location}</h3>
        <h3>
          Date reported
          {new Date(
            arrayDetails.bike.stolen_record.created_at * 1000
          ).toDateString()}
        </h3>
        <p className="">
          {arrayDetails.bike.description?.replace(/(<([^>]+)>)/gi, "")}
        </p> */}
      </div>
      <NavLink to={`/`}>
        <button className="still">Back to Home...</button>
      </NavLink>
    </div>
  );
}