import { Router } from "express";
import { createUser } from "../controllers/userController";

export const router = Router();

// Define the routes and map them to controller functions
router.get("/", getAllUsers); // Handles GET /api/users
router.post("/", createUser); // Handles POST /api/users