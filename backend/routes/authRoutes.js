import express from "express";
import {
  sendConfirmationEmail,
  forgotPassword,
  resetPassword,
} from "../controller/authController.js";

const router = express.Router();

// Confirmation Email
router.post("/send-confirmation-email", sendConfirmationEmail);

// Forgot Password
router.post("/forgot-password", forgotPassword);

// Reset Password
router.post("/reset-password/:token", resetPassword);

export default router;
