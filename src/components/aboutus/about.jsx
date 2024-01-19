// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* First row */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="../src/image/brand/cosmetic.jpg" alt="About Us 1" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
        <div>
          <h2>Una Historia de Innovación y Belleza</h2>
          <p>Somos una marca que nació del deseo de ofrecer una solución simple y efectiva para el cuidado de la piel. <br />
          Nacimos en Madrid, por lo cual nos esforzamos en mantener nuestra relaación con empresas locales <br /> 
          Incluso ahora, con nuestra presencia gobal en expansión, la mayoria de nuestros productos <br />
          todavía se fabrican dentro de la Comunidad de Madrid </p>
        </div>
      </div>

      {/* Second row */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <h2>Sostenibilidad y Calidad</h2>
          <p>Menos es más: Creemos en una forma de vida simple, pero mejor. <br />
          Desde el principio, nuestras fórmulas han sido diseñadas para ofrecer más beneficios con menos pasos, <br />
          nuestros productos, testados en laboratorio, hacen lo que dicen que hacen. <br />
          Así de simple: menos pasos en tu rutina, menos embalaje y menos desperdicio. </p>
        </div>
        <img src="../src/image/brand/naturecosmetic.jpg" alt="About Us 2" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
      </div>

      {/* Third row */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="../src/image/brand/modelo-agua.jpg" alt="About Us 3" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
        <div>
          <h2>Belleza Sin Fronteras</h2>
          <p>Creemos en la belleza inherente de las personas, es por eso que queremos preservarla y <br />
          ensalzarla con productos que hablen por sí mismos, libres de pretensiones, y que celebren la belleza en<br />
          todas sus formas. <br />
          Esa es nuestra filosofía: productos efectivos, sencillos y respetuosos con tu piel.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
