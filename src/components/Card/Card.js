import React from "react";
import "./card.css";
import prod1 from "./prod1.jpg";

export const Card = () => {
    return (
        
        <div className="tarjeta">
        <div className="imagen__producto">
         <img src={prod1} width="300px" height="400px" alt="Plato cerámica celeste con pintitas negras"/>
         <h5>Plato irregular</h5>
         <h6>$700</h6>
         </div>
        </div>
    );
  };
  export default Card;