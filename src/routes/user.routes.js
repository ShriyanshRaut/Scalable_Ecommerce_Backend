import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { registerUser, loginUser, getCurrentUser } from "../controllers/user.controller.js";

const router = Router();

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
// Protected Route
router.get("/me", authMiddleware, getCurrentUser);

export default router;