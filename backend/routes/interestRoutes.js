import express from "express";
import {
  calculateMonthlyInterest,
  addInterestRecord,
  getInterestByLoan,
  deleteInterestRecord,
} from "../controller/interestController.js";

const router = express.Router();

// Define Routes
router.get("/:loan_id/calculate", calculateMonthlyInterest); // Calculate Monthly Interest
router.post("/", addInterestRecord); // Add Interest Record
router.get("/:loan_id", getInterestByLoan); // Get Interest by Loan
router.delete("/:id", deleteInterestRecord); // Delete Interest Record

export default router;
