import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./botonera.css";
import Cesta from "../Shopping/Cesta";
import UserProfileDropdown from "../perfil/UserProfileDropdown.js";

const Botonera = () => {
  const [showCesta, setShowCesta] = useState(false);
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const handleShowCesta = () => {
    setShowCesta(true);
  };

  const handleCloseCesta = () => {
    setShowCesta(false);
  };

  const handleProfileClick = () => {
    setProfileDropdownVisible(!isProfileDropdownVisible);
  };

  return (
    <div className="botonera">
      <Link to="/productos" aria-label="Buscar">
        <i className="bx bx-search-alt-2"></i>
      </Link>
      <Link to="/wish" aria-label="Lista de deseos">
        <i className="bx bx-heart"></i>
      </Link>

      <Link aria-label="Carrito de compra" onClick={handleShowCesta}>
        <i id="navbarCarrito" className="bx bx-cart-alt"></i>
        {showCesta && <span className="cart-count">1</span>}
      </Link>
      <Cesta onHide={handleCloseCesta} showModal={showCesta} />

      <span className="navigation_group">
      <Link >
        <i className="bx bx-user userProfile" onClick={handleProfileClick}></i>
      </Link>
        <UserProfileDropdown isVisible={isProfileDropdownVisible} />
      </span>
    </div>
  );
};

export default Botonera;
