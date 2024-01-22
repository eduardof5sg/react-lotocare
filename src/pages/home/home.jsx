import React from 'react';
import '../../App.css'
import ImageCarousel from '../../components/carrusel/carrusel';
import datosLocales from '../../db.json';
// import Cabecera from '../../components/navbar/Cabecera';
// import Footer from '../../components/navbar/Footer';
import Landingpage from '../../components/landing/bannerhome'
import Promobanner from '../../components/landing/bannerPromo'


const PaginaPrincipal = () => {
  return (
    <div className='home' >
      <div style={{ zIndex: 1, height:'90%'}}> 
        <Landingpage />      
      </div>
      <div style={{ zIndex: 2, height:'10%' }}>
        <ImageCarousel  data={datosLocales} />
       
      </div> 
      <div>
        <Promobanner />
      </div>
    </div>
  );
};

export default PaginaPrincipal;



