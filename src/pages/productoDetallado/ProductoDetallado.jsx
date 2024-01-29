import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import productsArray from '../../db.json';
import { CartContext } from '../../components/Shopping/CartContext';
import './detallado.css';
import AddToFavoritesButton from '../../components/wishlist/wishlist';

const ProductoDetallado = () => {
  const { id } = useParams();
  const product = productsArray.find((product) => product.id === id);
  const cart = useContext(CartContext);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const addToCart = () => {
    cart.addOneToCart(product.id);
  };

  const removeFromCart = () => {
    cart.removeOneFromCart(product.id);
  };

  const deleteFromCart = () => {
    cart.deleteFromCart(product.id);
  };

  return (
    <div className='productoDetallado'>
      
      <div className='imagenDetallada'>
        <img src={product.img} alt={product.nombre} />
        
      </div>
      <div className='infoProducto'>
        <h2>{product.nombre}</h2><AddToFavoritesButton product={product} />
        <p className='precio'>Precio: €{product.precio}</p>
        
        {cart.getProductQuantity(product.id) > 0 ? (
          <div className='botonCarrito'>
            <div className='boton1'>
              <Button variant='success' onClick={removeFromCart}>
                -
              </Button>
              <span className='cantidadProducto'>
                {cart.getProductQuantity(product.id)}
              </span>
              <Button variant='success' onClick={addToCart}>
                +
              </Button>
            </div>
            <div className='boton2'>
              <Button variant='danger' onClick={deleteFromCart}>
                Eliminar del carrito
              </Button>
            </div>
            
          </div>
        ) : (
          <Button variant='primary' onClick={addToCart}>
            Añadir al carrito
          </Button>
        )}
        <p className='infoProducto'>"{product.info}"</p>
        
      </div>

    </div>
  );
};

export default ProductoDetallado;





