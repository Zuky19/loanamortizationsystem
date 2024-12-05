import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Install: npm install uuid

const loanSchema = new mongoose.Schema(
  {
    loan_id: { type: String, default: uuidv4, required: true, unique: true },
    member_id: { type: String, required: true },
    loan_amount: { type: Number, required: true },
    interest_rate: { type: Number, required: true },
    duration_months: { type: Number, required: true },
    purpose: { type: String, required: true },
    status: { type: String, default: "pending" },
    outstanding_balance: { type: Number, default: 0 },
    disbursed_date: { type: Date, default: null },
  },
  { timestamps: true }
);

const Loan = mongoose.model("Loan", loanSchema);

export default Loan;
