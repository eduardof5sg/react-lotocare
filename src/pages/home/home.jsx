import React from 'react';
// import '../../App.css'
import ImageCarousel from '../../components/carrusel/carrusel';
import datosLocales from '../../db.json';
// import Cabecera from '../../components/navbar/Cabecera';
// import Footer from '../../components/navbar/Footer';
import Landingpage from '../../components/landing/bannerhome'
import Promobanner from '../../components/landing/bannerPromo'


const PaginaPrincipal = () => {
  return (
    <div  >
     
        <Landingpage />     
        <ImageCarousel  data={datosLocales} />       
        <Promobanner />
     
    </div>
  );
};

export default PaginaPrincipal;



