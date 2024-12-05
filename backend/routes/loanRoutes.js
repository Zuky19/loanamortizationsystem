import express from "express";
import {
  applyForLoan,
  getLoanById,
  getLoansByMember,
  updateLoanStatus,
  calculateRepaymentSchedule,
} from "../controller/loanController.js"; // Ensure correct path

const router = express.Router();

// Create a new loan
router.post("/", applyForLoan);

// Get loan by ID
router.get("/:id", getLoanById);

// Get all loans for a specific member
router.get("/member/:member_id", getLoansByMember);

// Update loan status
router.patch("/:id/status", updateLoanStatus);

// Calculate repayment schedule
router.get("/:id/repayment-schedule", calculateRepaymentSchedule);

export default router;
