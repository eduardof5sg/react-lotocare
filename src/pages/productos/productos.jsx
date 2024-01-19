import React, { useState, useEffect } from 'react';
import datosLocales from '/Users/Administrator/Documents/GitHub/lotocare-react/src/recursos/lotocare.json';
import '../productos/productos.css';

function Busqueda() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    // Obtener todas las categorías únicas de los productos, incluyendo "Todos"
    const categoriasUnicas = ['Todos', ...Array.from(new Set(datosLocales.map(item => item.categoria)))];
    setCategorias(categoriasUnicas);

    // Mostrar todos los productos al cargar la página
    setProductos(datosLocales);
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setBusqueda(inputValue);

    // Filtrar los productos según la búsqueda y la categoría seleccionada
    const resultados = datosLocales.filter(item =>
      item.nombre.toLowerCase().includes(inputValue.toLowerCase()) &&
      (categoriaSeleccionada === 'Todos' || item.categoria === categoriaSeleccionada)
    );
    setProductos(resultados);
  };

  const handleCategoriaClick = (categoria) => {
    // Filtrar productos por categoría al hacer clic en ella
    const resultados = datosLocales.filter(item =>
      (busqueda === '' || item.nombre.toLowerCase().includes(busqueda.toLowerCase())) &&
      (categoria === 'Todos' || item.categoria === categoria)
    );
    setProductos(resultados);
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      
      <div className='busqueda'>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={handleInputChange}
        />
      </div>

      <div className='contenedorPadre'>
          <div className='contenedorHijo1'>
            <ul className='categorias'>
              {categorias.map((categoria, index) => (
                <li key={index} onClick={() => handleCategoriaClick(categoria)}>
                  {categoria}
                </li>
              ))}
            </ul>
          </div>

          <div className='contenedorHijo2'>
            <h2>Productos</h2>
            <ul className='lista'>
              {productos.map(item => (
                <li key={item.id}>
                  <img src={item.img} alt={item.nombre} />
                  <p>{item.nombre}</p>
                  <p>{item.precio}€</p>
                  <p>Aquí el código de Add to cart</p>
                </li>
              ))}
            </ul>
          </div>
    </div>
      
      
    </div>
  );
}

export default Busqueda;










