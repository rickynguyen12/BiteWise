import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    value : Math.floor(Math.random() * 300) + 1,
    required: false,
    unique: true,
  },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Merchant",
    required: false,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected", "completed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  restaurant_id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    unique: true,
    lowercase: true,
  }
});

orderSchema.pre("save", function (next) {
  // Generate a random order number only if it's not already provided
  if (!this.orderNumber) {
    this.orderNumber = Math.floor(Math.random() * 300) + 1;
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);
export default Order;