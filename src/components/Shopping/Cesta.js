import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";
import { Button, Modal } from "react-bootstrap";

function Cesta({ onHide, showModal }) {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(showModal);

  useEffect(() => {
    setShow(showModal);
  }, [showModal, cart]);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url);
        }
    });
}
  
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Cesta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsCount > 0 ? (
          <>
            <p>Productos en la cesta:</p>
            {cart.items.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              ></CartProduct>
            ))}

            <h1>Total: €{cart.getTotalCost().toFixed(2)}</h1>

            <Button variant="success" onClick={checkout}>
              ¡Ir a pagar!
            </Button>
          </>
        ) : (
          <h1>¡Tú carrito está vacio!</h1>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default Cesta;
