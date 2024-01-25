// src/components/OurTeam.js
import React from 'react';
import teamMember1 from '../../image/pfpedu.png';
import teamMember2 from '../../image/pfplu.png';
import teamMember3 from '../../image/pfpale.png';
import teamMember4 from '../../image/pfpalmu.png';
import './equipo.css'; 

const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Eduardo', role: 'Product Owner, Developer', image: teamMember1, description: 'Presentamos a Eduardo, la mente creativa detrás de nuestra línea de cuidado de la piel y maquillaje natural. Con un compromiso profundo con la pureza y la calidad, Eduardo ha diseñado cuidadosamente cada producto para realzar tu belleza de forma natural. Sumérgete en la esencia de la auténtica belleza con las cuidadas creaciones de Eduardo.' },
    { id: 2, name: 'Luis Ángel', role: 'Developer', image: teamMember2, description: 'Presentamos a Luis, la brillante mente detrás de la funcionalidad perfecta de nuestros productos. Con una pasión por la innovación, Luis ha desempeñado un papel fundamental en crear una experiencia del usuario que va más allá de las expectativas. Explora la sinergia entre el diseño y la funcionalidad, meticulosamente traída a ti por Luis. Eleva tu experiencia con nuestros productos, donde la tecnología se encuentra con la intuición.' },
    { id: 3, name: 'Alejo', role: 'Developer', image: teamMember3, description: 'Conoce a Alejo, el maestro del código que da forma a la columna vertebral tecnológica de nuestros productos. Con un talento innato para resolver problemas, Alejo ha tejido intrincadamente la funcionalidad en cada aspecto. Experimenta los resultados fluidos y eficientes de la experiencia en codificación de Alejo, mejorando tu interacción con nuestros productos.' },
    { id: 4, name: 'Almudena', role: 'Scrum Master, Developer', image: teamMember4, description: 'Te presentamos a Almudena, nuestra Scrum Master que orquesta el desarrollo harmonioso de nuestros productos. Con una aguda visión para la organización y una dedicación a las metodologías ágiles, Almudena se asegura de que los esfuerzos de cada miembro del equipo se alineen de manera fluida. Acepta el espíritu de trabajo en equipo y progreso bajo la experta guía de Almudena.' },
  ];

  return (
    <div className="our-team">
      <div className='section-head'>
      <h2>El equipo de Loto Care</h2>
      </div>
      <div className="diamond-row">
        <div className="team-card single-card">
          <div className='card-first'>
           <img src={teamMembers[0].image} alt={`Team Member ${teamMembers[0].id}`} />
           <h3>{teamMembers[0].name}</h3>
           <h4>{teamMembers[0].role}</h4>
          </div>
          <p>{teamMembers[0].description}</p>
        </div>
      </div>
      <div className="diamond-row">
        <div className="team-card double-card">
          <div className='card-first'>          
            <img src={teamMembers[1].image} alt={`Team Member ${teamMembers[1].id}`} />
            <h3>{teamMembers[1].name}</h3>
            <h4>{teamMembers[1].role}</h4>
          </div>
          <p>{teamMembers[1].description}</p>
        </div>
        <div className="team-card double-card">          
         <p>{teamMembers[2].description}</p>
          <div className='card-first'>
            <img src={teamMembers[2].image} alt={`Team Member ${teamMembers[2].id}`} />
            <h3>{teamMembers[2].name}</h3>
            <h4>{teamMembers[2].role}</h4>
          </div>
        </div>
      </div>
      <div className="diamond-row">
        <div className="team-card single-card">
          <div className='card-first'>
            <img src={teamMembers[3].image} alt={`Team Member ${teamMembers[3].id}`} />
            <h3>{teamMembers[3].name}</h3>
            <h4>{teamMembers[3].role}</h4>
          </div>
          <p>{teamMembers[3].description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
