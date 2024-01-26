import './App.css';
import Cabecera from './components/navbar/Cabecera'
import Formulario from './components/pages/formulario/formulario.jsx' // Sustituir en cada caso por el componente correspondiente
import Footer from './components/navbar/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      {/* <Router> */}
      <Cabecera />
      <Routes>
        {/* <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/productos" element={<Store />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/aboutUs" element={<AboutUs />} /> 
        <Route path="/equipo" element={<OurTeam />} /> */}
        <Route path="/formulario" element={<Formulario />} />
        {/* <Route path="/cesta" element={<Cesta />} /> 
        <Route path="/perfil-usuario" element={<PerfilUsuario />} /> 
        <Route path="/productoDetallado/:id" element={<ProductoDetallado/>} /> */}
      </Routes>
      <Formulario /> {/* Sustituir en cada caso por el componente correspondiente*/}
      <Footer />
      {/* </Router> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
