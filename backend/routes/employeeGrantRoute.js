import express from "express";
import { verifyToken, authorizeRoles } from "../middleware/employeeAuth.js";

const employeeGrant = express.Router()

employeeGrant.get("/api/hr-dashboard", verifyToken, authorizeRoles(["HR_MANAGER"]), (req, res) => {
  res.json({ message: "HR Manager Dashboard Access Granted" });
});


employeeGrant.get("/delivery-dashboard", verifyToken, authorizeRoles(["DELIVERY_MANAGER"]), (req, res) => {
  res.json({ message: "Delivery Manager Dashboard Access Granted" });
});

// Delivery Person Route (Only Delivery Person can access)
employeeGrant.get("/delivery-tasks", verifyToken, authorizeRoles(["DELIVERY_PERSON"]), (req, res) => {
  res.json({ message: "Delivery Person Task List" });
});

export default employeeGrant