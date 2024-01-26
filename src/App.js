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
import {WishlistProvider} from './components/Favoritos/WishlistContext';
import AboutUs from './pages/aboutUs/about'
import OurTeam from "./pages/equipo/equipo";
import wishlistPage from "./pages/Favoritos/wishlistPage";


function App() {
  return (
    <CartProvider>
    <WishlistProvider>
      <BrowserRouter>
        {/* <Router> */}
        <Cabecera />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/productos" element={<Store />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/wishlist" element={<wishlistPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/equipo" element={<OurTeam />} />
        </Routes>
        <Footer />
        {/* </Router> */}
      </BrowserRouter>
    </WishlistProvider>
    </CartProvider>
  );
}

export default App;
