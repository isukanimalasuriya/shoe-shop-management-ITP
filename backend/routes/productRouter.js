import express from "express";

import { addProduct, getShoes } from "../controllers/productControler.js";

const productRouter = express.Router();

productRouter.post("/",addProduct)
productRouter.get("/",getShoes)

export default productRouter