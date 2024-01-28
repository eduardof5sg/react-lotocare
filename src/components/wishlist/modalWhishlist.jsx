// import React, { useContext } from "react";
// import { Modal, Button } from "react-bootstrap";
// import { WishlistContext } from "./wishContext";

// const WishlistModal = ({ showModal, closeModal }) => {
//   const { items, removeFromWishList } = useContext(WishlistContext);

//   const handleRemoveFromWishlist = (id) => {
//     removeFromWishList(id);
//   };

//   return (
//     <Modal show={showModal} onHide={closeModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>Lista de Deseos</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {items.map((product) => (
//           <div key={product.id}>
//             <img src={product.img} alt={product.nombre} style={{ width: "100%" }} />
//             <p>{product.nombre}</p>
//             <Button variant="danger" onClick={() => handleRemoveFromWishlist(product.id)}>
//               Eliminar de Favoritos
//             </Button>
//           </div>
//         ))}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={closeModal}>
//           Cerrar
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default WishlistModal;

import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { WishlistContext } from "./wishContext";
import { getProductData } from "../../pages/Shopping/productsStore";

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
            <img src={productData.img} alt={getProductData.nombre} style={{ width: "30%", marginBottom: "10px" }} />
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
