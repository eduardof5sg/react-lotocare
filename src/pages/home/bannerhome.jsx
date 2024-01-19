// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import bannerImage from '../../image/brand/shiny-modelo.jpg'
import '../home/bannerHome.css'

const LandingPage = () => {
  const [fixedText, setFixedText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set fixedText to true when the user scrolls down beyond a certain point (e.g., 200 pixels)
      setFixedText(window.scrollY > 200);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Big banner image with parallax effect */}
      <Parallax bgImage={bannerImage} strength={500}>
        <div style={{ height: '500px' }}>
          {/* Content inside the parallax section */}
          <div
            style={{
              position: fixedText ? 'fixed' : 'relative',
              top: fixedText ? '0' : '50%',
              left: '50%',
              transform: fixedText ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%',
              padding: '20px',
              zIndex: 1000,
              transition: 'top 0.01s ease-in', // Added transition property
              transition: 'top 0.4s ease-out', // Added transition property
            }}
          >
            <h1 style={{ fontSize: fixedText ? '24px' : '36px', margin: '0' }}>Your Ecommerce Website</h1>
            <p style={{ fontSize: fixedText ? '14px' : '18px', margin: '0' }}>Explore our amazing products</p>
          </div>
        </div>
      </Parallax>

      {/* Other elements on the landing page */}
      <div style={{ marginTop: fixedText ? '80px' : '0' }}>
        {/* Other sections and elements */}
      </div>
    </div>
  );
};

export default LandingPage;