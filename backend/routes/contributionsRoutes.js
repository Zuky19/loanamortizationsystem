import express from "express";
import {
  addContribution,
  getContributionsByMember,
  getTotalContributions,
  deleteContribution,
} from "../controller/contributionsController.js";
const router = express.Router();

// Routes
router.post("/", addContribution);
router.get("/member/:member_id", getContributionsByMember);
router.get("/total", getTotalContributions);
router.delete("/:id", deleteContribution);

export default router;
