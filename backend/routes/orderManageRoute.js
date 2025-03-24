import express from "express";

import { addOrders, displayOrders } from "../controllers/orderManagementController.js";

const OrderRoute = express.Router();

OrderRoute.post("/",addOrders)
OrderRoute.get("/",displayOrders)

export default OrderRoute