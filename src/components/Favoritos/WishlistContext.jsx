// WishlistContext.js
import React, { createContext, useContext, useState } from 'react';


export const WishlistContext = createContext({
  items: [],
  addOneToWishlist: () => {},
  deleteFromWishlist: () => {},
});

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlist] = useState([]);

  function addToWishlist(id) {
    const updateWishlistProducts = wishlistItems.map((product) => 
     product.id ===id
       ? {...product, quiantity: product.quantity + 1}
       : product
    );
    // setWishlist((prevWishlist) => [...prevWishlist, product]);
    const existingProduct = updateWishlistProducts.find((product) => product.id === id);

    if (!existingProduct) {
      // Si el producto no existía previamente, agrégalo con cantidad 1
      setWishlist([...updateWishlistProducts, { id: id, quantity: 1 }]);
    } else {
      setWishlist(updateWishlistProducts);
    }
  };

  function deleteFromWishlist(id) {
    setWishlist((wishlistItems) =>
      wishlistItems.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  const contextValue = {
    items: wishlistItems,
    addToWishlist,
    deleteFromWishlist,
  };

  return (
    <WishlistContext.Provider value={contextValue}>{children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;