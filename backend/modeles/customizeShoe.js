import mongoose from "mongoose";

const customizeShoeSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    shoeType: {
        type: String,
        required:true
    },
    shoeSize: {
        type: Number,
        required: true
    },
    ShoeColour: {
        type:String,
        required:true
    },
    shoeMaterial: {
        type: String
    },
    instructions: {
        type: String
    },
    shoeImage: {
        type: String,
    },
    isApproved: {
        type: Boolean,
        required:true,
        default: false
    }
});

const customize = mongoose.model("customize", customizeShoeSchema);

export default customize;