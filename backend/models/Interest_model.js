const mongoose = require("mongoose");

const interestSchema = new mongoose.Schema(
  {
    interest_id: { type: String, required: true, unique: true },
    loan_id: { type: String, required: true, ref: "Loan" },
    monthly_interest_rate: { type: Number, required: true },
    interest_accrued: { type: Number, default: 0 },
    interest_paid: { type: Number, default: 0 },
    interest_outstanding: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Interest", interestSchema);
