import express from "express";
import {
  getMemberContributionsSummary,
  getDashboardSummary,
  exportMembers,
} from "../controller/crossModelController.js";

const router = express.Router();

// Get Member Contributions Summary
router.get("/member/:member_id/contributions", getMemberContributionsSummary);

// Get Dashboard Summary
router.get("/dashboard", getDashboardSummary);

// Export Members
router.get("/export/members", exportMembers);

export default router;
