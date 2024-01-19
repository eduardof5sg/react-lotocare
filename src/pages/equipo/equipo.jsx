// src/components/OurTeam.js
import React from 'react';
import teamMember1 from '../../image/team/member1.jpg';
import teamMember2 from '../../image/team/member2.jpg';
import teamMember3 from '../../image/team/member3.jpg';
import teamMember4 from '../../image/team/member4.jpg';
import './equipo.css'; // Create a separate CSS file for styling

const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Eduardo', role: 'Product Owner, Developer', image: teamMember1 },
    { id: 2, name: 'Luis Ángel', role: 'Developer', image: teamMember2 },
    { id: 3, name: 'Alejo', role: 'Developer', image: teamMember3 },
    { id: 4, name: 'Almudena', role: 'Scrum Master, Developer', image: teamMember4 },
  ];

  return (
    <div className="our-team">
      {teamMembers.map((member) => (
        <div className="team-card" key={member.id}>
          <img src={member.image} alt={`Team Member ${member.id}`} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
