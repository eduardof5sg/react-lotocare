  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import "./botonera.css";
  import Cesta from "../Shopping/Cesta";

  export const Botonera = () => {
    const [showCesta, setShowCesta] = useState(false); 

    const handleShowCesta = () => {
      setShowCesta(true);
    };

    const handleCloseCesta = () => {
      setShowCesta(false);
    };

    return (
      <div className="botonera">
        <Link to="/productos" aria-label="Buscar">
          <i className="bx bx-search-alt-2"></i>
        </Link>
        <Link to="/perfil" aria-label="Mi perfil">
          <i className="bx bx-user"></i>
        </Link>
        <Link to="/wish" aria-label="Lista de deseos">
          <i className="bx bx-heart"></i>
        </Link>

        <Link aria-label="Carrito de compra" onClick={handleShowCesta}>
          <i id="navbarCarrito" className="bx bx-cart-alt"></i>
        </Link>
        <Cesta onHide={handleCloseCesta} showModal={showCesta} />
      </div>
    );
  };

  export default Botonera;
