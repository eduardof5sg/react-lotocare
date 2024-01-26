import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { WishlistContext } from "./wishContext";

const AddToFavoritesButton = ({ product }) => {
  const { addToWishList } = useContext(WishlistContext);

  const addToFavorites = () => {
    if (product && product.id) {
      addToWishList(product.id);
      console.log("Añadido a Favoritos:", product.nombre, product.img); 
    } else {
      console.error("No se pudo agregar a Favoritos: producto indefinido o sin ID");
    }
  };

  return (
    <Button
      variant="success"
      onClick={addToFavorites}
      className="my-2"
    >
      Añadir a Favoritos
    </Button>
  );
};

export default AddToFavoritesButton;
