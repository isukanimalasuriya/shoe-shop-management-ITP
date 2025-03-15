import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
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
            color: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                max: 1
            },
            image_url: {
                type: String,
                required:true
            }
        }
    ],
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;