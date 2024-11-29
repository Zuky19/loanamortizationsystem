const mongoose = require("mongoose");

const repaymentSchema = new mongoose.Schema(
  {
    repayment_id: { type: String, required: true, unique: true },
    loan_id: { type: String, required: true, ref: "Loan" },
    repayment_date: { type: Date, required: true },
    repayment_amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LoanRepayment", repaymentSchema);
