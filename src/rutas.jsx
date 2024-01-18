// En Routes.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Busqueda from './pages/productos/productos';
import PaginaPrincipal from './pages/home/home';  // Ajusta la ruta según tu estructura
// import Formulario from './pages/Formulario/Formulario';
// import Cesta from './pages/Cesta/Cesta';
// import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario';
// import ProductoDetallado from './pages/ProductoDetallado/ProductoDetallado';

const Ruta = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/productos" element={<Busqueda />} />
            {/* <Route path="/formulario" element={<Formulario />} /> */}
            {/* <Route path="/cesta" element={<Cesta />} /> */}
            {/* <Route path="/perfil-usuario" element={<PerfilUsuario />} /> */}
            {/* <Route path="/producto-detallado" element={<ProductoDetallado />} /> */}
        </Routes>    
    </Router>
  );
};

export default Ruta
