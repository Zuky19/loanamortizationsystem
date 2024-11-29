const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Loan", loanSchema);
