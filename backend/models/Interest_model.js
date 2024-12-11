import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Install with: npm install uuid

const interestSchema = new mongoose.Schema(
  {
    interest_id: {
      type: String,
      default: uuidv4,
      required: true,
      unique: true,
    },
    loan_id: { type: String, required: true },
    member_id: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    monthly_interest_rate: { type: Number, required: false }, // Ensure this is provided or calculated
  },
  { timestamps: true }
);

const Interest = mongoose.model("Interest", interestSchema);

export default Interest;
