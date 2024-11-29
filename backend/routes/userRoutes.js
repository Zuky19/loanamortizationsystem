import { Router } from "express";
import { createUser, loginUser } from "../controller/userController.js";

const router = Router();

// Define the routes and map them to controller functions

router.post("/register", createUser); // Handles POST /api/users
router.post("/login", loginUser); // Handles POST /api/users

export default router;
