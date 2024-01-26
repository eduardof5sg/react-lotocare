import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { WishlistContext } from "./wishContext";
import { getProductData } from "../../pages/Shopping/productsStore";

const WishlistModal = ({ showModal, closeModal }) => {
  const { items } = useContext(WishlistContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => {
    setSelectedProduct(null);
    closeModal();  // Llama a la función para cerrar el modal
  };

  const handleShow = (productId) => {
    const productData = getProductData(productId);
    setSelectedProduct(productData);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Producto en Favoritos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items ? (
          <>
            <img src={items.img} alt={items.nombre} style={{ width: "100%" }} />
            <p>Nombre: {items.nombre}</p>
            {/* Agrega más detalles del producto según sea necesario */}
          </>
        ) : (
          <p>No hay producto seleccionado.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        {/* Puedes agregar más acciones de botones según tus necesidades */}
      </Modal.Footer>
    </Modal>
  );
};

export default WishlistModal;




