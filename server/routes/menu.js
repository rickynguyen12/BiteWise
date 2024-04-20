import express from 'express';
const router = express.Router();
import Menu from '../models/menu.js'

// add a new menu item 
router.post('/add/:restaurantId', async (req, res) => {
    const { restaurantId } = req.params; 
    const menuItem = new Menu({
        restaurantId: restaurantId, 
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    });
      try {
        // Save the menu item to the db
        const newItem = await menuItem.save();
    
        res.status(201).json({ message: 'Menu item added successfully', newItem });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
  
  // remove item based on restaurant id
router.delete('/remove/:restaurantId/:id', async (req, res) => {
    const { restaurantId, id } = req.params;
  
    try {
        //find item based on id and restaurantId
      const deletedItem = await Menu.findOneAndDelete({ restaurantId, id });
      if (!deletedItem) {
        return res.status(404).json({ message: 'Menu item not found' });
      }
      res.json({ message: 'Menu item removed', deletedItem });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  
  

 

export default router;



