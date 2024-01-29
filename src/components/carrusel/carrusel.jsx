import React, { useState } from 'react';
import "./carrusel.css"
import { Link } from 'react-router-dom';

const ImageCarousel = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filtrar y agrupar las imágenes por categoría
  const groupedImages = data.reduce((acc, image) => {
    acc[image.categoria] = acc[image.categoria] || [];
    acc[image.categoria].push(image);
    return acc;
  }, {});

  // Obtener un array de categorías
  const categories = Object.keys(groupedImages);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='titulo'>
      <h2>Best Sellers</h2>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>        
        <div className="contenedor" style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(${-currentImageIndex * 9}%)` }}>
          {categories.map((category) => (
            groupedImages[category].slice(0, 1).map((image, index) => (
              <div className='imagenCarrusel' key={`${category}_${index}`}>
                <Link to={`/productoDetallado/${image.id}`} style={{ textDecoration: 'none' }}>
                 <img src={image.img} alt={image.categoria}/>
                </Link> 
              </div>              
            ))
          ))}
        </div>
        <div className='botoneraCarrusel'>
          <i onClick={handlePrev} className='bx bx-chevron-left-circle bx-lg ' ></i>
          <i onClick={handleNext} className='bx bx-chevron-right-circle bx-lg ' ></i>
        </div>
      </div>
    </div>
  );

};

export default ImageCarousel;
