import Button from "react-bootstrap/Button";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getProductData } from "../../pages/Shopping/productsStore";
import "./CartProduct.css";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  
   return (
    <div className="cart-product">
      <div className="product-image">
        <img src={productData.img} alt={productData.nombre} />
      </div>
      <div className="product-details">
        <h3>{productData.nombre}</h3>
        <p>Price: €{productData.precio.toFixed(2)}</p>
        <p>total: {quantity}</p>
        <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartProduct;