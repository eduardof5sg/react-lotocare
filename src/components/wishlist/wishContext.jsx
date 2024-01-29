  import { createContext, useState } from "react";
  import { getProductData } from "../../pages/Shopping/productsStore";
  
  export const WishlistContext = createContext({
    items: [],
    addToWishList: () => {},
    removeFromWishList: () => {},
  });
  
  export function WishProvider({ children }) {
    const [wishList, setWishList] = useState([]);
  
    function getProductQuantity(id) {
      const productData = getProductData(id);
  
      if (productData === undefined) {
        return 0;
      }
  
      return wishList.find((product) => product.id === id)?.quantity || 0;
    }
  
    function addToWishList(paymentId) {
      
     const quantity = getProductQuantity(paymentId);

    if (quantity === 0) {
    const productData = getProductData(paymentId);

    if (productData !== undefined) {
      setWishList((prevWishList) => [
        ...prevWishList,
        {
          id: paymentId,
          quantity: 1,
          img: productData.img, // Asegúrate de incluir la propiedad img
          nombre: productData.nombre,
          // Agrega más propiedades del producto según sea necesario
          // name: productData.nombre,
        },
      ]);

      return {
        success: true,
        message: `Producto '${productData.nombre}' añadido a la lista de deseos.`,
        product: productData,
      };
    }
  }

  return {
    success: false,
    message: `El producto con ID '${paymentId}' ya está en la lista de deseos.`,
  };
}

    
  
    function removeFromWishList(id) {
      setWishList((wishList) =>
        wishList.filter((currentProduct) => {
          return currentProduct.id !== id;
        })
      );
    }
  
    const contextValue = {
      items: wishList,
      addToWishList,
      removeFromWishList,
    };
  
    return (
      <WishlistContext.Provider value={contextValue}>
        {children}
      </WishlistContext.Provider>
    );
  }
  
  export default WishProvider;
  
  