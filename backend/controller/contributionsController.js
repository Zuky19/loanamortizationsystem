import Contribution from "../models/Contributions_Model.js";

// Add Contribution
export const addContribution = async (req, res) => {
  try {
    const { member_id, amount, date } = req.body;

    // Validate required fields
    if (!member_id || !amount || !date) {
      return res
        .status(400)
        .json({ message: "Member ID, amount, and date are required." });
    }

    const newContribution = await Contribution.create({
      member_id,
      amount,
      date,
    });

    res.status(201).json(newContribution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Contributions by Member
export const getContributionsByMember = async (req, res) => {
  try {
    const { member_id } = req.params;

    const contributions = await Contribution.find({ member_id });

    if (contributions.length === 0) {
      return res
        .status(404)
        .json({ message: "No contributions found for this member." });
    }

    res.status(200).json(contributions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Total Contributions
export const getTotalContributions = async (req, res) => {
  try {
    const { member_id } = req.query;

    let matchCondition = {};
    if (member_id) {
      matchCondition.member_id = member_id;
    }

    const totalContributions = await Contribution.aggregate([
      { $match: matchCondition },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const total =
      totalContributions.length > 0 ? totalContributions[0].total : 0;

    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Contribution
export const deleteContribution = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContribution = await Contribution.findByIdAndDelete(id);

    if (!deletedContribution) {
      return res.status(404).json({ message: "Contribution not found." });
    }

    res.status(200).json({ message: "Contribution deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
