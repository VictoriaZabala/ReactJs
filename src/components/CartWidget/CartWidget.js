import React from "react";
import cartImg from "./cart.png";
import "./cartwidget.css"

export const CartWidget = () => {
    return (
        <img src={cartImg} className="carrito" alt="imagen carrito de compras" />
    );

};
export default CartWidget;