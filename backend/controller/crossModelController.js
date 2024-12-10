import Contribution from "../models/Contributions_Model.js";
import MonthlyParameter from "../models/Montly_parameters_Model.js";
import Member from "../models/Members_Model.js";
import Loan from "../models/Loans_Model.js";
import { Parser } from "json2csv"; // Install using npm install json2csv

// Get Member Contributions Summary
export const getMemberContributionsSummary = async (req, res) => {
  try {
    const { member_id } = req.params;

    if (!member_id) {
      return res.status(400).json({ message: "Member ID is required." });
    }

    const contributions = await Contribution.aggregate([
      { $match: { member_id } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalContributions =
      contributions.length > 0 ? contributions[0].total : 0;

    res.status(200).json({
      member_id,
      total_contributions: totalContributions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Dashboard Summary
export const getDashboardSummary = async (req, res) => {
  try {
    // Get the most recent monthly parameter
    const monthlyParameters = await MonthlyParameter.findOne().sort({
      year: -1,
      month: -1,
    });

    if (!monthlyParameters) {
      return res.status(404).json({ message: "No monthly parameters found." });
    }

    const {
      total_contributions,
      total_disbursements,
      outstanding_balance,
      interest_collected,
    } = monthlyParameters;

    // Count total members and active loans
    const totalMembers = await Member.countDocuments();
    const activeLoans = await Loan.countDocuments({ status: "approved" });

    res.status(200).json({
      total_contributions,
      total_disbursements,
      outstanding_balance,
      interest_collected,
      total_members: totalMembers,
      active_loans: activeLoans,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export Members
export const exportMembers = async (req, res) => {
  try {
    const members = await Member.find();

    if (members.length === 0) {
      return res.status(404).json({ message: "No members found to export." });
    }

    // Define fields for CSV
    const fields = [
      { label: "Member ID", value: "member_id" },
      { label: "Full Name", value: "full_name" },
      { label: "Email", value: "email" },
      { label: "Role", value: "role" },
      { label: "Created At", value: "createdAt" },
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(members);

    res.header("Content-Type", "text/csv");
    res.attachment("members_export.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
