import Member from "../models/Memebers_Model.js"; // Ensure correct path and file extension
import SHA256 from "crypto-js/sha256.js";

// Helper function to hash passwords
const hashPassword = (password) => {
  return SHA256(password).toString();
};

// Login a member
export const loginMember = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required." });
    }

    // Find the member by username
    const user = await Member.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Hash the provided password and compare with the stored hashed password
    const hashedPassword = hashPassword(password);
    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // If login is successful, send user data (you can add token generation here)
    res.status(200).json({
      message: "Login successful.",
      user: {
        id: user._id,
        username: user.username,
        full_name: user.full_name,
        role: "member", // Add roles if applicable
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
// Create a new member
export const createMember = async (req, res) => {
  try {
    const { username, password, ...otherFields } = req.body;

    // Validate username and password
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required." });
    }

    // Check if username already exists
    const existingMember = await Member.findOne({ username });
    if (existingMember) {
      return res.status(400).json({ message: "Username already exists." });
    }

    // Hash the password
    const hashedPassword = hashPassword(password);

    // Create the new member
    const newMember = await Member.create({
      username,
      password: hashedPassword,
      ...otherFields,
    });

    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all members
export const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a member by ID
export const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search for a member by username
export const getMemberByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    // Find the member by username
    const member = await Member.findOne({ username });

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a member by ID
export const updateMember = async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedMember)
      return res.status(404).json({ message: "Member not found" });
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a member by ID
export const deleteMember = async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember)
      return res.status(404).json({ message: "Member not found" });
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
