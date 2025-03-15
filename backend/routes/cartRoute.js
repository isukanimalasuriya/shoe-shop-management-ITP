import express from "express";

import { addTocart,displaycart,updateCartQuantity,deleteCartItem } from "../controllers/addTocart.js";

const cartRoute = express.Router();

cartRoute.post("/",addTocart)
cartRoute.get("/",displaycart)
cartRoute.put("/:user_id",updateCartQuantity)
cartRoute.delete("/:user_id",deleteCartItem)

export default cartRoute