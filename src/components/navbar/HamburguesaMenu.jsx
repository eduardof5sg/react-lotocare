import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          {/* Utilizar Link en lugar de <a> */}
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link>
          <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>Sobre nosotros</Link>
          <Link to="/equipo" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </div>
  );
};

export default HamburguesaMenu;

