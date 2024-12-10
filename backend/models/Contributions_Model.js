import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Install with: npm install uuid

const contributionSchema = new mongoose.Schema(
  {
    contribution_id: {
      type: String,
      default: uuidv4,
      required: true,
      unique: true,
    }, // Auto-generate ID
    member_id: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    year: {
      type: Number,
      required: true,
      default: () => new Date().getFullYear(),
    }, // Default to current year
    month: {
      type: Number,
      required: true,
      default: () => new Date().getMonth() + 1,
    }, // Default to current month (0-indexed)
  },
  { timestamps: true }
);

const Contribution = mongoose.model("Contribution", contributionSchema);

export default Contribution;
