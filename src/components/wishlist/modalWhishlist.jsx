import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { WishlistContext } from "./wishContext";
import { getProductData } from "../../pages/Shopping/productsStore";
import { Link } from 'react-router-dom';


const WishlistModal = ({ showModal, closeModal }) => {
  const { items, removeFromWishList } = useContext(WishlistContext);
  console.log(items);

  const handleRemoveFromWishlist = (id) => {
    removeFromWishList(id);
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Lista de Deseos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.map((productData) => (
          
          <div key={productData.id}>
            <Link to={`/productoDetallado/${productData.id}`} style={{ textDecoration: 'none' }}>
              <img src={productData.img} alt={getProductData.nombre} style={{ width: "30%", marginBottom: "10px" }} /></Link>
            <p>{productData.nombre}</p>
            <Button variant="danger" onClick={() => handleRemoveFromWishlist(productData.id)}>
              Eliminar de Favoritos
            </Button>
            <hr /> {/* Separador entre productos */}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WishlistModal;
