const express = require('express');
const router = express.Router();
const Menu = require('../models/menu.js'); 

//check if the item already exists in the menu
const checkIfItemExists = async (req, res, next) => {
  const { name } = req.body;
  try {
    const existingItem = await Menu.findOne({ name });
    if (existingItem) {
      return res.status(400).json({ message: 'Item already exists in the menu' });
    }
    next(); // Proceed to the next middleware/route handler if item doesn't exist
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};