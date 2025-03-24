import express from "express";

import { addProduct, getShoes, getOneShoeDetail } from "../controllers/productControler.js";

const productRouter = express.Router();

productRouter.post("/",addProduct);
productRouter.get("/",getShoes);
productRouter.get("/:id",getOneShoeDetail);

export default productRouter