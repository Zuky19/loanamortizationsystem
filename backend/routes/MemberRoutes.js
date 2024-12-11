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

const router = express.Router();
router.post("/login", loginMember);

router.post("/", createMember);

// Member retrieval routes
router.get("/", getAllMembers);
router.get("/:username", getMemberByUsername);

// Member update route
router.put("/:username", updateMember); // Update a member by ID
// Member deletion route
router.delete("/:id", deleteMember); // Delete a member by ID

export default router;
