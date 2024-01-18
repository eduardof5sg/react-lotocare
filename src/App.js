import './App.css';
import LandingPage from './components/home/bannerhome';
import Busqueda from './components/busqueda/busqueda';
import ImageCarousel from './components/carrusel/carrusel';
import datosLocales from '../src/lotocare.json';
import Cabecera from './components/navbar/Cabecera'
import Footer from './components/navbar/Footer'

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Busqueda />    
      <LandingPage />
     
      <ImageCarousel data={datosLocales} /> Pasa los datos a ImageCarousel */
      <Footer />
    </div>
  );
}

export default App;
