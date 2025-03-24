import express from "express";

import { addCustomizeShoe } from "../controllers/customizeShoemanage.js";

const customizeShoeRoute = express.Router();

customizeShoeRoute.post("/",addCustomizeShoe)

export default customizeShoeRoute