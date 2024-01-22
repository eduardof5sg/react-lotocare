import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from './components/Compra/Shopping/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/productos/Store';
import CartProvider from './components/Compra/CartContext';
import PaginaPrincipal from './pages/home/home';
import Cabecera from './components/navbar/Cabecera';
import Footer from './components/navbar/Footer'

function App() {
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
                  {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
                  {/* <Route path="/equipo" element={<OurTeam />} /> */}
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
}

export default App;