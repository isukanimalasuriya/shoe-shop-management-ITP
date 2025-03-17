import Wishlist from "../modeles/wishList.js"; // Adjust the import path as needed

export async function addItemToWishlist(req, res) {
  try {
    const { user_id, items } = req.body; // Expecting `items` as an array

    // Validate user_id
    if (!user_id) {
      return res.status(400).json({ message: "User ID is required." });
    }

    // Validate items array
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Items are required and cannot be empty." });
    }

    // Find the user's wishlist
    let wishlist = await Wishlist.findOne({ user_id });

    if (!wishlist) {
      // If no wishlist exists, create a new one with the provided items
      wishlist = new Wishlist({ user_id, items });
    } else {
      let itemAlreadyExists = false;

      items.forEach(newItem => {
        if (!newItem || typeof newItem !== "object" || !newItem.shoe_id) {
          return res.status(400).json({ message: "Invalid item data." });
        }

        const existingItem = wishlist.items.find(
          (item) => item.shoe_id === newItem.shoe_id
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
        const { user_id } = req.body; // Extract user_id properly

        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const wishlist = await Wishlist.findOne({ user_id }); // Find the wishlist for the user

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
        const user_id = req.params.user_id; // Extract user_id from URL params
        const { shoe_id } = req.body; // Extract shoe_id from request body

        // Find and update the wishlist by removing the item with the given shoe_id
        const wishlist = await Wishlist.findOneAndUpdate(
            { user_id },
            { $pull: { items: { shoe_id } } }
        );

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        res.json({ message: "Item removed from wishlist successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete wishlist item" });
    }
}
