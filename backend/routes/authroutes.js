import express from "express";
import { registerUser,loginUser,fetchUser,fetchUserbyID,handleClockIn,handleClockOut,assignDuty,fetchUserDuties} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/staff", fetchUser);
router.get("/staff/:id", fetchUserbyID);
router.put("/staff/:id/clockin", handleClockIn);
router.put("/staff/:id/clockout", handleClockOut);
router.post("/duties", assignDuty);
router.get("/duties/:id",fetchUserDuties)

export default router;