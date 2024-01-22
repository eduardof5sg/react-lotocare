import React from 'react'
import HamburguesaMenu from './HamburguesaMenu';
import './cabecera.css'; // Estilos CSS para el menú
import Logo from './Logo';
import Botonera from './Botonera';


function Cabecera() {
  return (
    <div className='cabecera'>
      <Logo />
      <HamburguesaMenu />
      <Botonera />
      
    </div>
  )
}

export default Cabecera

