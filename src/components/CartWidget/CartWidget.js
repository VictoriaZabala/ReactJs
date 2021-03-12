import React from "react";
import "./cartwidget.css";
import cartImg from "./cart.png";

export const CartWidget = () => {
    return (
        <img src={cartImg} id="img-carrito" width="40px" height="40px" alt="imagen carrito de compras"/>
    );
  };