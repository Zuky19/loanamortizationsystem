import LoanRepayment from "../models/Loan_Repayments_model.js";
import Loan from "../models/Loans_Model.js";

// Add Loan Repayment
export const addLoanRepayment = async (req, res) => {
  try {
    const { loan_id, repayment_date, repayment_amount } = req.body;

    // Validate input
    if (!loan_id || !repayment_date || !repayment_amount) {
      return res.status(400).json({
        message: "Loan ID, repayment date, and repayment amount are required.",
      });
    }

    // Normalize loan_id
    const normalizedLoanId = loan_id.trim();

    // Find the loan by loan_id (case-insensitive)
    const loan = await Loan.findOne({
      loan_id: { $regex: new RegExp(`^${normalizedLoanId}$`, "i") },
    });

    if (!loan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    // Validate repayment amount
    if (repayment_amount > loan.outstanding_balance) {
      return res.status(400).json({
        message: `Repayment amount exceeds outstanding balance of ${loan.outstanding_balance}.`,
      });
    }

    // Add repayment record
    const repayment = await LoanRepayment.create({
      repayment_id: `RP-${Date.now()}`, // Example unique repayment ID
      loan_id: normalizedLoanId,
      repayment_date,
      repayment_amount,
    });

    // Update the loan's outstanding balance
    loan.outstanding_balance -= repayment_amount;
    await loan.save();

    res.status(201).json({
      message: "Repayment added successfully.",
      repayment,
    });
  } catch (error) {
    console.error("Error adding loan repayment:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get Repayments for a Loan
export const getRepaymentsForLoan = async (req, res) => {
  try {
    const { loan_id } = req.params;

    // Find repayments for the loan
    const repayments = await LoanRepayment.find({ loan_id }).sort({
      repayment_date: 1,
    });

    if (repayments.length === 0) {
      return res
        .status(404)
        .json({ message: "No repayments found for this loan." });
    }

    res.status(200).json(repayments);
  } catch (error) {
    console.error("Error fetching repayments for loan:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get Total Repayments for a Loan
export const getTotalRepaymentsForLoan = async (req, res) => {
  try {
    const { loan_id } = req.params;

    // Calculate total repayments
    const totalRepayments = await LoanRepayment.aggregate([
      { $match: { loan_id } },
      { $group: { _id: null, total: { $sum: "$repayment_amount" } } },
    ]);

    const total = totalRepayments.length > 0 ? totalRepayments[0].total : 0;

    res.status(200).json({ loan_id, total_repayments: total });
  } catch (error) {
    console.error("Error calculating total repayments:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete All Repayments for a Loan
export const deleteAllRepaymentsForLoan = async (req, res) => {
  try {
    const { loan_id } = req.params;

    // Normalize loan_id
    const normalizedLoanId = loan_id.trim();

    // Find the loan by loan_id
    const loan = await Loan.findOne({ loan_id: normalizedLoanId });

    if (!loan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    // Delete all repayments associated with this loan_id
    const deletedRepayments = await LoanRepayment.deleteMany({
      loan_id: normalizedLoanId,
    });

    res.status(200).json({
      message: `Deleted ${deletedRepayments.deletedCount} repayments for loan ${normalizedLoanId}.`,
    });
  } catch (error) {
    console.error("Error deleting loan repayments:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a Single Repayment
export const deleteSingleRepayment = async (req, res) => {
  try {
    const { repayment_id } = req.params;

    // Normalize repayment_id
    const normalizedRepaymentId = repayment_id.trim();

    // Find and delete the repayment
    const deletedRepayment = await LoanRepayment.findOneAndDelete({
      repayment_id: normalizedRepaymentId,
    });

    if (!deletedRepayment) {
      return res.status(404).json({ message: "Repayment not found." });
    }

    res.status(200).json({
      message: `Repayment ${normalizedRepaymentId} deleted successfully.`,
    });
  } catch (error) {
    console.error("Error deleting repayment:", error);
    res.status(500).json({ message: error.message });
  }
};
