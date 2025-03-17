import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "../backend/routes/productRouter.js"
import cartRoute from "./routes/cartRoute.js";
import wishlistRoute from "./routes/wishlistRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import customizeShoeRoute from "./routes/customizeshoueRoute.js";


let app = express();

app.use(bodyParser.json());




let mongourl ="mongodb+srv://Admin:boola@cluster0.n2tnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl);

let connection =mongoose.connection
connection.once("open",()=>{
    console.log("Mongodb successfully connected");
})

app.use("/api/product",productRouter)
app.use("/api/cart",cartRoute)
app.use("/api/wishlist",wishlistRoute)
app.use("/api/review",reviewRoute)
app.use("/api/customize",customizeShoeRoute)


app.listen(3000,()=>{
    console.log("Server start");
})