import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique:true
    },
    items: [
        {
            shoe_id: {
                type: String,
                required: true
            },

            brand: {
                type: String,
                required: true
            },

            model: {
                type:String,
                required:true
            },

            price: {
                type: Number,
                required: true
            },
            
            image_url: {
                type: String,
                required:true
            }

        }
    ]
});

const wishlist = mongoose.model("Wishlist", wishlistSchema);
export default wishlist;