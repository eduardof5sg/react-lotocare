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
  
    function addToWishList(id) {
      
      const quantity = getProductQuantity(id);
  
      if (quantity === 0) {
        const productData = getProductData(id);
  
        if (productData !== undefined) {
          setWishList([
            ...wishList,
            {
              id: id,
              quantity: 1,
              // Agrega más propiedades del producto según sea necesario
              // name: productData.nombre,
            },
          ]);
        }
      }
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
  
  