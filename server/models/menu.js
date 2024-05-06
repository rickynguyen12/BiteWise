import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  restaurant_id: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;