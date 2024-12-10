import express from "express";
import {
  addLoanRepayment,
  getRepaymentsForLoan,
  getTotalRepaymentsForLoan,
  deleteAllRepaymentsForLoan,
  deleteSingleRepayment,
} from "../controller/loanRepaymentController.js";

const router = express.Router();

// Add a repayment
router.post("/", addLoanRepayment);

// Get all repayments for a loan
router.get("/:loan_id", getRepaymentsForLoan);

// Get total repayments for a loan
router.get("/:loan_id/total", getTotalRepaymentsForLoan);

// Delete all repayments for a loan
router.delete("/:loan_id", deleteAllRepaymentsForLoan);

// Delete a single repayment
router.delete("/single/:repayment_id", deleteSingleRepayment);

export default router;
