import React, { useState, useEffect } from 'react';
import './Cart.css';

const CartPage = ({ cartItems }) => {
  const [purchased, setPurchased] = useState(false);

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price.replace('$', '')) * item.quantity;
    });
    return total.toFixed(2);
  };

  useEffect(() => {
    if (purchased) {
      alert('Purchase successful!');
      setPurchased(false);
    }
  }, [purchased]);

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      <div className='bg'>
      <div className='cart-item'>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name} - Quantity: {item.quantity} - Price: ${parseFloat(item.price.replace('$', '')) * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className='total-amount'>
        Total Amount: ${calculateTotalAmount()}
      </div>
      <button onClick={() => setPurchased(true)}>Purchase</button>
    </div></div>
  );
};

export default CartPage;