import {User} from "../models/User.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// ─── protect ──────────────────────────────────────────────────────────────────
// Verifies the JWT token from the Authorization header.
// If valid, attaches the user object to req.user and calls next().
const protect = async (req, res, next) => {
  try {
    let token;

    // Token must come in the Authorization header as: Bearer <token>
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user (without password) to the request object
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Token is valid but user no longer exists.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    // Handle specific JWT errors with clear messages
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token. Please log in again.",
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired. Please log in again.",
      });
    }

    res.status(500).json({ success: false, message: "Server error" });
  }
};


export { protect };
