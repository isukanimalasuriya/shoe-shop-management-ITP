import Review from "../modeles/review.js";
import mongoose from "mongoose";
/*
export function addReview(req,res){

    const data =req.body

    const newReview = new Review(data)

    newReview.save().then(()=>{
        res.json({message:"Review added successfuly"})
    }).catch((error)=>{
        res.status(500).json({error:"Review addition failed"});
    })

}
    */

export async function addReview(req, res) {
    try {
        const { brandId, userId, userFullName, rating, comment, profilepicture} = req.body;


        // Create a new review since no duplicate exists
        const newReview = new Review({
            brandId,
            userId,
            userFullName,
            rating,
            comment,
            profilepicture
        });

        await newReview.save();
        res.status(200).json({ message: "Review added successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export async function getReview(req, res) {

    try{
        const reviews = await Review.find({});
        res.json(reviews);
        return;

    }catch(e){
    res.status(500).json({
        message:"Failed to get reviews"
    })
    }
}


export async function updateReview(req,res) {

    try{

        const {reviewId} = req.params;

        const data = req.body;

        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        
        console.log(review.userId)
        console.log(data.userId)
        
        if (review.userId !== data.userId) {
            console.log("------------------------------>",data)
            return res.status(403).json({ message: "Unauthorized to update this review" });
        }

        

        const reviewObjId = new mongoose.Types.ObjectId(reviewId);

        await Review.updateOne({_id:reviewObjId},data)

        res.json({message:"Review updated successfully"})

    }catch(error){
        res.status(500).json({
                message:"Failed to update Review"
        })
    }
}

export async function deleteReview(req,res) {
    try{
        const {reviewId} = req.params;

        const reviewObjId = new mongoose.Types.ObjectId(reviewId);

        await Review.deleteOne({_id:reviewObjId})

    res.json({message:"Review deleted successfully"})
    }catch(e){
        res.status(500).json({
            message:"Failed to delete review"
        })
    }
}