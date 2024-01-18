import React, { useState, useEffect } from 'react';
import datosLocales from '/Users/Administrator/Documents/GitHub/lotocare-react/src/recursos/lotocare.json';


function Busqueda() {
  const [datos, setDatos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // Usar los datos locales directamente
    setDatos(datosLocales);
  }, []); // El segundo argumento [] significa que useEffect se ejecutará solo una vez al montar el componente

  const handleBusqueda = () => {
    // Filtrar los datos según la búsqueda
    const resultados = datosLocales.filter(item => item.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    setDatos(resultados);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setBusqueda(inputValue);

    // Realizar la búsqueda automáticamente al modificar el campo
    const resultados = datosLocales.filter(item => item.nombre.toLowerCase().includes(inputValue.toLowerCase()));
    setDatos(resultados);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={handleInputChange}
        />
        <button onClick={handleBusqueda}>Buscar</button>
      </div>

      {busqueda !== '' && datos.length ? (
        // Renderizar los datos si hay resultados y el campo de búsqueda no está vacío
        <>
          <p>Resultados para: {busqueda}</p>
          <ul className='lista'>
            {datos.map(item => (
              <li key={item.id}>
                {item.nombre}
                <img src={item.img} alt={item.nombre} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default Busqueda;









