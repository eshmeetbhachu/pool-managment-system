import express from "express";
import { registerUser,loginUser,fetchUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/staff", fetchUser);

export default router;