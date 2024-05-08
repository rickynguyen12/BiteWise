import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderNumber: { 
        type: Number, 
        required: false,
        unique: true 
    },
    merchant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Merchant'
    },
    items: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'MenuItem' 
    }],
    status: { 
        type: String, 
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});


orderSchema.pre('save', function(next) {
    // Generate a random order number only if it's not already provided
    if (!this.orderNumber) {
        this.orderNumber = Math.floor(Math.random() * 300) + 1;
    }
    next();
});


const Order = mongoose.model('Order', orderSchema);
export default Order;