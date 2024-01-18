// src/components/LandingPage.js
import React from 'react';
import { Parallax } from 'react-parallax';
// import bannerImage from '../../image/brand/shiny-modelo.jpg'

const LandingPage = () => {
  return (
    <div>
      {/* Big banner image with parallax effect */}
      <Parallax bgImage="../../image/brand/shiny-modelo.jpg" strength={500}>
        <div id='bannerHome' style={{ height: '500px' }}>
          {/* Content inside the parallax section */}
          <h1>LotoCare</h1>
          <p>El cuidado de la naturaleza en tu piel</p>
        </div>
      </Parallax>

      {/* Other elements on the landing page */}
      <div>
        {/* Other sections and elements */}
      </div>
    </div>
  );
};

export default LandingPage;
