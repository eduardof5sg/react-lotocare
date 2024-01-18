import React, { PureComponent } from "react";
import "./botonera.css";

export class Botonera extends PureComponent {
  render() {
    return (
      <div className="botonera">
        {/* Aquí se agregan los botones de menú */}
        <a href="../src/pages/busqueda"><i class='bx bx-search-alt-2' aria-label='Buscar'></i></a>
        <a href="../src/pages/perfil"><i class='bx bx-user' aria-label='Mi perfil'></i></a>
        <a href="../src/pages/wish"><i class='bx bx-heart' aria-label='Lista de deseos'></i></a>
        <a href="../src/pages/shopping"><i class='bx bx-cart-alt' aria-label='Carrito de compra'></i></a>
      </div>
    );
  }
}

export default Botonera;
