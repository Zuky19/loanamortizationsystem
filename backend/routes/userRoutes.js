import { Router } from "express";
import { createUser } from "../controllers/userController";

const router = Router();

// Define the routes and map them to controller functions
router.get("/", getAllUsers); // Handles GET /api/users
router.post("/", createUser); // Handles POST /api/users

module.exports = router;
