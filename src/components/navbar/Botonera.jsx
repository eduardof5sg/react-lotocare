  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import "./botonera.css";
  import Cesta from "../Shopping/Cesta";
  import ProductFilterModal from "../busqueda/busqueda";
  import WishlistModal from "../wishlist/modalWhishlist";
  
  
  

  export const Botonera = () => {
    const [showCesta, setShowCesta] = useState(false); 
    const [showModal, setShowModal] = useState(false);
    const [showWishlistModal, setShowWishlistModal] = useState(false);
   

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

    const handleWishlistIconClick = () => {  // Asegúrate de pasar el producto correcto

      setShowWishlistModal(true);
    };

    const handleCloseWishlistModal = () => {
      setShowWishlistModal(false);
    };

    return (
      <div className="botonera">
        <Link  aria-label="Buscar" onClick={handleIconClick}>
          <i className="bx bx-search-alt-2"></i>
        </Link>
        <Link to="/formulario" aria-label="Mi perfil">
          <i className="bx bx-user"></i>
        </Link>
        <Link aria-label="Lista de deseos" onClick={handleWishlistIconClick}>
        {/* Mantén el ícono de la lista de deseos aquí */}
        <i className="bx bx-heart"></i>
       </Link>
        <Link aria-label="Carrito de compra" onClick={handleShowCesta}>
          <i id="navbarCarrito" className="bx bx-cart-alt"></i>
        </Link>
        <Cesta onHide={handleCloseCesta} showModal={showCesta} />

        <ProductFilterModal  showModal={showModal}  onClose={handleCloseModal}      />
        <WishlistModal  showModal={showWishlistModal} closeModal={handleCloseWishlistModal} />
      </div>
    );
  };

  export default Botonera;

 
