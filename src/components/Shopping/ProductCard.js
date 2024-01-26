import React, { useContext } from "react";
import { Card, Button, Form, Row, Col,} from "react-bootstrap";
// import { WishlistContext } from "../Favoritos/WishlistContext";
import { CartContext } from "./CartContext";

function ProductCard({ product }) {
  const cart = useContext(CartContext);
  const wishlist = wishlist();
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card>
      <Card.Img variant="top" src={product.img} alt={product.altText} />
      <Card.Body>

        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>€{product.precio}</Card.Text>
        <Button
          variant="outline-secondary"
          onClick={() => wishlist.addToWishlist(product)}
          className="my-2" 
          >
           <i className="bx bx-heart"></i>
        </Button>
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
              Remove from cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button> )
        }
      </Card.Body>
    </Card>
  );
}

export default ProductCard;