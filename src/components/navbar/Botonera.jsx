import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./botonera.css";


export class Botonera extends PureComponent {
  render() {
    
    return (
      <div className="botonera">
        {/* Aquí se agregan los botones de menú */}
        <Link to="/busqueda" aria-label="Buscar">
          <i className='bx bx-search-alt-2'></i>
        </Link>
        <Link to="/perfil" aria-label="Mi perfil">
          <i className='bx bx-user'></i>
        </Link>
        <Link to="/wish" aria-label="Lista de deseos">
          <i className='bx bx-heart'></i>
        </Link>
        <Link to="/shopping" aria-label="Carrito de compra">
          <i className='bx bx-cart-alt'></i>
        </Link>
      </div>
    );
  }
}

export default Botonera;
