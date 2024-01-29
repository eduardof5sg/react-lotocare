// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import bannerImage from '../../image/brand/shiny-modelo.jpg';
import '../../components/landing/home.css';

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
        <Parallax bgImage={bannerImage} strength={500}>
          <div className={fixedText ? 'fixed-text' : ''}>            
            <div className='logoBanner'>
              <h1>LotoCare</h1>
              <p>La Esencia de la Naturaleza enn tu Piel</p>
            </div>
          </div>
        </Parallax>      
    <div className="other-elements">        
    </div>
    </div>
  );
};

export default LandingPage;
