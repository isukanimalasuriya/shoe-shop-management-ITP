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
import cors from "cors"
import router from "./routes/auth.js";
import cookieParser from "cookie-parser";

dotenv.config()

let app = express();

app.use(cors())

app.use(bodyParser.json());

let mongourl = process.env.MONGO_URL

mongoose.connect(mongourl);

const connection =mongoose.connection
connection.once("open",()=>{
    console.log("Mongodb successfully connected");
})

app.use("/api/auth", router)
app.use("/api/users", userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRoute)
app.use("/api/wishlist",wishlistRoute)
app.use("/api/review",reviewRoute)
app.use("/api/customize",customizeShoeRoute)


app.listen(3000,()=>{
    console.log("Server starting on 3000 port");
})