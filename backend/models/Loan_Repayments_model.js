import { Schema, model } from "mongoose";

const repaymentSchema = new Schema(
  {
    repayment_id: { type: String, required: true, unique: true },
    loan_id: { type: String, required: true, ref: "Loan" },
    repayment_date: { type: Date, required: true },
    repayment_amount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("LoanRepayment", repaymentSchema);
