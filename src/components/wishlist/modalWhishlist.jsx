import React, { useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { WishlistContext } from "./wishContext";
import { getProductData } from "../../pages/Shopping/productsStore";


const WishlistModal = ({ product, showModal, closeModal }) => {
  const { removeFromWishList } = useContext(WishlistContext);
  const [show, setShow] = useState(showModal);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
   
    if (product && product.id) {
      const details = getProductData(product.id);
      setProductDetails(details);
    }
  }, [product]);

  const handleClose = () => {
    setShow(false);
    closeModal();
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishList(product.id);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{productDetails?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productDetails && (
          <>
            <img src={productDetails.imagen} alt={productDetails.name} style={{ width: "100%" }} />
            {/* Agrega más detalles del producto según sea necesario */}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleRemoveFromWishlist}>
          Eliminar de Favoritos
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WishlistModal;




