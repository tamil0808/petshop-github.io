const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Get all cart items
router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new cart item
router.post('/', async (req, res) => {
  const cartItem = new CartItem({
    productId: req.body.productId,
    quantity: req.body.quantity,
    // Add other fields as needed
  });
  try {
    const newCartItem = await cartItem.save();
    res.status(201).json(newCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Other routes for updating/deleting cart items as needed

module.exports = router;
