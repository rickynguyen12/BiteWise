import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    customerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Customer' 
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
    status: { 
        type: String, 
        required: true 
    },
    otdPrice: { 
        type: Number, 
        required: true 
    },
    paymentMethod: { 
        type: String, 
        required: true },
    paymentComplete: { 
        type: Boolean, 
        default: false 
    },
    confirmationNumber: { 
        type: String 
    },
    deliveryDetails: { 
        type: Object 
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

const Order = mongoose.model('Order', orderSchema);
export default Order;