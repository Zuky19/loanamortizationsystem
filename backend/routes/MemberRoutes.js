import express from "express";
import {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
  loginMember,
} from "../controller/memberController.js";

export const router = express.Router();

// Define routes
router.post("/", createMember); // Create a new member
router.get("/", getAllMembers); // Get all members
router.get("/login", loginMember); // Get all members
router.get("/:id", getMemberById); // Get a member by ID
router.put("/:id", updateMember); // Update a member by ID
router.delete("/:id", deleteMember); // Delete a member by ID
