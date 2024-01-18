import React, { useState } from 'react';
import './hamburguesaMenu.css'; // Estilos CSS para el menú

const HamburguesaMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburguesa-menu">
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {menuOpen && (
        <div className="menu-content">
          {/* Aquí se agregan los elementos de menú */}
          <a href="../index.html">Inicio</a>
          <a href="../src/pages/perfil">Productos</a>
          <a href="../src/pages/aboutUs">Sobre nosotros</a>
          <a href="../src/pages/aboutUs">Contacto</a>
        </div>
      )}
    </div>
  );
};

export default HamburguesaMenu;
