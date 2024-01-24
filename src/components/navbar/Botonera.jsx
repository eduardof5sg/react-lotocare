  import React, { useState, useContext, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "./botonera.css";
  import Cesta from "../Shopping/Cesta";
  import ProductFilterModal from "../busqueda/busqueda";
import { getProductData } from "../../pages/Shopping/productsStore";
  import { CartContext } from "../Shopping/CartContext";

  export const Botonera = () => {
    const [showCesta, setShowCesta] = useState(false); 
    const [showModal, setShowModal] = useState(false);
    const { items } = useContext(CartContext);

    const handleShowCesta = () => {
      setShowCesta(true);
    };

    const handleCloseCesta = () => {
      setShowCesta(false);
    };
    const handleIconClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const totalCartItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
      <div className="botonera">
        <Link  aria-label="Buscar" onClick={handleIconClick}>
          <i className="bx bx-search-alt-2"></i>
        </Link>
        <Link to="/formulario" aria-label="Mi perfil">
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


