import express from "express";

import { addReview } from "../controllers/reviewmanage.js";

const reviewRoute = express.Router();

reviewRoute.post("/",addReview)

export default reviewRoute