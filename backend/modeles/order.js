import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{type: String, required: true},
    totalAmount:{ type:Number,required :true},
    orderDate:{type:Date,default:Date.now},
    paymentMethod:{type:String,required:true},
    paymentStatus:{type:String,required:true,enum: ["Unpaid", "Paid"]},
    shippingAddress:{type:String,required:true},
    items: [
        {
          shoeId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
          },
          color: { type: String, required: true },
          size: { type: Number, required: true },
          quantity: { type: Number, required: true, max: 1 },
          imageUrl: { type: String, required: true },
        },
    ],


}
    
)

const Orders = mongoose.model("Order",orderSchema);
export default Orders;