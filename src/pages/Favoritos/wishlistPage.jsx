
























// // WishlistPage, vista de lista
// import React from 'react';
// import { useWishlist } from '../../components/wishlist/WishlistContext'; // Updated import path

// const WishlistPage = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   return (
//     <div>
//       <h2>Wishlist</h2>
//       {wishlist.length === 0 ? (
//         <p>Your wishlist is empty.</p>
//       ) : (
//         <ul>
//           {wishlist.map((product) => (
//             <li key={product.id}>
//               {product.name}{' '}
//               <button onClick={() => removeFromWishlist(product.id)}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;
