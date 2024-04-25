import Menu from '../models/menu.js'

// Function to add a new menu item
const addMenuItem = async (req, res) => {
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
  };
  
  // remove an item based on restaurant id
  const removeMenuItem = async (req, res) => {
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
  };
  
  // update menu item
  const updateMenuItem = async (req, res) => {
    const { restaurantId, id } = req.params;
    const updates = req.body;
  
    try {
      const updatedItem = await Menu.findOneAndUpdate({ restaurantId, id }, updates, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Menu item not found' });
      }
  
      res.json({ message: 'Menu item updated successfully', updatedItem });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

export {
    addMenuItem,
    removeMenuItem,
    updateMenuItem
};
        
  