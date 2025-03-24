import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique:true
    },
    items: [
        {
            shoeId: {
                type: mongoose.Schema.Types.ObjectId,
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
            
            imageUrl: {
                type: String,
                required:true
            }

        }
    ]
});

const wishlist = mongoose.model("Wishlist", wishlistSchema);
export default wishlist;
