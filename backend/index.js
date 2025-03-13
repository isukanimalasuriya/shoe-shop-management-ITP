import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";



let app = express();

app.use(bodyParser.json());




let mongourl ="mongodb+srv://Admin:boola@cluster0.n2tnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl);

let connection =mongoose.connection
connection.once("open",()=>{
    console.log("Mongodb successfully connected");
})


app.listen(3000,()=>{
    console.log("Server start");
})