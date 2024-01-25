  import React, { useState, useContext, useEffect } from "react";
  import { Link } from "react-router-dom";
  import "./botonera.css";
  import Cesta from "../Shopping/Cesta";
  import { CartContext } from "../Shopping/CartContext";
  import { useWishlist } from '../wishlist/WishlistContext';
  import { WishlistProvider } from "../wishlist/WishlistContext";

  export const Botonera = () => {
    const [showCesta, setShowCesta] = useState(false); 
    const { items } = useContext(CartContext);

    const handleShowCesta = () => {
      setShowCesta(true);
    };

    const handleCloseCesta = () => {
      setShowCesta(false);
    };

    const totalCartItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
      <div className="botonera">
        <Link to="/productos" aria-label="Buscar">
          <i className="bx bx-search-alt-2"></i>
        </Link>
        <Link to="/perfil" aria-label="Mi perfil">
          <i className="bx bx-user"></i>
        </Link>
        <Link to="/wish" aria-label="Lista de deseos" onClick={useWishlist}>
          <i id="navbarWishlist" className="bx bx-heart"></i>
          {/* {totalWishlistItems > 0 && <span className="wish-count">{totalWishlistItems}</span>} */}
        </Link>

        <Link aria-label="Carrito de compra" onClick={handleShowCesta}>
        <i id="navbarCarrito" className="bx bx-cart-alt"></i>
        {totalCartItems > 0 && <span className="cart-count">{totalCartItems}</span>}
      </Link>
      <Cesta onHide={handleCloseCesta} showModal={showCesta} />
      </div>
    );
  };

  export default Botonera;
