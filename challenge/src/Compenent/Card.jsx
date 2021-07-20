import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function Card() {
   
    const arrayBikes = useSelector((state) => state.bikes);
    
    
     

    console.log(arrayBikes)

    return(
     <div>
         {arrayBikes.bikes?.map(b =>{
          
             return (
                 <div className="card" key={b.id}>
                     <p>{b.title}</p>
                 </div>
             )
         })}
     </div>
    );
}