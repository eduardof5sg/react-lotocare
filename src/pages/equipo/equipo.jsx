// src/components/OurTeam.js
import React from 'react';
import teamMember1 from '../../image/pfpedu.png';
import teamMember2 from '../../image/pfplu.png';
import teamMember3 from '../../image/pfpale.png';
import teamMember4 from '../../image/pfpalmu.png';
import './equipo.css'; 

const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Eduardo', role: 'Product Owner, Developer', image: teamMember1, description: 'Introducing Eduardo, the creative mind behind our natural skincare and makeup line. With a deep commitment to purity and quality, Eduardo has carefully crafted each product to enhance your beauty naturally. Immerse yourself in the essence of authentic beauty with Eduardos thoughtful creations.' },
    { id: 2, name: 'Luis Ángel', role: 'Developer', image: teamMember2, description: 'Unveiling Luis, the brilliant mind behind the seamless functionality of our products. With a passion for innovation, Luis has played a key role in crafting a user experience that goes beyond expectation. Explore the synergy of design and functionality, meticulously brought to you by Luis. Elevate your experience with our products, where technology meets intuition.' },
    { id: 3, name: 'Alejo', role: 'Developer', image: teamMember3, description: 'Meet Alejo, the coding maestro shaping the technological backbone of our products. With an innate knack for problem-solving, Alejo has intricately woven functionality into every aspect. Experience the seamless and efficient results of Alejos coding expertise, enhancing your interaction with our products. ' },
    { id: 4, name: 'Almudena', role: 'Scrum Master, Developer', image: teamMember4, description: 'Introducing Almudena, our Scrum Master orchestrating the harmonious development of our products. With a keen eye for organization and a dedication to agile methodologies, Almudena ensures each team members efforts align seamlessly. Embrace the spirit of teamwork and progress under Almudenas expert guidance.' },
  ];

  return (
    <div className="our-team">
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
