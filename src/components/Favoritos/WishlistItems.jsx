// import Button from "react-bootstrap/Button";
// import { WishlistContext } from "./WishlistContext";
// import { useContext } from "react";
// import { getProductData } from "../../pages/Shopping/productsStore";
// import "./WishlistItems.css"


// function WishlistItems(props) {
//     const wishlist = useContext(WishlistContext)
//     const id = props.id;
//     const productData = getProductData(id);

//     return (
//         <div className="wish-item">
//             <div className="product-image">
//                 <img src="{productData.img}" alt="{productsData.nombre}" />
//             </div>
//             <div className="product-details">
//                 <h3>{productData.nombre}</h3>
//                 <Button size="sm" onClick={() => wishlist.deleteFromWishlist(id)} >
//                     Quitar de favoritos
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default WishlistItems;