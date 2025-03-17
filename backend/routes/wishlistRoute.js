import express from "express";

import { addItemToWishlist, deleteWishlistItem, displayWishlist } from "../controllers/wishListManage.js";

const wishlistRoute = express.Router();

wishlistRoute .post("/",addItemToWishlist)
wishlistRoute .get("/",displayWishlist)
wishlistRoute .delete("/:user_id",deleteWishlistItem)

export default wishlistRoute