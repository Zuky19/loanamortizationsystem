import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail.js";
import Member from "../models/Members_Model.js"; // Adjust the model name/path as necessary

// Send Confirmation Email
export const sendConfirmationEmail = async (req, res) => {
  try {
    const { email, username } = req.body;

    // Generate token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Create confirmation link
    const confirmationLink = `http://localhost:4000/api/auth/confirm-email/${token}`;

    // Email content
    const htmlContent = `
      <h1>Email Confirmation</h1>
      <p>Hello ${username},</p>
      <p>Click the link below to confirm your email:</p>
      <a href="${confirmationLink}">Confirm Email</a>
    `;

    // Send email
    await sendEmail(email, "Confirm Your Email", htmlContent);

    res.status(200).json({ message: "Confirmation email sent." });
  } catch (error) {
    console.error("Error in sendConfirmationEmail:", error);
    res.status(500).json({ message: error.message });
  }
};

// Forgot Password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const user = await Member.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Generate reset token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Generated Token:", token);

    // Reset link
    const resetLink = `http://localhost:4000/api/auth/reset-password/${token}`;

    // Email content
    const htmlContent = `
      <h1>Reset Your Password</h1>
      <p>Hello ${user.username},</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
    `;

    await sendEmail(user.email, "Password Reset", htmlContent);

    res
      .status(200)
      .json({ message: "Password reset email sent successfully." });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    res.status(500).json({ message: error.message });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ message: "New password is required." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Member.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    if (error.name === "TokenExpiredError") {
      return res.status(400).json({ message: "Reset token has expired." });
    }
    res.status(500).json({ message: error.message });
  }
};
