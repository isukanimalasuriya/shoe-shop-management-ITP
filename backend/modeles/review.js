import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique:true
    },
    userFullName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    profilepicture: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
    }
    
});

// Ensure a user can only leave one review per shoe
//reviewSchema.index({ shoe_id: 1, user_id: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;