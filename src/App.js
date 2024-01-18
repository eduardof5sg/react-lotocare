import './App.css';
import Busqueda from './components/busqueda/busqueda';
import ImageCarousel from './components/carrusel/carrusel';
import datosLocales from '/Users/Administrator/Documents/GitHub/lotocare-react/src/recursos/lotocare.json';

function App() {
  return (
    <div className="App">
      
      <Busqueda />
      <p>aquí estaría la navbar</p>
      <h1>Aquí deberían estar las rutas que nos redirijan a home.jsx</h1>
      <p>aquí el footer</p>
      <ImageCarousel data={datosLocales} /> {/* Pasa los datos a ImageCarousel */}
    </div>
  );
}

export default App;
