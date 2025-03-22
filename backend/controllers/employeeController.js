import jwt from "jsonwebtoken";
import Employee from "../modeles/employee.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config()

//registering users
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const employee = new Employee({ name, email, password: hashedPassword, role });
  
      await employee.save();
      res.json({ message: "User registered successfully" });
    } catch (error) {
      res.status(400).json({ error: "User already exists" });
    }
};

//Login Users
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const employee = await Employee.findOne({ email });
      if (!employee) return res.status(400).json({ error: "User not found" });
  
      const isMatch = await bcrypt.compare(password, employee.password);
      if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  
      const token = jwt.sign({ id: employee._id, role: employee.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ token, role: employee.role });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };