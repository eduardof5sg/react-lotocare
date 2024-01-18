import './App.css';
import Cabecera from './components/navbar/Cabecera'
import Cuerpo from './components/Cuerpo' // Sustituir en cada caso por el componente correspondiente
import Footer from './components/navbar/Footer';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Cuerpo /> {/* Sustituir en cada caso por el componente correspondiente*/}
      <Footer />
    </div>
  );
}

export default App;
