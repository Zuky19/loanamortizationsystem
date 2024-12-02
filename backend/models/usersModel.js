import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    full_name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
    bank_name: { type: String },
    account_number: { type: String },
    membership_year: { type: Number, required: true },
    occupation: { type: String },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("User", userSchema);
