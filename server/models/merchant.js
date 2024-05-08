import mongoose from 'mongoose';

const merchantSchema = new mongoose.Schema({
    merchantname: {
        type: String,
        trim: true,
        required: true,
        maxlength: 64,
        unique: false
    },
    restaurant_id: { 
        type: Number, 
        required: false,
        unique: true 
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        maxlength: 10,
        required: true,
        unique: true,
        sparse: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true,
        lowercase: true,
        sparse: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true,
        lowercase: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    
    salt: String,

    logo_url: {
        type: String,
        trim: true,
        maxlength: 255
    },
    is_Owner: {
        type: Boolean, 
        default: true, 
    },
    in_App: {
        type: Boolean,
        default: false
    }
    }, 
    {
    timestamps: true
});

merchantSchema.pre('save', function(next) {
    // Generate a random order number only if it's not already provided
    if (!this.restaurant_id) {
        this.restaurant_id = Math.floor(Math.random() * 500) + 1;
    }
    next();
});


const Merchant = mongoose.model('Merchant', merchantSchema);

export default Merchant;

