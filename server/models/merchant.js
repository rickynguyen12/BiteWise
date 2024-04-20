import mongoose from 'mongoose';
import crypto from 'crypto';
import { v1 as uuidv1 } from 'uuid';
import menuItemSchema from './menuItem.js';
import orderSchema from './order.js';
import reviewSchema from './review.js';
import deliveryAreaSchema from './deliveryArea.js';


// user schema
const merchantSchema = new mongoose.Schema(
    {   
        merchantname: {
            type: String,
            trim: true,
            required: true,
            maxlength: 64,
            unique: false,
        },
        resteraunt_id: {
            type: String,
            trim: true,
            required: true,
            maxlength: 64,
            unique: true,
        },
        address: {
            type: String,
            trim: true,
            required: false,
            maxlength: 100,
            sparse: true,
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
        phone: {
            type: String,
            trim: true,
            maxlength: 10,
            required: true,
            unique: true,
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
        logoURL: {
            type: String,
            default: "",
            required: true
        },
        salt : String,
        menuItems: [menuItemSchema],
        activeorders: [orderSchema],
        completedorders: [orderSchema],
        reviews: [reviewSchema],
        deliveryAreas: [deliveryAreaSchema]
    }, 
    {
        timestamps: true
    }
);


// virtual field
merchantSchema.virtual('password')
    // create a temporary variable, _password, which is not stored in the database
    .set(function(password) {
        this._password = password;
        // generate a timestamp, uuidv1 gives us a unique id (unix timestamp)
        this.salt = uuidv1();
        // encrypt the password function call
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

    // methods
    merchantSchema.methods = { 
        // authenticate method
        authenticate: function(plainText) {
            return this.encryptPassword(plainText) === this.hashed_password;
        },
        // encrypt password method
        encryptPassword: function(password) {
            if (!password) return "";
            try {
                return crypto.createHmac('sha256', this.salt)
                            .update(password)
                            .digest('hex');
            } catch (err) {
                return "";
            }
        }
    };

const merchant = mongoose.model("Merchant", merchantSchema);
export {merchant};
