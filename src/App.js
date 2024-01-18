import './App.css';
import Cabecera from './components/navbar/Cabecera'
import Formulario from './components/pages/formulario/Formulario.jsx' // Sustituir en cada caso por el componente correspondiente
import Footer from './components/navbar/Footer';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Formulario /> {/* Sustituir en cada caso por el componente correspondiente*/}
      <Footer />
    </div>
  );
}

export default App;
