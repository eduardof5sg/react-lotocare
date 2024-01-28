import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { WishlistContext } from "./wishContext";

const AddToFavoritesButton = ({ product }) => {
  const { addToWishList } = useContext(WishlistContext);

  const addToFavorites = () => {
   if (product && product.id && product.nombre && product.img) {
      const result = addToWishList(product.id, product.nombre, product.img);
      console.log(result);
      if (result.success) {
        console.log("Añadido a Favoritos:", product.nombre, product.img);
      } else {
        console.error(result.message);
      }
    } else {
      console.error("No se pudo agregar a Favoritos: producto indefinido o sin ID");
    }
  };
  
  

  return (
    <i
    onClick={addToFavorites}
    className="bx bx-heart"
    style={{ cursor: "pointer" }}
    
    ></i>
  );
};

export default AddToFavoritesButton;
