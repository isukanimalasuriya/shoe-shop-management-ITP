import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "../backend/routes/productRouter.js"
import cartRoute from "./routes/cartRoute.js";
import wishlistRoute from "./routes/wishlistRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import customizeShoeRoute from "./routes/customizeshoueRoute.js";
import userRouter from "./routes/userRouter.js"
import dotenv from "dotenv"

dotenv.config()

let app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    let token = req.header
    ("Authorization")

    if(token!=null){
        token = token.replace("Bearer ","")

        jwt.verify(token, process.env.JWT_SECRET,
            (err, decoded)=>{
                if(!err){
                    req.user = decoded
                    //console.log(decoded)
                }
            }
        )
    }
    next()
    //console.log(token)
})

let mongourl = process.env.MONGO_URL

mongoose.connect(mongourl);

const connection =mongoose.connection
connection.once("open",()=>{
    console.log("Mongodb successfully connected");
})

app.use("/api/users", userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRoute)
app.use("/api/wishlist",wishlistRoute)
app.use("/api/review",reviewRoute)
app.use("/api/customize",customizeShoeRoute)


app.listen(3000,()=>{
    console.log("Server start");
})