import React, { useContext } from "react";
import { Card, Button, Form, Row, Col,} from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import AddToFavoritesButton from "../../components/wishlist/wishlist"

function ProductCard({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  

  return (
    <Card>
      <Link to={`/productoDetallado/${product.id}`} style={{ textDecoration: 'none' }}>
       <Card.Img variant="top" src={product.img} alt={product.altText} />
      </Link>
      <Card.Body>

        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>€{product.precio}</Card.Text>
        
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              Eliminar del carrito
            </Button>
           
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Añadir al carrito
          </Button> 
          
        )}
        <AddToFavoritesButton product={product} />
      </Card.Body>
    </Card>
  );
}

export default ProductCard;