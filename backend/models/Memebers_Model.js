const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    member_id: { type: String, required: true, unique: true },
    full_name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    bank_name: { type: String },
    account_number: { type: String },
    membership_year: { type: Number, required: true },
    occupation: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);
