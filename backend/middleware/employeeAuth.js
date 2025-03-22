import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access denied" });
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid token" });
    }
}

export const authorizeRoles = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: "Access denied. Insufficient privileges" });
      }
      next();
    };
}