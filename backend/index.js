import express from "express";
import bodyParser from "body-parser";
import mongoose, { connect } from "mongoose";
import productRouter from "../backend/routes/productRouter.js"
import cartRoute from "./routes/cartRoute.js";
import wishlistRoute from "./routes/wishlistRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import customizeShoeRoute from "./routes/customizeshoueRoute.js";
import userRouter from "./routes/userRouter.js"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import { connectDB } from "./DB/connectDB.js";
import router from "./routes/authRouter.js";
import employeeRoute from "./routes/employeeRoute.js";

dotenv.config();

let app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true}));
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/", router)
app.use("/api/auth/employeess", employeeRoute)


app.listen(PORT,()=>{
    connectDB()
    console.log("Server starting on port", PORT)
})