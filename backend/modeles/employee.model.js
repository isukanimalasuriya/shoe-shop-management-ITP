import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        name: {
			type: String,
			required: true,
		},
        email: {
			type: String,
			required: true,
            unique: true,
		},
        password: {
			type: String,
			required: true,
		},
        role: { 
            type: String,
            enum: ["HR_MANAGER", "DELIVERY_MANAGER", "DELIVERY_PERSON"],
            required: true
        }
    }
)

const Employee = mongoose.model("Employee", employeeSchema)

export default Employee