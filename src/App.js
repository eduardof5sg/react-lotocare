import './App.css';
import Busqueda from './components/busqueda/busqueda';
import ImageCarousel from './components/carrusel/carrusel';
import datosLocales from '/Users/Administrator/Documents/GitHub/lotocare-react/src/recursos/lotocare.json';
import Cabecera from './components/navbar/Cabecera'
import Footer from './components/navbar/Footer'

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Busqueda />    
     
      <ImageCarousel data={datosLocales} /> Pasa los datos a ImageCarousel */
      <Footer />
    </div>
  );
}

export default App;
