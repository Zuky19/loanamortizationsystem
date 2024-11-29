import { Schema, model } from "mongoose";

const contributionSchema = new Schema(
  {
    contribution_id: { type: String, required: true, unique: true },
    member_id: { type: String, required: true, ref: "Member" },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Contribution", contributionSchema);
