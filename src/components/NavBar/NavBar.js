import React from "react";
import { CartWidget } from "../../components/CartWidget/CartWidget";
import "./navbar.css";

export const NavBar = () => {
    return (
        

        <div className="menu">
                <ul>
                <li> {CartWidget}</li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/">Inicio</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/index.html#index__text">Nosotros</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/productos.html">Tienda</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/galeria.html">Galería</a> </li>
                <li> <a className="menu__item" href="https://pawttery.com.ar/dona.html">Doná</a> </li> 	
                
                </ul> 
        </div>
    );
  };