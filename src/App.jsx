import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Pages/Shopping/Navbar';
import { Container } from 'react-bootstrap';  
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cancel from './components/Pages/Shopping/Cancel';
import Store from './components/Pages/Shopping/Store';
import Success from './components/Pages/Shopping/Success';

function App() {
  return (
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
  );
}

export default App;
