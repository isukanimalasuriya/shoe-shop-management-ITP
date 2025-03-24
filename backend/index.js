import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "../backend/routes/productRouter.js"
import cartRoute from "./routes/cartRoute.js";
import wishlistRoute from "./routes/wishlistRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import customizeShoeRoute from "./routes/customizeshoueRoute.js";
import OrderRoute from "./routes/orderManageRoute.js";
import cors from "cors";


let app = express();

app.use(bodyParser.json());

let mongourl ="mongodb+srv://Admin:boola@cluster0.n2tnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl);

let connection =mongoose.connection
connection.once("open",()=>{
    console.log("Mongodb successfully connected");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/api/product",productRouter);
app.use("/api/cart",cartRoute);
app.use("/api/wishlist",wishlistRoute);
app.use("/api/review",reviewRoute);
app.use("/api/customize",customizeShoeRoute);
app.use("/api/order",OrderRoute)


app.listen(3000,()=>{
    console.log("Server start");
})

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));