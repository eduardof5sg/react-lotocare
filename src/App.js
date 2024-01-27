import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Shopping/Store";
import Success from "./pages/Shopping/Success";
import Cancel from "./pages/Shopping/Cancel";
import CartProvider from "./components/Shopping/CartContext";
import PaginaPrincipal from "./pages/home/home";
import Cabecera from "./components/navbar/Cabecera";
import Footer from "./components/navbar/Footer";
import ProfilePage from "./pages/perfil/ProfilePage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* <Router> */}
        <Cabecera />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/productos" element={<Store />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/profilePage" element={<ProfilePage />} />
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
    </CartProvider>
  );
}

export default App;
