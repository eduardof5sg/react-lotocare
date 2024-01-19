import React from 'react';
import '../../App.css'
import ImageCarousel from '../../components/carrusel/carrusel';
import datosLocales from '/Users/Administrator/Documents/GitHub/lotocare-react/src/recursos/lotocare.json';
// import Cabecera from '../../components/navbar/Cabecera';
// import Footer from '../../components/navbar/Footer';
import Landingpage from '../../components/landing/bannerhome'
import Promobanner from '../../components/landing/bannerPromo'
import '../../components/landing/home.css'

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



