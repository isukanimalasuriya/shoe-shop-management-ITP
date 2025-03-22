import express from "express";
import { registerUser, loginUser } from "../controllers/employeeController.js";

const employeeRoute = express.Router()

employeeRoute.post("/employeeregister", registerUser)

employeeRoute.post("/employeelogin", loginUser)

export default employeeRoute