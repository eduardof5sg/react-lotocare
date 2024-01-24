import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import productsArray from "../../db.json";
import './busqueda.css'

const ProductFilterModal = ({ showModal, onClose }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const uniqueCategories = productsArray ? [...new Set(productsArray.map((product) => product.categoria))] : [];
  const filteredProducts = categoryFilter
    ? productsArray.filter(product => product.categoria === categoryFilter)
    : productsArray;

  return (
    <Modal show={showModal} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Productos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          
          <div className="categories-section">
            
            <ul>
              <li>
                <Button variant="link" onClick={() => setCategoryFilter('')}>
                  Todos los productos
                </Button>
              </li>
              {uniqueCategories.map((category) => (
                <li key={category}>
                  <Button variant="link" onClick={() => setCategoryFilter(category)}>
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <h5>Productos</h5>
          <div className="products-section">
            
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <img src={product.img} alt={product.nombre} />
                <p>{product.nombre}</p>
                <p>Precio: €{product.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductFilterModal;







