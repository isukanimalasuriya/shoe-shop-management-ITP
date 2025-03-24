import express from "express";

import { addReview,deleteReview,getReview,updateReview } from "../controllers/reviewmanage.js";

const reviewRoute = express.Router();

reviewRoute.post("/",addReview);
reviewRoute.get("/",getReview)
reviewRoute.put("/:reviewId",updateReview )
reviewRoute.delete("/:reviewId",deleteReview )

export default reviewRoute