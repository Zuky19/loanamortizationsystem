const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/userController");

// Define the routes and map them to controller functions
//router.get("/", getAllUsers); // Handles GET /api/users
router.post("/", createUser); // Handles POST /api/users

module.exports = router;
