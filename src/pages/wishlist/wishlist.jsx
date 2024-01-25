// src/components/Wishlist.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './wishlist.css';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch wishlist items from your API
    fetch('your-api-endpoint/wishlist')
      .then(response => response.json())
      .then(data => setWishlistItems(data))
      .catch(error => console.error('Error fetching wishlist:', error));
  }, []);

  const handleAddToWishlist = () => {
    // Add a new item to the wishlist
    const newItem = {
      id: Date.now(), // Generate a unique ID 
      name: newItemName,
      price: newItemPrice,
    };

    setWishlistItems(prevItems => [...prevItems, newItem]);
    setNewItemName('');
    setNewItemPrice('');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      <div className="wishlist-form">
        <label>
          Item Name:
          <input type="text" value={newItemName} onChange={e => setNewItemName(e.target.value)} />
        </label>
        <label>
          Item Price:
          <input type="text" value={newItemPrice} onChange={e => setNewItemPrice(e.target.value)} />
        </label>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      </div>
      <button onClick={openModal}>View Wishlist</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="wishlist-modal">
        <h2>My Wishlist</h2>
        <ul>
          {wishlistItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price} $
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Wishlist;
