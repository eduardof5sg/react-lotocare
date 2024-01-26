// import React, { useContext, useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { WishlistContext } from "./wishContext";
// import { getProductData } from "../../pages/Shopping/productsStore";
// import { addToWhishList} from "./wishContext"


// const WishlistModal = ({ product, showModal, closeModal }) => {
//   const {addToWishList, removeFromWishList } = useContext(WishlistContext);
//   const [show, setShow] = useState(showModal);
//   const [productDetails, setProductDetails] = useState(null);

//   useEffect(() => {
   
//     if (product && product.id) {
//       const details = getProductData(product.id);
//       console.log(details)
//       setProductDetails(details);
//     }
//   }, [product]);

//   const handleClose = () => {
//     setShow(false);
//     closeModal();
//   };

//   const handleRemoveFromWishlist = () => {
//     console.log(product)
//     removeFromWishList(product.id);
//     handleClose();
//   };

//   return (
//     <Modal show={showModal} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>hola</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {productDetails && (
//           <>
//             <img src={productDetails.img} alt={productDetails.name} style={{ width: "100%" }} />
//             {/* Agrega más detalles del producto según sea necesario */}
            
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="danger" onClick={handleRemoveFromWishlist}>
//           Eliminar de Favoritos
//         </Button>
//         <Button variant="secondary" onClick={handleClose}>
//           Cerrar
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default WishlistModal;

// import React, { useContext, useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { WishlistContext } from "./wishContext";


// const WishlistModal = ({ product, showModal, closeModal }) => {
//   const { removeFromWishList } = useContext(WishlistContext);
//   const [show, setShow] = useState(showModal);

//   const handleClose = () => {
//     setShow(false);
//     closeModal();
//   };

//   const handleRemoveFromWishlist = () => {
//     removeFromWishList(product.id);
//     handleClose();
//   };

//   return (
//     <Modal show={showModal} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{product && product.name}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {product && (
//           <>
//             <img src={product.img} alt={product.nombre} style={{ width: "100%" }} />
//             {/* Agrega más detalles del producto según sea necesario */}
//             <p>Añadido a Favoritos:</p>
//             <p>Nombre: {product.name}</p>
//             <p>Imagen: {product.img}</p>
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="danger" onClick={handleRemoveFromWishlist}>
//           Eliminar de Favoritos
//         </Button>
//         <Button variant="secondary" onClick={handleClose}>
//           Cerrar
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default WishlistModal;

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
        {selectedProduct ? (
          <>
            <img src={selectedProduct.img} alt={selectedProduct.nombre} style={{ width: "100%" }} />
            <p>Nombre: {selectedProduct.nombre}</p>
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




