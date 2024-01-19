// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import bannerImage from '../../image/brand/shiny-modelo.jpg';
import './home.css';

const LandingPage = () => {
  const [fixedText, setFixedText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFixedText(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Big banner image with parallax effect */}
      <Parallax bgImage={bannerImage} strength={500}>
        <div className={fixedText ? 'fixed-text' : ''}>
          {/* Content inside the parallax section */}
          <div>
            <h1>LotoCare</h1>
            <p>La Esencia de la Naturaleza enn tu Piel</p>
          </div>
        </div>
      </Parallax>

      {/* Other elements on the landing page */}
      <div className="other-elements">
        {/* Other sections and elements */}
      </div>
    </div>
  );
};

export default LandingPage;
