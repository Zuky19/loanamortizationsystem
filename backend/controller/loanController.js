import Loan from "../models/Loans_Model.js"; // Ensure correct model path

// Create a new loan application
export const applyForLoan = async (req, res) => {
  try {
    const { member_id, loan_amount, interest_rate, duration_months, purpose } =
      req.body;

    if (
      !member_id ||
      !loan_amount ||
      !interest_rate ||
      !duration_months ||
      !purpose
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newLoan = await Loan.create({
      member_id,
      loan_amount,
      interest_rate,
      duration_months,
      purpose,
      status: "pending", // Default status for new loans
    });

    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get loan by ID
export const getLoanById = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) {
      return res.status(404).json({ message: "Loan not found." });
    }
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all loans for a member
export const getLoansByMember = async (req, res) => {
  try {
    const { member_id } = req.params;
    const loans = await Loan.find({ member_id });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update loan status
export const updateLoanStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const loan = await Loan.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!loan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Calculate repayment schedule
export const calculateRepaymentSchedule = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    const { loan_amount, interest_rate, duration_months } = loan;
    const monthly_interest = (loan_amount * (interest_rate / 100)) / 12;
    const total_payment = loan_amount + monthly_interest * duration_months;
    const monthly_payment = total_payment / duration_months;

    res.status(200).json({
      loan_id: loan._id,
      total_payment,
      monthly_payment,
      duration_months,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
