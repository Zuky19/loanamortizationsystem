const mongoose = require("mongoose");

const monthlyParameterSchema = new mongoose.Schema(
  {
    month_id: { type: String, required: true, unique: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    total_contributions: { type: Number, default: 0 },
    total_disbursements: { type: Number, default: 0 },
    outstanding_balance: { type: Number, default: 0 },
    interest_collected: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MonthlyParameter", monthlyParameterSchema);
