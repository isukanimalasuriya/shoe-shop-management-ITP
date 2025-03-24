import Wishlist from "../modeles/wishList.js"; // Adjust the import path as needed
import mongoose from "mongoose";

export async function addItemToWishlist(req, res) {
  try {
    const { userId, items } = req.body; // Expecting `items` as an array
    
    // Validate user_id
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    // Validate items array
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Items are required and cannot be empty." });
    }

    // Find the user's wishlist
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      // If no wishlist exists, create a new one with the provided items
      wishlist = new Wishlist({ userId, items });
    } else {
      let itemAlreadyExists = false;

      items.forEach(newItem => {
        if (!newItem || typeof newItem !== "object" || !newItem.shoeId) {
          return res.status(400).json({ message: "Invalid item data." });
        }

        const existingItem = wishlist.items.find(
          (item) => item.shoeId === newItem.shoeId
        );

        if (existingItem) {
          itemAlreadyExists = true;
        } else {
          wishlist.items.push(newItem); // Add new item if it doesn't exist
        }
      });

      // If an item already exists, send a response early and return
      if (itemAlreadyExists) {
        return res.status(400).json({ message: "Item already exists in the wishlist." });
      }
    }

    await wishlist.save();
    res.status(200).json({ message: "Item(s) added to wishlist successfully"});

  } catch (error) {
    console.error("Error adding item to wishlist:", error);
    return res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
}





export const displayWishlist = async (req, res) => {
    try {
        const { userId } = req.body; // Extract user_id properly

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const wishlist = await Wishlist.findOne({ userId }); // Find the wishlist for the user

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        res.json(wishlist); // Return wishlist data if found
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};







export async function deleteWishlistItem(req, res) {
    try {
        const userId = req.params.userId; // Extract userId from URL params
        const { shoeId } = req.body; // Extract shoeId from request body

        // Convert shoeId to ObjectId
        const shoeObjectId = new mongoose.Types.ObjectId(shoeId);

        // Find and update the wishlist by removing the item with the given shoeId
        const wishlist = await Wishlist.findOneAndUpdate(
            { userId },
            { $pull: { items: { shoeId: shoeObjectId } } },
            { new: true } // Return the updated document
        );


        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        res.json({ message: "Item removed from wishlist successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete wishlist item", error });
    }
}

