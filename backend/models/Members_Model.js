import { Schema, model } from "mongoose";

const memberSchema = new Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    bankname: { type: String },
    accountnumber: { type: String },
    membershipyear: { type: Number, required: true },
    occupation: { type: String },
    role: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

export default model("Member", memberSchema);
