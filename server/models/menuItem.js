import mongoose from 'mongoose';
const menuItemSchema = new mongoose.Schema({
    itemName: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    availability: { 
        type: Boolean, 
        default: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;