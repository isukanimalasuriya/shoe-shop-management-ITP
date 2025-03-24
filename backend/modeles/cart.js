import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  items: [
    {
      brand: {
        brandId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        brandName: {
          type: String,
          required: true,
        },
        modelName: {
          type: String,
          required: true,
        }
      },
      color: {
        colorId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        colorName: {
          type: String,
          required: true,
        }
      },
      size: {
        sizeId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        size: {
          type: Number,
          required: true,
        }
      },
      price: {type: Number, required: true},
      quantity: { type: Number, required: true },
      imageUrl: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
