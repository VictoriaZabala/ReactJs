import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        

        <div className="menu">
                {CartWidget}
                <ul>
                <li> <a className="menu__item" href="https://pawttery.com.ar/">Inicio</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/index.html#index__text">Nosotros</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/productos.html">Tienda</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/galeria.html">Galería</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/dona.html">Doná</a> </li> 	
                </ul> 
        </div>
    );
  };
  export default NavBar;