import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    reviewText: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;