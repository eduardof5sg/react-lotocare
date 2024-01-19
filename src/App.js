import './App.css';
import LandingPage from './pages/home/bannerHome';
import Busqueda from './components/busqueda/busqueda';
import ImageCarousel from './components/carrusel/carrusel';
import datosLocales from '../src/lotocare.json';
import Cabecera from './components/navbar/Cabecera'
import Footer from './components/navbar/Footer'
import PromoBanner from './pages/home/bannerPromo';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Busqueda />    
      <LandingPage />
     
      <ImageCarousel data={datosLocales} /> Pasa los datos a ImageCarousel */
      <PromoBanner />
      <Footer />
    </div>
  );
}

export default App;
