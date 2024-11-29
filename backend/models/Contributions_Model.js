const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema(
  {
    contribution_id: { type: String, required: true, unique: true },
    member_id: { type: String, required: true, ref: "Member" },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contribution", contributionSchema);
