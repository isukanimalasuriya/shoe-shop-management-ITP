
/*


import Cart from "../modeles/cart.js";  // Ensure the correct path

export const addTocart = async (req, res) => {
    try {
        const { user_id, shoe_id, color, size, quantity } = req.body;

        // Find the cart for the user
        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            // If the cart does not exist, create a new one
            cart = new Cart({
                user_id,
                items: [{ shoe_id, color, size, quantity }]
            });
        } else {
            // Check if the same shoe with the same attributes exists in the cart
            const existingItem = cart.items.find(item =>
                item.shoe_id === shoe_id &&
                item.color === color &&
                item.size === size
            );

            if (existingItem) {
                // If the item already exists, update the quantity
                existingItem.quantity += quantity;
            } else {
                // If it's a new item, add it to the items array
                cart.items.push({ shoe_id, color, size, quantity });
            }
        }

        await cart.save(); // Save the updated cart
        res.status(200).json({ message: "Item added to cart successfully", cart });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

*/

/*
import Cart from "../modeles/cart.js";  // Ensure the correct path

export const addTocart = async (req, res) => {
    try {
        const { user_id, items } = req.body;  // Extract `items` array properly

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: "Shoes are required and cannot be empty" });
        }

        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            // Create a new cart if it doesn't exist
            cart = new Cart({ user_id, items });
        } else {
            // Merge new items into the existing cart
            items.forEach(newItem => {
                const existingItem = cart.items.find(item =>
                    item.shoe_id === newItem.shoe_id &&
                    item.color === newItem.color &&
                    item.size === newItem.size
                );

                if (existingItem) {
                   res.json({message: "Item is already in the cart"}) // Update quantity if item exists
                   next();
                } else {
                    cart.items.push(newItem); // Add new item if it doesn't exist
                }
            });
        }

        await cart.save();
        res.status(200).json({ message: "Item(s) added to cart successfully", cart });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
*/
import Cart from "../modeles/cart.js";  
import Shoes from "../modeles/shoe.js";

export const addTocart = async (req, res) => {
    try {
        const { user_id, items } = req.body;  // Extract `items` array properly

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: "Shoes are required and cannot be empty" });
        }

        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            // Create a new cart if it doesn't exist
            cart = new Cart({ user_id, items });
        } else {
            let itemAlreadyExists = false;

            items.forEach(newItem => {
                const existingItem = cart.items.find(item =>
                    item.shoe_id === newItem.shoe_id &&
                    item.color === newItem.color &&
                    item.size === newItem.size
                );

                if (existingItem) {
                    itemAlreadyExists = true;
                } else {
                    cart.items.push(newItem); // Add new item if it doesn't exist
                }
            });

            // If an item already exists, send a response early and return
            if (itemAlreadyExists) {
                return res.json({ message: "Item is already in the cart" });
            }
        }

        await cart.save();
        res.status(200).json({ message: "Item(s) added to cart successfully", cart });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};



export const displaycart = async (req, res) => {
    try {
        const { user_id } = req.body; // Extract user_id properly

        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const cart = await Cart.findOne({ user_id }); // Use findOne() for a unique user cart

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.json(cart); // Return cart data if found
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};




export const updateCartQuantity = async (req, res) => {
    try {
        const { user_id } = req.params; // Extract user_id from request parameters
        const { shoe_id, color, size, quantity } = req.body; // Extract other data from request body

        // Find the shoe in the database
        const shoe = await Shoes.findOne({ id: shoe_id });

        if (!shoe) {
            return res.status(404).json({ message: "Shoe not found" });
        }

        // Find the correct variant and size
        let selectedVariant = shoe.variants.find(v => v.color === color);
        if (!selectedVariant) {
            return res.status(404).json({ message: "Color not available" });
        }

        let selectedSize = selectedVariant.sizes.find(s => s.size === size);
        if (!selectedSize) {
            return res.status(404).json({ message: "Size not available" });
        }

        // Check if new quantity exceeds available stock
        if (quantity > selectedSize.stock) {
            return res.status(400).json({ message: `Only ${selectedSize.stock} items left in stock` });
        }

        // Update the cart quantity
        const cart = await Cart.findOneAndUpdate(
            { user_id, "items.shoe_id": shoe_id, "items.color": color, "items.size": size },
            { $set: { "items.$.quantity": quantity } },
        );

        if (!cart) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};




export async function deleteCartItem(req, res) {
    try {
        const user_id = req.params.user_id; // Extract user_id from URL params
        const { shoe_id, color, size } = req.body; // Extract item details from request body

        const cart = await Cart.findOneAndUpdate(
            { user_id },
            { $pull: { items: { shoe_id, color, size } } },
            { new: true }
        );

        if (!cart) {
            res.status(404).json({ message: "Cart not found" });
            return;
        }

        res.json({ message: "Item removed from cart successfully" });
        return;
    } catch (error) {
        res.status(500).json({ message: "Failed to delete cart item" });
    }
}

