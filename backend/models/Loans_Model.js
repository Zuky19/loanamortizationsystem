import { Schema, model } from "mongoose";

const loanSchema = new Schema(
  {
    loan_id: { type: String, required: true, unique: true },
    member_id: { type: String, required: true, ref: "Member" },
    loan_amount: { type: Number, required: true },
    disbursed_date: { type: Date, required: true },
    outstanding_balance: { type: Number, required: true },
    interest_accrued: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model("Loan", loanSchema);
