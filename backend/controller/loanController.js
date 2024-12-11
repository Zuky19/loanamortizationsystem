import Loan from "../models/Loans_Model.js";

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

    // Find the highest existing loan_id
    const lastLoan = await Loan.findOne().sort({ loan_id: -1 }).exec();
    const lastLoanId = lastLoan ? parseInt(lastLoan.loan_id.substring(1)) : 0;

    // Generate the next loan_id
    const loan_id = `L${(lastLoanId + 1).toString().padStart(4, "0")}`;

    // Create the loan
    const newLoan = await Loan.create({
      loan_id,
      member_id,
      loan_amount,
      interest_rate,
      duration_months,
      purpose,
      outstanding_balance: loan_amount, // Initialize outstanding balance
      status: "pending",
    });

    res.status(201).json(newLoan);
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      return res.status(400).json({
        message: "A loan with this ID already exists. Please try again.",
      });
    }
    console.error("Error creating loan:", error);
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
    console.error("Error fetching loan:", error);
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
    console.error("Error fetching loans for member:", error);
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
    console.error("Error updating loan status:", error);
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
    const monthly_rate = interest_rate / 100 / 12;
    const emi =
      (loan_amount *
        monthly_rate *
        Math.pow(1 + monthly_rate, duration_months)) /
      (Math.pow(1 + monthly_rate, duration_months) - 1);
    const total_payment = emi * duration_months;

    res.status(200).json({
      loan_id: loan._id,
      total_payment,
      monthly_payment: emi,
      duration_months,
    });
  } catch (error) {
    console.error("Error calculating repayment schedule:", error);
    res.status(500).json({ message: error.message });
  }
};
