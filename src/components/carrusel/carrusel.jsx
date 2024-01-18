import React, { useState } from 'react';

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
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(${-currentImageIndex * 100}%)` }}>
        {categories.map((category) => (
          groupedImages[category].slice(0, 2).map((image, index) => (
            <div key={`${category}_${index}`} style={{ flex: '0 0 20%', boxSizing: 'border-box' }}>
              <img src={image.img} alt={image.categoria} style={{ width: '100%' }} />
            </div>
          ))
        ))}
      </div>
      <button onClick={handlePrev}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default ImageCarousel;
