import Interest from "../models/Interest_model.js";
import Loan from "../models/Loans_Model.js";

// Calculate Monthly Interest
export const calculateMonthlyInterest = async (req, res) => {
  try {
    const { loan_id } = req.params;

    // Query the loan by loan_id (not _id)
    const loan = await Loan.findOne({ loan_id });
    if (!loan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    const { loan_amount, interest_rate, duration_months } = loan;

    // Calculate the monthly interest
    const monthly_interest = (loan_amount * (interest_rate / 100)) / 12;

    res.status(200).json({
      loan_id,
      monthly_interest,
      loan_amount,
      interest_rate,
      duration_months,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Interest Record
export const addInterestRecord = async (req, res) => {
  try {
    const { loan_id, member_id, amount, date } = req.body;

    if (!loan_id || !member_id || !amount || !date) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newInterest = await Interest.create({
      loan_id,
      member_id,
      amount,
      date,
    });

    res.status(201).json(newInterest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Interest by Loan
export const getInterestByLoan = async (req, res) => {
  try {
    const { loan_id } = req.params;

    const interestRecords = await Interest.find({ loan_id });

    if (interestRecords.length === 0) {
      return res
        .status(404)
        .json({ message: "No interest records found for this loan." });
    }

    res.status(200).json(interestRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Interest Record
export const deleteInterestRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInterest = await Interest.findByIdAndDelete(id);

    if (!deletedInterest) {
      return res.status(404).json({ message: "Interest record not found." });
    }

    res.status(200).json({ message: "Interest record deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
