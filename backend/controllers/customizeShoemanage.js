import Customize from "../modeles/customizeShoe.js";

// Function to handle shoe customization request
export const addCustomizeShoe = async (req, res) => {
    try {
        const { user_id, shoeType, shoeSize, ShoeColour, shoeMaterial, instructions, shoeImage } = req.body;

        // Validate required fields
        if (!user_id || !shoeType || !shoeSize || !ShoeColour) {
            return res.status(500).json({ message: "Missing required fields" });
        }

        // Create new customization request
        const newCustomization = new Customize({
            user_id,
            shoeType,
            shoeSize,
            ShoeColour,
            shoeMaterial,
            instructions,
            shoeImage,
            isApproved: false  // Default approval status
        });

        // Save to database
        await newCustomization.save();
        res.status(200).json({ message: "Customization request submitted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
};