const express = require("express");
const router = express.Router();
const {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
} = require("../controller/memberController");

// Define routes
router.post("/", createMember); // Create a new member
router.get("/", getAllMembers); // Get all members
router.get("/:id", getMemberById); // Get a member by ID
router.put("/:id", updateMember); // Update a member by ID
router.delete("/:id", deleteMember); // Delete a member by ID

module.exports = router;
