import mongoose from 'mongoose';

const deliveryAreaSchema = new mongoose.Schema({
    areaName: { 
        type: String, 
        required: true 
    },
    deliveryFee: { 
        type: Number, 
        required: true 
    },
    minOrderAmount: { 
        type: Number, 
        required: true 
    },
    isActive: { 
        type: Boolean, 
        default: true 
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

const DeliveryArea = mongoose.model('DeliveryArea', deliveryAreaSchema);
export default DeliveryArea;
