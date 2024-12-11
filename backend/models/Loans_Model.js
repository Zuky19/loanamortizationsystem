import { Schema, model } from "mongoose";

const loanSchema = new Schema(
  {
    loan_id: { type: String, required: true, unique: true },
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

export default model("Loan", loanSchema);
