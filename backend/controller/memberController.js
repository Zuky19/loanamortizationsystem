import {
  create,
  find,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../models/Memebers_Model.js";
import SHA256 from "crypto-js/sha256.js";

const hashPassword = (message) => {
  let hashedPassword = SHA256(message).toString();
  return hashedPassword;
};

// Create a new member
const createMember = async (req, res) => {
  try {
    const newMember = await create(req.body);
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all members
const getAllMembers = async (req, res) => {
  try {
    const members = await find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a member by ID
const getMemberById = async (req, res) => {
  try {
    const member = await findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a member by ID
const updateMember = async (req, res) => {
  try {
    const updatedMember = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedMember)
      return res.status(404).json({ message: "Member not found" });
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a member by ID
const deleteMember = async (req, res) => {
  try {
    const deletedMember = await findByIdAndDelete(req.params.id);
    if (!deletedMember)
      return res.status(404).json({ message: "Member not found" });
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginMember = async (req, res) => {
  try {
    const { username, password } = await res.body;
    const hashedPassword = hashPassword(password);

    try {
      const user = getMemberByUsername(username);

      if (hashedPassword === user.password) {
        res.send({
          status: 200,
          authTooken: authToken,
          user: { username: username, role: "user" },
        });
        return;
      }
      res.send({ status: 401, message: "User Not Found" });
    } catch (error) {
      console.error("Error finding User", error);
    }
  } catch (error) {
    console.error("Error during login", error);
  }
};

export default {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
