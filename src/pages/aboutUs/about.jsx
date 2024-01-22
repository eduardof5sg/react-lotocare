// src/components/AboutUs.js
import React from 'react';
import '../aboutUs/about.css';
import about1 from '../../image/brand/cosmetic.jpg';
import about2 from '../../image/brand/naturecosmetic.jpg';
import about3 from '../../image/brand/modelo-agua.jpg';


const AboutUs = () => {
  return (
    <div>
      {/* First row */}
      <div className="first-row">
        <img src={about1} alt="About Us 1" />
        <div>
          <h2>Una Historia de Innovación y Belleza</h2>
          <p>Somos una marca que nació del deseo de ofrecer una solución simple y efectiva para el cuidado de la piel. <br />
          Nacimos en Madrid, por lo cual nos esforzamos en mantener nuestra relaación con empresas locales <br /> 
          Incluso ahora, con nuestra presencia gobal en expansión, la mayoria de nuestros productos <br />
          todavía se fabrican dentro de la Comunidad de Madrid </p>
        </div>
      </div>

      {/* Second row */}
      <div className="second-row">
        <div>
          <h2>Sostenibilidad y Calidad</h2>
          <p>Menos es más: Creemos en una forma de vida simple, pero mejor. <br />
          Desde el principio, nuestras fórmulas han sido diseñadas para ofrecer más beneficios con menos pasos, <br />
          nuestros productos, testados en laboratorio, hacen lo que dicen que hacen. <br />
          Así de simple: menos pasos en tu rutina, menos embalaje y menos desperdicio. </p>
        </div>
        <img src={about2} alt="About Us 2" />
      </div>

      {/* Third row */}
      <div className="third-row">
        <img src={about3} alt="About Us 3" />
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
