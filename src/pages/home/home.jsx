import React from 'react';
import '../../App.css'
import ImageCarousel from '../../components/carrusel/carrusel';
import datosLocales from '/Users/Administrator/Documents/GitHub/lotocare-react/src/recursos/lotocare.json';
import Cabecera from '../../components/navbar/Cabecera';
import Footer from '../../components/navbar/Footer';

const PaginaPrincipal = () => {
  return (
    <div>
      <Cabecera />
      
      <ImageCarousel data={datosLocales} />
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;



