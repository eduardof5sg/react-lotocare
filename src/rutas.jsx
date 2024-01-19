// En Routes.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from '../src/components/Compra/ProductCard'
import PaginaPrincipal from './pages/home/home';  // Ajusta la ruta según tu estructura
// import Formulario from './pages/Formulario/Formulario';
// import Cesta from './pages/Cesta/Cesta';
// import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario';
// import ProductoDetallado from './pages/ProductoDetallado/ProductoDetallado';
import Cabecera from './components/navbar/Cabecera';
import Footer from './components/navbar/Footer';
import AboutUs from './pages/aboutUs/about';
import OurTeam from './pages/equipo/equipo';
import { productsArray } from './components/Compra/Shopping/productsStore';

const Ruta = () => {
  return (
    <Router>
        <Cabecera />
          <Routes>          
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/productos" element={<ProductCard product={productsArray[0]} />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/equipo" element={<OurTeam />} />
            {/* <Route path="/formulario" element={<Formulario />} /> */}
            {/* <Route path="/cesta" element={<Cesta />} /> */}
            {/* <Route path="/perfil-usuario" element={<PerfilUsuario />} /> */}
            {/* <Route path="/producto-detallado" element={<ProductoDetallado />} /> */}
          </Routes>
        <Footer />    
    </Router>
  );
};

export default Ruta
