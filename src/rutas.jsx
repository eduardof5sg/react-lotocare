import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Store from './pages/productos/Store';
import PaginaPrincipal from './pages/home/home';  // Ajusta la ruta según tu estructura
// import Formulario from './pages/Formulario/Formulario';
// import Cesta from './pages/Cesta/Cesta';
// import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario';
// import ProductoDetallado from './pages/ProductoDetallado/ProductoDetallado';
import Cabecera from './components/navbar/Cabecera';
import Footer from './components/navbar/Footer';
import AboutUs from './pages/aboutUs/about';
import OurTeam from './pages/equipo/equipo';
import CartProvider from './components/Compra/CartContext';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/Compra/Shopping/Navbar';


const Ruta = () => {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          {/* <Router> */}
              <Cabecera />
                <Routes>          
                  <Route path="/" element={<PaginaPrincipal />} />
                  <Route path="/productos" element={<Store />} />
                  <Route path="/aboutUs" element={<AboutUs />} />
                  <Route path="/equipo" element={<OurTeam />} />
                  {/* <Route path="/formulario" element={<Formulario />} /> */}
                  {/* <Route path="/cesta" element={<Cesta />} /> */}
                  {/* <Route path="/perfil-usuario" element={<PerfilUsuario />} /> */}
                  {/* <Route path="/producto-detallado" element={<ProductoDetallado />} /> */}
                </Routes>
              <Footer />    
          {/* </Router> */}
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
};

export default Ruta
