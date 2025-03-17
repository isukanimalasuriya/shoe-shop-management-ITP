import Review from "../modeles/review.js";
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
        const { shoe_id, user_id, name, rating, comment, profilepicture, isApproved } = req.body;

        // Check if the user has already reviewed this shoe
        const existingReview = await Review.findOne({ shoe_id, user_id });

        if (existingReview) {
            return res.status(400).json({ error: "User has already reviewed this shoe" });
        }

        // Create a new review since no duplicate exists
        const newReview = new Review({
            shoe_id,
            user_id,
            name,
            rating,
            comment,
            profilepicture,
            isApproved
        });

        await newReview.save();
        res.status(200).json({ message: "Review added successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}