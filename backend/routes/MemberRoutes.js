import express from "express";
import {
  loginMember,
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
  getMemberByUsername,
} from "../controller/memberController.js";

export const router = express.Router();

// Define routes
router.post("/", createMember); // Create a new member
router.get("/", getAllMembers); // Get all members
router.post("/login", loginMember); //Login Member
router.get("/:id", getMemberById); // Get a member by ID
router.get("/username/:username", getMemberByUsername);
// Member update route
router.put("/:id", updateMember); // Update a member by ID
// Member deletion route
router.delete("/:id", deleteMember); // Delete a member by ID

export default router;
