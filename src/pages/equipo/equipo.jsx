// src/components/OurTeam.js
import React from 'react';
<<<<<<< HEAD
import teamMember1 from '../../image/pfpedu.png';
import teamMember2 from '../../image/pfplu.png';
import teamMember3 from '../../image/pfpale.png';
import teamMember4 from '../../image/pfpalmu.png';
import './equipo.css'; 

const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Eduardo', role: 'Product Owner, Developer', image: teamMember1 },
    { id: 2, name: 'Luis Ángel', role: 'Developer', image: teamMember2 },
    { id: 3, name: 'Alejo', role: 'Developer', image: teamMember3 },
    { id: 4, name: 'Almudena', role: 'Scrum Master, Developer', image: teamMember4 },
=======
// import teamMember1 from '../../image/team/member1.jpg';
// import teamMember2 from '../../image/team/member2.jpg';
// import teamMember3 from '../../image/team/member3.jpg';
// import teamMember4 from '../../image/team/member4.jpg';
import './equipo.css'; // Create a separate CSS file for styling

const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Eduardo', role: 'Product Owner, Developer',  },
    { id: 2, name: 'Luis Ángel', role: 'Developer', },
    { id: 3, name: 'Alejo', role: 'Developer',  },
    { id: 4, name: 'Almudena', role: 'Scrum Master, Developer',   },
>>>>>>> developer
  ];

  return (
    <div className="our-team">
<<<<<<< HEAD
      <div className="diamond-row">
        <div className="team-card single-card">
          <img src={teamMembers[0].image} alt={`Team Member ${teamMembers[0].id}`} />
          <h3>{teamMembers[0].name}</h3>
          <p>{teamMembers[0].role}</p>
        </div>
      </div>
      <div className="diamond-row">
        <div className="team-card double-card">
          <img src={teamMembers[1].image} alt={`Team Member ${teamMembers[1].id}`} />
          <h3>{teamMembers[1].name}</h3>
          <p>{teamMembers[1].role}</p>
        </div>
        <div className="team-card double-card">
          <img src={teamMembers[2].image} alt={`Team Member ${teamMembers[2].id}`} />
          <h3>{teamMembers[2].name}</h3>
          <p>{teamMembers[2].role}</p>
        </div>
      </div>
      <div className="diamond-row">
        <div className="team-card single-card">
          <img src={teamMembers[3].image} alt={`Team Member ${teamMembers[3].id}`} />
          <h3>{teamMembers[3].name}</h3>
          <p>{teamMembers[3].role}</p>
        </div>
      </div>
=======
      {teamMembers.map((member) => (
        <div className="team-card" key={member.id}>
          <img src={member.image} alt={`Team Member ${member.id}`} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
>>>>>>> developer
    </div>
  );
};

<<<<<<< HEAD
export default OurTeam;
=======
export default OurTeam;
>>>>>>> developer
