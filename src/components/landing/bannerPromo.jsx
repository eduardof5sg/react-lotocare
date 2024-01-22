// src/components/PromoBanner.js
import React from 'react';
import { Link } from 'react-router-dom';
// import bannerImage from '../../image/brand/modelo-producto.jpg';
import './promo.css'; 

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="banner-content">
        <div className="banner-left">
          <span className="big-font-number">20%</span>
        </div>
        <div className="banner-middle">
          <p>¡Nuevas ofertas en tus productos favoritos!</p>
        </div>
        <div className="banner-right">
          <span className="double-arrow">➤➤</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
